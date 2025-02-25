import React, { useContext } from 'react';
import UserContext from './UserContext';

function UserDetails() {
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name:Abderrahmane saghraoui</p>
      <p>Email:Abderrahmanesaghraoui@gmail.com</p>
    </div>
  );
}

export default UserDetails;
