import React from "react";
import LoginOrRegisterForm from "../component/LoginOrRegisterForm";

export default function Register() {
  return (
    <div
      style={{
        width: "50%",
        height: "50%",
        margin: "auto",
        background: `url("https://image.tmdb.org/t/p/original/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg") no-repeat center center fixed`,
        padding: "10em",
      }}
    >
      <LoginOrRegisterForm loginOrRegister={"register"} />
    </div>
  );
}
