import s from "../Form/Form.module.scss";
import Input from "../UI/Input/Input";
import Textarea from "../UI/Textarea/Textarea";
import Button from "../UI/Button/Button";
import { useRef, useState } from "react";
import useForm from "../../utils/useForm";
import { sendEmail } from "../../utils/sentEmail"


function Form() {
  const messageInputRef = useRef();
  const [textareaPlaceholder, setTextareaPlaceholder] = useState("Message");
  const [isSent, setIsSent] = useState(false);
  const { formData, handleChange, resetForm } = useForm({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please enter your Name, Email, and Phone before submitting.");
      return;
    }
    setIsSent(true);
    sendEmail(formData); // Отправка письма через EmailJS
    resetForm();
    setTextareaPlaceholder("Thanks for your feedback!");
    messageInputRef.current.focus();
  };
  
  return (
    <form className={s.formContact} onSubmit={handleSubmit}>
      <Input
        styles={"inputName"}
        placeholder="Full Name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <Input
        styles={"inputEmail"}
        placeholder="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <Input
        styles={"inputPhone"}
        placeholder="Phone"
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />
      <Textarea
        styles={isSent ? "textareaMessageSent" : "textareaMessage"}
        placeholder={textareaPlaceholder}
        name="message"
        ref={messageInputRef}
        value={formData.message}
        onChange={handleChange}
      />
      <div className={s.blocSubmit}>
        <div className={s.circle}></div>
        <Button styles={"btnSubmit"} text="Submit" type="submit" />
      </div>
    </form>
  );
}

export default Form;
