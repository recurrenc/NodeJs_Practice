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
