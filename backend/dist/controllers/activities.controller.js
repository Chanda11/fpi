"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getActivityById = exports.getActivities = void 0;
const activities_1 = require("../data/activities");
const getActivities = (req, res) => {
    res.json(activities_1.activities);
};
exports.getActivities = getActivities;
const getActivityById = (req, res) => {
    const id = Number(req.params.id);
    const activity = activities_1.activities.find((a) => a.id === id);
    if (!activity) {
        return res.status(404).json({ message: "Activity not found" });
    }
    res.json(activity);
};
exports.getActivityById = getActivityById;
//# sourceMappingURL=activities.controller.js.map