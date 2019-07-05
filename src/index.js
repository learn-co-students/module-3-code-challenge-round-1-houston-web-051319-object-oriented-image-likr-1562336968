document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = 2923 //Enter the id from the fetched image here

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

  fetch(imageURL)
    .then(response => response.json())
    .then(result => {
      myImage = new Image(result.url,result.name)
      document.querySelector('#image_container').append(myImage.render())
      result.comments.forEach( comment => {
        newComment = new Comment(comment.content)
        document.querySelector('#comments').append(newComment.render())
      })
    })

  commentBox = document.querySelector('#comment_form')
  submitButton = document.querySelector("#submit_button")
  submitButton.addEventListener('click', (e)=>{
    e.preventDefault()

    console.log(commentBox.children[0].value)
  })
})
