import { useState } from 'react'

import FormProfile from '../../Layouts/FormProfile/FormProfile'
import Header from "../../Layouts/Header/Header";
import Footer from "../../Layouts/Footer/Footer";

const EditProfilePage = () => {


  return (
    <div className="EditProfilePage">
      <Header />

      <FormProfile />

      <Footer
        column1={"Nosso"}
        tag={"bg-primary-color color-text-2"}
        type={"complete"}
      />
    </div>
  )
}

export default EditProfilePage