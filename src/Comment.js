class Comment {

    constructor(content){
        this.li = document.createElement('li')

        this.li.innerHTML = content

    }

    render(){
        return this.li
    }

}