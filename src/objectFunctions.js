const filter = (obj, rule) => {
  const filtered = {};
  for (let [id, data] of Object.entries(obj)) {
    if (rule(data)) {
      filtered[id] = data;
    }
  }
  return filtered;
};

const map = (obj, rule) => {
  const mapped = [];
  for (let [id, data] of Object.entries(obj)) {
    mapped.push(rule(data, id));
  }
  return mapped;
};

const average = (obj, rule) => {
  let k = 0;
  let totalRating = 0;
  for (const [, data] of Object.entries(obj)) {
    k += 1;
    totalRating += rule(data);
  }
  return totalRating / k;
};

export { filter, map, average};
