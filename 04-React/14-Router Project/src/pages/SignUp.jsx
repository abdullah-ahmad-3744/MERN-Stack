import Template from "../components/Template"
import signupImage from '../assets/signup.png'

function SingUp({setIsLoggedIn}){
    return (
        <div className="min-h-screen flex justify-center items-center bg-mist-900 text-white">
            <Template
            title='Join to millions learning to code with studyNotion for free'
            desc1 = 'Build skills for today, tommorow and beyond.'
            desc2 = 'Education to future your career.'
            image = {signupImage}
            setIsLoggedIn= {setIsLoggedIn}/>
        </div>
    )
}
export default SingUp