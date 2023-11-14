import './EditProfilePageStyle.css'

const EditProfilePage = () => {
  return (
    <div className="EditProfilePage">

    <form className='Profile-Form'>
        
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Name"/>
        </div>
        
        <div class="form-group">
            <label for="name">Email</label>
            <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Email"/>
        </div>

        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>


        <button type="submit" class="btn btn-primary">Submit</button>

    </form>

    </div>
  )
}

export default EditProfilePage