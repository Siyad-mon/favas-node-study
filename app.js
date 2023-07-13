import express from 'express'
const app = express();

app.use(express.json())  //latest code for body parser

import Router from './router/index.js';


app.get('/',(req, res, next) => {
  res.send("siyad")
})

app.use('/api', Router);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Port running on ${PORT}`);
});
