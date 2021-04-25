import mongoose from 'mongoose'

const memoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  creator: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  creatorId: {
    type: String,
    required: true,
  },
})

const Memory = mongoose.model('memo', memoSchema)

export default Memory
