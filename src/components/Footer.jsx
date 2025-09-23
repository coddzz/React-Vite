
export const Footer = () =>{

    const year = new Date();
    return(
        <div> Copyright &copy; {year.getFullYear()} </div>
    )
}