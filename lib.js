 //checks if object is empty
 function isEmpty(obj) {
    for(var key in obj) {
        //checks if the obj has its own property and does not inhehrit it
        if(obj.hasOwnProperty(key))
        return false;
    }
    return true;
}

//priceStr to Number

function priceStrToNumber(priceStr){
    return Number(priceStr.replace(/[^0-9.-]+/g,""));
}


function numberToPriceStr(number,currency){

    //US format
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 2
      })

      return formatter.format(number)

}

// console.log(numberToPriceStr(1000,"MYR"));
// console.log(priceStrToNumber(numberToPriceStr(1000,"MYR")))

module.exports={priceStrToNumber,numberToPriceStr}