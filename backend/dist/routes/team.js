"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prisma_1 = require("../lib/prisma");
const router = (0, express_1.Router)();
router.get("/test", (req, res) => {
    res.json({
        message: "TEAM ROUTE WORKING",
    });
});
/**
 * GET ALL TEAM MEMBERS
 */
router.get("/", async (req, res) => {
    try {
        const team = await prisma_1.prisma.teamMember.findMany({
            orderBy: {
                order: "asc",
            },
        });
        res.json(team);
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to fetch team members",
        });
    }
});
/**
 * CREATE TEAM MEMBER
 */
router.post("/", async (req, res) => {
    try {
        const member = await prisma_1.prisma.teamMember.create({
            data: req.body,
        });
        res.status(201).json(member);
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to create team member",
        });
    }
});
/**
 * UPDATE TEAM MEMBER
 */
router.put("/:id", async (req, res) => {
    try {
        const member = await prisma_1.prisma.teamMember.update({
            where: {
                id: Number(req.params.id),
            },
            data: req.body,
        });
        res.json(member);
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to update team member",
        });
    }
});
/**
 * DELETE TEAM MEMBER
 */
router.delete("/:id", async (req, res) => {
    try {
        await prisma_1.prisma.teamMember.delete({
            where: {
                id: Number(req.params.id),
            },
        });
        res.json({
            message: "Team member deleted",
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to delete member",
        });
    }
});
exports.default = router;
//# sourceMappingURL=team.js.map