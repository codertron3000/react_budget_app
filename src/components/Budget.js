
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    if(newBudget > 20000) {
        alert("The value cannot exceed £20,000");
        setNewBudget(20000);
        return;
    }
    
    if(newBudget < totalExpenses) {
        alert("The budget cannot be lower than the spending");
        setNewBudget(totalExpenses);
        return;
    }

    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" max="20000" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;