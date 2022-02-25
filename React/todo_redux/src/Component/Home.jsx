import React from 'react'
import { TodoInput } from './TodoInput';
import styles from '../CSS/Input.module.css'

export const Home = () => {
    return (
        <>
            <h1 className={styles.border1}>Home</h1>
            <TodoInput />
        </>
    )
}
