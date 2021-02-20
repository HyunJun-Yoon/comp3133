const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  cuisin: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  address: {
    building: {
      type: Number,
      required: true
    },
    street: {
      type: String,
      required: true
    },
    zipcode: {
      type: Number,
      required: true
    }
  },
  resutaurant_id: {
    type: Number,
    required: true,
    unique: [true, 'Duplicate Restaurant ID Not Allowed']
  }
});

const Restaurants = mongoose.model('Restaurants', RestaurantSchema);
module.exports = Restaurants;
