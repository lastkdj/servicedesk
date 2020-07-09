import FirebaseApp from "./FireBaseConfig";

export const newAccountCreated = FirebaseApp.functions.auth
  .user()
  .onCreate((user) => {
    console.log("User Created Muy bienn", user.email, user.uid);
  });
