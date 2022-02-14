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

    // setData(data_array)
    return (
        <div>
            <h1>Products List</h1>

            <Toggle_filter data_array={data_array} table={table} setTable={setTable} showAll={showAll} setShowAll={setShowAll}/>
            <li className={styles.li_head}>
                <p>Name</p>
                <p>Cost</p>
                <p>Category</p>
                <p>Image</p>
                <p>Delete</p>
            </li>
            <ol>
                {table.map((element) => <TableElement key={element.id} element={element} />)}
            </ol>
        </div>
    )
}
