
export const Footer = () =>{

    const year = new Date();
    return(
        
        <div  className="font-bold m-4 text-sm "> Copyright &copy; {year.getFullYear()} </div>
    )
}