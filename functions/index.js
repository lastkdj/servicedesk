const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
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
//   if (!context.auth) {
//     throw new functions.https.HttpsError("unauthenticated", "Logeate papa");
//   }
//   return admin.firestore().collection("users").doc("Usuario1").set({
//     name: data.name,
//     lastname: data.lastname,
//     email: data.email,
//     password: data.password,
//   });
// });
