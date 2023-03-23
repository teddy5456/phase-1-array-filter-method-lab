function findMatching(drivers, searchString) {
    return drivers.filter(driver => driver.toLowerCase().includes(searchString.toLowerCase()));
  }
  
  const drivers = ['John', 'jane', 'Bob', 'mary'];
  const searchString = 'Jo';
  const result = findMatching(drivers, searchString);
  console.log(result);

  function fuzzyMatch(drivers, searchString) {
    return drivers.filter(driver => driver.startsWith(searchString) && driver.slice(0, searchString.length) === searchString);
  }
  
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  