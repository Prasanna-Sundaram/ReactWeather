// function getTempCallback(location, callback){
// callback(undefined,78);
// callback('City not found');
// }
//
// getTempCallback('Auckland',function(err,temp){
// if(err){
//   console.log('error',err);
// }
// else {
//   console.log('success',temp);
// }
// });
//
//
// function getTempPromise(location)
// {
//   return new Promise(function(resolve,reject){
//     setTimeout(function(){
//       resolve(79);
//       reject('City not found');
//     },1000);
//   });
// }
//
// getTempPromise('Auckland').then(function(temp){
// console.log('promise success',temp);
// },function(err){
// console.log('promise error',err);
// });

// Challenge Area

function addPromise(num1,num2)
{
  return new Promise(function(resolve,reject)
  {
    if(typeof num1 === 'number' && typeof num2 === 'number')
    {
      resolve(num1+num2);
    }
    else {
    reject('Numbers invalid');
    }

  }
);
}

addPromise(4,5).then(function(sum){
console.log('addition successful',sum);
},function(err){
  console.log('Error',err);
}
);


addPromise(4,'beautiful').then(function(sum){
console.log('addition successful',sum);
},function(err){
  console.log('Error',err);
}
);
