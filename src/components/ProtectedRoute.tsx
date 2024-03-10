// import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
// import Spinner from "./Spinner";
// import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  //   const navigate = useNavigate();
  // 1. Load authenticated user
  const { isLoading, isAuthenticated } = useUser();
  // 2. If tere is NO authenticated user, redirect to the /login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) {
        console.log(isAuthenticated);
        // navigate("/login");
      }
    },
    // [isLoading, isAuthenticated, navigate]
    [isLoading, isAuthenticated]
  );

  // 3. While loading, show a spinner
  //   if (isLoading)
  //     return (
  //       <FullPage>
  //         <Spinner />
  //       </FullPage>
  //     );

  // 4. If there IS a user, render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
