import React, {memo} from 'react'

export const Small = memo(({ value }) => {

    console.log('Me volvi a llamar D:')
    //http?

  return (
    <small> {value} </small>
  )
}
)


//Usamos React.memo (o lo importamos de React, {memo}) para que react re-renderize el componente si las 
//props del mismo cambian, y no cada vez que hay un cambio general.
