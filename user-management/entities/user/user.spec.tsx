import { User } from './user';

const date = new Date();
const user: User = new User("Jacob", "Henry", date);

it('renders with the correct full name', () => {
  expect(user.getFullName()).toEqual("Jacob Henry");
});

it('renders with the correct date of birth', () => {
  expect(user.getDateOfBirth()).toEqual(date.toISOString());
});

it('should trim full name when white spaces are passed', () => {
  const newUser: User = new User("     Jacob     ", "Henry", date);
  expect(newUser.getFullName()).toEqual("Jacob Henry");
});