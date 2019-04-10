class Image {

    constructor(url){
        this.img = document.createElement('img')
        this.img.src = url
    }

    render(){
        return this.img
    }

}