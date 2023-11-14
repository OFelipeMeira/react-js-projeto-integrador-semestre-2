import './EditProfilePageStyle.css'
import { useState } from 'react'

const EditProfilePage = () => {

  const [isDisabled, setDisable] = useState("")

  const a = ""

  const editHandler = () =>{
    setDisable(!isDisabled)
  }

  return (
    <div className="EditProfilePage">

    <form className='Profile-Form'>
      <input type="checkbox" name="edit" id="Profile-edit" onChange={editHandler} />

      <input className='Profile-Form__input' type="text" placeholder='name' disabled={isDisabled}/>
      <input className='Profile-Form__input' type="text" placeholder='email' disabled={isDisabled}/>
      <input className='Profile-Form__input' type="text" placeholder='phone' disabled={isDisabled}/>
      <input className='Profile-Form__input' type="text" placeholder='address' disabled={isDisabled}/>
      <input className='Profile-Form__input' type="text" placeholder='city' disabled={isDisabled}/>
      <input className='Profile-Form__input' type="text" placeholder='state' disabled={isDisabled}/>
      <input className='Profile-Form__input' type="text" placeholder='country' disabled={isDisabled}/>
      <input className='Profile-Form__input' type="text" placeholder='complemet' disabled={isDisabled}/>
      <input className='Profile-Form__input' type="text" placeholder='cep' disabled={isDisabled}/>

      <button >Save</button>
    </form>

    </div>
  )
}

export default EditProfilePage