import { Router } from 'express'
import { matrix } from './app/controllers/NuvensController'

const routes = new Router()

routes.get('/', (req, res) => {
  return res.json({ matrix })
})

export default routes