const findMatching = function (drivers, string) {
    return drivers.filter((name) => name.toLowerCase() === string.toLowerCase());
  };

const fuzzyMatch = function (drivers, letters) {
    return drivers.filter((name) => name[0] === letters[0])
}

function matchName(drivers, string) {
    return drivers.filter(driver => driver.name === string);
}