"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const activities_1 = __importDefault(require("./routes/activities"));
const team_1 = __importDefault(require("./routes/team"));
const projects_1 = __importDefault(require("./routes/projects"));
const hubs_1 = __importDefault(require("./routes/hubs"));
const provinces_1 = __importDefault(require("./routes/provinces"));
const seed_1 = __importDefault(require("./routes/seed"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
console.log("LOADING TEAM ROUTES");
app.use("/api/team", team_1.default);
app.use("/api/activities", activities_1.default);
app.use("/api/projects", projects_1.default);
app.use("/api/hubs", hubs_1.default);
app.use("/api/provinces", provinces_1.default);
app.use("/api/seed", seed_1.default);
app.get("/", (req, res) => {
    res.send("FPI Zambia API Running");
});
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map