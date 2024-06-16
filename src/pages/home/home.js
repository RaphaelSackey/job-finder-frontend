import Login_signup from "../login-singup/login_signup"
import Navbar from "../../components/navbar/navbar"

export default function Home(){
    return(

        <>
           <Navbar />
            <div>Home Page</div>
            <Login_signup />

        </>

    )
}