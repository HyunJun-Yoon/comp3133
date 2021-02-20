const mongoose = require('mongoose');
var validate = require('mongoose-validator');

// var phoneValidator = [
//   validate({
//     validator: 'matches',
//     arguments: /^\d{1}-\d{3}-\d{3}-\d{4}$/,
//     message: 'Please enter valid phone number'
//   })
// ];

const UserValSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    minlength: [4, 'Username is too short']
  },
  email: {
    type: String,
    required: true,
    trim: true,
    validate: [
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/,
      'Please enter valid email'
    ]
  },
  address: {
    street: {
      type: String,
      required: true
    },
    suite: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true,
      validate: [/^[a-zA-Z]+(\s[a-zA-Z]+)?$/, 'Please enter valid city name']
    },
    zipcode: {
      type: String,
      required: true,
      validate: [/^\d{5}-\d{4}$/, 'Please enter valid zip code']
    },
    geo: {
      lat: {
        type: Number,
        required: true
      },
      lng: {
        type: Number,
        required: true
      }
    }
  },
  phone: {
    type: String,
    required: true,
    validate: [/^\d{1}-\d{3}-\d{3}-\d{4}$/, 'Please enter valid phone number']
  },
  website: {
    type: String,
    required: true,
    validate: {
      validator: v => {
        var re = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
        return re.test(v);
      },
      message: 'Please enter valid url'
    }
  },
  company: {
    name: {
      type: String,
      required: true
    },
    catchPhrase: {
      type: String,
      required: true
    },
    bs: {
      type: String,
      required: true
    }
  }
});

const UserVal = mongoose.model('UserVal', UserValSchema);
module.exports = UserVal;
