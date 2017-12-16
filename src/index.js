
interface User { }

interface Message {
  message_id: number,
  from?: User,
  text?: string,
}

interface Update {
  message: Message,
}

interface ExtraMessageParams {
  parse_mode?: 'Markdown' | 'HTML',
  disable_web_page_preview?: true,
  disable_notification?: true,
  reply_to_message_id?: number,
}

let msgid = 0


interface IContext {
  update: Update,
  message: Message,

  reply(text: string, extra?: ExtraMessageParams): Promise<Message>
}

/* eslint-disable class-methods-use-this */

class Context implements IContext {
  update: Update
  message: Message

  constructor() {
    this.message = { message_id: ++msgid }
    this.update = { message: this.message }
  }

  reply = async (text: string, extra?: ExtraMessageParams): Promise<Message> => {
    console.log('reply', { text, reply_to_message_id: this.message.message_id, ...extra })
    return {
      message_id: ++msgid,
    }
  }
}

type Middleware<C, R = void> = (ctx: C) => Promise<R> | R

async function run(fn: Middleware<IContext>) {
  const result = await fn(new Context())

  console.log({ result })
}

// ----
interface MeContext { me: string }
function withMe<I: IContext>(fn: Middleware<MeContext & I>): Middleware<I> {
  return (ctx) => {
    const nctx = { ...ctx, me: 'foo' }

    fn(nctx)
  }
}

interface AgeContext { age: number }
function withAge<I: IContext>(fn: Middleware<AgeContext & I>): Middleware<I> {
  return async (ctx) => {
    const nctx = { ...ctx, age: 23 }

    fn(nctx)
  }
}

run(withAge(withMe((ctx) => {
  ctx.reply('Foo')
  console.log(ctx.me, ctx.age)
})))
