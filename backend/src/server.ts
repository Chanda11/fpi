import express from "express";
import cors from "cors";
import activitiesRoute from "./routes/activities";
import teamRoutes from "./routes/team";

const app = express();

app.use(cors());
app.use(express.json());
console.log("LOADING TEAM ROUTES");

app.use("/api/team", teamRoutes);

app.use("/api/activities", activitiesRoute);

app.get("/", (req, res) => {
  res.send("FPI Zambia API Running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});