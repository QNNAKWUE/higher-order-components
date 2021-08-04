import React from 'react';
import Wrapper from '../Wrapper';

const CounterA = (props) => {
       const {CountIncrement, count} = props;
      return (
            <button onClick={CountIncrement}>CounterA :{count} </button>
        )
}
    

export default Wrapper(CounterA);