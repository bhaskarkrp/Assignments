import React from 'react';

export const Timer = ({ start, end }) => {
    const [time, setTime] = React.useState(start);

    React.useEffect(() => {
        // It has an empty second parameter so it will run only once when the component is rendered
        const id = setInterval(() => {
            // Trying to change the time every second 
            setTime((prev) => {
                // setTime contain a fat arrow function so it won't reset the time to start repeatadly
                // console.log(prev);
                if (prev === end) {
                    // After acheiving the end time trying to clearInterval
                    clearInterval(id);
                    // returning prev so time is shown on the display after reachning
                    return prev
                } else {
                    // Increasing prev + 1
                    return prev + 1;
                }
            })
            // Time will set to start afer every second
            // console.log(time);
        }, 1000);
        // This will show only once
        // console.log(time);
        return () => {
            // This will clean the interval clearInterval(id)
            clearInterval(id);
        }

    }, [])

    return (
        <>
            <h1>Timer: {time}</h1>

        </>
    );
};
