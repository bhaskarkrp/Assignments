import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { removeTodo, toggleTodo } from '../Redux/action';
import { dispatch, getState } from '../Redux/store';
import styles from '../CSS/Input.module.css'

export const TodoItem = () => {

    const { todo } = getState();

    const navigate = useNavigate();

    // console.log(todo)

    const params = useParams(); //THIS WILL RETURN AN OBJECT HAVING KEY AS THE NAME OF PASSED PATH AND VALUW FROM NAVIGATE().
    // console.log(params);


    return (
        <div>TodoItem
            <div>
                <div className={styles.li2}>
                    <h3 className={styles.border1}>Title</h3>
                    <h3 className={styles.border1}>Status</h3>
                    <h3 className={styles.border1}>Owner</h3>

                    <h3 className={styles.border1}>Actions</h3>
                </div>
                {
                    todo.filter(item => item.title === params.id).map(item => (
                        <div className={styles.li2}>
                            <p> {item.title}</p>
                            <p> {item.status.toString()}</p>
                            <p> {item.owner}</p>
                            <div className={styles.flex}>
                                <button className={styles.button2} onClick={() => {
                                    dispatch(toggleTodo(item.title, item.owner));
                                    !item.status ? alert("TODO Marked as completed") : alert("TODO Marked as Incomplete")
                                    navigate("/");
                                }}>{!item.status ? "Mark Completed" : "Mark as Incomplete"}</button>
                                <button className={styles.button2} onClick={() => {
                                    dispatch(removeTodo(item.title, item.owner));
                                    alert("TODO Deleted");
                                    navigate("/");
                                }}> Remove TODO</button>
                                <button className={styles.button2} onClick={() => navigate(`edit`)}>Edit</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div >
    )
}
