import { useSelector } from "react-redux";

const Counter = () => {
  const counter = useSelector((store) => store.counter);
  return <p class="card-text">Current value of counter : {counter}</p>;
};
export default Counter;
