import React, { useState } from "react"

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from './AddUser.module.css';

export default function AddUser(props) {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState('');
    const addUserHandler = (event) => {
        event.preventDefault();
        console.log(error);
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).'
            });
            return;
        }
        const User = {
            id: Math.random().toString(),
            name: enteredUsername,
            age: enteredAge
        }
        props.onAddUsers(User);
        setEnteredUsername('');
        setEnteredAge('');
        console.log(error);
    }
    
    const errorHandler = () => {
        setError(null);
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
        // console.log(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
        // console.log(event.target.value);
    };

    return (
        <div>
            {error && <ErrorModal onError={error} onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />
                    <label htmlFor="age">Age(Years)</label>
                    <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>

    )
}
