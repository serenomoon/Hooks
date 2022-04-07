import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'

export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1);

    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const {author, quote} = !!data && data[0];
//    console.log(state);
  return (
    
    <>
        <h1> Breaking Bad Quotes </h1>
        <hr />

        {
            loading ?
            (<div className='alert alert-info text-center'>
                Loading...
            </div>)
            :
            (<><blockquote className='blockquote text-right'>
                <p className='mb-0'>{quote}</p>
                <br></br>
                <footer className='blockquote-footer'>{author}</footer>
            </blockquote>

            <button 
            className='btn btn-primary'
            onClick={increment}
            >Next Quote</button>
            </>)
        }
    </>

  )
}
