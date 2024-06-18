import prompt from 'prompt-sync'
let ler = prompt()

export function depositar(saldo, nome) {
   let novoValor = 0
   console.log(`Quanto deseja depositar, ${nome}?`)
   let deposito = ler()
    
   while (deposito <= 0) {
    console.log(`Depósito inválido!
            Impossível depositar este valor, insira um valor válido.`)
    deposito = ler()
   }
   if (deposito >= 0){
    novoValor = novoValor + (+ deposito)
   }
   if (deposito === 'c') {
    novoValor = 0
    return novoValor
   }
  
   return novoValor + saldo
} 

export function sacar(saldo, nome) {
    let novoValor = 0
    console.log(`Quanto deseja sacar, ${nome}?`)
    let saque = ler()
 
    while (saque <= 0) {
        console.log(`Saque inválido!
            Impossível sacar este valor, insira um valor válido.`)
        saque = ler()
    }
    if (saque >= 0){
     saldo = saldo - saque
    }
    if (saque === 'c') {
     novoValor = 0
     return novoValor
    }
  
    return saldo 

}

export function exibirsaldo(saldo, nome) {
    console.log(`Seu saldo atual é de R$${saldo}`)
}