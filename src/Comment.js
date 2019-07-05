class Comment {

    constructor(content, ul){
        this.li = document.createElement('li')
        this.li.className = 'comment'
        this.li.innerText = content
        this.content = content
        this.image_id = 2932
        ul.append(this.li)
    }

    render(){
        return this.li
    }
    


}