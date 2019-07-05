class Comment{

    constructor(commentVal){
        this.comment = document.createElement('li')
        this.comment.innerText = commentVal
        this.render()
    }

    render(){
        let commentSpace = document.querySelector("#comments")
        commentSpace.append(this.comment)
        return this.comment
    }
}