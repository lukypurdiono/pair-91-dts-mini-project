import React from "react";

import LoginOrRegisterForm from "../component/LoginOrRegisterForm";

export default function Login() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        margin: "auto",
        background: `url("https://image.tmdb.org/t/p/original/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg") no-repeat center center fixed`,
        padding: "10em",
      }}
    >
      <LoginOrRegisterForm loginOrRegister={"login"} />
    </div>
  );
}
