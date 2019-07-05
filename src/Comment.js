document.querySelector('submit').addEventListener(click, function(){
function addComment(e){
    e.preventDefault();
    fetch('http://localhost:3000images/',{
        method:'POST',
        headers: {'Accept': 'application/json, text/plain, */*' ,
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
     body: new FormData(document.getElementById('comments'))}.then((res) => res.json)
    
