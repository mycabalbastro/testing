document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}
const correctPassword = 'Mycsssss070904'; // Replace with your actual password
let isAuthorized = false;

function checkPassword() {
    const passwordInput = document.getElementById('passwordInput').value;
    if (passwordInput === correctPassword) {
        isAuthorized = true;
        document.getElementById('confidentialContent').style.display = 'block';
    } else {
        alert('Incorrect password. Access denied.');
    }
}