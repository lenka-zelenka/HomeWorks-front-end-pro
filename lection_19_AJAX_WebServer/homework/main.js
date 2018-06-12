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
var userForm = document.forms["user-data"]
var userData = {
    name: '',
    age: ''
} 
sendBtn.addEventListener('click', function(event){
    console.log(userData);
    setData();
    doAjax('POST', '/registration', userData)
})


function setData() {
    userData.name = document.forms["user-data"].elements["user-name"].value;
    userData.age =  document.forms["user-data"].elements["user-age"].value
}
