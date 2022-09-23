import { useState } from "react";

const Settings = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="row">
      <div className="col-md-6">
        <h1>Количество кликов: {count}</h1>
      </div>
      <div className="col-md-6">
        <button className="btn btn-warning" onClick={() => setCount(count + 1)}>
          Клик
        </button>
      </div>
    </div>
  );
};

export default Settings;
