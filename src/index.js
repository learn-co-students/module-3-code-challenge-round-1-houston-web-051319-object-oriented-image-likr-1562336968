document.addEventListener('DOMContentLoaded', () => {
  eventListener()
  
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = 2925

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

  

  fetch('https://randopic.herokuapp.com/images/2925')
    .then(response => response.json() )
    
    .then(result => {
        let pic = new Image(result.name, result.url, )
        result.comments.forEach(comment => {
          new Comment(comment.content, result.id) 
        })
      
    })
    


})
