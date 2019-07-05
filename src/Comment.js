//have these here to make life a biiiit easier
const commentsURL = `https://randopic.herokuapp.com/comments/`
let imageId = 2923

class Comment {

    constructor(comment, id=null){
        //makes comment object something that can be called after class instance is made
        this.comment = comment

        //makes id referencable if it was passed
        if(id){
            this.id = id
        }

        //makes li for comment
        this.li = document.createElement('li')
        this.li.innerText = this.comment

        //makes del button and adds it to the li
        this.del = document.createElement('button')
        this.del.innerText = 'Delete'
        this.li.append(this.del)

        this.del.addEventListener('click', () =>{
            this.delete()
        })

    }

    render(){
        return this.li
    }

    post(){
        //put comment in the database
        fetch(commentsURL,{
            method: 'POST',
            headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            image_id: imageId,
            content: this.comment
            })
        }).then(response => response.json())
        //sets id to use for deleting
        .then(result => this.id = result.id)
    }

    delete(){

        //deletes comment from backend
        fetch(commentsURL + this.id,{
            method: 'DELETE'
        }).then(response => response.json())
        //confirms that comment was deleted
        .then(result => this.li.innerText=result.message)
        //after 1 second, removes the comment line
        .then(setTimeout( ( () => {
            this.li.remove()
        }),1000))
    }

}