import React from "react";
import { useGetUsers } from "@lakindu2002/user-management.hooks.use-get-users"
import { Table } from "@lakindu2002/user-management.design.table";

export function UserManagement() {
  const { users } = useGetUsers();
  return (
    <>
      <h1> Welcome to the user management app! </h1>
      <Table
        headers={[
          { key: 'name', label: 'Full Name' },
          { key: 'dob', label: 'Date of Birth' },
        ]}
        items={users.map((user) => ({ name: user.getFullName(), dob: user.getDateOfBirth() }))}
      />
    </>
  )
}