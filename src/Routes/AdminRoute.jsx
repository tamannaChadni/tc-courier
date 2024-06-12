import { Navigate } from 'react-router-dom'
import useRole from '../hooks/useRole'
import PropTypes from 'prop-types'
import LoadingSpinner from '../components/Shared/LoadingSpinner'
const AdminRoute = ({ children }) => {
  const [role, isLoading] = useRole()

  if (isLoading) return <LoadingSpinner></LoadingSpinner>
  if (role === 'admin') return children
  return <Navigate to='/dashboard' />
}

export default AdminRoute

AdminRoute.propTypes = {
  children: PropTypes.element,
}
