import { Component, OnInit } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { SVGtoPDF, PDFDocument, pdfkit } from 'svg-to-pdfkit';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.sass'],
})
export class PdfComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  createPdf() {
    const pdfDefinition: any = {
     content: [
    {
      toc: {
        title: {text: 'INDEX', style: 'header'}
      }
    },
    {
      text: 'This is a header',
      style: 'header',
      tocItem: true
    }
  ]
    };
    //create an svg
    const svg = `<svg height="210" width="500">
    <line x1="0" y1="0" x2="200" y2="200" style="stroke:rgb(255,0,0);stroke-width:2" />
    </svg>`;

    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.download();
  }
}
