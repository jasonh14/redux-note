import {useDispatch} from "react-redux";
import {login, logout} from "../features/user";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            login({
              name: "jason",
              age: 90,
              email: "kasonhartanto@Mgil.com",
            })
          );
        }}
      >
        login
      </button>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        logout
      </button>
    </div>
  );
};

export default Login;
