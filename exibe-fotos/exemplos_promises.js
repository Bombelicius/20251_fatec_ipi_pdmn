//1 +2 + 3 + ... + (n-2) + (n-1) + n
const somaDemorada = (n) => {
    const p = new Promise((resolve, reject) => {
        if (n >= 1) {
            let ac = 0
            for (let i = 1; i <= n; i++)
                ac += i
            resolve(ac)
        }
        else
            reject('Somente valores positivos')
    })
    return p
}
//async / await
function fatorial(n) {
    return new Promise((resolve, reject) => {
        if (n >= 1) {
            let ac = 1
            for (let i = 2; i <= n; i++)
                ac *= i
            resolve(ac)
        }
        else
            reject('Somente positivos')
    })
}
const chamadaComAsyncAwait = async () => {
    try {
        const f1 = await fatorial(5)
        console.log(f1)
    }
    catch (err) {
        console.log(err)
    }
    try {
        const f2 = await (fatorial(-1))
        console.log(f2)
    }
    catch (err) {
        console.log(err)
    }
}
chamadaComAsyncAwait()
console.log('outras coisas...')

// async function fatorial(n) {
//     let ac = 1
//     for (let i = 1; i <= n; i++)
//         ac *= i
//     return ac
// }
// const res = somaDemorada(-10)
// //then
// res
//     .then((soma) => console.log(`Soma: ${soma}`))
//     .catch((err) => console.log(`Erro: ${err}`))
//catch
// const somaDemorada = (n) => {
//     let ac = 0;
//     for (let i = 1; i <= n; i++)
//         ac += i;
//     return ac;
// }
// // Processamento Bloqueante ou síncrono
// const res = somaDemorada(10)
// console.log(res)
// console.log('qualquaer outra coisa que nao depende do res')