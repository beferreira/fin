import prompt from 'prompt-sync'
let ler = prompt()


const AZUL = '\x1b[34m%s\x1b[0m';

export function mensagem(texto){
    console.log(texto)
} 

export function mensagem1(texto){
    console.log(AZUL, texto)
} 

export function lerNumero() {
    let num = Number(ler())
    return num
}

export function lerText() {
    let texto = ler()
    return texto
}