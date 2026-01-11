import type { Response } from 'express';
import type { AuthenticatedRequest } from '../../middleware/auth.js';

import { getCurrentWeekInfo, getWeekBabyState, getWeekDashboardInfo, getWeekMomState } from './weeks.service.js';

export const weeksController = {
  // Public: week dashboard info by weekNumber
  async getByWeekNumber(req: any, res: Response) {
    const weekNumber = req.params.weekNumber as number;
    const info = await getWeekDashboardInfo(weekNumber);
    res.status(200).json(info);
  },

  // Private: current week dashboard info based on user's dueDate
  async getCurrent(req: AuthenticatedRequest, res: Response) {
    const info = await getCurrentWeekInfo(req.userId);
    res.status(200).json(info);
  },

  // Private: baby development by week
  async getBabyByWeekNumber(req: AuthenticatedRequest, res: Response) {
    const weekNumber = req.params.weekNumber as number;
    const row = await getWeekBabyState(weekNumber);
    res.status(200).json(row);
  },

  // Private: mom body changes by week
  async getMomByWeekNumber(req: AuthenticatedRequest, res: Response) {
    const weekNumber = req.params.weekNumber as number;
    const row = await getWeekMomState(weekNumber);
    res.status(200).json(row);
  },
};
