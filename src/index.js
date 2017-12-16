
interface User { }

interface Message {
  message_id: number,
  from?: User,
  text?: string,
}

interface Update {
  message: Message,
}

let msgid = 0


interface IContext {
  update: Update,
  message: Message,
}

class Context implements IContext {
  update: Update
  message: Message

  constructor() {
    this.message = { message_id: ++msgid }
    this.update = { message: this.message }
  }
}

type Middleware<C> = (ctx: C) => void

function run(fn: Middleware<IContext>) {
  fn(new Context())
}

// ----
interface MeContext { me: string }
function withMe<I: IContext>(fn: Middleware<MeContext & I>): Middleware<I> {
  return (ctx) => {
    const nctx = ({ ...ctx, me: 'foo' })

    fn(nctx)
  }
}

interface AgeContext { age: number }
function withAge<I: IContext>(fn: Middleware<AgeContext & I>): Middleware<I> {
  return (ctx) => {
    const nctx = Object.assign({}, ctx, { age: 23 })

    fn(nctx)
  }
}

run(withAge(withMe((ctx) => {
  console.log(ctx.me, ctx.age)
})))
