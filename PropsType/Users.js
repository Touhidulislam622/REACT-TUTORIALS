import React, {useState} from 'react'
import User from './User';


const Users = () => {
  const [user , setUser ] = useState({
    id: 48486 ,
    name:"Touhidul islam"
   
  });

  

  return (
    <>
       <User user = {user} />
    </>
  )
}

export default Users;