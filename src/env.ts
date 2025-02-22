import { z } from 'zod'

const envSchema = z.object({
  PORT: z.coerce.number().default(3001),
  PG_URL: z.string().url(),
  REDIS_URL: z.string(),
  WEB_URL: z.string().url(),
})

export const env = envSchema.parse(process.env)
