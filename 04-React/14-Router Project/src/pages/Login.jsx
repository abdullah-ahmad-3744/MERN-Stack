import Template from "../components/Template"
import loginImage from '../assets/login.png'

function Login({setIsLoggedIn}){
    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-950 text-white">
            <Template
            title = 'Welcome Back'
            desc1='Build skills for today, tommorow and beyond'
            desc2 = 'Education to future-proof year career'
            image = {loginImage}
            formType = 'login'
            setIsLoggedIn={setIsLoggedIn}
            />
        </div>
    )
}
export default Login