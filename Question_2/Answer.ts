// Challenge 1/2
function getElement<T>(arr: T[] | null, idx: number): T | never {
  if (!arr) throw new Error("Array Not Provided");
  else if (idx >= arr.length || idx < 0) throw new Error("IDX is invalid");
  return arr[idx];
}

console.log(getElement<number>([1, 2, 3], 2));

console.log(getElement<string>(["a", "b", "c"], 1));

try {
  console.log(getElement<string>(["a", "b", "c"], 3));
} catch (err) {
  console.log(err);
}

console.log(getElement([true, false], 1));

// Challenge 3
type Object = {
  id: number;
  name: string;
  age: number;
};

const obj: Object = {
  id: 1,
  name: "himu",
  age: 21,
};

function getProperty<T extends object, V extends keyof T>(obj: T, key: V) {
  if (key in obj) return obj[key];
  throw new Error("Key is not present");
}

console.log(getProperty<Object, "name">(obj, "name"));

//Challenge 4

function getFirstElement<T extends number | string | null>(
  arr: T[],
): T | never | undefined {
  if (!arr) throw new Error("No array provided");
  if (arr.length === 0) return;
  return arr[0];
}

console.log(getFirstElement<number>([1, 2, 3]));

console.log(getFirstElement<string>(["a", "b"]));

console.log(getFirstElement<number>([]));

export {};
