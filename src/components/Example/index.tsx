import React from "react";
import "./index.css";
import Admin from "../views/Admin";
import User from "../views/User";

const Example = (props: any) => {
  const { role } = props && props.location && props.location.state;
  return <>{role === "user" ? <User /> : <Admin />}</>;
};

export default Example;
