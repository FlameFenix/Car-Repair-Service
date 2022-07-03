import React from 'react';

export const Timer = (props) => {
    let [time, setTime] = React.useState(0);
    
    setTimeout(() => {
        setTime(time + 1);
    }, 1000);

    
    var hours = Math.floor(time / (60 * 60));

    let minutes = Math.floor(time / 60);

    let seconds = Math.floor((time % 60));

    if(seconds < 10) {
        seconds = '0' + seconds
    }
    if(minutes > 59) {
        minutes = 0;
    }

    if(minutes < 10) {
        minutes = '0' + minutes;
    }



    if(hours < 10) {
        hours = '0' + hours
    }

    return (
        <h1>You are on this page from {hours}:{minutes}:{seconds}</h1>
    );
}