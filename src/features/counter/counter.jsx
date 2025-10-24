import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice';


const counter = () => {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <div className='m-auto p-4 bg-sky-600 rounded-xl' style={{ textAlign: 'center' }}>
        <h2 className='text-left m-4'>React-Redux</h2>
        <h1 className='m-4 text-2xl border-2'> {count} </h1>
        <div className='m-4 p-4 bg-sky-600'>
        <button className='bg-gray-100 hover:bg-gray-300 px-3 py-2 mx-3 rounded-md'
        aria-label='Decrement value'
        onClick={() => dispatch(decrement())}
        >
          - Decrement</button>
        <button className='bg-gray-100 hover:bg-gray-300 px-3 py-2 mx-3 rounded-md'
        aria-label='Increment value'
        onClick={() => dispatch(increment())}
        >
          + Increment</button>
        </div>
      </div>
    </>
  );
}

export default counter
