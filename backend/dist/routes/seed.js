"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prisma_1 = require("../lib/prisma");
const router = (0, express_1.Router)();
router.post("/hubs", async (req, res) => {
    try {
        const lusaka = await prisma_1.prisma.province.findFirst({
            where: { name: "Lusaka" },
        });
        const southern = await prisma_1.prisma.province.findFirst({
            where: { name: "Southern" },
        });
        const eastern = await prisma_1.prisma.province.findFirst({
            where: { name: "Eastern" },
        });
        const copperbelt = await prisma_1.prisma.province.findFirst({
            where: { name: "Copperbelt" },
        });
        if (!lusaka || !southern || !eastern || !copperbelt) {
            return res.status(400).json({
                message: "Create provinces first",
            });
        }
        const hubs = [
            // Lusaka
            { name: "Lusaka West", slug: "lusaka-west", provinceId: lusaka.id },
            { name: "Mutendere", slug: "mutendere", provinceId: lusaka.id },
            { name: "Matero", slug: "matero", provinceId: lusaka.id },
            { name: "Kafue", slug: "kafue", provinceId: lusaka.id },
            { name: "Lusaka East", slug: "lusaka-east", provinceId: lusaka.id },
            { name: "Lusaka North", slug: "lusaka-north", provinceId: lusaka.id },
            { name: "Chongwe", slug: "chongwe", provinceId: lusaka.id },
            // Copperbelt
            { name: "Ndola", slug: "ndola", provinceId: copperbelt.id },
            { name: "Kitwe", slug: "kitwe", provinceId: copperbelt.id },
            { name: "Mufulira", slug: "mufulira", provinceId: copperbelt.id },
            // Southern
            { name: "Mazabuka", slug: "mazabuka", provinceId: southern.id },
            // Eastern
            { name: "Chipata", slug: "chipata", provinceId: eastern.id },
            { name: "Petauke", slug: "petauke", provinceId: eastern.id },
        ];
        for (const hub of hubs) {
            const exists = await prisma_1.prisma.hub.findFirst({
                where: {
                    slug: hub.slug,
                },
            });
            if (!exists) {
                await prisma_1.prisma.hub.create({
                    data: {
                        ...hub,
                        coordinator: "TBD",
                        location: hub.name,
                        participants: 0,
                        description: `${hub.name} MIL Hub`,
                    },
                });
            }
        }
        res.json({
            message: "Hubs seeded successfully",
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
//# sourceMappingURL=seed.js.map