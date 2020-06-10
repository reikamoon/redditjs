// Initialize express
const express = require('express')
const app = express()

// INDEX
  app.get('/', (req, res) => {
    res.send('Hello World!')
  })


// Choose a port to listen on
const port = process.env.PORT || 3000;

// Tell the app what port to listen on
app.listen(port, () => {
  console.log('App listening on port 3000!')
})
