const fs = require('fs');
const csv = require('csv-parser');
const { type } = require('os');

const canada = [];
const usa = [];

if (fs.existsSync('canada.txt')) {
  fs.unlink('canada.txt', err => {
    if (err) {
      console.error(err);
    }
  });
}

if (fs.existsSync('usa.txt')) {
  fs.unlink('usa.txt', err => {
    if (err) {
      console.error(err);
    }
  });
}

fs.createReadStream('input_countries.csv')
  .pipe(csv())
  .on('data', row => {
    const headers = Object.keys(row);
    if (row[headers[0]] === 'Canada') canada.push(row);
    if (row[headers[0]] === 'United States') usa.push(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
    const canadaArr = JSON.stringify(canada).split(',');
    const usaArr = JSON.stringify(usa).split(',');
    fs.writeFileSync('canada.txt', canadaArr.join('\r\n'), 'utf8');
    fs.writeFileSync('usa.txt', usaArr.join('\r\n'), 'utf8');
  });
