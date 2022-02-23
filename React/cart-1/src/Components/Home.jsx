import React from 'react'
import styles from '../CSS/Home.module.css'
import { SetGetAPI } from '../JS/SetGetAPI'
import { Context } from './Context'
import { Product } from './Product'

export const Home = () => {
    const { data, select } = React.useContext(Context);

    const { getAPi } = SetGetAPI();

    React.useEffect(() => {
        getAPi(fetch(" http://localhost:3000/prouctData"));
    }, []);

    // console.log(data)
    return (
        <div className={styles.home}>
            <div className={styles.banner}>
                <button className={styles.button}>Know More</button>
            </div>
            <h2 style={{ marginTop: "2rem" }}>{select === "default" ? "All Products" : `${select} Products`}</h2>
            <div className={styles.products}>
                {/* {data.map((item) => <Product key={item.id} item={item} />)} */}
                {select === "default" ? (data.map((item) => <Product key={item.id} item={item} />))
                    : data.filter((item) => item.category === select).map((item) => <Product key={item.id} item={item} />)
                }
            </div>
        </div>
    )
}
