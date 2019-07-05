// class Image {

//     constructor(url, name){
//         this.div = document.createElement('div')
//         this.div.className = 'image_card'

//         const img = document.createElement('img')
//         img.src = url
//         img.innerHTML = result.url 

//         const h4 = document.createElement('h4')
//         h4.append(name)
//         h4.innerText = result.name 

//         this.div.append(
//             img,
//             h4
//         )
//     }

//     render(){
//         return this.div
//     }

// }

class Image {
  
    constructor() {
      let imageId = 2927
       fetch(`https://randopic.herokuapp.com/images/${imageId}`)
        .then((response) => {
        return response.json()
        })
        .then((result) => {
          this.result = result
          this.render()
        })
      }
  
          
      render() {
        let div = document.createElement('div')
        div.setAttribute('class', 'image-card')
        let img = document.createElement('img')
        img.src = this.result.url 
        let h4 = document.createElement('h4')
        h4.innerText = this.result.name 
        div.append(img, h4)
        document.body.append(div)
    }   
  
  }
  