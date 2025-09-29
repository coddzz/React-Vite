
export const Header = ({title = "App"}) =>{
    return (
        <>
        <h1 className="font-bold font-serif m-4 text-3xl ">{title}</h1>
        <h3 className="font-bold underline m-2 p-2">React Hooks</h3>
        </>
    )
}

export default Header;