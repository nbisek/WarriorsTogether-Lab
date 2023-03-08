import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment, incrementByAmount} from './counterSlice';
import {useState} from 'react';

const IncrementByAmount = () => {
  const counterValue = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  const [addAmount, setAddAmount] = React.useState(0);

  const handleAdd = () => {
    console.log(parseInt(addAmount));
    dispatch(incrementByAmount(parseInt(addAmount)));
  };

  return (
    <div>
      <div>
        <span>Counter value = {counterValue}</span> <br />
        <label>How much do you want to add?</label>
        <input
          type="number"
          id="user-input"
          value={addAmount}
          onChange={e => setAddAmount(e.target.value)}
        ></input>
        <button onClick={() => handleAdd()}>Add {addAmount}</button>
      </div>
    </div>
  );
};

export default IncrementByAmount;
