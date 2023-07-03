var convertTemperature = function(celsius) {
    const temp=[]
const kelvin= celsius +273.15
const fahr=(celsius*1.80) +32
temp.push(kelvin.toFixed(5),fahr.toFixed(5))

return temp
};


console.log(convertTemperature( 36.50))