const arr = [5, 4, 3, 2, 1];

function swap(arr, i, j) {
    let c;
    c = arr[i];
    arr[i] = arr[j];
    arr[j] = c;
}

function BS(arr, n) {
    for (let i = 0; i < n; i++) {
        let swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j + 1] < arr[j]) {
                swap(arr, j + 1, j);
                swapped = true;
            }
        }
        if (!swapped) break;
    }
}

console.log(arr);
BS(arr, 5);
console.log(arr);
