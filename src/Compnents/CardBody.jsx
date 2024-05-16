import { useSelector } from "react-redux";
import Counter from "./Counter";
import PrivacyMessage from "./PrivacyMessage";
import Operations from "./Operations";

const CardBody = () => {
  const privacy = useSelector((store) => store.privacy);
  return (
    <div class="card" style={{ textAlign: "center" }}>
      <div class="card-body">
        <h2 class="card-title">Redux toolkit game</h2>
        {privacy ? <PrivacyMessage /> : <Counter />}
        <Operations />
      </div>
    </div>
  );
};
export default CardBody;
