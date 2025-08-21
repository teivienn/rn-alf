import * as z from 'zod'

export const configSchema = z
  .object({
    atoms: z.object({
      name: z.string(),
      path: z.string(),
    }),
    spaces: z.record(z.string(), z.number()),
  })
  .strict()

export type ConfigSchema = z.infer<typeof configSchema>
