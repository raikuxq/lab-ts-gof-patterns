export function memoize<Key , Value> (fn: Function): Function {
  const cache = new Map<string, Value>();

  return function (...args: Array<Key>) {
    const jsonArgs = JSON.stringify(args);

    if (cache.has(jsonArgs)) {
      return cache.get(jsonArgs);
    }

    const result = fn(...args);
    cache.set(jsonArgs, result);
    return result;
  }
}

export function getAverageInArray(arr: Array<number>): number {
  const sum = arr.reduce((acc: number, item: number) => acc + item, 0);

  return sum / arr.length;
}

export function getMinInArray(arr: Array<number>): number {
  return arr.reduce((acc: number, item: number) => acc < item ? acc : item, Infinity)
}

export function getMaxInArray(arr: Array<number>): number {
  return arr.reduce((acc: number, item: number) => acc > item ? acc : item, -Infinity)
}
