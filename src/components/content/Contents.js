import Content from "./Content";
import "./Contents.css";

function Contents(props) {
  const { apodData } = props;

  return (
    <div className="contentsContainer">
      {apodData.map((obj, index) => (
        <Content key={index} apodData={obj} />
      ))}
    </div>
  );
}

export default Contents;
