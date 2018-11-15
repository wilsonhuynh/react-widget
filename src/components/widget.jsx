import React from 'react';
import Day from 'components/day';
import style from 'styles/widget.css';

const Widget = () => {
    const numberOfDays = [...Array(7)];

    return (
        <div className={style.content}>
            {
                numberOfDays.map((i, index) => <Day key={index} index={index} />)
            }        
        </div>
    );
};

export default Widget;