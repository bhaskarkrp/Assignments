import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { getTask } from '../actions/taskAction'
import { Loader } from './Loader'

export const OneTask = () => {

    const { loader, taskDetail } = useSelector((state) => state.tasks)
    const dispatch = useDispatch();
    const { id } = useParams()

    // console.log(id)

    React.useEffect(() => {
        dispatch(getTask(id));
    }, [])

    console.log(taskDetail);
    return (
        <div>
            <h1>Detail</h1>
            {loader ? <Loader /> : (
                <>
                    <h3>{taskDetail.subTask}</h3>
                    <h2>{taskDetail.status.toString()}</h2>
                    {/* <button > <Link to={`/edit/${taskDetail._id}`} /> Edit</button> */}
                    {/* <button>Complete</button> */}
                </>
            )}
        </div>
    )
}
