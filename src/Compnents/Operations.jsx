import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counterSlice";
import { privacyActions } from "../store/privacySlice";

const Operations = () => {
  const dispatch = useDispatch();
  const addElement = useRef();
  const handleIncrement = () => {
    dispatch(counterActions.incriment());
  };
  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };
  const handlePrivacy = () => {
    dispatch(privacyActions.privacyToggle());
  };
  const handleAdd = () => {
    dispatch(counterActions.add(addElement.current.value));
  };
  const handleSubtract = () => {
    dispatch(counterActions.subtract(addElement.current.value));
  };
  return (
    <>
      <a href="#" class="btn btn-success mx-2" onClick={handleIncrement}>
        +1
      </a>
      <a href="#" class="btn btn-danger my-2 mx-2" onClick={handleDecrement}>
        -1
      </a>
      <a href="#" class="btn btn-warning my-2" onClick={handlePrivacy}>
        Hide counter
      </a>
      <br />
      <input type="text" ref={addElement} />
      <a href="#" class="btn btn-primary my-2 mx-2" onClick={handleAdd}>
        Add
      </a>
      <a href="#" class="btn btn-primary my-2 mx-2" onClick={handleSubtract}>
        Subtract
      </a>
    </>
  );
};
export default Operations;
