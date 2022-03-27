import { conclass } from "@rzfury/conclass";
import { lookup } from "@rzfury/lookup";

/** Very professional testing (of course not) */

function App() {
  const a: any = false;
  const cl = conclass('a', 'block text-white', true && 'yes', a && 'no'); 
  const lk = lookup(
    'Time',
    [
      ['Time', 'yesyes'],
      ['Clock', 'klokloklok']
    ],
    'clok'
  );
  console.log(cl, lk);
}
App();
