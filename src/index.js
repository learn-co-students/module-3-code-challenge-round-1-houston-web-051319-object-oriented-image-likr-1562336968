document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = 2926

  const imageURL = `https://randopic.herokuapp.com/images/2926`

  const commentsURL = `https://randopic.herokuapp.com/comments/`



  // Get Images Fetch

  function get_images() {
    let results = fetch(`https://randopic.herokuapp.com/images/2926`)
        .then(res => res.json())
        
            return results

  }

  // Image Container in document

  let img_container = document.querySelector('div#image_container');

  // Create Divs with images and headers for each image

  get_images().then(function(results) {
      let img_container = document.querySelector('div#image_container');

          for (let i = 0; i < results.length; i++) {
              let div = document.createElement('div')
              img_container.append(div)

              let h4 = document.createElement('h4')
              h4.innerText = `${results[i].name}`
              div.append(h4)

              let img = document.createElement('img')
              img.src = `${results[i].url}`
              div.append(img)

              img_container.append(div)

      }
  })



  // Find comments list
  let comment_list = document.querySelector('ul#comments')

  // Get Comments with get Fetch

  function get_comments() {
    let results = fetch(`https://randopic.herokuapp.com/comments/`)
    .then(res => res.json())
    
    return results
    
  }

  // Add comments to list
  get_comments().then(function(results) {
    
    for (let i = 0; i < results.length; i++) {
      comment_list.innerText = ''
      let li = document.createElement('li')
      li.innerText = results[i].content
      comment_list.append(li)
    }
  })
    

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





})

