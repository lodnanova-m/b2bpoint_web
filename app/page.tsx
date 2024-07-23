import { About } from "./components/About/About";
import { Partners } from "./components/Partners/Partners";
import { Contact } from "./components/Contact/Contact";

export default function Home() {
  return (
    <div className="flex flex-col px-40">
      <About></About>
      <Partners></Partners>
      <Contact></Contact>
    </div>
  );
}
