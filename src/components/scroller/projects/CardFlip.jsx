import { useState } from "react";
import { motion } from "framer-motion";
import "../../../index.css";
import { Chat, GithubSVG } from "../../../assets";
const CardFlip = ({ children ,backId, faceId}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
      try{

      document.getElementById(faceId).style.position = isFlipped ?  "relative":"absolute";
      document.getElementById(backId).style.position = isFlipped ? "absolute" : "relative";

      }catch(e){
        
      }

      
      
    }
  }

  // min-h-[800px] sm:min-h-[800px]  md:min-h-[750px] lg:min-h-[5]
  return (
    <div
      className="flip-card mb-14 justify-center h-auto max-w-full rounded-md block"
      onClick={handleFlip}
    >
      <motion.div
        className="flip-card-inner static h-auto "
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.6, animationDirection: "normal" }}
        onAnimationComplete={() => {setIsAnimating(false); }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default CardFlip;
