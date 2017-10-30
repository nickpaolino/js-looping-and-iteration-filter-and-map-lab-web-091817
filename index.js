function driversWithRevenueOver(drivers, amount){
  return drivers.filter(function(element){
    return element.revenue > amount
  })
}

function driverNamesWithRevenueOver(drivers, amount){
  const newArray = drivers.map(function(element){
    if (element.revenue > amount){
      return element.name
    }
  })
  return newArray.filter(function(element){
    return element
  })
}

function exactMatch(drivers, obj){
  const matches = [];
  for (const entry of drivers){
    for (const element in obj){
      if (obj[element] === entry[element]){
        matches.push(entry);
      }
    }
  }
  return matches
}

function exactMatchToList(drivers, obj){
  const matches = [];
  for (const entry of drivers){
    for (const element in obj){
      if (obj[element] === entry[element]){
        matches.push(entry);
      }
    }
  }
  const newArray = matches.map(function(item){
    return item.name;
  })
  return newArray
}
