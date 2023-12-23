import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {
  const [selected, setselected] = useState(null);
  const [multiple, setMultiple] = useState(false);
  const [multipleSelected, setMultipleSelected] = useState([]);

  function handleSingleClick(currentId) {
    setselected(currentId === selected ? null : currentId);
  }

  function handleMultipleSlection(currentId) {
    let copyMultiple = [...multipleSelected];
    const findIndexOfCurrentId = copyMultiple.indexOf(currentId);
    if (findIndexOfCurrentId === -1) copyMultiple.push(currentId);
    else copyMultiple.splice(findIndexOfCurrentId, 1);
    setMultipleSelected(copyMultiple);
  }
  return (
    <div className="wrapper">
      <button className="btn" onClick={() => setMultiple(!multiple)}>
        Enable Multiple Select
      </button>
      <div className="accordian">
        {data && data.length > 0
          ? data.map((dataItem) => (
              <div
                key={dataItem.id}
                className="item"
                onClick={
                  multiple
                    ? () => handleMultipleSlection(dataItem.id)
                    : () => handleSingleClick(dataItem.id)
                }
              >
                <div className="title">
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {selected === dataItem.id || multipleSelected.indexOf(dataItem.id) !== -1 ?  (
                  <div className="content">{dataItem.answer}</div>
                ) : null}
              </div>
            ))
          : "No Data"}
      </div>
    </div>
  );
}
