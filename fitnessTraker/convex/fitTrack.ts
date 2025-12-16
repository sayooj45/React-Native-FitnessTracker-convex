import { ConvexError, v } from 'convex/values'
import { mutation, query } from './_generated/server'

export const getActivity = query({
    handler:async (ctx)=> {
     const activity = await ctx.db.query("fitTrack").order("desc").collect()
     return activity
    }
})

export const addActivity = mutation({
    args:{title:v.string(),
        date:v.string(),
        duration:v.string(),
        calories:v.string()
    },
    handler:async(ctx,args) => {
        const activityId = await ctx.db.insert("fitTrack",{
            title:args.title,
            date:args.date,
            duration:args.duration,
            calories:args.calories,
            isCompleted:false,
            
        })
        return activityId
    }
})

export const toggleFitTrack = mutation({
    args:{id:v.id("fitTrack")},
    handler: async (ctx,args) =>{
       const activity= await ctx.db.get(args.id)
       if(!activity) throw new ConvexError("Activity not found")

        await ctx.db.patch(args.id,{
            isCompleted: !activity.isCompleted
        })
    }
})

export const deleteActivity = mutation({
    args:{id:v.id("fitTrack")},
    handler: async (convexToJson,args) => {
        await convexToJson.db.delete(args.id)
    }
})


export const updateActivity = mutation({
    args:{
        id:v.id("fitTrack"),
        title:v.string(),
        date:v.string(),
        duration:v.string(),
        calories:v.string()
        
    },
    handler:async (ctx,args) =>{
        await ctx.db.patch(args.id,{
            title:args.title,
        date:args.date,
        duration:args.duration,
        calories:args.calories
        })
    }
})


export const clearAllActivity = mutation({
    handler: async (ctx) =>{
        const activity = await ctx.db.query("fitTrack").collect()

        for(const fitness of activity){
            await ctx.db.delete(fitness._id)
        }

        return {deletedCount:activity.length}
    }
})