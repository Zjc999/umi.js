// 数组扁平化

const arr = [1, [2, [3, [4, 5]]], 6];

const res1 = arr.flat(Infinity);

const res2 = JSON.stringify(arr).replace(/\[|\]/g, '').split(',');

const res3 = JSON.parse('[' + JSON.stringify(arr).replace(/\[|\]/g, '') + ']');

const flatten: any = (arr1: any[]) => {
    return arr1.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
    }, [])
}
const res4 = flatten(arr);

console.log(res1, res2, res3, res4);