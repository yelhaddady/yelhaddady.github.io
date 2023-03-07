console.log('test');

monHeader = document.querySelector('h1');

document.querySelector('p').addEventListener('click',function (){
    myName = prompt('tape ton blase');
    monHeader.textContent =  monHeader.textContent+' pas vrai '+ myName
})

monImage = document.querySelector('img');


    monImage.addEventListener('click', function (){
        if(monImage.getAttribute('src') === 'images/logo-firefox.jpeg') {
            monImage.setAttribute('src', 'images/logo-firefox2.jpeg');
        }else{
            monImage.setAttribute('src', 'images/logo-firefox.jpeg');
        }
    });