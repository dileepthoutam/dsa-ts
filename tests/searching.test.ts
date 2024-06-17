import { binarySearch, linearSearch } from "../src/searching";

describe('testing searching', () => {
    test('test binary search', () => {
        let arr: number[] = [1, 2, 3, 4, 5];
        let target: number = 4;

        let got: number = binarySearch(arr, target);
        let want: number = 3;

        expect(got).toBe(want);
    });

    test('test binary search', () => {
        let arr: number[] = [1, 2, 3, 4, 5];
        let target: number = 44;

        let got: number = binarySearch(arr, target);
        let want: number = -1;

        expect(got).toBe(want);
    });

    test('test linear search', () => {
        let arr: number[] = [1, 2, 3, 4, 5];
        let target: number = 4;

        let got: boolean = linearSearch(arr, target);
        let want: boolean = true;

        expect(got).toBe(want);
    });

    test('test linear search', () => {
        let arr: number[] = [1, 2, 3, 4, 5];
        let target: number = 44;

        let got: boolean = linearSearch(arr, target);
        let want: boolean = false;

        expect(got).toBe(want);
    });
});
