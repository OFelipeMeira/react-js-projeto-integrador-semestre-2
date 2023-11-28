import "./ProfilePageStyle.css";
import Header from "../../Layouts/Header/Header.jsx";
import { useEffect, useContext, useState } from "react";
import { GlobalContext } from "../../Util/Context";
import axios from "axios";

const ProfilePage = () => {
   const theContext = useContext(GlobalContext);
   const { token } = theContext.contextState;

   const [cpf, setCpf] = useState("");
   const [email, setEmail] = useState("");
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");

   useEffect(() => {
      axios
         .get("http://127.0.0.1:8000/api/v1/user/me/", {
            headers: { Authorization: `Bearer ${token}` },
         })
         .then((resp) => {
            console.log(resp);
            setCpf(resp.data.cpf);
            setEmail(resp.data.email);
            setFirstName(resp.data.first_name);
            setLastName(resp.data.last_name);
         })
         .catch((err) => {
            console.log(err);
         });
   }, []);

   return (
      <div className="ProfilePage">
         <Header />

         <div className="Profile-container bd-rd-2 bg-primary bd-primary-bold no-select">
            <div className="ProfilePage__item">
               <label htmlFor="">CPF:</label>
               <input
                  className={"ProfilePage__input"}
                  type="text"
                  value={cpf}
                  disabled={true}
               />
            </div>

            <div className="ProfilePage__item">
               <label htmlFor="">Email:</label>
               <input
                  className={"ProfilePage__input"}
                  type="text"
                  value={email}
                  disabled={true}
               />
            </div>

            <div className="ProfilePage__item">
               <label htmlFor="">Name:</label>
               <input
                  className={"ProfilePage__input"}
                  type="text"
                  value={firstName + " " + lastName}
                  disabled={true}
               />
            </div>
         </div>
      </div>
   );
};

export default ProfilePage;
