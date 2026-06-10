"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prisma_1 = require("../lib/prisma");
const router = (0, express_1.Router)();
router.get("/", async (req, res) => {
    const provinces = await prisma_1.prisma.province.findMany({
        orderBy: {
            name: "asc",
        },
    });
    res.json(provinces);
});
router.post("/", async (req, res) => {
    const province = await prisma_1.prisma.province.create({
        data: {
            name: req.body.name,
        },
    });
    res.json(province);
});
exports.default = router;
//# sourceMappingURL=provinces.js.map