const vendors= require('./data');

/**************************************************************************************/
//TASK 1
let avgs= [];
const avgSales = (vendor) => {
	const avg= vendor.dailySales.reduce((acc, val) =>{
		return acc+val;
	},0);

	//return {name : vendor.name, avg: (avg/7)};	// return Object title, avg
	return (avg/vendor.dailySales.length);	// return only the avg
}

Object.keys(vendors).forEach(function(key) {
  avgs.push(avgSales(vendors[key]));
});
// TASK 1 END
/**************************************************************************************/

/**************************************************************************************/
//TASK 2
/*To calculate the standard deviation of a set of numbers:

1. Work out the Mean (the simple average of the numbers)
2. Then for each number: subtract the Mean and square the result
3. Then work out the mean of those squared differences.
4. Take the square root of that and we are done!*/

const sigma = [];
const sigmaObj= [];
let mu =0;
let xiSquared= [];
let tempAvgSd=0;

Object.keys(vendors).forEach(function(key) {
  tempAvgSd= 0;
  mu = avgSales(vendors[key]);

  xiSquared= vendors[key].dailySales.map( oneDay => {
  	return (Number(oneDay)-mu)**2;
  })

  tempAvgSd= xiSquared.reduce( (acc, val) => {
  	return acc+val;
  },0)

  tempAvgSd= (1/xiSquared.length)*(tempAvgSd/xiSquared.length);

  sigmaObj.push({ name:  vendors[key].name, sigma: Math.sqrt(tempAvgSd)})
  sigma.push(Math.sqrt(tempAvgSd))
});
// TASK 2 END
/**************************************************************************************/
/**************************************************************************************/
//TASK 3
const sortedSigma= sigmaObj.sort( (a,b) => {
	if(a.sigma > b.sigma)
	{
		return 1; // a.sigma is greater then b.sigma
	}else if(a.sigma < b.sigma){
		return -1; // a.sigma is lower then b.sigma
	}
	return 0; // a.sigma is equal to b.sigma
});
// TASK 3 END
/**************************************************************************************/

module.exports= {
	avgs,
	sigma,
	sortedSigma
}