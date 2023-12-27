// Import our keyCode schema
const userlogModel = require("../models/userlog");

module.exports = {
  //call back function to create our new key code
  createNewuserlog: function (userid,machineid, callback) {
      // Key code is not in the database
        const newuserlog = new userlogModel({
          userid:userid,
          machineid:machineid
        });

        newuserlog.save(function (error, newuserlog) {
          if (error) {
            callback({
              success: false,
              message: "Unable to create new userlog!",
            });
          } else {
            console.log(newuserlog);
            callback({
              success: true,
              message: "Successfully created new userlog records",
            });
          }
        });
      },

  // Get specific Key Code record
  getuserlog: function (userid, callback) {
    userlogModel.findOne({ userid: userid }, (err, record) => {
      if (err || !record) {
        callback({ success: false, message: "Unable find userid record!" });
      } else {
        //console.log(record); -- show record on log
        callback({
          success: true,
          message: "Successfully retrieved userid record",
          userlog: record
        });
      }
    });
  },

  // Get all key codes records
  getAlluserlog: function (callback) {
    userlogModel.find({}, (err, userid) => {
      if (err) {
        callback({ success: false, message: "Unable find userid records!" });
      } else {
        callback({
          success: true,
          message: "Successfully retrieved userid records",
          userlog: userid,
        });
      }
    });
  },


//   updateKeyCodeRecord: function (keyCode, active, description, callback) {
//     KeyCodeModel.findOne({ keyCode: keyCode }, (err, record) => {
//       if (err || !record) {
//         callback({
//           success: false,
//           message:
//             "Unexpected error encountered or keycode record not found while updating keycode record!",
//         });
//       } else {
//         record.active = active;
//         record.description = description;

//         record.save(function (error) {
//           if (error) {
//             callback({
//               success: false,
//               message: "Failed to update keycode record!",
//             });
//           } else {
//             callback({
//               success: true,
//               message: "Successfully updated record!",
//             });
//           }
//         });
//       }
//     });
//   },

  //Delete key code record
//   deleteKeyCodeRecord: function (keyCode, callback) {
//     KeyCodeModel.findOne({ keyCode: keyCode }, (err, record) => {
//       if (err || !record) {
//         callback({
//           success: false,
//           message:
//             "Unexpected error encountered or keycode record not found while deleting keycode!",
//         });
//       } else {
//         record.remove(function (error) {
//           if (error) {
//             callback({
//               success: false,
//               message: "Failed to delete keycode record!",
//             });
//           } else {
//             callback({
//               success: true,
//               message: "Successfully deleted keycode record!",
//             });
//           }
//         });
//       }
//     });
//   },
};
