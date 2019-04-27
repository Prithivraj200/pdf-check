const app = require('express')();
const pdf = require('html-pdf');

const pdfTemplate = require('./invoice');

const port = process.env.PORT || 4000;

app.get('/', async (req, res) => {
  try {
    await generatePDF();
    return res.status(200).json({message: 'Created successfully'})
  }
  catch (err) {
    console.log(err);
    return res.status(400).send(err);
  }
})

const generatePDF = () => {
  return new Promise((resolve, reject) => {
    pdf
      .create(
        pdfTemplate({content: 'text'}),
        {}
      )
      .toFile(`${__dirname}/storage/test.pdf`, (err, info) => {
        if (err) {
          return reject(err);
        }
        return resolve(info);
      });
  });
}

app.listen(port, () => {
  console.log(`Server is running in port ${port}`);
});