const mongoose = require("mongoose")

const userlogSchema = new mongoose.Schema({
    userid: {
      type: String
      // required: true
    },
    machineid: {
      type: String
      // required: true
    }
  }, { timestamps: true })

  // userlogSchema.index({userid: 1})

module.exports = mongoose.model("userlog", userlogSchema)