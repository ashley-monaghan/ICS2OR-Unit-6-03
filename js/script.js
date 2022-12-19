// Copyright (c) 2022 Ashley Monaghan All rights reserved
//
// Created by: Ashley Monaghan
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2OR-Unit-6-03/sw.js", {
    scope: "/ICS2OR-Unit-6-03/",
  })
}

/**
 * This function displays an alert.
 * Math
 */
const getImage = async (URLAddress) => {
  try {
    const result = await fetch(URLAddress)
    const jsonData = await result.json()
    console.log(jsonData)
    document.getElementById("api-image").innerHTML =
      '<img src="' + jsonData.url + '" alt="API image" class="center" ' + ">"
    if (jsonData.artist_url != "none") {
      document.getElementById("image-artist").innerHTML =
        "<p>Artist: " +
        '<a href="' +
        jsonData.artist_url +
        '">' +
        jsonData.artist +
        "</a>"
    } else {
      document.getElementById("image-artist").innerHTML =
        "<p>Artist: unknown</p>"
    }
  } catch (err) {
    console.log(err)
  }
}

getImage("https://api.https://www.google.com/url?q=https%3A%2F%2Fopenweathermap.org%2Fweather-conditions&sa=D&sntz=1&usg=AOvVaw25gMqUGVU4FAcAo7HIPSZs.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5")
