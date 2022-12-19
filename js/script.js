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
const getImage = async ("http://openweathermap.org/img/wn/10d@2x.png") => {
  try {
    const result = await fetch("http://openweathermap.org/img/wn/10d@2x.png")
    const jsonData = await result.json()
    console.log(jsonData)
    document.getElementById("api-image").innerHTML =
      '<img src="' + jsonData.url + '" alt="API image" class="center" ' + ">"
  } catch (err) {
    console.log(err)
  }
}

getImage(
  "https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5"
)
