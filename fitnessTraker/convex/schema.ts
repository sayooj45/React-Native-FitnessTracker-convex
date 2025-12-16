import { defineSchema, defineTable } from 'convex/server'

import { v } from 'convex/values'

export default defineSchema({
    fitTrack:defineTable({
        title:v.string(),
        duration:v.string(),
        date:v.string(),
        isCompleted:v.boolean(),
        calories:v.string()
    })
})