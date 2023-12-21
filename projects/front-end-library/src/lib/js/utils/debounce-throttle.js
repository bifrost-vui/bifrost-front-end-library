export function debounce(func, timeout = 100) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, timeout);
    };
}

export const throttle = (func, timeout = 100) => {
    let throttlePause;
    return (...args) => {
        //don't run the function if throttlePause is true
        if (throttlePause) return;
        //set throttlePause to true after the if condition. This allows the function to be run once
        throttlePause = true;

        //setTimeout runs the callback within the specified time
        setTimeout(() => {
            func.apply(this, args);

            //throttlePause is set to false once the function has been called, allowing the throttle function to loop
            throttlePause = false;
        }, timeout);
    };
};
