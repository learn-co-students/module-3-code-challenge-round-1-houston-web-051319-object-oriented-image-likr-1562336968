document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = 2928 //Enter the id from the fetched image here

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

  class Image{
  
    constructor(url, name){
      this.div = document.createElement('div')
      this.div.className = 'image_card'

      const img = document.createElement('img')
      img.src = url

      const h4 = document.createElement('h4')
      h4.append(name)

      this.div.append(
          img,
          h4
      )
  }
 x=new Image("djdh","djdjd")
  

  }

  fetch(imageURL)
  .then(function(response){
    return response.json()
  })
  .then(function(image){
    console.log('This be the  response', image)
   AddImage(image)
 })

  function AddImage(image){
      let divTag=document.getElementById("image_container")
      let imageTag=document.createElement('img')
      divTag.append(imageTag)
      imageTag.src=image.url
      let h3=document.createElement('h3')
      divTag.append(h3)
      h3.innerHTML="info Hash"


      
      let submitButton=document.getElementById("submit")
      submitButton.addEventListener('click',function(e){
        e.preventDefault()

        let inputText= document.getElementById("comment_input").value
        inputText.innerText= ""

        let ul=document.getElementById("comments")
        let li= document.createElement('li')
        ul.append(li)
        li.innerHTML=inputText



        fetch(commentsURL, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
        },
        body: JSON.stringify({
        image_id: image.id,
        content: image.body
        })
        }).then(function(res){
        return res.json()
        }).then(function(res){
      
      console.log(res)
    })


      
        


  })
      
    
    

  


  
}



})
