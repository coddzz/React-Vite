import React from 'react'

const App = () => {

    const name = 'Hello world!!';
    const x =10;
    const y = 20;
    const names = ['Brad','mary','joe', 'sara'];
    const loggedin =true;
    const style1 = { color:"green", fontSize:"1.5rem"};

  return (
    <>
      <div className='text-xl'> 
          <h1 style={style1} >{name}</h1>
          <p>{names.toLocaleString()}</p>
      </div>
      <p className="text-fuchsia-800">Lorem ipsum dolor sit amet consectetur</p> 
      <p>
          the sum of {x} and {y} is {x + y}
      </p>
      <ul>
      {names.map((name, index) => (
          <li key={index}>{name}</li>
      ))}
      </ul>
      { loggedin ? "login done" : "not logged"}
    </>
  )
}

export default App;