let button = document.querySelector('button');
button.addEventListener('click',inputMsg);
function inputMsg()
{
    let name = prompt('enter name of student');
    button.textContent='roll no. 1 : ' + name;
}