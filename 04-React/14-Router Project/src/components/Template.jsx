import frame from '../assets/frame.png'
import LoginForm from './LoginForm'
import SignupForm from './SingupForm'
function Template(props){
    const title = props.title
    const desc1 = props.desc1
    const desc2 = props.desc2
    const image = props.image
    const formType = props.formType
    const setIsLoggedIn = props.setIsLoggedIn
    return (
        <div>
            {/* Left part */}
            {/* Template Titel */}
            <div>
                {/* Heading or title */}
                <h1>{title}</h1>
                {/* Description */}
                <p>
                    <span>{desc1}</span>
                    <span>{desc2}</span>
                </p>

                {/* Form for the type of Login or Signup */}
                {
                    formType === 'signup' ? 
                    (<SignupForm/>) : 
                    (<LoginForm/>)
                }
                {/* Horizontal lines and the OR text */}

                <div>
                    <div></div>
                    <p>OR</p>
                    <div></div>
                </div>

                <button>
                    <p>Sign in with Google</p>
                </button>
            </div>

            {/* Right part */}
            {/* Image part of the Form */}
            <div>
                <img src={frame} alt="Frame image" height={504} width={558} loading='lazy' srcSet='' />
                <img src={image} alt="Front image for the form template"  width={558} height={490} srcSet="" />
            </div>
        </div>
    )
}
export default Template