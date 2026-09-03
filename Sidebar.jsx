import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaHeartbeat,
  FaBox,
  FaBolt,
  FaIndustry,
  FaWarehouse,
  FaRobot,
  FaLeaf,
  FaFileAlt,
} from "react-icons/fa";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">

      <h2 className="logo">🏭 Smart Factory</h2>

      <Link to="/dashboard"><FaTachometerAlt /> Dashboard</Link>

      <Link to="/machine-health"><FaHeartbeat /> Machine Health</Link>

      <Link to="/product-quality"><FaBox /> Product Quality</Link>

      <Link to="/energy"><FaBolt /> Energy Analytics</Link>

      <Link to="/production"><FaIndustry /> Production</Link>

      <Link to="/inventory"><FaWarehouse /> Inventory</Link>

      <Link to="/assistant"><FaRobot /> AI Assistant</Link>

      <Link to="/sustainability"><FaLeaf /> Sustainability</Link>

      <Link to="/reports"><FaFileAlt /> Reports</Link>

    </div>
  );
}

export default Sidebar;