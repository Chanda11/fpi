"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prisma_1 = require("../lib/prisma");
const router = (0, express_1.Router)();
/**
 * GET ALL ACTIVITIES
 */
router.get("/", async (req, res) => {
    try {
        const activities = await prisma_1.prisma.activity.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });
        res.json(activities);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Failed to fetch activities",
        });
    }
});
/**
 * GET SINGLE ACTIVITY
 */
router.get("/:id", async (req, res) => {
    try {
        const activity = await prisma_1.prisma.activity.findUnique({
            where: {
                id: Number(req.params.id),
            },
        });
        if (!activity) {
            return res.status(404).json({
                message: "Activity not found",
            });
        }
        res.json(activity);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Failed to fetch activity",
        });
    }
});
exports.default = router;
//# sourceMappingURL=activities.js.map