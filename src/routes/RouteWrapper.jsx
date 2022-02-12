import { Layout } from '../components'

const RouteWrapper = ({ children, hasArrow, isHome, isPost }) => {
  return (
    <Layout hasArrow={hasArrow} isHome={isHome} isPost={isPost}>
      {children}
    </Layout>
  )
}

export default RouteWrapper
