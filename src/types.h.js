export type $Spread<A, B> = /* ::{
  ...$Exact<A>,
  ...$Exact<B>,
}
type noop1<A, B> = */ A & B
