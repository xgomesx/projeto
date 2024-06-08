

import CarrosController from '#controllers/carros_controller'
import ClientesController from '#controllers/clientes_controller'
import FuncionariosController from '#controllers/funcionarios_controller'
import OficinasController from '#controllers/oficinas_controller'
import ServicoController from '#controllers/servicos_controller'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})



router.resource('/carro', CarrosController).apiOnly()
router.resource('/cliente', ClientesController).apiOnly()
router.resource('/funcionario',FuncionariosController ).apiOnly()
router.resource('/oficina',OficinasController ).apiOnly()
router.resource('/servico',ServicoController ).apiOnly()

