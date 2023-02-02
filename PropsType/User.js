import React from "react";
import PropTypes from "prop-types";

const User = (props) => {
  return (
    <div>
      <h1>Welcome</h1>
      <h3>{props.user.name}</h3>
      <h4>{props.user.id}</h4>
    </div>
  );
};
//use propTypes with component - User.propTypes //

User.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  })
};
export default User;


// User.defaultProps = {
//     userName: 'John Doe',
//     userId: 1
// }

// another way for propType //
// import React from 'react'
// import PropTypes from 'prop-types'

// const User = props => {
//   return (
//     <div>User</div>
//   )
// }

// User.propTypes = {}

// export default User


