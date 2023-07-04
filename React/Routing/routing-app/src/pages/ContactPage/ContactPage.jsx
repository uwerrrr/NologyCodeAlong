import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const ContactPage = () => {
  const schema = yup.object({
    name: yup.string().required("Please enter your name"),
  });



  return (
    <form>
      <div>
        <label htmlFor="">Name</label>
        <input type="text" />
      </div>
    </form>
  );
};

export default ContactPage;
