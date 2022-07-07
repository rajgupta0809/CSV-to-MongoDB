var mongoose = require('mongoose')

var empSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
    },
    Email: {
      type: String,
      unique: True,
    },
    Mobile: {
      type: Number,
      unique: True,
    },
    DOB: {
      type: Number,
    },
    Resume: {
      type: String,
      unique: True,
    },
    WorkEX: {
      type: Number,
    },
    CLocation: {
      type: String,
    },
    Address: {
      type: String,
      unique: True,
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
