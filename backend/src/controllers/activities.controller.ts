import { Request, Response } from "express";
import { activities } from "../data/activities";

export const getActivities = (req: Request, res: Response) => {
  res.json(activities);
};

export const getActivityById = (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const activity = activities.find((a) => a.id === id);

  if (!activity) {
    return res.status(404).json({ message: "Activity not found" });
  }

  res.json(activity);
};