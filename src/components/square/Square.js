import React, { useEffect, useState } from 'react';
import './Square.scss';
import { RandomMargin } from './RandomMargin';

export default function Square({ width, height, isDrawing }) {

    const [randNum, setRandNum] = useState(Math.random() * 99);
    const roundedRandNum = Math.round(randNum);

    const randomTime = Math.random() * 2000;
    const randomTimeRounded = Math.round(randomTime);
    const randomTimeBetweenValues = randomTimeRounded + 1000; //between 1000 and 3000

    const [classname, setClassname] = useState('');
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        if (clicked) {
            setClassname('Touch')
        } else {
            const getNewNumber = setInterval(() => {
                setRandNum(Math.random() * 99);
                setClassname('Highlight')
            }, randomTimeBetweenValues);

            return () => {
                clearInterval(getNewNumber);
            };
        }
        // eslint-disable-next-line
    }, [clicked, classname])

    useEffect(() => {
        if (!clicked) {
            setTimeout(() => {
                setClassname('');
            }, 1000);
        }
        // eslint-disable-next-line
    }, [roundedRandNum, clicked, classname])

    return (
        <div
            className={`Square ${classname}`}
            style={RandomMargin(5, width, height)}
            onMouseLeave={() => { if (isDrawing) { setClicked(true) } }}
            onMouseDown={() => { if (isDrawing) { setClicked(true) } }}
            onMouseUp={() => { if (isDrawing) { setClicked(true) } }}
            onClick={() => setClicked(true)}>
            {roundedRandNum}
        </div>
    )
}