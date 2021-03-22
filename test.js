const { areaOfCircle } = require('./library')
const { isStartWithCapital } = require('./library')

const AREA_OF_CIRCLE_DUMMY_DATA = {
  radius: 2,
  area: 12.566370614359172,
}

const STARTS_WITH_CAPITAL_DUMMY_DATA = {
  string: 'New',
  result: true
}

console.log('Running Tests...');

console.log("Test for area of circle")
if(areaOfCircle(AREA_OF_CIRCLE_DUMMY_DATA.radius) === AREA_OF_CIRCLE_DUMMY_DATA.area) {
  console.log("Test Passed");
} else {
  console.log("Test Failed");
}

console.log("Test for string starts with Capital letter")
if(isStartWithCapital(STARTS_WITH_CAPITAL_DUMMY_DATA.string) === STARTS_WITH_CAPITAL_DUMMY_DATA.result) {
  console.log("Test Passed");
} else {
  console.log("Test Failed");
}

console.log('Tests Completed');