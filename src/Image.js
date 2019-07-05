class Image {

    constructor(url, name){
        this.div = document.createElement('div')
        this.div.className = 'image_card'

        const img = document.createElement('img')
        img.src = url

        const h4 = document.createElement('h4')
        h4.innerText = name
        
        this.div.append(
            img,
            h4
            )
            
        fetch('https://randopic.herokuapp.com/images/2926')
                    .then( res => res.json())
                    .then( images => {
                        this.images = images
                        this.render()
                    })
    
        // Image Container
        let img_container = document.querySelector('div#image_container');
    
    
        render(){
            img_container.innerHTML = '';
            this.images.forEach( image => {
                let image_card = new Image(image)
                img_container.append(image_card.render())
            })   
        }

    }
}
