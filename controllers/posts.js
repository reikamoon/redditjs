const Post = require('../models/post');

module.exports = app => {

  // INDEX
  app.get("/", (req, res) => {
  var currentUser = req.user;

  Post.find({})
    .then(posts => {
      res.render("posts-index", { posts, currentUser });
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
  app.post("/posts/new", (req, res) => {
    if (req.user) {
      var post = new Post(req.body);

      post.save(function(err, post) {
        return res.redirect(`/`);
      });
    } else {
      return res.status(401); // UNAUTHORIZED
    }
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
