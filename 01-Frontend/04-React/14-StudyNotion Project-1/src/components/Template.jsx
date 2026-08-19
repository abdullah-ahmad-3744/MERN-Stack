import frame from '../assets/frame.png'
import LoginForm from './LoginForm'
import SignupForm from './SingupForm'
import { FaGoogle } from "react-icons/fa";function Template(props){
    const title = props.title
    const desc1 = props.desc1
    const desc2 = props.desc2
    const image = props.image
    const formType = props.formType
    const setIsLoggedIn = props.setIsLoggedIn
    console.log(formType);
    return (
        <div className="flex w-11/12 max-w-[860px] py-6 mx-auto gap-y-0 gap-x-16 justify-between bg-gray-950">
            {/* Left part */}
            {/* Template Titel */}
            <div className="w-11/12 max-w-[400px] text-white -mt-3">
                {/* Heading or title */}
                <h1 className="text-gray-50 font-semibold text-[1.700rem] leading-[2.375rem] ">{title}</h1>
                {/* Description */}
                <p className="flex flex-col text-[1.125rem] mt-1 leading-[1.625rem]">
                    <span className="text-gray-300">{desc1}</span>
                    <span className="text-blue-300 italic">{desc2}</span>
                </p>

                {/* Form for the type of Login or Signup */}
                {
                    formType === 'signup' ? 
                    (<SignupForm setIsLoggedIn={setIsLoggedIn}/>) : 
                    (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)
                }
                {/* Horizontal lines and the OR text */}

                <div className="flex w-full items-center my-2 gap-x-2">
                    <div className="h-[1px] w-full bg-richblack-700"></div>
                    <p className="text-richblack-700 font-medium leading-[1.375rem]">OR</p>
                    <div className="h-[1px] w-full bg-richblack-700"></div>
                </div>

                <button className="w-full flex items-center justify-center rounded-[8px] font-medium text-richblack-100 border-gray-700 border px-[12px] py-[8px] gap-x-2 mt-2">
                    <FaGoogle />
                    <p>Sign in with Google</p>
                </button>
            </div>

            {/* Right part */}
            {/* Image part of the Form */}
            <div  className="relative w-11/12 max-w-[450px]">
                <img src={frame} alt="Frame image" height={490} width={500} loading='lazy' srcSet=''
                className="absolute -top-2 right-2 " />
                <img src={image} alt="Front image for the form template"  width={400} height={370} srcSet="" 
                className='absolute rounded-md'/>
            </div>
        </div>
    )
}
export default Template