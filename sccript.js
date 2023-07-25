const qrText=document.getElementById("qr-input");
const sizes=document.getElementById("sizes");
const qrimage=document.querySelector("#qr-image");
const qrBody=document.querySelector(".qr-body");
const generateBtn=document.getElementById("generate-btn");
const downloadBtn=document.getElementById("download-btn");
var size=sizes.value;

generateBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    emptyInput();
});

sizes.addEventListener('change',(e)=>{
    size=e.target.value;
    emptyInput();
});
// downloadBtn.addEventListener('click',()=>{
//     let img=document.querySelector('.qr-body img');
//     console.log(img);
//     if(img !== null){
//         let imgAtt = img.getAttribute('src');
//         downloadBtn.setAttribute('href',imgAtt);
//     }else{
//         downloadBtn.setAttribute('href',`${document.querySelector('canvas').toDataURL()}`)
//     }
// });

downloadBtn.addEventListener('click', () => {
    let img = document.querySelector('.qr-body img');
    if (img !== null) {
      let imgSrc = img.getAttribute('src');
      downloadBtn.setAttribute('href', imgSrc);
    } else {
      let canvas = document.querySelector('canvas');
      if (canvas !== null) {
        let canvasDataURL = canvas.toDataURL();
        downloadBtn.setAttribute('href', canvasDataURL);
      } else {
        console.error('No image or canvas found to download.');
      }
    }
});
  
function generateQr(){
    qrBody.innerHTML=""
    new QRCode(qrBody,{
        text:qrText.value,
        height:size,
        width:size,
        colorDark:"#000",
        colorLight:"#fff",

    });
};

function emptyInput(){
    if(qrText.value.length > 0){
        generateQr();
    }
    else{
        qrText.classList.add("shake");
        setTimeout(() => {
        qrText.classList.remove("shake");
        }, 2000);
        alert('Enter the text or url into the qr generator');
    }
};

