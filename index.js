const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
app.use(cors());

app.post("/register", (req, res) => {
  const { email, phone, password } = req.body;

  if ((email || phone) && password) {
    res.json({
      status: true,
      message: "Реєстрація успішна",
    });
  } else {
    res.json({
      status: false,
      message: "Помилка: введіть коректні дані",
    });
  }
});

app.listen(port, () => {
  console.log("server running");
});
