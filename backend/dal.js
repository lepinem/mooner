// dal.js

// getCurrentLocation pings the API / device? for GPS location - (lat, long)
function getCurrentLocation(){

}

// getCurrentPress pings the API / device? for current pressure
function getCurrentPress(){
  
}

// calPressChange has a max 10 pt score
function calPressChange(){

}

// calTempChange has a max 40 pt score
function calTempChange(){

}

// calExtremeConditions has a max 10 pt score
function calExtremeConditions(){

}

// calMaxWind has a max 10 pt score
function calMaxWind(){

}

// calHuntWindSpeed has a max 5 pt score
function calHuntWindSpeed(){

}

// calHuntDay is a coefficient to multiply the total value by - day 1 = *1; day 2 = *.67; day 3 = *.33
function calHuntDay(){

}

// calMoonPhase is either +5 or -5
function calMoonPhase(){

}

module.exports = {
  getCurrentLocation,
  getCurrentPress,
  calPressChange,
  calTempChange,
  calExtremeConditions,
  calMaxWind,
  calHuntWindSpeed,
  calHuntDay,
  calMoonPhase
}
