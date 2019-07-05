
function getImageData(url){
  let data = fetch(url).then(res => {
    return res.json()
  })
  return data
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = 2930 //Enter the id from the fetched image here

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

  let inputComment = document.querySelector('#comment_input')

  let submitBtn = document.querySelector("#sB")

  submitBtn.addEventListener('click', e => {
    e.preventDefault()
    if(inputComment.value != ''){ //Insert Comment only if text field has a comment
      new Comment(inputComment.value)
      fetch('https://randopic.herokuapp.com/comments',{
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          image_id: imageId,
          content: inputComment.value
        })
      })
      inputComment.value = null
    }
  })

  getImageData(imageURL).then(json => {
    new Image(json.url, json.name)
    for(let i = 0; i<json.comments.length; i++){
      new Comment(json.comments[i].content)
    }
  })
})
