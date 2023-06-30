import React, { useForm } from "react";

const HookForm = ({ formSubmit }) => {
  const { register, formState, handleSubmit } = useForm();
  // use register to tell React Hook Form what input - replace name property in html tag
  

  return (
    <>
      <form></form>
    </>
  );
};

export default HookForm;
