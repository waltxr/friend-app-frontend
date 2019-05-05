import { schema } from 'normalizr'

const commentSchema = new schema.Entity('comments', {})
const grievanceSchema = new schema.Entity('grievances', {})

grievanceSchema.define({
  comments: [commentSchema]
})

export { grievanceSchema }
