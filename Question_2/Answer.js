// Challenge 1/2
function getElement(arr, idx) {
    if (!arr)
        throw new Error("Array Not Provided");
    else if (idx >= arr.length || idx < 0)
        throw new Error("IDX is invalid");
    return arr[idx];
}
console.log(getElement([1, 2, 3], 2));
console.log(getElement(["a", "b", "c"], 1));
try {
    console.log(getElement(["a", "b", "c"], 3));
}
catch (err) {
    console.log(err);
}
console.log(getElement([true, false], 1));
const obj = {
    id: 1,
    name: "himu",
    age: 21
};
function getProperty(obj, key) {
    if (key in obj)
        return obj[key];
    throw new Error("Key is not present");
}
console.log(getProperty(obj, "name"));
//Challenge 4
function getFirstElement(arr) {
    if (!arr)
        throw new Error("No array provided");
    if (arr.length === 0)
        return;
    return arr[0];
}
console.log(getFirstElement([1, 2, 3]));
console.log(getFirstElement(['a', 'b']));
console.log(getFirstElement([]));
export {};
