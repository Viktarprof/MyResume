import s from "../Contacts/Contacts.module.scss";
import SectionTitle from "../SectionTitle/SectionTitle";
import { personalData } from "../../data/data";
import { MdPhoneIphone, MdEmail, MdLocationPin } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";
import Form from "../Form/Form";

const email = personalData.find((el) => el.email)?.email;
const webSite = personalData.find((el) => el.webSite)?.webSite;
const phone = personalData.find((el) => el.phone)?.phone;
const location = personalData.find((el) => el.location)?.location;

function Contacts({id}) {
  return (
    <section id={id} className={s.contactContainer}>
      <SectionTitle
        text={"Get in"}
        textTeitle={"Touch"}
        contentText={"Contact"}
      />

      <div className={s.container}>
        <div className={s.contactList}>
          <div className={s.contactItem}>
            <MdEmail size={35} />
            <div className={s.information}>
              <h3>Mail & Website</h3>
              <span className={s.infoBlock}>
                <MdEmail size={15} style={{ color: "#777" }} />
                <p>{email}</p>
              </span>
              <span className={s.infoBlock}>
                <VscGithub size={15} style={{ color: "#777" }} />
                <p>{webSite}</p>
              </span>
            </div>
          </div>

          <div className={s.contactItem}>
            <MdPhoneIphone size={35} />
            <div className={s.information}>
              <h3>Contact</h3>
              <span className={s.infoBlock}>
                <MdPhoneIphone size={15} style={{ color: "#777" }} />
                <p>{phone}</p>
              </span>
            </div>
          </div>

          <div className={s.contactItem}>
            <MdLocationPin size={35} />
            <div className={s.information}>
              <h3>Adress</h3>
              <span className={s.infoBlock}>
                <MdLocationPin size={15} style={{ color: "#777" }} />
                <p>{location}</p>
              </span>
            </div>
          </div>
        </div>
      <Form/>
      </div>
    </section>
  );
}

export default Contacts;
