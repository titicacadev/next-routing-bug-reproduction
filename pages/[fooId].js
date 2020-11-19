import { useRouter } from 'next/router'

export default function FooId() {
  const { query } = useRouter()
  return <div>{query.fooId}</div>
}
