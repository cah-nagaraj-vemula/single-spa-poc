import { Link } from "react-router-dom"

export const Home = () => {
    return <><h1>
        Home 
        <Link to={'/parcel'}> View parcel</Link>
    </h1></>
}