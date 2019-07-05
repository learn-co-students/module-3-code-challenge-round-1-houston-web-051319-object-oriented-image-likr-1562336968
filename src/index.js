document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = 2932 //Enter the id from the fetched image here

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

  const imgContainer = document.getElementById('image_container')

  const form = document.getElementById('comment_form')

  const commentText = form.firstElementChild

  const submitBtn = form.lastElementChild

  const comments = document.getElementById('comments')

  fetchRequest(imageURL).then((image)=>{
    let myImg = new Image (image.url, image.name)
    imgContainer.append(myImg.render())
    for(let i in image.comments){
    new Comment(image.comments[i].content, comments)
    }
  })

  
  submitBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    let comment = new Comment(commentText.value, comments)
    fetch(commentsURL, {
      method: 'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        image_id: comment.image_id,
        content: comment.content
      })
    }).then((res)=>console.log(res))
  })

})

function fetchRequest(url){
  let fet = fetch(url)
  .then(res=>res.json())
  return fet
}
