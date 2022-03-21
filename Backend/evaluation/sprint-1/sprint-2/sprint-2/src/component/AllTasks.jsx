import React from 'react';
import { useDispatch, useSelector } from "react-redux"
import { Link } from 'react-router-dom';
import { getTasks } from '../actions/taskAction';
import { Loader } from '../component/Loader'

export const AllTasks = () => {

    const { tasksData, loader } = useSelector((state) => state.tasks)
    const dispatch = useDispatch();

    console.log(tasksData)
    React.useEffect(() => {
        dispatch(getTasks())
    }, [])
    return (
        <div>
            <h1>Tasks</h1>
            {loader ? (
                <Loader />
            ) : (
                <>
                    {/* <Filter /> */}
                    {tasksData.map((item) => (
                        <div style={{ display: "flex", gap: "10rem" }} key={item._id}>
                            <h1>{item.title}</h1>
                            <h3>{item.status.toString()}</h3>
                            <button style={{ padding: "1.5rem", width: "max-content" }}>
                                <Link to={`/items/${item._id}`}>Details</Link>
                            </button>
                        </div>
                    ))}
                </>
            )}
        </div>
    )
}
