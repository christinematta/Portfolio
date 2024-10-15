import "./SubmitPopup.css";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
const SubmitPopup = ({setShowSubPopup}) => {
  return (
    <div className="submit-popup">

      <div className="submit-popup-container">
      <div className="submit-popup-icon-container">
          <IoCheckmarkCircleSharp className='submit-popup-icon'/>
        </div>
        <div className="submit-popup-message">
          <h3>Thank You!</h3>
          <p>Your submission has been sent.</p>
          <button onClick={()=>setShowSubPopup(false)}>OK</button>
        </div>
      </div>
    </div>
  );
};

export default SubmitPopup;
