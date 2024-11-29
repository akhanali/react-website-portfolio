import { useState } from "react";

function Project(props){
    const [isOpen, setIsOpen] = useState(false);
    function handleToggle(){
        if(isOpen == true) {
            setIsOpen(false);
        } else{
            setIsOpen(true);
        }    
    }


    return (
<div className="space-y-1 w-full">
            <h3 className="font-bold md:text-lg">
                {props.title}
            </h3>

            <p className="text-xs md:text-sm text-gray-500"> 
                {props.tools}
            </p>

            <button onClick={handleToggle}>
                {isOpen ? "Show Less" : "Show More"}
            </button>
            {isOpen === true ? (



            <ul className="ml-4 list-disc text-sm">
                <li>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi molestias modi libero qui distinctio nam!
                </li>
                <li> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, sint? Temporibus eveniet porro eligendi aliquam alias veniam, illum id nisi.
                </li>
            </ul>

            ) : null}
            <div>

            </div>
        </div>

    );
}

export default Project