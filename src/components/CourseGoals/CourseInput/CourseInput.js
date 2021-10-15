//STYLED COMPONENTS METHOD
// import React, { useState } from 'react';
// import styled from 'styled-components'
// import Button from '../../UI/Button/Button';
// import './CourseInput.css';

// const FormControl = styled.div`
//   margin: 0.5rem 0;


// & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
//   color: ${props => props.invalid ? 'red' : 'black'};
// }

// & input {
//   display: block;
//   width: 100%;
//   border: 1px solid #ccc;
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
//   border-color: ${props => props.invalid ? 'red' : '#ccc'};
//   background-color: ${props => props.invalid ? '#ffd7d7' : 'transparent'};
// }

// & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }

// &.invalid label {
//   color: red;
// }
// `;






//CSS MODULES METHOD

import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';


const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setisValid] = useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0) {
      setisValid(true); //This will reset background and border color to normal when user starts typing a goal in goal input.
    }
    setEnteredValue(event.target.value);

  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
        setisValid(false)
    return; //This stops further execution of function if condition above is met.
    }
    props.onAddGoal(enteredValue);
  };



  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler}/>
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
