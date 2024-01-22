import "./style.css";

const fibs = function (num) {
  let fibArray = [];
  for (let i = 0; i <= num - 1; i++) {
    if (fibArray.length < 2) {
      console.log(`index ${i}`);
      fibArray.push(i);
    } else {
      let fibElement = fibArray.at(-1) + fibArray.at(-2);

      console.log(
        `index = ${i} ${fibArray.at(-1)}, ${fibArray.at(
          -2
        )}, fibEl = ${fibElement}`
      );
    }
  }
  return fibArray;
};

console.log(fibs(8));

const fibsRec = function (num) {
  if (num === 2) {
    return [0, 1];
  } else {
    let copy = fibsRec(num - 1);
    copy.push(copy.at(-1) + copy.at(-2));
    return copy;
  }
};

console.log(fibsRec(8));

const mergeSort = function (arr) {
  if (arr.length === 1) {
    return [arr[0]];
  } else {
    let firstHalf =
      arr.length > 2
        ? mergeSort(arr.slice(0, arr.length / 2))
        : mergeSort(arr.slice(0, 1));
    let secondHalf =
      arr.length > 2
        ? mergeSort(arr.slice(arr.length / 2))
        : mergeSort(arr.slice(-1));
    let merge = [...firstHalf, ...secondHalf];
    console.log(merge);

    return merge.reduce((sorted, el) => {
      let index = 0;
      while (index < sorted.length && el > sorted[index]) index++;
      sorted.splice(index, 0, el);
      return sorted;
    }, []);
  }
};

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
