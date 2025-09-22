import express from "express";
import data from "./menu.json" with { type: "json" };
import cors from "cors";

const app = express();

// CORS : autorise ton Live Server (si tu utilises 127.0.0.1:5500)
app.use(cors({ origin: ["http://127.0.0.1:5500", "http://localhost:5500"] }));
app.use(express.json());

// items = toujours un tableau (même si data.json = {})
const items = Array.isArray(data) ? data : (Array.isArray(data.items) ? data.items : []);

app.get("/", (req, res) => {
  res.send("Accueil");
});

app.get("/coucou", (req, res) => {
  res.send("coucou les loulous");
});

app.get("/menu", (req, res) => {
  res.json(items);
});

app.get("/menu/:id", (req, res) => {
  const id = Number(req.params.id);
  const plat = items.find(p => p.id === id);
  if (!plat) return res.status(404).json({ error: `Plat id=${id} non trouvé` });
  res.json(plat);
});

app.listen(3000, () => {
  console.log("Serveur lancé sur http://localhost:3000");
});
