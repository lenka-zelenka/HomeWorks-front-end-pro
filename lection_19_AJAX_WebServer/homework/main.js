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
userAge.addEventListener("input", checkAge)

function checkName(event){
    var mesage = this.parentNode.querySelector('p.error');
    if ( userName.value.search(/\d/) != -1 ) { 
        this.classList.add('error');
        mesage.classList.add('display');
        mesage.innerHTML = 'В имени не должно быть цифр!';
        sendBtn.setAttribute('disabled', 'disabled')
    } else {
        mesage.classList.remove('display');
        this.classList.remove('error');
        sendBtn. removeAttribute('disabled', 'disabled')
    }
} 

function checkAge (event){
    var mesage = this.parentNode.querySelector('p.error');
    if ( +userAge.value < 0 ||  +userAge.value >= 120 ) { 
        this.classList.add('error')
        mesage.classList.add('display');
        mesage.innerHTML = 'Указан неправильный возраст!'
        sendBtn.setAttribute('disabled', 'disabled')
    } else {
        mesage.classList.remove('display');
        this.classList.remove('error');
        sendBtn. removeAttribute('disabled', 'disabled')
    }
}

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
