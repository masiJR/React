import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enterUserName, setEnterUserName] = useState("");
  const [enterAge, setEnterAge] = useState("");
  const addUserHander = (event) => {
    event.preventDefault();
    if (enterUserName.trim().length === 0 || enterAge.trim().length === 0) {
      return;
    }
    // if (+enterAge < 1) {
    //   return;
    // }
    console.log(enterUserName, enterAge);
    props.onAddUser(enterUserName, enterAge);
    setEnterUserName("");
    setEnterAge("");
  };

  const userNameChangeHandler = (event) => {
    setEnterUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnterAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHander}>
        <label htmlFor="username">UserName</label>
        <input
          id="username"
          type="text"
          value={enterUserName}
          onChange={userNameChangeHandler}
        ></input>
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={enterAge}
          onChange={ageChangeHandler}
        ></input>
        <Button type="submit" onSubmit={AddUser}>
          OK
        </Button>
      </form>
    </Card>
  );
};
export default AddUser;
