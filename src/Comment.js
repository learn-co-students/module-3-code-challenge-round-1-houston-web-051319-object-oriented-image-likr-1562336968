class Comment {

    constructor(content){
        this.li = document.createElement('li')
        this.li.innerText = content
    }

    render(){
        return this.li
    }
}