const Post = require('../models/post');
const User = require('../models/user');
const Comment = require('../models/comment');

module.exports = function(app) {
  // CREATE Comment
  app.post("/posts/:postId/comments", function(req, res) {
    if (req.user) {
      const comment = new Comment(req.body);
      comment.author = req.user._id;
      comment
        .save()
        .then(comment => {
          return Post.findById(req.params.postId);
          return User.findById(req.user._id);
        })

        .then(user => {
            user.comment.unshift(comment);
            user.save();
          })

        .then(post => {
          post.comment.unshift(comment);
          return post.save();
        })

        .then(post => {
          res.redirect(`/`);
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      return res.status(401); ///UNAUTHORIZED
    }
    // SAVE INSTANCE OF Comment MODEL TO D
  });



};
