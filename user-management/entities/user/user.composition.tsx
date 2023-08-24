import React from 'react';
import { User } from './user';

const user: User = new User("Jacob", "Brown", new Date());

export const BasicUser = () => {
  return (
    <>
      Full Name: {user.getFullName()}
      <br />
      Date of Birth: {user.getDateOfBirth()}
    </>
  )
}
