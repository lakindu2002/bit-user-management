import { useEffect, useState } from 'react';
import { User } from '@lakindu2002/user-management.entities.user';

const db: User[] = [
  new User("John", "Doe", new Date()),
  new User("Fernando", "Alonso", new Date()),
  new User("Lewis", "Hamilton", new Date()),
  new User("Max", "Verstappen", new Date()),
  new User("Pierre", "Gasly", new Date()),
  new User("Daniel", "Riciardo", new Date()),
]

export function useGetUsers() {
  const [users, setUsers] = useState<User[]>(db)

  useEffect(() => {
    setUsers(users);
  }, []);

  const getUsersByFullName = (fullName: string) => {
    return users.filter((user) => user.getFullName().toLowerCase().includes(fullName.trim().toLowerCase()));
  }

  return { users, getUsersByFullName }
}
