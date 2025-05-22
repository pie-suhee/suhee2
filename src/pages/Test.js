import { useSelector, useDispatch } from "react-redux";
import { changeUser, changeAge } from "../store";

function Test() {
  let user = useSelector((state) => state.user);
  let age = useSelector((state) => state.age);
  let dispatch = useDispatch();

  return (
    <div className="guide">
      <p>이름 : {user.name}</p>
      <p>ID : {user.loginId}</p>
      <p>Role : {user.role}</p>
      <button
        onClick={() => {
          dispatch(
            changeUser({
              name: "비움",
              loginId: "Vium",
              role: "ROLE_ADMIN",
            })
          );
        }}
      >
        이름 변경
      </button>

      <p>나이 : {age.age}</p>
      <button
        onClick={() => {
          dispatch(
            changeAge({
              age: 10,
            })
          );
        }}
      >
        나이 변경
      </button>
    </div>
  );
}

export default Test;
