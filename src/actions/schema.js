import { schema } from 'normalizr'

const userSchema = new schema.Entity('user', {})
const commentSchema = new schema.Entity('comments', {})
const grievanceSchema = new schema.Entity('grievances', {})

userSchema.define({
  filed_grievances: [grievanceSchema],
  received_grievances: [grievanceSchema]
})

// commentSchema.define({
//   grievance: grievanceSchema
// })

grievanceSchema.define({
  // reporter: userSchema,
  // receivers: [userSchema],
  comments: [commentSchema]
})

export { userSchema }
