import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import React, { useState } from "react";

import './Expenses.css';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
        // console.log(selectedYear);
        setFilteredYear(selectedYear);
        // console.log(filteredYear);
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });


    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                <ExpensesChart
                    expenses={filteredExpenses}
                />
                <ExpensesList
                    expenses={filteredExpenses}
                />
            </Card>
        </div>
    );
}

export default Expenses;