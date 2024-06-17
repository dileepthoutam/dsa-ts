export function binarySearch(arr: number[], target: number): number {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if (target === arr[mid]) {
            return mid;
        } else if (target < arr[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}

export function linearSearch(arr: number[], target: number): boolean {
    for (let num of arr) {
        if (num === target) {
            return true;
        }
    }
    return false;
}
