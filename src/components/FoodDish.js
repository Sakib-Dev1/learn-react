
import Heading from "./Heading"
import Image from "./Image"
import Price from "./Price"
const FoodDish=(props)=>{
    return (  <div>
      
       <Image recepieImg={props.recepieImg}/>
     
        <Heading recepieTitle={props.recepieTitle}/>
        <Price recepiePrice={props.recepiePrice}/>
        </div>)
  
}
export default FoodDish