var convertBtn = document.querySelector('.converter');
var urlInpt = document.querySelector('.url');

convertBtn.addEventListener('click', ()=>{
    console.log('url: ${urlInpt.value}');
    sendurl(urlInpt.value);
});

function sendurl(url){
    
}