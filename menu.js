import prompt from 'prompt-sync'
let ler = prompt()

export function menu() {
    console.log(`
    Escolha uma opção:
    1. Depositar
    2. Sacar
    3. Exibir saldo
    4. Sair`)
}