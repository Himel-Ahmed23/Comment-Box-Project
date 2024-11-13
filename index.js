let submit = document.getElementById('submit').addEventListener('click', function showComment (){

    let textarea = document.getElementById('textarea');

    let textValue = textarea.value;

    let text = document.getElementById('text');

    let p = document.createElement('p');
    p.innerText = textValue;

    console.log(textarea);
    text.appendChild(p);

    textarea.value = '';

});

