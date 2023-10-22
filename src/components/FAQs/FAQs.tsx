// import { Link } from "react-router-dom";
import "./faqs.css";
import chevron from "../../Assets/chevron-icon.svg";
import React, { useState } from "react";

interface faqItemProps {
  faqQuestion: string;
  faqResponse: string;
}


const FaqItem = ({
  faqQuestion= "test question",
  faqResponse= "test answer",
}: faqItemProps) => {
  
  const [itemOpen, setItemOpen] = useState(false);

  return (
    <div className={itemOpen? "faqitem-container-clicked" : "faqitem-container"} onClick={()=>{itemOpen? setItemOpen(false) : setItemOpen(true)}} >
        <div>
            <h4> {faqQuestion} </h4>
            <p className={itemOpen? "response-shown" : "response-hidden"}>{faqResponse}</p>
            {/* <p className={"response-hidden"}> {faqResponse} </p> */}
        </div>

        <img 
        src={ chevron } 
        alt="chevron icon for dropdown" 
        />
    </div>
  );

};
export default FaqItem;