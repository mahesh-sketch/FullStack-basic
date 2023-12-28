import express from "express";

const app = express();

// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

//get a list of 5 jokes
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Joke 1",
      content: "first joke,",
    },
    {
      id: 2,
      title: "Joke 2",
      content: "second joke,",
    },
    {
      id: 3,
      title: "Joke 3",
      content: "third joke,",
    },
    {
      id: 4,
      title: "Joke 4",
      content: "fourth joke,",
    },
    {
      id: 5,
      title: "Joke 5",
      content: "fifth joke,",
    },
  ];
  res.send(jokes)
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening at ${port}`);
});
