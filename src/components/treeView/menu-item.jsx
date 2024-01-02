import { useState } from "react";
import MenuList from "./menu-list";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function MenuItem({ item }) {
  const [dispalyCurrentChildern, setdispalyCurrentChildern] = useState({});

  const handleToggleChildern = (getCurrentLable) => {
    setdispalyCurrentChildern({
      ...dispalyCurrentChildern,
      [getCurrentLable]: !dispalyCurrentChildern[getCurrentLable],
    });
  };
  return (
    <li >
      <div className="menu-item">
        <p>{item.label}</p>

        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildern(item.label)}>
            {dispalyCurrentChildern[item.label] ? <FaMinus color="#fff" size={25} /> : <FaPlus color="#fff" size={25} />}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      dispalyCurrentChildern[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
