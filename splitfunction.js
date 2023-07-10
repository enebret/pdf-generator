const fs = require("fs");
const PDFDocument = require('pdfkit');
const doc = new PDFDocument();
doc.pipe(fs.createWriteStream('input.pdf'));

let Duties = [
  ' Actively hunted and closed online media deals and transactions on behalf of the company',
  'I drove traffic to the website through well-thought and search-engine optimized blog posts which',
  'translated into sales and brand visibility',
  'Interacted and maintained relationships with high-network professionals and companies with tech tools',
  'and communication mediums that led to increased conversion and customer satisfaction'
]

  
doc.font('Times-Roman').list(Duties, {
  fontSize: 13,
  indent: 100
});
doc.end()