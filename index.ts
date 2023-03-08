import * as fs from "fs";
import { Document, Packer, Paragraph, TextRun } from "docx";

const doc = new Document({
  numbering: {
    config: [
      {
        levels: [
          {
            level: 0,
          },
        ],
        reference: "32",
      },
    ],
  },
});

doc.addSection({
  children: [
    new Paragraph({
      numbering: {
        reference: "32",
        level: 0,
      },
      children: [new TextRun("My list")],
    }),
  ],
});

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync("My Document.docx", buffer);
});
