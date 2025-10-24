import React, { useState } from 'react'
import Counter from '../features/counter/counter'


const NotesPage = () => {

    const [ count, setCount] = useState(0);
    const [ colourNames, setName ] = useState("Black");

    const handleNameChange= () =>{
        const colourNames = ["Black", "Red", "Green", "Blue", "Yellow", "Violet"];
        const int = Math.floor(Math.random()*6);
        setName(colourNames[int]);
    }

    const reset = () =>{
        setCount(0);
    };

    const handleClick = () =>{
        setCount((count) => {return count+ 1})
    }

  return (
    <>
    <div className='m-auto mt-5 mx-10 rounded-xl px-4 py-2 bg-sky-100 text-gray-700 font-extrabold text-xl shadow-md'>
        React Hooks &#9733;
    </div>
    <div className='mx-5 grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className=" bg-indigo-50 p-6 m-8 rounded-xl">
            <div className="font-bold" > Content! <span className=" underline">useState</span></div>
            <div><ul>
                <li>we can't use in classes</li>
                <li>we can't use in conditions like if/ else</li>
                <li>don't use objects on useState because of code repetition</li>
                <li>use arrow function : eg: {"const [colourNames, setName] = useState(() => namee());"}</li>
            </ul></div><br/>
            <div>Colours: <span className="font-bold">{ colourNames }</span> (Math.random())</div>
            <button className="bg-sky-500 text-sm px-4 py-2 rounded-xl m-4 hover:bg-sky-600 "onClick={handleNameChange} >Click Here to change the colour names</button>
            <div className="flex flex-col px-2 py-2"> Count: {count} 
                <button className="bg-amber-400 px-2 py-2 rounded-xl m-4 hover:bg-amber-500 " onClick = {()=>handleClick()}> Increment </button>
                <button className="bg-amber-400 px-2 py-2 rounded-xl m-4 hover:bg-amber-500" onClick = {reset}> Reset </button>
            </div>
        </div>
    </div>
    <div className='m-auto mt-5 mx-10 rounded-xl px-4 py-2 bg-sky-300 text-gray-700 font-extrabold text-xl shadow-md'>
        React-Redux &#9733;
    </div>
    <div className='max-w-3xl m-4 mt-5 mx-10 rounded-xl px-4 py-2'>
        <Counter/> {/* using reduxjs toolkit*/}
    </div>
    </>
  )
}

export default NotesPage
