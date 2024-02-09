const burgerbox = document.querySelector(".burgerbox");
const overlay = document.querySelector(".overlay");
const targets = document.querySelector(".heromid");
targets.onclick = function() { burgerbox.classList.remove('open'); overlay.classList.add('fade-out');
overlay.classList.remove('fade-in');}


burgerbox.addEventListener('click',function()
    {
       burgerbox.classList.toggle('open');
       if(burgerbox.classList.contains('open')) 
        {
            overlay.classList.add('fade-in');
            overlay.classList.remove('fade-out');
          }
        else{
            overlay.classList.add('fade-out');
            overlay.classList.remove('fade-in');
        }
    } 
);