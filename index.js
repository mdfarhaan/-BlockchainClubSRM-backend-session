const express = require("express");

const app = express();
app.use(express.json());

let toDo = [
  {
    id: 1,
    title: "Learn Express",
  },
  {
    id: 2,
    title: "Study!",
  },
  {
    id: 3,
    title: "Go to the gym",
  },
];

app.get("/all", (req, res) => {
  res.json(toDo);
});

app.post("/add", (req, res) => {
  const { title, id } = req.body;
  toDo.push({ title, id });
  res.status(200).json({ message: "Task added", toDo });
});

app.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const task = toDo.map((item) => {
    if (item.id == parseInt(id)) {
      item.title = title;
    }
    return item;
  });
  res.status(200).json({ message: "Task updated", task });
});

app.delete("/remove", (req, res) => {
  const { id } = req.query;
  toDo = toDo.filter((item) => item.id != parseInt(id));
  res.status(200).json({ message: "Task removed", toDo });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
