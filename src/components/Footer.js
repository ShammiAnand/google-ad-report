import React from "react";
import "../styles/Footer.css";
import Button from "@mui/material/Button";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function Footer() {
  const generatePDF = () => {
    // const doc = new jsPDF("p", "px", "a4");
    // doc.html(document.querySelector("#root"), {
    //   callback: function (doc) {
    //     doc.save("ad-report.pdf");
    //   },
    // });
    const domElement = document.getElementById("root");

    var HTML_Width = domElement.clientWidth;
    var HTML_Height = domElement.clientHeight;
    var top_left_margin = 5;
    var PDF_Width = HTML_Width + top_left_margin * 2;
    var PDF_Height = PDF_Width * 1.5 + top_left_margin * 2;
    var canvas_image_width = HTML_Width;
    var canvas_image_height = HTML_Height;

    var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;
    html2canvas(domElement, {
      onclone: (document) => {
        document.getElementById("print").style.visibility = "hidden";
      },
    }).then((canvas) => {
      // const imgData = canvas.toDataURL("image/jpg", 1.0);
      // const pdf = new jsPDF("landscape");
      // const imgProps = pdf.getImageProperties(imgData);
      // const pdfWidth = pdf.internal.pageSize.getWidth();
      // const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      // pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      // pdf.save(`ad-report-${new Date().toISOString()}.pdf`);
      canvas.getContext("2d");

      console.log(canvas.height + "  " + canvas.width);
      console.log(canvas_image_height + "  " + canvas_image_width);

      var imgData = canvas.toDataURL("image/jpeg", 1.0);
      var pdf = new jsPDF("p", "pt", [PDF_Width, PDF_Height]);
      pdf.addImage(
        imgData,
        "JPG",
        top_left_margin,
        top_left_margin,
        canvas_image_width,
        canvas_image_height
      );

      for (var i = 1; i <= totalPDFPages; i++) {
        // pdf.addPage(PDF_Width, PDF_Height);
        pdf.addImage(
          imgData,
          "JPG",
          top_left_margin,
          top_left_margin * 4 - PDF_Height * i,
          canvas_image_width,
          canvas_image_height
        );
      }

      pdf.save(`ad-report-${new Date().toISOString()}.pdf`);
    });
  };

  return (
    <div className="Footer" id="print">
      <Button variant="outlined" onClick={generatePDF}>
        Download
      </Button>
      <Button variant="outlined">Back To Top</Button>
    </div>
  );
}

export default Footer;
