"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prisma_1 = require("../lib/prisma");
const router = (0, express_1.Router)();
/**
 * GET ALL HUBS
 */
router.get("/", async (req, res) => {
    try {
        const hubs = await prisma_1.prisma.hub.findMany({
            include: {
                province: true,
                photos: true,
                events: true,
            },
        });
        res.json(hubs);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Failed to fetch hubs",
        });
    }
});
/**
 * CREATE HUB
 */
router.post("/", async (req, res) => {
    try {
        const hub = await prisma_1.prisma.hub.create({
            data: req.body,
        });
        res.status(201).json(hub);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Failed to create hub",
        });
    }
});
/**
 * GET HUB BY ID (ADMIN)
 */
router.get("/id/:id", async (req, res) => {
    try {
        const hub = await prisma_1.prisma.hub.findUnique({
            where: {
                id: Number(req.params.id),
            },
            include: {
                province: true,
                photos: true,
                events: true,
            },
        });
        if (!hub) {
            return res.status(404).json({
                message: "Hub not found",
            });
        }
        res.json(hub);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Failed to fetch hub",
        });
    }
});
/**
 * GET HUB BY SLUG (PUBLIC WEBSITE)
 */
router.get("/slug/:slug", async (req, res) => {
    try {
        const { slug } = req.params;
        const hub = await prisma_1.prisma.hub.findFirst({
            where: {
                slug: {
                    equals: slug,
                    mode: "insensitive",
                },
            },
            include: {
                province: true,
                photos: true,
                events: true,
            },
        });
        if (!hub) {
            return res.status(404).json({
                message: "Hub not found",
            });
        }
        res.json(hub);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Failed to fetch hub",
        });
    }
});
/**
 * UPDATE HUB
 */
router.put("/:id", async (req, res) => {
    try {
        const hub = await prisma_1.prisma.hub.update({
            where: {
                id: Number(req.params.id),
            },
            data: req.body,
        });
        res.json(hub);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Failed to update hub",
        });
    }
});
/**
 * DELETE HUB
 */
router.delete("/:id", async (req, res) => {
    try {
        await prisma_1.prisma.hub.delete({
            where: {
                id: Number(req.params.id),
            },
        });
        res.json({
            message: "Hub deleted successfully",
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Failed to delete hub",
        });
    }
});
/**
 * BULK LOAD FPI HUBS
 */
router.get("/seed", async (req, res) => {
    try {
        await prisma_1.prisma.hub.createMany({
            data: [
                {
                    name: "Mtendere",
                    slug: "mtendere",
                    location: "Mtendere",
                    coordinator: "TBD",
                    participants: 0,
                    provinceId: 1,
                },
                {
                    name: "Matero",
                    slug: "matero",
                    location: "Matero",
                    coordinator: "TBD",
                    participants: 0,
                    provinceId: 1,
                },
                {
                    name: "Kafue",
                    slug: "kafue",
                    location: "Kafue",
                    coordinator: "TBD",
                    participants: 0,
                    provinceId: 1,
                },
                {
                    name: "Lusaka East",
                    slug: "lusaka-east",
                    location: "Lusaka East",
                    coordinator: "TBD",
                    participants: 0,
                    provinceId: 1,
                },
                {
                    name: "Lusaka North",
                    slug: "lusaka-north",
                    location: "Lusaka North",
                    coordinator: "TBD",
                    participants: 0,
                    provinceId: 1,
                },
                {
                    name: "Chongwe",
                    slug: "chongwe",
                    location: "Chongwe",
                    coordinator: "TBD",
                    participants: 0,
                    provinceId: 1,
                },
                {
                    name: "Ndola",
                    slug: "ndola",
                    location: "Ndola",
                    coordinator: "TBD",
                    participants: 0,
                    provinceId: 4,
                },
                {
                    name: "Kitwe",
                    slug: "kitwe",
                    location: "Kitwe",
                    coordinator: "TBD",
                    participants: 0,
                    provinceId: 4,
                },
                {
                    name: "Mufulira",
                    slug: "mufulira",
                    location: "Mufulira",
                    coordinator: "TBD",
                    participants: 0,
                    provinceId: 4,
                },
                {
                    name: "Mazabuka",
                    slug: "mazabuka",
                    location: "Mazabuka",
                    coordinator: "TBD",
                    participants: 0,
                    provinceId: 2,
                },
                {
                    name: "Chipata",
                    slug: "chipata",
                    location: "Chipata",
                    coordinator: "TBD",
                    participants: 0,
                    provinceId: 3,
                },
                {
                    name: "Petauke",
                    slug: "petauke",
                    location: "Petauke",
                    coordinator: "TBD",
                    participants: 0,
                    provinceId: 3,
                },
            ],
        });
        res.json({
            message: "Hubs loaded successfully",
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Failed to seed hubs",
        });
    }
});
exports.default = router;
//# sourceMappingURL=hubs.js.map