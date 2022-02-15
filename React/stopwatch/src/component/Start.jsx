import React from 'react'
import styles from '../Css/Start.module.css';
import { Stopwatch } from './Stopwatch';
import { Timer } from './Timer';

export const Start = () => {

    const [change, setChange] = React.useState(false);

  return (
    <div className={styles.App}>
        <div className={styles.toggle}>
            <h2 className={styles.h2} onClick={() => setChange(!change)}>Stopwatch</h2>
            <h2 className={styles.h2} onClick={() => setChange(!change)}>Timer</h2>
        </div>
        {change ? <Timer/> : <Stopwatch/>}
    </div>
  )
}
