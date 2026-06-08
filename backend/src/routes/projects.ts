import { Router } from "express";
import { prisma } from "../lib/prisma";

const router = Router();

/**
 * GET ALL PROJECTS
 */
router.get("/", async (req, res) => {
  try {
    const projects = await prisma.project.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json(projects);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch projects",
    });
  }
});

/**
 * GET SINGLE PROJECT
 */
router.get("/:id", async (req, res) => {
  try {
    const project = await prisma.project.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    res.json(project);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch project",
    });
  }
});

/**
 * CREATE PROJECT
 */
router.post("/", async (req, res) => {
  try {
    const {
      title,
      description,
      content,
      image,
      category,
      status,
      startDate,
      endDate,
      published,
    } = req.body;

    const project = await prisma.project.create({
      data: {
        title,
        description,
        content,
        image,
        category,
        status,
        startDate: startDate ? new Date(startDate) : null,
        endDate: endDate ? new Date(endDate) : null,
        published,
      },
    });

    res.status(201).json(project);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to create project",
    });
  }
});

/**
 * UPDATE PROJECT
 */
router.put("/:id", async (req, res) => {
  try {
    const project = await prisma.project.update({
      where: {
        id: Number(req.params.id),
      },
      data: req.body,
    });

    res.json(project);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to update project",
    });
  }
});

/**
 * DELETE PROJECT
 */
router.delete("/:id", async (req, res) => {
  try {
    await prisma.project.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    res.json({
      message: "Project deleted successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to delete project",
    });
  }
});

export default router;