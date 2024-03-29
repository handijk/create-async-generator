export const map = (fn) =>
  async function* (asyncIterable, ...args) {
    let i = 0;
    for await (const value of asyncIterable) {
      yield fn(value, i++, ...args);
    }
  };
