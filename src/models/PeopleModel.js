import mongoose from 'mongoose'

const peopleSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
})

const People = mongoose.model('peoples', peopleSchema)
export default People
