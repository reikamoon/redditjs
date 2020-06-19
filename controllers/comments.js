const Post = require('../models/post');
const Comment = require('../models/comment');
const Comment = new Comment(req.body);
comment.author = req.user._id;

module.exports = function(app) {
  // CREATE Comment
  app.post("/posts/:postId/comments", function(req, res) {
    if (req.user) {
      const comment = new Comment(req.body);
      comment.save(function(err,comment) {
        return res.redirect('/');
      });
    } else {
      return res.status(401); ///UNAUTHORIZED
    }
    // SAVE INSTANCE OF Comment MODEL TO DB
    comment
      .save()
      .then(comment => {
        return Post.findById(req.params.postId);
      })
      .then(post => {
        post.comments.unshift(comment);
        return post.save();
      })
      .then(post => {
        res.redirect(`/`);
      })
      .catch(err => {
        console.log(err);
      });
  });



};
