import { FaQuoteLeft,FaQuoteRight } from "react-icons/fa6";
import { FaChevronLeft,FaChevronRight } from "react-icons/fa6";
function Card(props){
    let review = props.review
    return (
        <div className="flex flex-col md:relative">
            <div className="absolute top-[-4rem] z-[10] m-auto">
                <img className="aspect-square rounded-full h-[100px] w-[100px] z-25 object-cover"
                src={review.image} alt="" srcSet="" />
                <div className="absolute h-[100px] w-[100px] rounded-full bg-violet-500 top-[-4px] z-[-10] left-[8px]"></div>
            </div>
            
            <div className="text-center">
                <p className="text-2xl font-bold capitalize tracking-wider">{review.name}</p>
                <p className="text-violet-300 uppercase">{review.job}</p>
            </div>

            <div className="text-violet-400 mx-auto mt-4">
                <FaQuoteLeft />
            </div>

            <div className="text-center text-slate-500">
                {review.text}
            </div>

            <div className="text-violet-400 mx-auto top-5">
                <FaQuoteRight />

            </div>

            
        </div>
    )
}
export default Card