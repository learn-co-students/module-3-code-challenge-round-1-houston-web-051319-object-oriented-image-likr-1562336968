class Comment {
    
    constructor(image_id, content){
        this.image_id = image_id
        this.content = content

        // Make list item for each  comment

        this.li = document.createElement('li')
        this.li.innertText = content
        


        // Get fetch to retreive comments from the server
        fetch('https://randopic.herokuapp.com/comments/')
                    .then( res => res.json())
                    .then( comments => {
                        this.comments = comments
                        this.render()
                    })
    
        // Find Comment List
        let comment_list = document.querySelector('ul#comments')
    
        //Render the comments in the comment list
        render(){
            comment_list.innerHTML = '';
            this.comments.forEach( comment => {
                let comment_item = new Comment(comment)
                comment_list.append(comment_item.render())
            })   
        }

    }

    // Find comment form and input value
  
    let comment_input = document.querySelector('form#comment_form input#comment_input');
    let comment_submit = document.querySelector('input#submit_button');
  

    // Form submission to update comments on server and front-end

    comment_submit.addEventListener('click', (e) => {
        e.preventDefault(); // prevent page from refreshing

        // Add comment to list on front-end
        let li = document.createElement('li')
        li.innerText = comment_input.value
        comment_list.append(li)

        // Add comment to server back-end with POST fetch

        fetch(`https://randopic.herokuapp.com/comments/`, {
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    image_id: 2926,
                    content: comment_input.value
                })
                .then(function(results) {
                    comment_input.value = ''  //Set form input to blank string after form submission
                })
        
        })

    })


}