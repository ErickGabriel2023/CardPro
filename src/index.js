// const botao = document.querySelector('#botaoLink')
// const cardPrincipal = document.querySelector('.card')
// const cardQrCode =  document.querySelector('.card-qrcode')

// botao.addEventListener('click', () => {
//     cardPrincipal.classList.remove('ativo')
//     cardQrCode.classList.add('ativo')

//     const botaoBack = document.querySelector('#botao-back')
//     botaoBack.addEventListener('click', () => {
//         cardQrCode.classList.remove('ativo')
//         cardPrincipal.classList.add('ativo')
//     })  
// })


//Seção Card
const toggleAtivo = (removeFrom, addTo) => {
    removeFrom.classList.remove('ativo')
    addTo.classList.add('ativo')
}

const botaoAdvancer = document.querySelector('#botaoAdvancer')
const cardPrincipal = document.querySelector('.card')
const cardQrCode =  document.querySelector('.card-qrcode')
const botaoBack = document.querySelector('#botaoBack')

botaoAdvancer.addEventListener('click', () => toggleAtivo(cardPrincipal, cardQrCode))
botaoBack.addEventListener('click', () => toggleAtivo(cardQrCode, cardPrincipal))

//Seção QR Code 
const linkGithub = "https://github.com/ErickGabriel2023"

//Gerar QR Code
const qrcode = new QRCode(document.querySelector('.qrcode'), {
    text: linkGithub,
    width: 300,
    height: 300,
})