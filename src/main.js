import express from "express";
import helmet from "helmet";
import cors from "cors";
import compression from "compression"; //Dependencias necesarias y minimas para funcionamiento tanto de security como reduccion de costos y funcionamiento.

const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use(compression());
app.use(helmet());

const NODE_PORT = 3001;

app.listen(NODE_PORT, () => {
  console.log("port listening " + NODE_PORT);

  console.log(`Listening to port ${NODE_PORT}`);
});

const HELLO = () =>{
  return `Hello World`
}

const MESSAGE = HELLO();

console.log(MESSAGE)

const message2 = (paramter1)=>{
 return `Hello World ${paramter1}`
}

const hola = message2("and bye")
console.log(hola)


const message3 = async (mensaje, fx) => {

  await new Promise((resolve) => setTimeout(resolve, 5000));
  fx(`Hola Mundo ${mensaje}`)

}

message3("y adios", (value)=>{
  console.log(value)

})

