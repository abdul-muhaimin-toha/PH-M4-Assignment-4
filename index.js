function calculateMoney(sales) {
  if (sales < 0) {
    return 'Invalid Number';
  }
  return 120 * sales - (500 + 50 * 8);
}

function checkName(childName) {
  if (typeof childName !== 'string') {
    return 'Invalid';
  }
  if (
    childName[childName.length - 1].toLowerCase() === 'a' ||
    childName[childName.length - 1].toLowerCase() === 'y' ||
    childName[childName.length - 1].toLowerCase() === 'i' ||
    childName[childName.length - 1].toLowerCase() === 'e' ||
    childName[childName.length - 1].toLowerCase() === 'o' ||
    childName[childName.length - 1].toLowerCase() === 'u' ||
    childName[childName.length - 1].toLowerCase() === 'w'
  ) {
    return 'Good Name';
  }
  return 'Bad Name';
}

function deleteInvalids(arr) {
  const newArr = [];
  if (!Array.isArray(arr)) {
    return 'Invalid Array';
  }
  for (const item of arr) {
    if (typeof item === 'number' && !isNaN(item)) {
      newArr.push(item);
    }
  }
  return newArr;
}

function password(obj) {
  if (
    obj.name === undefined ||
    obj.birthYear === undefined ||
    obj.siteName === undefined ||
    !(obj.birthYear >= 1000 && obj.birthYear <= 9999)
  ) {
    return 'Invalid';
  }
  return `${obj.siteName[0].toUpperCase() + obj.siteName.slice(1)}#${
    obj.name
  }@${obj.birthYear}`;
}

function monthlySavings(arr, livingCost) {
  let incomeAfterTax = 0;
  if (!Array.isArray(arr) || typeof livingCost !== 'number') {
    return 'Invalid input';
  }
  for (const item of arr) {
    if (item >= 3000) {
      incomeAfterTax += item - item * 0.2;
    } else {
      incomeAfterTax += item;
    }
  }
  if (incomeAfterTax < livingCost) {
    return 'Earn more';
  }
  return incomeAfterTax - livingCost;
}
