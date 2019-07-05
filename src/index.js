document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = 2923 //Enter the id from the fetched image here

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

  //get image and image's comments
  fetch(imageURL)
    .then(response => response.json())
    .then(result => {

      //makes image instance and puts it on page
      myImage = new Image(result.url,result.name)
      document.querySelector('#image_container').append(myImage.render())

      //puts each comment on page in li
      result.comments.forEach( comment => {
        newComment = new Comment(comment.content,comment.id)
        document.querySelector('#comments').append(newComment.render())
      })
    })

  //gets comment form to get submitted info
  commentBox = document.querySelector('#comment_form')

  //gets submit button and adds event listener
  submitButton = document.querySelector("#submit_button")
  submitButton.addEventListener('click', (e)=>{
    //stops page from refreshing
    e.preventDefault()

    //create comment, render it to the page, and post it to the backend
    newComment = new Comment(commentBox.children[0].value)
    document.querySelector('#comments').append(newComment.render())
    newComment.post()

    //clears out comment input
    commentBox.children[0].value = null

  })


})
