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
    masage = document.createElement('p')
    if ( userName.value.search(/\d/) != -1 ) { 
        this.classList.add('error')
        masage.innerHTML = 'В имени не должно быть цифр!'
    }
    this.parentNode.appendChild(masage);
} 

// function checkAge (){

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
