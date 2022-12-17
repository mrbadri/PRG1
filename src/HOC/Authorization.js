import { useSelector } from 'react-redux';

const Authorization = ({ children, ComponentRole }) => {
  const roles = useSelector(state => state.User.groups);
  if (roles.includes(ComponentRole)) return children;
  return <></>;
};
export default Authorization;
