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
