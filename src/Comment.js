document.querySelector('submit').addEventListener(click, function(){
function addComment(e){
    e.preventDefault();
    let body = document.getElementById('body').value;
    fetch('http://localhost:3000image/',{
        method:'POST',
        headers: {'Accept': 'application/json, text/plain, */*' ,
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
     body: new FormData(document.getElementById('comments'))}.then((res) => res.json)
    
