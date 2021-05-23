const fs = require("fs");

// CURD operataion in File System

// 1.  Create a Folder

fs.mkdir("Temp", (err) => {
  if (!err) {
    console.log("Folder Created Successfully");
  } else {
    console.log(err);
  }
});

// 2.  Create File inside previously created Folder

const data =
  "This is the test data which will push into new file recently created.";

fs.writeFile("Temp/temp.txt", data, (err) => {
  if (!err) console.log("Data Pushed");
  else console.log(err);
});

// 3.  Update Data inside a file

const updatedData = "This is updated Data";

fs.appendFile("Temp/temp.txt", updatedData, (err) => {
  if (!err) console.log("Data Appended Successfully");
  else console.log(err);
});

// 4.  Read File's Data

fs.readFile("Temp/temp.txt", "utf-8", (err, data) => {
  if (!err) console.log(data);
  else console.log(err);
});

// 5.  Delete File

fs.unlink("Temp/temp.txt", (err) => {
  if (!err) console.log("File Deleted Successfully");
});
