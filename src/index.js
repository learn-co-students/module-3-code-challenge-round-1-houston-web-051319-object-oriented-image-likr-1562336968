document.addEventListener("DOMContentLoaded", () => {
  console.log("%c DOM Content Loaded and Parsed!", "color: magenta");

  let imageId = 2929; //Enter the id from the fetched image here

  const imageURL = "https://randopic.herokuapp.com/images/2929";

  const commentsURL = `https://randopic.herokuapp.com/comments/`;

  body = document.querySelector("body");
  imageCon = document.querySelector("#image_container");
  divComm = document.querySelector("#comments");

  fetch(imageURL)
    .then(function(response) {
      return response.json();
    })
    .then(function(image) {
      console.log(image.url);
      let picture = image;
      addImage(picture);
    });

    .addEventListener("click", e => {
      e.preventDefault();
      .innerHTML = "";

  function addImage(picture) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = picture.url;

    let h4 = document.createElement("h4");
    h4.innerText = `${picture.name}`;

    let comm = picture.comments;
    comm.forEach(function(comment) {
      console.log(comment.content);

      li = document.createElement("li");
      li.innerText = `${comment.content}`;
      divComm.append(li);
    });

    imageCon.append(img, h4);
  }
});
