import "../index.css";
import Heading from "./Heading";
import Image from "./Image";
import Price from "./Price";
const FoodDish = (props) => {
  return (
    <div className="foodDish">
      <Image recepieImg={props.recepieImg} />
      <div className="dish-content">
        <Heading recepieTitle={props.recepieTitle} />
        <Price recepiePrice={props.recepiePrice} />
      </div>
    </div>
  );
};
export default FoodDish;
