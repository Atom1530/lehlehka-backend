import type { Response } from 'express';
import type { AuthenticatedRequest } from '../../middleware/auth.js';

import { getCurrentUser, updateAvatar, updateUser } from './users.service.js';

export const usersController = {
  async current(req: AuthenticatedRequest, res: Response) {
    const user = await getCurrentUser(req.userId);
    res.json(user);
  },

  async patchMe(req: AuthenticatedRequest, res: Response) {
    const user = await updateUser(req.userId, req.body);
    res.json(user);
  },

  async patchAvatar(req: AuthenticatedRequest, res: Response) {
    const user = await updateAvatar(req.userId, req.body.avatarUrl);
    res.json(user);
  },
};
