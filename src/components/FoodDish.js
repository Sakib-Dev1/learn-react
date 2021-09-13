import "../index.css";
import Heading from "./Heading";
import Image from "./Image";
import Price from "./Price";
const FoodDish = ({ recepieImg, recepieName, recepiePrice }) => {
  return (
    <div className="foodDish">
      <Image recepieImg={recepieImg} />
      <div className="dish-content">
        <Heading recepieName={recepieName}>
          <p>I love this food very much</p>
        </Heading>
        <Price recepiePrice={recepiePrice} />
      </div>
    </div>
  );
};
export default FoodDish;
