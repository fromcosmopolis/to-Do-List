let addToDoButton =document.getElementById('addToDo');// bu butona ulaşmak için değişken tanımladım
let toDoContainer = document.getElementById('toDoContainer');// bu container'a ulaşmak için değişken tanımladım
let inputText = document.getElementById('inputText');// bu inputun içine ulaşmak için değişken tanımladım
let clearToDo = document.getElementById('clearToDo');// bu butona ulaşmak için değişken tanımladım

addToDoButton.addEventListener('click', function(){
    let paragraph = document.createElement('p'); //önce paragraf oluşturduk
    paragraph.classList.add('paragraph-styling'); // inputa yazdığımda aşağı gelen paragrafı stillendirdim
    toDoContainer.appendChild(paragraph); // paragraf container içine çocuk olarak eklendi
    paragraph.innerHTML = inputText.value;// eklenen paragrafın içindeki ifade inputta girilen değere eşit olsun
    inputText.value = ""; // input ta girilen değer daha sonra kendi kendine silinsin

    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration ='line-through'; // yapılan bitirilen işler üstüne tıklandığımda çizilsin
        paragraph.style.textDecorationColor = ' rgb(71, 50, 10)';
    });

    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph); // yapılan işin üstüne iki defa tıkladığımda listeden silinsin. Hnagi çocuğun silineceğini paragraf yazarak tayin ettim
    });

    clearToDo.addEventListener('click', function(){
        paragraph.remove();// clear tuşuna bastığımda paragraftaki ifade silinsin
    })

})