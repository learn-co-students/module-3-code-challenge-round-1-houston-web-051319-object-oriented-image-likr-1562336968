class Image {

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
        this.render()
    }

    render(){
        let imgSpace = document.querySelector('#image_container')
        imgSpace.append(this.div);
        return this.div
    }

}