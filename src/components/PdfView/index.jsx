import React, { useState } from "react";
import { Document, Page } from "react-pdf";
// import pdf from "../../pdfs/shalomChristian.pdf";
import { SHALOM_PDF } from "../../static/dropbox";

function PdfView(file) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file={SHALOM_PDF} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}

export default PdfView;
