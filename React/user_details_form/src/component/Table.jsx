import React from 'react'
import { TableElement } from "./TableElement"
import styles from '../CSS/Form.module.css';
import { SetGetApi } from '../JS/SetGetApi';
import { Toggle_filter } from './Toggle_filter';

export const Table = ({ data_array }) => {
    // console.log(data_array)
    // const { setData, data } = SetGetApi();
    const [table, setTable] = React.useState(data_array);

    const [showAll, setShowAll] = React.useState(true);

    const assen = () => {
        console.log("Assending")
        const new_list1 = data_array.sort((a, b) => (+b.salary < +a.salary) ? 1 : -1);
        setTable([...new_list1]);
        // console.log(new_list1)

    }

    const desen = () => {
        console.log("Desending")
        const new_list = data_array.sort((a, b) => (+b.salary > +a.salary) ? 1 : -1);
        setTable([...new_list]);
        // console.log(new_list)

    }

    React.useEffect(() => {
        console.log(table)
    }, [table])

    // setData(data_array)
    return (
        <div>
            <h1>Users List</h1>
            <div>
                <button onClick={assen}>Ascending</button>
                <button onClick={desen}>Descending</button>
            </div>
            <Toggle_filter data_array={data_array} setTable={setTable} showAll={showAll} setShowAll={setShowAll}/>
            <li className={styles.li_head}>
                <p>Name</p>
                <p>Age</p>
                <p>Department</p>
                <p>Address</p>
                <p>Salary</p>
                <p>Marital Status</p>
                <p>Delete</p>
            </li>
            <ol>
                {table.map((element) => {
                return (<TableElement key={element.id} element={element} />)
                })}
            </ol>
        </div>
    )
}
