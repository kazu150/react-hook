import React, {useEffect, useState} from 'react';

const MouesEventEffect =() =>{
    console.log('mouseEventEffect')
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const getMousePosition =e => {
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=> {
        console.log('useEffect呼ばれたよ')
        window.addEventListener('mousemove', getMousePosition)
        return () => window.addEventListener('mousemove', getMousePosition);
    },[])
    return(
        <div>
            <ul>
                <li>X座標：{x}</li>
                <li>Y座標：{y}</li>
            </ul>
        </div>

    )
}

export default MouesEventEffect;