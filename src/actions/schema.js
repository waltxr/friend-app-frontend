import { schema } from 'normalizr'

const userSchema = new schema.Entity('user', {})
const commentSchema = new schema.Entity('comments', {})
const filedGrievanceSchema = new schema.Entity('filed_grievances', {})
const receivedGrievanceSchema = new schema.Entity('received_grievances', {})

userSchema.define({
  filed_grievances: [filedGrievanceSchema],
  received_grievances: [receivedGrievanceSchema]
})

// commentSchema.define({
//   grievance: grievanceSchema
// })

filedGrievanceSchema.define({
  // reporter: userSchema,
  // receivers: [userSchema],
  comments: [commentSchema]
})

receivedGrievanceSchema.define({
  // reporter: userSchema,
  // receivers: [userSchema],
  comments: [commentSchema]
})

commentSchema.define({
  comments: [commentSchema]
})


export { userSchema }
