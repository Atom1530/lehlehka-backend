import { Router } from 'express';

import { requireAuth } from '../../middleware/auth.js';
import { validateBody } from '../../middleware/validate.js';
import { asyncHandler } from '../../utils/asyncHandler.js';
import { usersController } from './users.controller.js';
import { updateAvatarSchema, updateUserSchema } from './users.schemas.js';

export const usersRouter = Router();

// Current user profile
usersRouter.get('/current', requireAuth, asyncHandler(usersController.current));

// Update profile fields
usersRouter.patch('/', requireAuth, validateBody(updateUserSchema), asyncHandler(usersController.patchMe));

// Update avatar URL/path (lite). Full file upload will be added in a later PR.
usersRouter.patch('/avatar', requireAuth, validateBody(updateAvatarSchema), asyncHandler(usersController.patchAvatar));
