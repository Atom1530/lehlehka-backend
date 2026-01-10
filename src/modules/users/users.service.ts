import type { Gender, User } from '@prisma/client';
import { prisma } from '../../db/prisma.js';

export type PublicUserDto = {
  id: string;
  name: string;
  email: string;
  gender: Gender | null;
  dueDate: string | null;
  avatarUrl: string | null;
  createdAt: string;
  updatedAt: string;
};

function toPublicUser(user: User): PublicUserDto {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    gender: user.gender ?? null,
    dueDate: user.dueDate ? user.dueDate.toISOString().slice(0, 10) : null,
    avatarUrl: user.avatarUrl ?? null,
    createdAt: user.createdAt.toISOString(),
    updatedAt: user.updatedAt.toISOString(),
  };
}

export async function getCurrentUser(userId: string): Promise<PublicUserDto> {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) {
    const err = new Error('User not found');
    // @ts-expect-error attach code for error handler
    err.status = 404;
    throw err;
  }
  return toPublicUser(user);
}

export type UpdateUserInput = {
  name?: string;
  gender?: Gender | null;
  dueDate?: string | null;
};

export async function updateUser(userId: string, input: UpdateUserInput): Promise<PublicUserDto> {
  const data: Record<string, unknown> = {};
  if (typeof input.name !== 'undefined') data.name = input.name;
  if (typeof input.gender !== 'undefined') data.gender = input.gender;
  if (typeof input.dueDate !== 'undefined') {
    data.dueDate = input.dueDate ? new Date(input.dueDate) : null;
  }

  const user = await prisma.user.update({
    where: { id: userId },
    data,
  });
  return toPublicUser(user);
}

export async function updateAvatar(userId: string, avatarUrl: string): Promise<PublicUserDto> {
  const user = await prisma.user.update({
    where: { id: userId },
    data: { avatarUrl },
  });
  return toPublicUser(user);
}
