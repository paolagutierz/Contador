import React, { useState } from 'react';

function Counter() {

    const [number, setNumber] = useState(0);
    const increment = () => setNumber(number + 1);
    const reset = () => setNumber(0);

    let paragraphMessage;
    let buttonMessage;

    if (number === 0) {
        paragraphMessage = 'Presione el botón para iniciar el conteo!';
        buttonMessage = 'Presioname!';
    } else {
        paragraphMessage = number === 1 ?
            `Ha presionado el botón ${number}, vez :0` :
            `Ha presionado el botón ${number}, veces :0`;
        buttonMessage = 'Sumar 1 al contador!';
    }

    if (number === 0) {
        return (
            <>
                <p>{paragraphMessage}</p>
                <button onClick={increment}>
                    {buttonMessage}
                </button>
            </>
        )
    }

    return (
        <>
            <p>{paragraphMessage}</p>
            <button onClick={increment}>
                {buttonMessage}
            </button>
            <button onClick={reset}>
                Reiniciar conteo
            </button>
        </>
    )

}

export default Counter;