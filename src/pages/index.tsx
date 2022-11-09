import { trpc } from "../utils/trpc";
export default function Home() {
  const result = trpc.greeting.useQuery({ name: "Oscar"  })
  return (
    <h1>oi{result?.data?.text}</h1>
  )
}
