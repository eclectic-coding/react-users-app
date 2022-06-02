import React from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';

import classes from './AddUser.module.css';


const AddUser = props => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  const onClickHandler = (event) => {
    event.preventDefault()
    console.log('clicked');
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username"/>
        <label htmlFor="age">age</label>
        <input type="number" id="age" />
        <Button type="submit" onClick={onClickHandler}>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
