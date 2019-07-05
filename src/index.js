document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = 2924 //Enter the id from the fetched image here

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

  const hard_img = "http://blog.flatironschool.com/wp-content/uploads/2017/06/IMAG2936-352x200.jpg"

  /*fix if time*/

  //  fetch(imageURL,{
  //    method: "GET",
  //    headers: {
  //    "Content-Type": "application/json",
  //    "Accept": "application/json"
  //    },
  //    body: JSON.stringify({
  //     id:  id.value,
  //     content:  content.value,
  //     image_id:  image_id.value,
  //    })
  //  })

  let img = fetch(imageURL)
  .then(function(response){
  return response.json();
  })
  .then(function(result){
  console.log(result);

  })
  
  const y = document.getElementById('image_container')
  let x = document.createElement('div')
  y.append(x)

  /*fix if time*/let title = document.createElement('h2')
  /*fix if time*/title.innerHTML= "Science Fair"
  x.append(title)

  let something = document.createElement('img')
  something.setAttribute('src',hard_img)
  x.append(something)

  const here = document.getElementById('comments')
  let li = document.createElement('li')
  li.innerHTML = "first comment!"
  here.append(li)

 const button = document.querySelector('input[type="submit"]')
 const com = document.getElementById('comment_input')


  function add_a_comment(){
     const here = document.getElementById('comments')
     let li = document.createElement('li')
     li.innerHTML = com.value
     here.append(li)
  }

  //when button clicked update list with new message
    button.addEventListener("click", function(e){
      e.preventDefault();  
      fetch('https://randopic.herokuapp.com/comments',{
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        image_id: imageId,
        content: com.value
      })
      })
      .then(function(response){
        console.log(response.json())
      })
      .then(function(new_comment){
        add_a_comment(new_comment)
      })
    })


})
    

  