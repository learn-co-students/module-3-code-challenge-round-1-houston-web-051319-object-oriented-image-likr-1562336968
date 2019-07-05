class Comment{
    constructor(content, image_id){
        this.image_id = image_id
        this.content = content
        this.li = document.createElement('li')
        this.li.innerText = content
        this.list = document.querySelector("#comments")
        this.list.append(this.li)
    //console.log(this.image_id)
    }
    saveComment(){
        console.log(image_id)
        fetch(`https://randopic.herokuapp.com/comments/`, {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'image_id': this.image_id,
                'content': this.content
            })
        })
    }
    
}


function eventListener(){
    field = document.querySelector("#comment_input")
    submitButton = document.querySelector('#submit-btn')
    list = document.querySelector("#comments")
    submitButton.addEventListener('click', (e)=>{
        e.preventDefault()
        let newLi = document.createElement('li')
        newLi.innerText = field.value
        console.log(list)
        list.append(newLi)
        Comment.saveComment()
    })
}

