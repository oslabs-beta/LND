import { UrlWithParsedQuery, parse } from 'url';

export class Utils {
	public static parseUrl(url: string): UrlWithParsedQuery {
		if (!url) throw new Error('Empty Url');
		return parse(url, true);
	}

	public static toUpperCase(arg: string): string {
		return arg.toUpperCase();
	}
}

const last = <T>(arr: T[]) => arr[arr.length - 1];
const l = last([1, 2, 3]);
const l2 = last(['a', 'b', 'c']);

const makeArr = <T, Y = number>(x: T, y: Y) => [x, y];

const v = makeArr(5, 6);
const v2 = makeArr([12, true], 5);
const v3 = makeArr<string | null, number>('a', 8);

//returning a tuple
const makeTuple = <X, Y>(x: X, y: Y): [X, Y] => [x, y];

const stringTuple = makeTuple('5', 'e');

//Function signature
let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
	console.log(`${name} says ${greeting}`);
};
