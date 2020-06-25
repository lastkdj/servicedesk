import { makeStyles } from "@material-ui/core/styles";
import Wall from "../../Imagenes/wall.jpg";

const LoginStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${Wall})`,
    height: "937px",
  },

  containerTop: {},
  containerMid: {
    justifyContent: "center",
  },
  containerBottom: {},

  logincard: {
    display: "flex",

    flexDirection: "column",
    justifyContent: "center",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "30px",
    paddingRight: "30px",
  },

  username: {
    display: "flex",
    justifyContent: "center",
    height: "50px",
    backgroundColor: "#A7A7A7",
    margin: "20px 30px",
    borderRadius: "30px",
    color: "white",
  },

  password: {
    display: "flex",
    justifyContent: "center",
    height: "50px",
    backgroundColor: "#A7A7A7",
    margin: "20px 30px",
    borderRadius: "30px",
  },
}));

export default LoginStyles;
