// const app = require('express')()
// const Post =  require('../models/post')
//
// // Post index
// app.get('/' , (req, res) => {
//     console.log("in index")
//     Post.find({}).lean()
//     .then(posts => {
//       res.render("posts-index", { posts });
//     })
//     .catch(err => {
//       console.log(err.message);
//     });
// });
//
// // NEW
// app.get('/posts/new', (req, res) => {
//     console.log("in posts-new")
//     return res.render('posts-new', {});
//   })
//
//
// // Create
// app.post('/posts/new', (req, res) => {
//     console.log(req.body);
//
//     const post = new Post(req.body)
//
//     post.save((err, body) => {
//         return res.redirect(`/`)
//     })
// })