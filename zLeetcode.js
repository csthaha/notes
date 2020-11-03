var findMedianSortedArrays = function(nums1, nums2) {
  var merged = [];
  let i = 0, j = 0;
  while(i < nums1.length && j < nums2.length) {
    if(nums1[i] < nums2[j]) {
      merged.push(nums1[i]);
      i++;
    } else {
      merged.push(nums2[j]);
      j++;
    }
  }
  while(i < nums1.length) {
    merged.push(nums1[i]);
    i++;
  }
  while(j < nums2.length) {
    merged.push(nums2[j]);
    j++;
  }
  return (merged.length % 2 === 1) 
    ? merged[Math.floor(merged.length / 2)] 
    : (merged[Math.floor(merged.length / 2)] + merged[Math.floor(merged.length / 2) - 1]) / 2;
};

console.log(findMedianSortedArrays([1,2,5],[3,4]))
console.log(findMedianSortedArrays([1,4],[2,3]))

// leetCode 求数组中位数