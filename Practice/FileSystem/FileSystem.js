const fs = require("fs");

// Creating a directory

// fs.mkdirSync("Test");

// Creating a file inside a folder

const text = `
  print("Hello world")
`;

// fs.writeFileSync("Test/python.py", text);

// Append Data inside any file without override

const newText = `
bool = true
count = 1

whilw(bool):
  print(count)
  count++
  if(count >= 12) bool = false
`;

// fs.appendFileSync("Test/python.py", newText);

// Read Data From Files

// const bufferData = fs.readFileSync("Test/python.py", "utf-8"); //this will give us buffer Data
// const Data = bufferData.toString(); // this will convert buffer data to string
// instead of using toString() method we can use encoding formate in function readFileSync(path: number | fs.PathLike, options?: {
//     encoding?: null;
//     flag?: string;
// }): Buffer (+5 overloads)

// console.log(bufferData);

// Rename Files

// Rename python.py to count.py
// fs.renameSync("Test/python.py", "Test/count.py");

//Remove file from Directory

// fs.unlinkSync("Test/count.py"); // this will delete count.py inside Test Directory

// Remove Directory

fs.rmdirSync("Test"); // This will remove Test Directory
