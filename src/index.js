let newImage;
let newImageResponse;
let comments = [];
let x;
let newComment;

document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = 2922 //Enter the id from the fetched image here

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

  fetch(imageURL)
    .then(function(response) {
      return response.json()
    }).then(function(result){
    newImageResponse = result
    newImage = new Image(result.url, result.name)
    result.comments.forEach((comment) => {
      x = new Comment(comment.content)
      comments.push(x)
    })

    document.getElementById("image_container").append(newImage.div)
    function addComments(comments) {
      comments.forEach((comment) => {
        document.getElementById("comments").append(comment.li)
      })
    }
    addComments(comments)
    
  })
})

function logit(e) {
  e.preventDefault()
  let commentInput = document.getElementById("comment_input")
  newComment = new Comment(commentInput.value)
  document.getElementById("comments").append(newComment.li)
  fetch(`https://randopic.herokuapp.com/comments/`, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'image_id': newImageResponse.id,
      'content': commentInput.value
    })
  })

}

let form = document.getElementById("comment_form")
form.addEventListener("submit", logit)
