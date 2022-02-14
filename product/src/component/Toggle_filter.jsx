import React from 'react'

export const Toggle_filter = ({data_array, table, setTable, showAll, setShowAll}) => {
    return (
        <div>
            <button onClick={() => {
                setShowAll(!showAll)
                setTable(data_array)
            }}>
                {showAll ? "Filter" : "Show All"}
            </button>
            {!showAll ? (
                <div>
                    <button onClick={() => {
                        // console.log("It")
                        const new_list = data_array.filter((item) => {
                            // console.log(item.dept)
                            return item.category == "Vegetables";
                        })
                        // console.log(new_list)
                        setTable(new_list)
                    }}>Vegetables</button>
                    <button onClick={() => {
                        // console.log("It")
                        const new_list = data_array.filter((item) => {
                            // console.log(item.dept)
                            return item.category == "Fruits";
                        })
                        // console.log(new_list)
                        setTable(new_list)
                    }}>Fruits</button>
                    <button onClick={() => {
                        // console.log("It")
                        const new_list = data_array.filter((item) => {
                            // console.log(item.dept)
                            return item.category == "Provisions";
                        })
                        // console.log(new_list)
                        setTable(new_list)
                    }}>Provisions</button>
                </div>
            ) : null}
        </div>
    )
}
