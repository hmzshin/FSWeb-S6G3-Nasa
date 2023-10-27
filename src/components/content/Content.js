import { useState } from "react";
import { useRef } from "react";
import "./Content.css";

function Content(props) {
  const { apodData } = props;
  const [isShown, setIsShown] = useState(true);

  return (
    <div
      className="contentContainer"
      onMouseEnter={() => setIsShown(false)}
      onMouseLeave={() => setIsShown(true)}
    >
      {isShown && <img title={apodData.title} src={apodData.url} />}

      {!isShown && (
        <div className="imgInfo">
          <h4>{apodData.title}</h4>
          <p>{apodData.date}</p>
          <p>{apodData.explanation}</p>
          <p>Copyright: {apodData.copyright}</p>
        </div>
      )}
    </div>
  );
}

export default Content;
