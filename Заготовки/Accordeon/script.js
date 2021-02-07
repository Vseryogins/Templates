const accordionItem = document.querySelectorAll('.accordion__item');

for(item of accordionItem){
    item.addEventListener('click', function(){
        console.log(this)
    })
}