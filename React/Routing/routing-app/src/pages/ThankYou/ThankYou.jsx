import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const ThankYou = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }, []);
  // navigate back to home after 2s in this thanks page

  return (
    <>
      <h2>Thanks for your message</h2>
      <LoadingSpinner />
    </>
  );
};

export default ThankYou;
