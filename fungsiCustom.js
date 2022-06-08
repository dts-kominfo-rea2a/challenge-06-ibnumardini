// TODO: import module bila dibutuhkan di sini
const fs = require("fs");

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {
  fs.readFile(file1, "utf-8", (err, content1) => {
    const data1 = JSON.parse(content1);
    const message1 = getLastWord(data1.message);

    fs.readFile(file2, "utf-8", (err, content2) => {
      const data2 = JSON.parse(content2);
      const message2 = getLastWord(data2[0].message);

      fs.readFile(file3, "utf-8", (err, content3) => {
        const data3 = JSON.parse(content3);
        const message3 = getLastWord(data3[0].data.message);

        fnCallback(err, [message1, message2, message3]);
      });
    });
  });
};

const getLastWord = (sentence) => {
  const arrSentence = sentence.split(" ").reverse();

  return arrSentence[0];
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
