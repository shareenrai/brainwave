import brackets from "../assets/svg/Brackets";

const Tagline = ({ className, children }) => {
  return (
    <div className={`tagline flex items-center ${className || ""}`}>
      {brackets("left")}
      <div>{children}</div>
      {brackets("right")}
    </div>
  );
};

export default Tagline;
