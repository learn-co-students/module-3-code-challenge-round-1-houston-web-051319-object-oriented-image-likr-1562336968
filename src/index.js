document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = 2925

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

  let picData = {
    "id": 1,
    "url": "http://blog.flatironschool.com/wp-content/uploads/2016/07/072716-js-saved-web-4-352x200.jpg",
    "name": "The Internet!",
    "like_count": 0,
    "comments": [
      {
        "id": 5941,
        "content": "first comment!",
        "image_id": 1158,
        "created_at": "2018-10-18T17:06:14.859Z",
        "updated_at": "2018-10-18T17:06:14.859Z"
      }
    ]
  }
  



  fetch('https://randopic.herokuapp.com/images/2925')
    .then(response => response.json() )
    
    .then(result => {
        console.log(result)
        let pic = new Image(result.name, result.url)
        result.comments.forEach(comment => {
          new Comment(comment.content) 
        })
      
    })


})
