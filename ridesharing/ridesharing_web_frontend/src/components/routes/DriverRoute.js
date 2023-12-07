import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../contexts/GlobalContext";
import { useEffect } from "react";
const DriverRoute = ({ children }) => {
  const { authState } = useGlobalContext();
  const navigate = useNavigate();
  return children;
};

export default DriverRoute;
