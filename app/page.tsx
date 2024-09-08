import { About } from "./components/About/About"
import { Contact } from "./components/Contact/Contact"
import { Partners } from "./components/Partners/Partners"

export default function Home() {
  return (
    <div className="flex flex-col">
      <About></About>
      <Partners></Partners>
      <Contact></Contact>
    </div>
  )
}
