import Index from '~src/pages/index'
import error from '~src/pages/error'

const routes = [
  {
    path: '/',
    component: Index,
    exact: true
  },
  {
    path: '*',
    component: error
  },
]

export default routes