const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
let usStates = require("./student.json");
let student_data = require("./student.json");
const app = express();
//save function
const save = () => {
  fs.writeFile(
    "./student.json",
    JSON.stringify(student_data, null, 2),
    (error) => {
      if (error) {
        throw error;
      }
    }
  );
};
//Read(R) 
app.get("/student", (req, res) => {
  res.json(student_data);
});
app.get("/students/:id", (req, res) => {
  const findStudent = student_data.find((name) => name.name === req.params.name);
  res.json(findStudent);
});
//Create(C)
app.post("/student", bodyParser.json(), (req, res) => {
    student_data.push(req.body);
  save();
  res.json({
    status: "success",
    studentInfo: req.body,
  });
});
//Update(U)
app.put("/update/:id", bodyParser.json(), (req, res) => {
    
    student_update= student_data.find((id) => {
    if (student_data.id=== req.params.name) {
      return req.body;
    } else {
      return student_data;
    }   
  },
  res.json(student_data));
  save();
res.json({
    status: "success",
    stateInfo: req.body,
  });
});
//Delete(D)
app.delete("/delete/:id", (req, res) => {
    student_data = student_data.filter((name) => name.name !== req.params.name);
  save();
  res.json({
    status: "success",
    removed: req.params.name,
    newLength: student_data.length,
  });
});
app.listen(8000, () => {
  console.log(`Array of US States at 8000`);
});