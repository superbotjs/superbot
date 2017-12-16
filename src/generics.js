
interface Demo {
  name: string,
}

type Handler<T> = (t: T) => void

function foo<T: Demo>(fn: Handler<T>) {
  const t: T = { name: 'foo' }
}
