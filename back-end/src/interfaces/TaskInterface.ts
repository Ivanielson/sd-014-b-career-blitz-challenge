import { z } from 'zod';

export const TaskSchema = z.object({
  task: z.string().min(12),
  status: z.string().optional().default('Pendente'),
});

export type Task = z.infer<typeof TaskSchema>;
