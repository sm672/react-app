import Hello from "./hello";
import Kgbutton from "./kgbutton";

function app(){

  let name = 'batman';
  let fullNmae = () =>{
    return 'bruce wayne';
  }
  return <h1>
    hello world
    <Kgbutton></Kgbutton>
    <Hello></Hello>
    i am {name} .
    i am {fullNmae()}
  </h1>
 

}

export default app;