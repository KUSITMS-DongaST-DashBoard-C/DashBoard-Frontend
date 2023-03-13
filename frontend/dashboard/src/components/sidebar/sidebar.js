import { useState } from "react";
import "./sidebar.css";
const Sidebar = () => {
  const [button, setButton] = useState(false);
  return (
    <div class="sidebar">
      <div>MEDIFLEX</div>
    </div>
  );
};

export default Sidebar;
