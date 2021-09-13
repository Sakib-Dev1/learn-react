const Heading = ({ recepieName, children }) => {
  return (
    <div>
      <h3>{recepieName}</h3>
      <p>{children}</p>
    </div>
  );
};
export default Heading;
