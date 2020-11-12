require("dotenv").config();
require("../lib/connection");
const Carpark = require("../models/carpark.model");

Carpark.insertMany([
  {
    name: "Carpark A",
    location: "East Coast",
    maxCapacity: 200,
  },
  {
    name: "Carpark B",
    location: "East Coast",
    maxCapacity: 150,
  },
  {
    name: "Carpark C",
    location: "East Coast",
    maxCapacity: 90,
  },
  {
    name: "Carpark D",
    location: "East Coast",
    maxCapacity: 100,
  },
  {
    name: "Carpark E",
    location: "East Coast",
    maxCapacity: 210,
  },
  {
    name: "Carpark F",
    location: "East Coast",
    maxCapacity: 180,
  },
])
  .then((suc) => {
    console.log("successfully added!");
  })
  .catch((e) => {
    console.log(e);
  });
