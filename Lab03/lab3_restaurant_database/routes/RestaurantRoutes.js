const express = require('express');
const restaurantModel = require('../models/Restaurants');
const app = express();

// Read ALL
// http://localhost:8081/restaurants

app.get('/Restaurants', async (req, res) => {
  console.log('sadas');
  const Restaurants = await restaurantModel.find({});

  try {
    res.status(200).send(Restaurants);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Search By Cuisine Name
// http://localhost:8081/cuisine/Name
app.get('/Restaurants/cuisine/:name', async (req, res) => {
  const name = req.params.name;
  const Restaurants = await restaurantModel.find({ cuisine: name });

  try {
    if (Restaurants.length != 0) {
      res.send(Restaurants);
    } else {
      res.send(JSON.stringify({ status: false, message: 'No data found' }));
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

// The selected columns must include id, cuisines, name, city, resturant_id
// The sorting by the restaurant_id in Ascending or Descending Order based on parameter passed.
// http://localhost:8081/restaurants?sortBy=ASC
// http://localhost:8081/restaurants?sortBy=DESC

app.get('/Restaurants', async (req, res) => {
  const sort = req.query.sortBy;
  const Restaurants = await employeeModel
    .find({})
    .select('cuisine, name, city, restaurant_id')
    .sort({ restaurant_id: sort });
  try {
    if (restaurants.length != 0) {
      res.send(Restaurants);
    } else {
      res.send(JSON.stringify({ status: false, message: 'No data found' }));
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

// Create REST API to return restaurants details where all cuisines are equal to Delicatessen and the city is not equal to Brooklyn
// The selected columns must include cuisines, name and city, but exclude id
// The sorting order must be Ascending Order on the name
// http://localhost:8081/restaurants/Delicatessen

app.get('/Restaurants/Delicatessen', async (req, res) => {
  const name = req.params.name;
  const Restaurants = await restaurantModel
    .find({ cuisine: { $eq: 'Delicatessen' } })
    .where({ city: { $ne: 'Broobklyn' } })
    .select('cuisine name city')
    .sort({ name: 'asc' });
  try {
    if (Restaurants.length != 0) {
      res.send(Restaurants);
    } else {
      res.send(JSON.stringify({ status: false, message: 'No data found' }));
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;
