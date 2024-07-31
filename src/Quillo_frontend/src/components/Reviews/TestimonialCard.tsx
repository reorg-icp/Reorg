import { Avatar  } from "@mui/material";
import '../../styles/components/ComponentWithTailwind.css'

  function StarIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5 text-yellow-700"
      >
        <path
          fillRule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  interface Testimonial {
    id: number;
    name: string;
    role: string;
    avatar: string;
    rating: number;
    content: string;
  }
function TestimonialCard({ name, role, avatar, rating, content }: Testimonial) {
    return (
      
  
          <div className="w-full  max-w-[20rem] ">
          <div
            
            className="mx-0 flex items-center gap-4 pt-0 pb-8"
          >
            <Avatar variant="circular" src={avatar} alt={name} />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <h5  className="font-jockeyOne font-normal text-lg">
                  {name}
                </h5>
                <div className="5 flex items-center gap-0">
                  {Array.from({ length: rating }).map((_, index) => (
                    <StarIcon  key={index} />
                  ))}
                </div>
              </div>
              <p   className=" font-leagueSpartan font-[370]  text-green-300">{role}</p>
            </div>
          </div>
          <div className=" text-green-200  font-normal text-[#666] text-lg font-jost mb-6 p-0 text-wrap">
            <p> &quot; {content}&quot;</p>
          </div>
        </div>
  
    );
  }
  export default TestimonialCard;