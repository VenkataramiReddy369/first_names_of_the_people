const peopleNamesList = require("../country/state/city/index");
const firstNames = require("../utilities/utils/index");
const getPeopleInCity = (peopleNamesList) => {
  return firstNames(peopleNamesList);
};
module.exports = getPeopleInCity;
