class Comment {

    constructor(content){
        this.li = document.createElement('li')
        this.li.className = 'comment'
        this.li.innerText = content
        this.image_id = 2932
    }

    render(){
        return this.li
    }

}