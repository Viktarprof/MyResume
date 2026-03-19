import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_sg0is0s";
const TEMPLATE_ID = "template_q74150v";
const PUBLIC_KEY = "z_I4qUqrIafQl5Qg8";

export const sendEmail = (formData) =>
  emailjs
    .send(
        SERVICE_ID, 
        TEMPLATE_ID, 
        formData, 
        PUBLIC_KEY)
    .then((res) => { // проверяю отправку письма.ок или нет
      console.log("Email sent:", res.text);
      return res;
    })
    .catch((err) => {
      console.error("Email sending failed:", err.text);
      throw err;
    });

