import Template from "../components/Template"
import signupImage from '../assets/signup.png'

function SingUp({setIsLoggedIn}){
    return (
        <div className="flex justify-center items-center bg-gray-950 text-white">
            <Template
            title='Join to millions learning to code with studyNotion for free'
            desc1 = 'Build skills for today, tommorow and beyond.'
            desc2 = 'Education to future your career.'
            image = {signupImage}
            formType='signup'
            setIsLoggedIn= {setIsLoggedIn}/>
        </div>
    )
}
export default SingUp