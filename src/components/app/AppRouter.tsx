import { RouterProvider } from 'react-router'
import { commonRouter } from '../../config/router/common.router'

const AppRouter = () => {
  return <RouterProvider router={commonRouter}/>
}

export default AppRouter
