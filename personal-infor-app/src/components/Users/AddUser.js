import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enterUserName, setEnterUserName] = useState("");
  const [enterAge, setEnterAge] = useState("");
  const [error, setError] = useState("");
  const addUserHander = (event) => {
    event.preventDefault();
    if (enterUserName.trim().length === 0 || enterAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age",
      });
      return;
    }
    if (+enterAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age >1",
      });
      return;
    }
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

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
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
    </div>
  );
};
export default AddUser;
