import Header from "./components/header.tsx/page"
import State from "./components/state.tsx/page";

export default function Home() {
  const x= 10;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    gucci
    <Header  name='gul' />
    <Header name='umar'/>
    <Header name='ammara gul'/>
    <State/>
    {/* <p>{ (x) < 15 ? "Greater":"Smaller"}</p> */}
    </main>
  )
}
