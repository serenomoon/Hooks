import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small'

export const Memorize = () => {

    const {counter, increment} = useCounter(10)

    const [change, setChange] = useState(true)

  return (
    <div>
        <h1>Counter : {<Small value={counter}/>} </h1>

        <button className='btn btn-outline-primary' onClick={ increment }> +1 </button>

        <button className='btn btn-outline-primary ml-5' onClick={ () => { setChange(!change) } }> {JSON.stringify(change)} </button>
    </div>
  )
}
