// 数组去重

const de_weight = [2, 2, '2', 24, '24', true, true, 'b','true', 'a', {}, {}, '{}'];


const de_weight1 =  Array.from(new Set(de_weight));

const de_weight2 = (arr: any[]) => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        if (arr[i] === arr[j]) {
          arr.splice(j, 1);
          // 每删除一个树，j--保证j的值经过自加后不变。同时，len--，减少循环次数提升性能
          len--;
          j--;
        }
      }
    }
    return arr;
  }

  const de_weight3 = (arr: any[]) => {
    return arr.filter((item, index) => {
      return arr.indexOf(item) === index;
    });
  }

  const de_weight4 = (arr: any[]) => {
    const map = new Map();
    const res = [];
    for (let i = 0; i < arr.length; i++) {
      if (!map.has(arr[i])) {
        map.set(arr[i], true)
        res.push(arr[i]);
      }
    }
    return res;
  }
  

console.log(de_weight1, de_weight2(de_weight), de_weight3(de_weight), de_weight4(de_weight))
