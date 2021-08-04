import React from 'react';
import Wrapper from '../Wrapper';

const CounterC = (props) => {
       const {CountIncrement, count} = props;
      return (
            <button onClick={CountIncrement}>CounterC :{count} </button>
        )
}
    

export default Wrapper(CounterC);