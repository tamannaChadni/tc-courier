import { Navigate } from 'react-router-dom'
import LoadingSpinner from '../components/Shared/LoadingSpinner'
// import useRole from '../hooks/useRole'
import PropTypes from 'prop-types'
import useRole from '../hooks/useRole'
const DeliverymanRoute = ({ children }) => {
  const [role, isLoading] = useRole()

  if (isLoading) return <LoadingSpinner />
  if (role === 'deliveryman') return children
  return <Navigate to='/dashboard' />
}

export default DeliverymanRoute

DeliverymanRoute.propTypes = {
  children: PropTypes.element,
}
