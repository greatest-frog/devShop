const merge = (a, b, comp) => {
  let arr = [];
  let i = 0,
    j = 0;
  while (i < a.length && j < b.length) {
    if (comp(a[i], b[j]) >= 0) {
      arr.push(a[i]);
      i++;
    } else {
      arr.push(b[j]);
      j++;
    }
  }
  while (i < a.length) {
    arr.push(a[i]);
    i++;
  }
  while (j < b.length) {
    arr.push(b[j]);
    j++;
  }
  return arr;
};

// merge sort
const sorted = (arr, comp = () => 1) => {
  if (arr.length <= 1) {
    return arr;
  }
  return merge(
    sorted(arr.slice(0, Math.floor(arr.length / 2)), comp),
    sorted(arr.slice(Math.floor(arr.length / 2)), comp),
    comp
  );
};

export { sorted };
