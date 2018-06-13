function doAjax(method, path, data) {
    var xhr = new XMLHttpRequest();

    xhr.open(method, path, true);
    xhr.send(data);
    return new Promise(function(resolve, reject){
        xhr.onreadystatechange = function(){
            if (xhr.status != 200) {
                reject(xhr);
            } 
            resolve(JSON.parse(xhr.responseText));
        }
    })
}

var sendBtn = document.getElementById('send-data');
var userForm = document.forms["user-data"];
var userName = userForm.elements.name;
var userAge = userForm.elements.age

var userData = {
    name: '',
    age: ''
} 

userName.addEventListener("input", checkName);
// userAge.addEventListener("input", checkAge)

function checkName(event){
    var mesage = this.parentNode.querySelector('p.error');
    mesage.classList.add('error');
    mesage.classList.remove('display');
    if ( userName.value.search(/\d/) != -1 ) { 
        this.classList.add('error');
        mesage.classList.add('display');
        mesage.innerHTML = 'В имени не должно быть цифр!';
        sendBtn.setAttribute('disabled', 'disabled')
    }
} 

// function checkAge (event){
//     mesage = document.createElement('p')
//     if ( userName.value.search([0-9]) != -1 ) { 
//         this.classList.add('error')
//         mesage.innerHTML = 'В возрасте должны быть только цифры!'
//         this.parentNode.appendChild(mesage);
//     } 
//     parentElem.removeChild(elem);
// }

sendBtn.addEventListener('submit', function(event){
    event.preventDefault();
    setData();
})


function setData() {
    userData.name = userName.value;
    userData.age =  userAge.value;
    userData = JSON.stringify(userData);
    doAjax('POST', '/registration', userData)
}
