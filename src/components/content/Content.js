import { useState } from "react";
import "./Content.css";

function Content(props) {
  const { apodData } = props;
  const [isShown, setIsShown] = useState(true);

  return (
    <div className="contentContainer">
      <img title={apodData.title} src={apodData.url} />
    </div>
  );
}

export default Content;
