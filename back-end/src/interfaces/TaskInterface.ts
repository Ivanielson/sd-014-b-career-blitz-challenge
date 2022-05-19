import { z } from 'zod';

export const TaskSchema = z.object({
  task: z.string().min(12),
  status: z.string().optional(),
  createdAt: z.date().optional(),
});

export type Task = z.infer<typeof TaskSchema>;
