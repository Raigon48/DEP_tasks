// https://www.codewars.com/kata/transportation-on-vacation

const RENT_COST = 40;
const DISCOUNT = {
  MORE_THAN_SIX_DAYS : 50,
  MORE_THAN_THREE_DAYS : 20
}

function rentalCarCost(day) {
    let netCost = 0;
    if(day>6)
      netCost = (d*RENT_COST)-DISCOUNT.MORE_THAN_SIX_DAYS;
    else if(day>2)
      netCost = (day*RENT_COST)-DISCOUNT.MORE_THAN_THREE_DAYS;
    else 
      netCost = day*RENT_COST;
    return netCost;
  }