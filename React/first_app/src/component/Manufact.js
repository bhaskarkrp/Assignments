import React from 'react';
import styles from './mobile.module.css';

export const Manufact = (props) => {
  return (
    <div className={styles.container}>
        <h1>{props.name}</h1>
        <ul>
            <li>Samsung</li>
            <li>HTC</li>
            <li>Micromax</li>
            <li>Apple</li>
        </ul>
    </div>
    );
};
