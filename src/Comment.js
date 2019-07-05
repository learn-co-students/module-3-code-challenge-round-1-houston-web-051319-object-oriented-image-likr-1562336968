class Comment{
    constructor(content){
        this.li = document.createElement('li')
        this.li.innerText = content
        this.list = document.querySelector("#comments")
        this.list.append(this.li)
        this.eventListener()
    }

    eventListener(){
        this.field = document.querySelector("#comment_input")
        this.submitButton = document.querySelector('#submit-btn')
        this.submitButton.addEventListener('click', (e)=>{
            e.preventDefault()
            let newLi = document.createElement('li')
            newLi.innerText = this.field.value
            this.list.append(newLi)
            
        })
    }
}