import React from 'react';
import Wrapper from '../Wrapper';

const CounterB = (props) => {
       const {CountIncrement, count} = props;
      return (
            <button onClick={CountIncrement}>CounterB :{count} </button>
        )
}
    

export default Wrapper(CounterB);