class Image {

    constructor(name, url){
        this.div = document.createElement('div')
        this.div.className = 'image_card'
        let imgContainer = document.querySelector("#image_container")
        imgContainer.append(this.div)
        const img = document.createElement('img')
        img.src = url

        const h4 = document.createElement('h4')
        h4.append(name)

        this.div.append(
            img,
            h4
        )
    }

    render(){
        return this.div
    }

}