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

;("use strict")

/**
 * This function displays an image and the weather.
 */

const weather2 = async (URLAddress) => {
  try {
    const request = await fetch(URLAddress)
    const jsonData = await request.json()
    let tempature1 = jsonData.main.temp
    let tempature2 = 0
    const feeling = jsonData.weather[0]
    const image = feeling.icon
    tempature2 = tempature1 - 273.15

    console.log(jsonData.weather)
    document.getElementById("theImage").innerHTML =
      "<img src='https://openweathermap.org/img/wn/" +
      image +
      "@2x.png' alt='Icon' width='10%'><br><h5>"
    ;(">")

    document.getElementById("theTemp").innerHTML =
      "The tempurature outside is " + tempature2.toFixed(2) + " °C!"
  } catch (err) {
    console.log(err)
  }
}

weather2(
  "https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5"
)
