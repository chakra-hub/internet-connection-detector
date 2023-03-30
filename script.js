window.addEventListener('offline',()=>{
    document.getElementsByClassName('offline_')[0].style.display='flex';
});

window.addEventListener('online', ()=>{
    if(document.getElementsByClassName('offline_')[0].style.display=='flex'){
        document.getElementsByClassName('offline_')[0].style.display='none';
        document.getElementsByClassName('online_')[0].style.display='flex';
        setTimeout(()=>{
            document.getElementsByClassName('online_')[0].style.display='none';
        },1000)
    }
})