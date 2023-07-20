const drivers = [
    { name: "nick" },
    { name: "jan" },
    { name: "mary"},
];

function findMatching(drivers, query) {
    const lowerCaseQuery = query.toLowerCase();
    return drivers.filter(driver => driver.toLowerCase() === lowerCaseQuery);
}
function fuzzyMatch(drivers, query) {
    const lowerCaseQuery = query.toLowerCase();
    return drivers.filter(driver => driver.toLowerCase().startsWith(lowerCaseQuery));
}

function matchName(drivers, query) {
    return drivers.filter(driver => driver.name.toLowerCase() === query.toLowerCase());
}