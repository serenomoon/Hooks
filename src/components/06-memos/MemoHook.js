import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado'
import { useCounter } from '../../hooks/useCounter'

export const MemoHook = () => {

    const {counter, increment} = useCounter(1000)

    const [change, setChange] = useState(true)

    //Porque usar useMemo y no useEffect en este caso:

    //useEffect es para disparar efectos secundarios... por ejemplo, una variable cambia... 
    //quieres cancelar una subscripción, quieres crear un listener... eso lo puedes hacer con un 
    //useEffect

    //Un useMemo, es para memorizar un valor, digamos que tienes un proceso pesado que tomo tiempo 
    //calcular, entonces lo memorizas, y únicamente lo volverás a calcular si los parámetros o 
    //argumentos cambian

    const memoProcesoPesado = useMemo(() => procesoPesado( counter ), [ counter ]);

  return (
    <div>
        <h1>MemoHook</h1>
        <h3>Counter : <small>{counter}</small>  </h3>

        <p> { memoProcesoPesado } </p>

        <button 
            className='btn btn-outline-primary' 
            onClick={ increment }> 
        +1 
        </button>

        <button 
            className='btn btn-outline-primary ml-5' 
            onClick={ () => { setChange(!change) } }> 
        {JSON.stringify(change)} 
        </button>

    </div>
  )
}
