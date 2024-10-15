import './Title.css'
import { assets } from "../../assets/assets.js";
const Title = ({title,position}) => {

  return (

       <div className="title">
        <h1>{title}</h1>
        <img src={assets.logo} alt="" className={`title-img title-${position}`}/>
      </div>


  )
}

export default Title
