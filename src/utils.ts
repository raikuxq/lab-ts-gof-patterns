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
