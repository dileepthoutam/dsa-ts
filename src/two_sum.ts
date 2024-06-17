
export function twoSum(arr: number[], target: number): number[] {
    const map: Map<number, number> = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (map.has(target - arr[i])) {
            return [map.get(target - arr[i]), i];
        } else {
            map.set(arr[i], i);
        }
    }
    return [-1, -1];
}
