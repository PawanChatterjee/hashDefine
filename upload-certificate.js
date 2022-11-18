const fileSelector=document.querySelector('input');
const img=document.querySelector('#images');
const progress=document.querySelector('.progress');
const textarea=document.querySelector('textarea');

//first show image on upload
fileSelector.onchange= () => {
    var file=fileSelector.files[0]
    var imgUrl=window.URL.createObjectURL(new Blob([file],{type:'image/jpg'}))
    img.src=imgUrl
    start();
}
function start(){
    textarea.innerHTML=''
    const rec=new Tesseract.TesseractWorker()
    rec.recognize(fileSelector.files[0])
    .progress(function(response)
    {
        if(response.status=='recognizing text'){
            /*progress.innerHTML=response.status+'   '+response.progress*/
        }
        else{
           /* progress.innerHTML=response.status*/
        }
    })
    .then(function(data)
    {
        textarea.innerHTML=data.text
        /*progress.innerHTML='Done'*/
        console.log(data.text)
        const textToBLOB = new Blob([data.text], { type: 'text/plain' });
        const sFileName = 'formData.txt';
         
        let newLink = document.createElement("a");
        newLink.download = sFileName;
        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        }
        else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }
        newLink.click();
    })

}