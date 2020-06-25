import { makeStyles } from "@material-ui/core/styles";
import Wall from "../../Imagenes/wall2.jpg";

const LoginStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${Wall})`,
    height: "937px",
  },

  containerTop: {
    justifyContent: "center",
    alignItems: "flex-end",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "3em",
    color: "white",
    fontWeight: "600",
    textShadow: "5px 2px #1B1B1B",
  },
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
    // color: "white",
    boxShadow: "inset 0 0 5px #000000",
  },

  password: {
    display: "flex",
    justifyContent: "center",
    height: "50px",
    backgroundColor: "#A7A7A7",
    margin: "20px 30px",
    borderRadius: "30px",
    boxShadow: "inset 0 0 5px #000000",
  },

  button: {
    display: "flex",
    justifyContent: "center",
    height: "50px",
    backgroundColor: "#444444",
    margin: "20px 30px",
    borderRadius: "30px",
    color: "white",
    fontFamily: "'Poppins', sans-serif",
    alignItems: "center",
    fontWeight: "500",
  },

  accounticon: {
    fontSize: "2em",
    alignSelf: "center",
    color: "white",
  },
}));

export default LoginStyles;
