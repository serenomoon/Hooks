import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {

  const [ counter, setCounter ] = useState( 10 );

  // const increment = () => {
  //   setCounter( counter +1 );
  // }

  //Usamos useCallback (junto a memo) para que el componente no se llame constantemente cada vez que cambie
  //el counter.
  
  const increment = useCallback( (num) => {
    setCounter( c => c + num );
  }, [ setCounter ]);



  return (
    <>
        <h1>CallbackHook: { counter }</h1>
        <hr />

        <ShowIncrement increment={ increment } />
    </>
  )
}
