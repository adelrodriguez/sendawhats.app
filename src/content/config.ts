import { defineCollection, z } from "astro:content";

const countries = defineCollection({
  type: "data",
  schema: z.array(z.object({
    name: z.string(),
    code: z.string(),
    dial_code: z.string(),
    flag: z.string().emoji(),
  }))
})

export const timezones = defineCollection({
  type: "data",
  schema: z.record(z.string(), z.object({
    c: z.array(z.string()),
  }))
})

export const collections = {
  countries,
  timezones,
}