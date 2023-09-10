const continer = document.querySelector(".container")
const qrCodeBtn = document.querySelector("#qr-form button")
const qrCodeInput = document.querySelector("#qr-form input")
const qrCodeImg = document.querySelector("#qr-code img")

function generateQrCode() {
    const qrCodeInputValue = qrCodeInput.value

    
    if(!qrCodeInputValue) return

    qrCodeBtn.innerHTML = "Gerando Código..."

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`

    qrCodeImg.addEventListener("load", () => {
        continer.classList.add("active")
        qrCodeBtn.innerHTML = "QR Code Gerado"
    })

}

qrCodeBtn.addEventListener("click",()=>{
    generateQrCode()
})

qrCodeInput.addEventListener("keydown",(e)=>{
    if(e.code === "Enter"){
        generateQrCode()
    }
})


//limpar


qrCodeInput.addEventListener("keyup",() =>{
    if(!qrCodeInput.value){
        continer.classList.remove("active")
        qrCodeBtn.innerHTML = "Gerar QR Code"
    }
})