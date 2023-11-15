import './FormProfileStyle.css'
import { useEffect, useState } from 'react'
import Button from '../../Components/Button/Button'

const FormProfile = () => {

  const [address, setAddress] = useState("")
  const [city, setCity]       = useState("")
  const [state, setState]     = useState("")

  return (
    <div className="FormEditProfile">

      <form className='Profile-Form'>
        <h1 className='Profile-Form__title'>Account Data</h1>
        <hr className='Profile-Form__divider' />

        <label className='Profile-Form__label'>Username</label>
        <input className='Profile-Form__input' type="text" />
        <label className='Profile-Form__label'>Password</label>
        <input className='Profile-Form__input' type="password" />

        <h1 className='Profile-Form__title'>Personal Data</h1>
        <hr className='Profile-Form__divider' />

        <label className='Profile-Form__label'>Name</label>
        <input className='Profile-Form__input' type="text" />
        <label className='Profile-Form__label'>Email</label>
        <input className='Profile-Form__input' type="email" />
        <label className='Profile-Form__label'>Phone</label>
        <input className='Profile-Form__input' type="text" />

        <h1 className='Profile-Form__title'>Address</h1>
        <hr className='Profile-Form__divider' />

        <label className='Profile-Form__label'>CEP</label>
        <input className='Profile-Form__input' type="text" />
        <label className='Profile-Form__label'>Address</label>
        <input className='Profile-Form__input' type="text" disabled={true} value={address} />
        <label className='Profile-Form__label'>City</label>
        <input className='Profile-Form__input' type="text" disabled={true} value={city} />
        <label className='Profile-Form__label'>State</label>
        <input className='Profile-Form__input' type="text" disabled={true} value={state} />
        <label className='Profile-Form__label'>Complement</label>
        <input className='Profile-Form__input' type="text" />

        <input className='Profile-Form__button' type='submit' />
      </form>

    </div>
  )
}

export default FormProfile