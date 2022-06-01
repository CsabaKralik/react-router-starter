import { useNavigate } from "react-router-dom";
import CatGrid from "../components/CatGrid";
const CatFarm = () => {
  const clean = () => {
    localStorage.removeItem("farm");
    window.location.reload();
  };
  return (
    <div>
      <h1>Cat Farm</h1>
      <button onClick={clean} className="clear-btn">
        clear cats
      </button>
      <CatGrid />
    </div>
  );
};

export default CatFarm;
