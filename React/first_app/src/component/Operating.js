import React from 'react';
import styles from './mobile.module.css';


export const Operating = (props) => {
    console.log(props)
  return( 
    <div className={styles.container}>
        <h1>{props.name}</h1>
        <ul>
            <li>Android</li>
            <li>BlackBerry</li>
            <li>iphone</li>
            <li>Windows Phone</li>
        </ul>
    </div>
    );
};
