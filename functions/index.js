const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// exports.sendWelcomeEmail = functions.auth.user().onCreate((user) => {
//   // ...
// });

// exports.newUserSignup = functions.auth.user().onCreate((user) => {
//   return admin.firestore().collection("users").doc(user.uid).set({
//     email: user.email,
//   });
// });

// exports.userDeleted = functions.auth.user().onDelete((user) => {
//   const doc = admin.firestore().collection("users").doc(user.uid);
//   return doc.delete();
// });

// exports.addRequest = functions.https.onCall((data, context) => {

// });

// Disable an User
exports.callDisable = functions.https.onCall((data, context) => {
  const user = data.uid;

  admin
    .auth()
    .updateUser(user, {
      disabled: true,
    })
    .then(() => {
      console.log("Successfully disabled");
    })
    .catch((error) => {
      console.log("Something went wrong", error);
    });

  return console.log("User Disabled", user);
});

exports.callEnable = functions.https.onCall((data, context) => {
  const user = data.uid;

  admin
    .auth()
    .updateUser(user, {
      disabled: false,
    })
    .then(() => {
      console.log("Successfully Enabled");
    })
    .catch((error) => {
      console.log("Something went wrong", error);
    });

  return console.log("User Enabled", user);
});

//Cloud Function, create a new user, and store user Data in Cloud Firestore
exports.addUser = functions.https.onCall((data, context) => {
  const firstName = data.firstName;
  const lastname = data.lastname;
  const email = data.email;
  const password = data.password;
  const fullname = data.fullname;
  const phonenumber = data.phonenumber;
  const country = data.country;
  const company = data.company;
  const department = data.department;
  const job = data.job;
  const publicinfo = data.publicinfo;
  const joinDate = data.joinDate;
  const shortDate = data.shortDate;
  const usercreation_timeStamp = data.usercreation_timeStamp;
  const defaultAvatar = data.defaultAvatar;
  const disabled = data.disabled;
  const createdby = data.createdby;

  return admin
    .auth()
    .createUser({
      email: email,
      password: password,
      displayName: fullname,
    })
    .then(function (userRecord) {
      const doc = admin.firestore().collection("users").doc(userRecord.uid);
      doc
        .set({
          uid: userRecord.uid,
          firstName: firstName,
          lastName: lastname,
          fullname: firstName + " " + lastname,
          email: email,
          phonenumber: phonenumber,
          country: country,
          company: company,
          department: department,
          job: job,
          publicinfo: publicinfo,
          joinDate: joinDate,
          shortDate: shortDate,
          usercreation_timeStamp: usercreation_timeStamp,
          defaultAvatar: defaultAvatar,
          disabled: disabled,
          createdby: createdby,
        })
        .then(function () {
          return "user successfully created";
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });
    })
    .catch(function (error) {
      var error = error.code;
      return error;
    });
});
