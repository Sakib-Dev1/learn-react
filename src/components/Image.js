import "../index.css";
const Image = ({ recepieImg, recepieName }) => {
  return <img src={recepieImg} alt={recepieName} className="image" />;
};
export default Image;
