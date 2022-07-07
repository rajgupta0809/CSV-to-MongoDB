var mongoose = require('mongoose')

var empSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
    },
    Email: {
      type: String,
    },
    Mobile: {
      type: Number,
    },
    DOB: {
      type: Number,
    },
    Resume: {
      type: String,
    },
    WorkEX: {
      type: Number,
    },
    CLocation: {
      type: String,
    },
    Address: {
      type: String,
    },
    CDesgination: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('empModel', empSchema)
