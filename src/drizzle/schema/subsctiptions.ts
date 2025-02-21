import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'

export const subscriptions = pgTable('subscriptions', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text().notNull(),
  email: text().notNull().unique(),
  createted_at: timestamp('created_at').notNull().defaultNow(),
})
