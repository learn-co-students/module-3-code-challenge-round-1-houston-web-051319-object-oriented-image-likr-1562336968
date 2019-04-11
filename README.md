# JavaScript Code Challenge

### Setup

#### Allowed Resources

 1. Your brain!
 2. No more than one page (front and back) of hand written notes
 3. The Debugger. Please run and debug your code
 4. The general internet

#### Banned Resources

 1. Other students
 2. Any prepared materials (besides notes)
 3. Any lessons
 4. Any solution code from any lab, whether you wrote it or Flatiron School did
 5. Code from any lecture

#### Cloning

1. Go to <http://learn.co/assignments>
2. Clone the repo to your local computer (do not fork)
3. Before you begin coding, `git checkout -b your-name` to create and switch to your own branch (to check if it worked: `git status` and/or `git branch`)



### Deliverables

This code challenge can be broken down into 7 steps. It is recommended that you commit after each step:

1. Get image data by **requesting** it from **the server**
2. Use the `Image` class to **render** a new image and append it **to the DOM**
3. Create a `Comment` class, and use it to **render** each of the image's comments in a list 
4. **Listen** for when a user tries to add a new comment
5. When a user makes a comment, **render** the new comment in the comment list *without refreshing the page*
6. When a user makes a comment, **send** the comment to the server so that it persists
7. **Refactor** your code to make it as *clean as possible*



#### 1: Get image data by **requesting** it from **the server**

When the page loads, you will need to make a request to the API to get the data about your picture. The API *does not* follow RESTful conventions, so *make sure you read the API documentation* when communicating with the server.

##### Get your image ID

Visit https://randopic.herokuapp.com/ in your web browser. The backend will assign you your very own `image_id`.  This is your assigned image. This prevents your classmates from editing your images and vice versa.

> Before you start anything else, locate the variable `imageId` in the `src/index.js`. Replace the value of the variable with your image id. This will be the image you'll be working with for this code challenge.

##### Get the Image Data From the Server
The endpoint for getting image looks like this:
```js
GET 'https://randopic.herokuapp.com/images/:id'
```

```json
Example Response:
{
  "id": 1,
  "url": "http://blog.flatironschool.com/wp-content/uploads/2016/07/072716-js-saved-web-4-352x200.jpg",
  "name": "The Internet!",
  "like_count": 0,
  "comments": [
    {
      "id": 5941,
      "content": "first comment!",
      "image_id": 1158,
      "created_at": "2018-10-18T17:06:14.859Z",
      "updated_at": "2018-10-18T17:06:14.859Z"
    }
  ]
}
```

> If you cannot get your fetch request to work correctly, you can  use the example response above to append content to the DOM and attempt the subsequent steps



#### 2: Use the `Image` class to **render** a new image and append it **to the DOM**

Use the data from the API response to update the page. Look in the `index.html` to see where to place the rendered image.

> If you cannot figure out how to use the `Image` class, you can add the image data manually so that you can attempt the next deliverable
>
> You will need to add:
>
> * The image
> * A header with the image's name



#### 3: Create a `Comment` class, and use it to **render** each of the image's comments in a list 

Render the comments in `li` elements.

> If you cannot get your `Comment` class working quickly, add the comments without a class so that you can attempt the next deliverable



#### 4: **Listen** for when a user tries to add a new comment

Treat this as it's own step and test here before moving forward.



#### 5: When a user makes a comment, **Render** the new comment in the comment list *without refreshing the page*

Render the new comment inside of an `li` element.



#### 6: When a user makes a comment, **Send** the comment to the server so that it persists
After you've rendered the comment on the page, make sure to persit the new comment by sending it to the server.
You're request should look like this:
```js
POST 'https://randopic.herokuapp.com/comments'

Required keys in the body of the request:
{
  image_id: (insert image id here),
  content: (insert comment content here)
}

Required Headers
{
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}
```



#### 7: **Refactor** your code to make it as *clean as possible*

**Don't do this without commiting first**

**Don't do this without commiting first**

**Don't do this without commiting first**



### Submission

1. When time is called, `git add` and `git commit` if you haven't already, then `git push` *on your branch*. You will never be able to push to `master`; you will not be able to push to your own branch before time is called. If you're done before time, make a commit (don't push it) and continue working on stretch features. If you break something, you can go back to your working commit.
2. Make a pull request from your branch to `master`. Copy and paste the link to your pull request into the text box on <http://learn.co/assignments> for the code challenge task. Submit.
3. Eat something nice for lunch and relax. *Do not* talk to fellow students, students in other mods, or anyone about the code challenge. Your instructors will give you feedback on your work in the afternoon.