const Post = require('../models/post');

module.exports = app => {

  // INDEX
  app.get('/' , (req, res) => {
      console.log("in index")
      Post.find({}).lean()
      .then(posts => {
        res.render("posts-index", { posts });
      })
      .catch(err => {
        console.log(err.message);
      });
  });

  // NEW
    app.get('/posts/new',(req, res) => {
      console.log("Posts-New")
      return res.render('posts-new', {});
    })

  // CREATE
    app.post('/posts/new', (req, res) => {
      // INSTANTIATE INSTANCE OF POST MODEL
      const post = new Post(req.body);
      console.log(post)

      // SAVE INSTANCE OF POST MODEL TO DB
      post.save((err, post) => {
        // REDIRECT TO THE ROOT
        return res.redirect(`/`);
      })
    });

  // SHOW SINGLE POST
    app.get("/posts/:id", function(req, res) {
      // LOOK UP THE POST
  Post.findById(req.params.id).populate('comments').then((post) => {
    res.render('post-show', { post })
  }).catch((err) => {
    console.log(err.message)
  })
  });

  // SUBREDDIT
    app.get("/n/:subreddit", function(req, res) {
    Post.find({ subreddit: req.params.subreddit })
      .then(posts => {
        res.render("posts-index", { posts });
      })
      .catch(err => {
        console.log(err);
      });
  });

  };
