

function valueTonumber(nums) {
    let result = []
    for (let i = 0; i < nums.length; i++) {
        let newnums = Number(nums[i]);
        result.push(newnums)
    }
    return result
}



function findMean(nums){
  if(nums.length === 0) return 0;
  return nums.reduce(function (acc, cur) {
    return acc + cur;
  }) / nums.length
}


function findMode(arr){
  const mode = {};
  let max = 0, count = 0;

  for(let i = 0; i < arr.length; i++) {
    const item = arr[i];
    
    if(mode[item]) {
      mode[item]++;
    } else {
      mode[item] = 1;
    }
    
    if(count < mode[item]) {
      max = item;
      count = mode[item];
    }
  }
   
  return max;
};


function findMedian(arr){
  const { length } = arr;
  
  arr.sort((a, b) => a - b);
  
  if (length % 2 === 0) {
    return (arr[length / 2 - 1] + arr[length / 2]) / 2;
  }
  
  return arr[(length - 1) / 2];
};



module.exports = {
    findMean,
    findMedian,
    findMode,
    valueTonumber
};
