import React from 'react'
import Card from '../UI/Card'
import classes from './UsersList.module.css'
export default function UsersList(props) {
    const checkUser = () => {
        if (props.users) {
            return (
                <ul>
                    {props.users.map(user =>
                        <li key={user.id}>{user.name} ({user.age} years old.) </li>
                    )}
                </ul>
            )
        }
        else {
            return "No User Exists."
        }
    }
    return (
        <Card className={classes.users}>
            {checkUser()}
        </Card>
    )
}
