import { Router } from "express";
import { prisma } from "../lib/prisma";

const router = Router();

router.get("/", async (req, res) => {
  const provinces = await prisma.province.findMany({
    orderBy: {
      name: "asc",
    },
  });

  res.json(provinces);
});

router.post("/", async (req, res) => {
  const province = await prisma.province.create({
    data: {
      name: req.body.name,
    },
  });

  res.json(province);
});

export default router;