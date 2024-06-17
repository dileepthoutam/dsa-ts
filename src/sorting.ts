
function partition(arr: number[], start: number, end: number): number {
    let pivot: number = arr[end];
    let i = start - 1;

    for (let j = start; j < end; j++) {
        if (arr[j] <= pivot) {
            i++;
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    let temp = arr[i + 1];
    arr[i + 1] = arr[end];
    arr[end] = temp;

    return i + 1;
}

function quickSortHelper(arr: number[], start: number, end: number) {
    if (start < end) {
        let index: number = partition(arr, start, end);
        quickSortHelper(arr, start, index - 1);
        quickSortHelper(arr, index + 1, end);
    }
}

export function quickSort(arr: number[]) {
    quickSortHelper(arr, 0, arr.length - 1);
}

export function insertionSort(arr: number[]) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
}

export function selectionSort(arr: number[]) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}

export function bubbleSort(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

function merge(arr: number[], start: number, mid: number, end: number) {
    let left = mid - start + 1;
    let right = end - mid;

    let leftArr: number[] = new Array(left);
    let rightArr: number[] = new Array(right);

    for (let i = 0; i < left; i++) {
        leftArr[i] = arr[start + i];
    }
    for (let j = 0; j < right; j++) {
        rightArr[j] = arr[mid + 1 + j];
    }

    let i = 0, j = 0, k = start;
    while (i < left && j < right) {
        if (leftArr[i] <= rightArr[j]) {
            arr[k++] = leftArr[i++];
        } else {
            arr[k++] = rightArr[j++];
        }
    }

    while (i < left) {
        arr[k++] = leftArr[i++];
    }

    while (j < right) {
        arr[k++] = rightArr[j++];
    }
}

function mergeSortHelper(arr: number[], start: number, end: number) {
    if (start < end) {
        let mid = start + Math.floor((end - start) / 2);
        mergeSortHelper(arr, start, mid);
        mergeSortHelper(arr, mid + 1, end);
        merge(arr, start, mid, end);
    }
}

export function mergeSort(arr: number[]) {
    mergeSortHelper(arr, 0, arr.length - 1);
}

