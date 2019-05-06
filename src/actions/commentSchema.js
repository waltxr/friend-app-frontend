import { schema } from 'normalizr'

const commentSchema = new schema.Entity('comments', {})

commentSchema.define({
  comments: [commentSchema]
})

export { commentSchema }
