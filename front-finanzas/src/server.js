const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  // Usuario simulado
  if (username === "admin" && password === "1234") {
    return res.json({ success: true });
  } else {
    return res.status(401).json({ success: false, message: "Credenciales incorrectas" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
