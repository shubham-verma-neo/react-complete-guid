import React from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const saveExpenseData= (enteredExpenseData) => {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData
        };
        props.onAddExpense(expenseData);
        console.log(expenseData);
    }
    return <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseData} />
    </div>
}

export default NewExpense;