import React, { useState } from 'react';
import style from './counter.module.css';

export default function Counter(props) {
    const [count, setCount] = useState(0);

    const increment = (count) => {
        setCount(count);
    }

    const double = (count) => {
        count *= 2;
        setCount(count);
    }
    // console.log(props)
  return (
    <div className={style.counter}>
        <h1 className={style.h1}>{props.name}</h1>
        <h2 className={style.h2}>{count}</h2>
        <button onClick={() => increment(count+1)} className={style.btn}>Increment</button>
        <button onClick={() => increment(count-1)} className={style.btn}>Decrement</button>
        <button onClick={() => double(count)} className={style.btn}>Double Increment</button>
    </div>
  );
}
