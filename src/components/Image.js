import "../index.css";
const Image = (props) => {
  return (
    <img src={props.recepieImg} alt={props.recepieTitle} className="image" />
  );
};
export default Image;
