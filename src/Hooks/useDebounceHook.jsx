function useDebounceHook(cb,delay=1000)
{
    let timerID;

    return (...args)=>{ 
        console.log(...args)
        clearTimeout(timerID)
        timerID = setTimeout(()=>{
          cb(...args)
        },delay)
    }


    /**let timerId;
    return (...args) => {
        console.log(...args);
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            cb(...args);
        }, delay);
    } */
}

export default useDebounceHook