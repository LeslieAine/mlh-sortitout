// I am doing a Merge sort type
function mergeSort(arr) {
    if (arr.length <= 1) return arr.slice(); // return a copy
  
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
  
    return merge(left, right);
  }
  
  function merge(left, right) {
    const out = [];
    let i = 0, j = 0;
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) out.push(left[i++]);
      else out.push(right[j++]);
    }
    // append remaining
    while (i < left.length) out.push(left[i++]);
    while (j < right.length) out.push(right[j++]);
    return out;
  }
  
  // Example usage
  const b = [5, 3, 8, 4, 2, 7, 1, 10];
  const sortedB = mergeSort(b);
  console.log("Merge sorted :", sortedB);
  