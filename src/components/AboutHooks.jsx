import { useState } from "react";


export const HookContent = ()=>{

    const [items, setItems] = useState(
        [
            {
                id:1,
                checked: true,
                item: "Practice Coding",

            }
        ]
    );

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
            <div>
                <span>
                    <h3 className="font-bold underline pt-2 m-4"> React Hooks </h3>
                </span>
                <div className=" bg-amber-200 p-6 mx-6 rounded">
                    <div className="font-bold" > Content! <span className=" underline">useState</span></div>
                    <div><ul>
                        <li>we can't use in classes</li>
                        <li>we can't use in conditions like if/ else</li>
                        <li>don't use objects on useState because of code repetition</li>
                        <li>use arrow function : eg: {"const [colourNames, setName] = useState(() => namee());"}</li>
                    </ul></div><br/>
                    <div>Colours: <span className="font-bold">{ colourNames }</span> (Math.random())</div>
                    <button className="bg-sky-500 px-4 py-1 rounded-xl m-4 hover:bg-sky-600 "onClick={handleNameChange} >Click Here to change the colour names</button>
                    <div className="flex flex-col px-2 py-1"> Count: {count} 
                        <button className="bg-amber-400 px-2 py-1 rounded-xl m-4 hover:bg-amber-500 " onClick = {()=>handleClick()}> Increment </button>
                        <button className="bg-amber-400 px-2 py-1 rounded-xl m-4 hover:bg-amber-500" onClick = {reset}> Reset </button>
                    </div>
                </div>
            </div>

        </>
    )
}