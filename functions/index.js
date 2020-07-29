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
  const usercreation_timeStamp = data.usercreation_timeStamp;
  const defaultAvatar = data.defaultAvatar;

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
          phonenumber: phonenumber,
          country: country,
          company: company,
          department: department,
          job: job,
          publicinfo: publicinfo,
          joinDate: joinDate,
          usercreation_timeStamp: usercreation_timeStamp,
          defaultAvatar: defaultAvatar,
        })
        .then(function () {
          console.log("Document successfully written!");
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });
    })
    .catch(function (error) {
      console.log("Error creating new user:", error);
    });
});
