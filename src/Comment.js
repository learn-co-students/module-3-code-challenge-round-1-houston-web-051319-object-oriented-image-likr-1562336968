class Comment{
    constructor(content){
        this.li = document.createElement('li')
        this.li.innerText = content
        let list = document.querySelector("#comments")
        list.append(this.li)
    }


}