import prompt from 'prompt-sync'
let ler = prompt()

import { mensagem, mensagem1, lerNumero, lerText } from './exibicao.js'
import {depositar, sacar, exibirsaldo, investimento} from './financeiro.js'
import {menu} from './menu.js'

mensagem1('Seja bem-vindo(a)! Informe o seu nome e o seu saldo:')
let nome = lerText()
let saldo = lerNumero()

let continuar = true

while (continuar) {
   menu()
   let opcao = lerNumero()

   if (opcao == 1) {
      continuar == true
      saldo = depositar(saldo, nome) 
   }
   else if (opcao == 2) {
    continuar == true
    saldo =  sacar(saldo,nome) 
   }
   else if (opcao == 3) {
    exibirsaldo(saldo, nome)
   }

   else if (opcao == 4){
      let invest = investimento()

      console.log(`Você obteve um lucro de R$${invest}`)

   }
  
   else if (opcao == 5) {
     continuar = false
     mensagem(`Obrigado por utilizar nosso sistema Sr(a). ${nome}`)
   }
   else {
    mensagem('Insira uma opção válida!')
   }
}