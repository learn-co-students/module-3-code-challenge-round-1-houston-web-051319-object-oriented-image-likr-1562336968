class Comment{

    constructor(comments){
        this.comments =  comments
        this.render()
        let comment = document.getElementById('comment_input')
        this.submitBtn = document.getElementById('submitBtn')
        this.submitBtn.addEventListener('click', (e) =>{
            e.preventDefault()
            fetch('https://randopic.herokuapp.com/comments',{
                method: 'POST',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    image_id: 2921,
                    content: comment.value
                })
            })
            .then((res) => res.json())
            .then((data)=>{
             
                this.comments.push(data)
                console.log(data)
                this.render()}
            )
            
        })
    }
    render(){
        fetch('https://randopic.herokuapp.com/images/'+2921)
        .then(res => res.json()) 
        .then(comments => {
            
            
            let ul = document.getElementById('comments')
            ul.innerHTML = ''
            for(let i = 0; i<this.comments.length; i++){
                let li = document.createElement('li')
                li.innerHTML = this.comments[i].content
               
                ul.append(li)
            }

        })
        
    }
   
}