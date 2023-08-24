import { renderHook } from '@testing-library/react-hooks';
import { useGetUsers } from './use-get-users';

it('should get users', () => {
  const { result } = renderHook(() => useGetUsers())
  expect(result.current.users.length).toBeGreaterThan(1)
})

it('should get all users', () => {
  const { result } = renderHook(() => useGetUsers())
  expect(result.current.users.length).toBe(6)
})

it('should get user by name', () => {
  const { result } = renderHook(() => useGetUsers())
  expect(result.current.getUsersByFullName('john doe').length).toBe(1);
})
