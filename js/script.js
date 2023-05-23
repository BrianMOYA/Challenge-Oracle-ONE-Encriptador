const text = document.getElementById("text");
const btnEncrypt = document.getElementById("btnEncrypt");
const btnDecrypt = document.getElementById("btnDecrypt");
const messageTitle = document.getElementById("messageTitle");
const munhecoAlura = document.getElementById("munhecoAlura");
const paragraph = document.getElementById("paragraph");
const message = document.getElementById("message");
const copyButton = document.getElementById("copyButton")

let encryptText = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],
]

const replace = (newValue)=>{
    messageTitle.innerHTML = newValue;
    munhecoAlura.style.display = 'none';

    text.value = "";
    paragraph.style.display = 'none';
    copyButton.style.display = 'block';
    message.classList.add("adjust");
    messageTitle.classList.add("adjust");
}

btnEncrypt.addEventListener("click",()=>{
    const textEncrypt = text.value.toLowerCase()
    function encrypt(newText){
        for(let i=0; i < encryptText.length; i++){
            if(newText.includes(encryptText[i][0])){
                newText = newText.replaceAll(encryptText[i][0], encryptText[i][1]);
            };
        };
        return newText;
    }
    replace(encrypt(textEncrypt));
})

btnDecrypt.addEventListener("click",()=>{
    const textDecrypt = text.value.toLowerCase()
    function decrypt(newText){
        for(let i=0; i < encryptText.length; i++){
            if(newText.includes(encryptText[i][1])){
                newText = newText.replaceAll(encryptText[i][1], encryptText[i][0]);
            };
        };
        return newText;
    }
    replace(decrypt(textDecrypt));
})

copyButton.addEventListener("click", () => {
    let copy = messageTitle;
    navigator.clipboard.writeText(copy.value);

    messageTitle.innerHTML = "";
    munhecoAlura.style.display = "block";
    copyButton.style.display = "none";
    message.classList.remove("adjust");
    messageTitle.classList.remove("adjust");

})