import React from 'react';

import './ExpenseDFilter.css';

const ExpenseDFilter = (props) => {
    
    const yearChangeHandler=(event)=>{
        props.onSaveFilter(event.target.value);
    };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={yearChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseDFilter;