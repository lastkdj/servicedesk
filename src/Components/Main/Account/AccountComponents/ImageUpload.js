import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import "../Account.css";
import FirebaseApp from "../../../../FireBase/FireBaseConfig";
import { AuthContext } from "../../../Context/AuthContext";

const db = FirebaseApp.firestore();

const ImageUpload = () => {
  const { user } = React.useContext(AuthContext);
  const [fileUrl, setFileUrl] = useState(null);

  const handleChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = FirebaseApp.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
  };

  const onClick = (e) => {
    e.preventDefault();
    db.collection("users").doc(FirebaseApp.auth().currentUser.uid).set({
      photoUrl: fileUrl,
    });
  };

  console.log(user);
  return (
    <Grid
      item
      xs={12}
      style={{ padding: "10px", marginTop: "10px", color: "white" }}
    >
      <input
        accept="image/*"
        style={{ display: "none" }}
        id="contained-button-file"
        multiple
        type="file"
        onChange={handleChange}
      />
      <label htmlFor="contained-button-file">
        <Button
          fullWidth
          type="submit"
          color="primary"
          variant="contained"
          className="submit"
          component="span"
        >
          <PhotoCamera style={{ marginRight: "20px" }} />
          Choose Picture
        </Button>
        <Button
          fullWidth
          type="submit"
          color="primary"
          variant="contained"
          className="submit"
          onClick={onClick}
        >
          Update Pic
        </Button>
      </label>
    </Grid>
  );
};

export default ImageUpload;
