import type { Request, Response } from 'express';
<<<<<<< HEAD

import type { AuthenticatedRequest } from '../../middleware/auth.js';
import { HttpError } from '../../middleware/errorHandler.js';

import {
  getCurrentWeekInfo,
  getWeekBabyState,
  getWeekDashboardInfoPublic,
  getWeekMomState,
} from './weeks.service.js';

function parseWeekNumber(value: unknown): number {
  const n = Number(value);
  if (!Number.isInteger(n) || n < 1 || n > 40) {
    throw new HttpError(400, 'Invalid weekNumber', { code: 'INVALID_WEEK_NUMBER' });
  }
  return n;
}
=======
import type { AuthenticatedRequest } from '../../middleware/auth.js';

import { HttpError } from '../../middleware/errorHandler.js';

import { getCurrentWeekInfo, getWeekBabyState, getWeekDashboardInfoPublic, getWeekMomState } from './weeks.service.js';
>>>>>>> 7d8758e6e61cd764447a94aaec318c5f09da0418

export const weeksController = {
  // Public: week dashboard info by weekNumber
  async getByWeekNumber(req: Request<{ weekNumber: string }>, res: Response) {
<<<<<<< HEAD
    const weekNumber = parseWeekNumber(req.params.weekNumber);
=======
    const weekNumber = Number(req.params.weekNumber);
    if (!Number.isInteger(weekNumber) || weekNumber < 1 || weekNumber > 40) {
      throw new HttpError(400, 'Invalid weekNumber', { code: 'INVALID_WEEK_NUMBER' });
    }
>>>>>>> 7d8758e6e61cd764447a94aaec318c5f09da0418
    const dueDate = typeof req.query.dueDate === 'string' ? req.query.dueDate : undefined;
    const info = await getWeekDashboardInfoPublic(weekNumber, dueDate);
    res.status(200).json(info);
  },

  // Private: current week dashboard info based on user's dueDate
  async getCurrent(req: Request, res: Response) {
    const { userId } = req as AuthenticatedRequest;
    const info = await getCurrentWeekInfo(userId);
    res.status(200).json(info);
  },

  // Private: baby development by week
<<<<<<< HEAD
  async getBabyByWeekNumber(req: Request<{ weekNumber: string }>, res: Response) {
    const weekNumber = parseWeekNumber(req.params.weekNumber);
=======
  async getBabyByWeekNumber(req: AuthenticatedRequest, res: Response) {
    const weekNumber = Number((req as unknown as Request<{ weekNumber: string }>).params.weekNumber);
    if (!Number.isInteger(weekNumber) || weekNumber < 1 || weekNumber > 40) {
      throw new HttpError(400, 'Invalid weekNumber', { code: 'INVALID_WEEK_NUMBER' });
    }
>>>>>>> 7d8758e6e61cd764447a94aaec318c5f09da0418
    const row = await getWeekBabyState(weekNumber);
    res.status(200).json(row);
  },

  // Private: mom body changes by week
<<<<<<< HEAD
  async getMomByWeekNumber(req: Request<{ weekNumber: string }>, res: Response) {
    const weekNumber = parseWeekNumber(req.params.weekNumber);
=======
  async getMomByWeekNumber(req: AuthenticatedRequest, res: Response) {
    const weekNumber = Number((req as unknown as Request<{ weekNumber: string }>).params.weekNumber);
    if (!Number.isInteger(weekNumber) || weekNumber < 1 || weekNumber > 40) {
      throw new HttpError(400, 'Invalid weekNumber', { code: 'INVALID_WEEK_NUMBER' });
    }
>>>>>>> 7d8758e6e61cd764447a94aaec318c5f09da0418
    const row = await getWeekMomState(weekNumber);
    res.status(200).json(row);
  },
};
