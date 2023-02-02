import React, {useRef} from 'react'

const UserForm = () => {

    const userNameRef = useRef();
    const userPasswordRef = useRef();


    const handleSubmit = (e) => {
        e.preventDefault();
        const userName = userNameRef.current.value;
        const password = userPasswordRef.current.value;
        userNameRef.current.style.Color ="red";
        console.log({userName , password});
    };

  return (

    <form>
        <div >
        <div className="form-field">
          <label htmlFor="userName" >userName : </label>
          <input type="text" id="userName" ref={userNameRef}  />
        </div>
        <div className="form-field">
          <label htmlFor="password">password : </label>
          <input type="password" id="password" ref={userPasswordRef} />
        </div>
        <button onClick = {handleSubmit}>register</button>
        </div>
    </form>
  )
}

export default UserForm;