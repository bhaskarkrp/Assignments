import React from 'react'

export const Timer = () => {

  const [min, setMin] = React.useState(5);
  const [sec, setSec] = React.useState(0);
  // const [hour, setHour] = React.useState(0);
  const clear = React.useRef();

  const start = () => {
    if (!clear.current) {
      const id = setInterval(() => {
        // setSec((prev) => prev - 1);
        clear.current = id;
        setSec((prev) => {
          return prev - 1;
        });

      }, 1000)
    }
  }

  if (sec === 0 && min === 0) {
    setSec("Times Up!");
    clearInterval(clear.current);
    clear.current = undefined;
  }

  if (sec < 0) {
    if (min > 0) {
      setMin(min - 1);
      setSec(59)
    }
    // console.log(sec, min)
  }

  const pause = () => {
    if (clear.current) {
      clearInterval(clear.current);
      clear.current = undefined;
    }
  }

  const reset = () => {
    clearInterval(clear.current);
    clear.current = undefined;
    setMin(3);
    setSec(0)
  }

  React.useEffect(() => {
    return () => clearInterval(clear.current);
  }, [])


  return (
    <div className="App">
      <h1>Timer : {min ? `${min}min` : null} {sec ? `${sec}sec` : null}</h1>

      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
