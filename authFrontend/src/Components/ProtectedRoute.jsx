import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = () => {
  const navigator = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (!token && !user) {
      navigator("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>This is a protected Route Only login user can enter here </div>;
};

export default ProtectedRoute;
