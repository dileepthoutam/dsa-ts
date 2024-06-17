import {twoSum} from "../src/two_sum";

describe('testing two sum', () => {
    test('two sum #1', () => {
        let arr: number[] = [1, 2, 3, 4];
        let target: number = 7;

        let got: number[] = twoSum(arr, target);
        let want: number[] = [2, 3];

        expect(got).toStrictEqual(want);
    });
});
