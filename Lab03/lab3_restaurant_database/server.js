const express = require('express');
const mongoose = require('mongoose');
const restaurantRouter = require('./routes/RestaurantRoutes.js');

const app = express();
app.use(express.json()); // Make sure it comes back as json

//TODO - Replace you Connection String here
mongoose.connect(
  'mongodb+srv://hyunjun:wjstjf1443@cluster0.7abhc.mongodb.net/gbc_full_stack?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }
);

app.use(restaurantRouter);

app.listen(8082, () => {
  console.log('Server is running...');
});
