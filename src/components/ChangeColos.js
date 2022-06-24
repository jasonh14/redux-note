import {useState} from "react";
import {useDispatch} from "react-redux";
import {changeColor} from "../features/theme";
import {useSelector} from "react-redux";

const ChangeColos = () => {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.value);
  return (
    <div>
      <input type="text" onChange={(e) => setColor(e.target.value)} />
      <button
        onClick={() => {
          dispatch(changeColor(color));
        }}
      >
        Change Color
      </button>
      <p>{theme}</p>
    </div>
  );
};

export default ChangeColos;
