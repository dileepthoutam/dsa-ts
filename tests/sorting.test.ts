import { bubbleSort, insertionSort, mergeSort, quickSort, selectionSort } from "../src/sorting";

describe('test sorting', () => {
    test('test quick sort', () => {
        let got: number[] = [2, 2, 2, 1, 1, 1];
        let want: number[] = [1, 1, 1, 2, 2, 2];
        quickSort(got);

        expect(got).toStrictEqual(want);
    });

    test('test merge sort', () => {
        let got: number[] = [2, 2, 2, 1, 1, 1];
        let want: number[] = [1, 1, 1, 2, 2, 2];
        mergeSort(got);

        expect(got).toStrictEqual(want);
    });

    test('test insertion sort', () => {
        let got: number[] = [1, 2, 3, 2, 1];
        let want: number[] = [1, 1, 2, 2, 3];
        insertionSort(got);

        expect(got).toStrictEqual(want);
    });

    test('test insertion sort', () => {
        let got: number[] = [1, 2, -3, 2, 1];
        let want: number[] = [-3, 1, 1, 2, 2];
        insertionSort(got);

        expect(got).toStrictEqual(want);
    });

    test('test selection sort', () => {
        let got: number[] = [1, 2, 3, 2, 1];
        let want: number[] = [1, 1, 2, 2, 3];
        selectionSort(got);

        expect(got).toStrictEqual(want);
    });

    test('test selection sort', () => {
        let got: number[] = [1, 2, -3, 2, 1];
        let want: number[] = [-3, 1, 1, 2, 2];
        selectionSort(got);

        expect(got).toStrictEqual(want);
    });

    test('test bubble sort', () => {
        let got: number[] = [1, 2, 3, 2, 1];
        let want: number[] = [1, 1, 2, 2, 3];
        bubbleSort(got);

        expect(got).toStrictEqual(want);
    });

    test('test bubble sort', () => {
        let got: number[] = [1, 2, -3, 2, 1];
        let want: number[] = [-3, 1, 1, 2, 2];
        bubbleSort(got);

        expect(got).toStrictEqual(want);
    });
});

