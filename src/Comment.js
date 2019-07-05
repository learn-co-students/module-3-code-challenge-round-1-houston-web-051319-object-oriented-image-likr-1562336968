class Comment {


    constructor() {
    const imageId = 2927
    fetch(`https://randopic.herokuapp.com/images/${imageId}`)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            this.result = result 
            this.comments()
        })

        let addNew = document.querySelector('#comment_form')
        let userInput = document.querySelector('#comment-input')
        let imageCard = document.querySelector('.image-card')
        addNew.addEventListener('submit', function(e) {
            e.preventDefault()

            fetch(`https://randopic.herokuapp.com/images/${imageId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json",
                    'Accept': "application/json"
                },
                body: JSON.stringify({
                    content: userInput.value
                })
            })
            alert('Comment Added')
            li.innerText = '';
            li.innerText = userInput.value 
            console.log(userInput.value)
        })
    }


    comments() {
            this.result.comments.forEach(i => {
            let li = document.createElement('li')
            li.innerText = i.content
            document.body.appendChild(li)
        })
       
    }


    }





