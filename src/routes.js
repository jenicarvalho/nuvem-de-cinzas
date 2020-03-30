import { Router } from 'express'
import Nuvens from './app/models/Nuvens'

const routes = new Router()

const objetoNuvens = new Nuvens(10)

const matrix = objetoNuvens.matrix

routes.get('/', (req, res) => {
  return res.json({ matrix })
})

export default routes