import React from 'react'

export const Toggle_filter = ({data_array, setTable, showAll, setShowAll}) => {
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
                            return item.dept == "IT";
                        })
                        // console.log(new_list)
                        setTable(new_list)
                    }}>IT</button>
                    <button onClick={() => {
                        // console.log("It")
                        const new_list = data_array.filter((item) => {
                            // console.log(item.dept)
                            return item.dept == "Media";
                        })
                        // console.log(new_list)
                        setTable(new_list)
                    }}>Media</button>
                    <button onClick={() => {
                        // console.log("It")
                        const new_list = data_array.filter((item) => {
                            // console.log(item.dept)
                            return item.dept == "Analyst";
                        })
                        // console.log(new_list)
                        setTable(new_list)
                    }}>Analyst</button>
                </div>
            ) : null}
        </div>
    )
}
