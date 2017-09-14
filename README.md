## Frontend Nanodegree Readable Project

This is my solution to the readable project of the react nanodegree from Udacity. The project is to build a posts/comments app similar to stack overflow. The client side of the app is building using ReactJS.  State management of the entire app is handled by redux. The following were the criterias that had to be met for this project.

Your application should have, at a minimum, four views:

##### Default (Root)

  should list all available categories, which should link to a category view for that category
  should list all of the posts ordered by voteScore (highest score first)
  should have a control for changing the sort method for the list, including at minimum, order by voteScore and order by timestamp
  should have a control for adding a new post

##### Category View

  identical to the default view, but filtered to only include posts with the selected category

##### Post Detail View

  should show the details of a post, including: Title, Body, Author, timestamp (in user readable format), and vote score
  should list all of the comments for that post, ordered by voteScore (highest first)
  should have a control for reordering comments by score or timestamp
  should have controls to edit or delete the post
  should have a control to add a new comment.
  implement comment form however you want (inline, modal, etc.)
  comments should also have controls for editing or deleting

##### Create/Edit View

  should have a form to create new post or edit existing posts
  when editing, existing data should be populated in the form

##### Post/Comment UI

  Posts and comments, in all views where they are displayed, should display their current score and should have controls to increment or decrement the voteScore for the object. Posts should display the number of comments associated with the post.

### Installation
To get the project running on your local machine firstly take a clone of this repo onto your local machine. Then `cd` into the root directory on your CLI tool(eg. CMD prompt or Terminal) and then run `npm install`. This will install all the node packages you require to run the project.

```
npm install
```

#### Note
This project is requires the api server to be functional. The code and instructions for the server can be found [here](https://github.com/udacity/reactnd-project-readable-starter). API server URL can be changed from within the api.js file in the utils folder of the source.


### How to Run

The project is bootstrapped with create react app. You can follow the below mentioned methods to run the website depending on the build you prefer.

 _Note:_ `cd` into the root folder on your CLI tool and then run the commands.

To run the devolopment build with auto reload use the following command:
```
npm start
```

To run the production build use the following command:
```
npm run build
serve -s build
```

### How to Build for production

To get the production build use the following command from the root folder:
```
npm run build
```

This command will optimize the files and output it to the **build** folder. Use the contents of this folder for your production hosting.



## LICENSE

MIT License

Copyright (c) 2017 Najmal K V

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.