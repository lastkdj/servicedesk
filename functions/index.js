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
