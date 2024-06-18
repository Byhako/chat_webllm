// import { CreateMLCEngine, WebWorkerMLCEngineHandler, MLCEngine, MLCEngineWorkerHandler } from "https://esm.run/@mlc-ai/web-llm"


// const engine = new MLCEngine()
// const handler = new MLCEngineWorkerHandler(engine)

// onmessage = msg => {
//   handler.onmessage(msg)
// }

postMessage("I'm working before postMessage('ali').");

// onmessage = function (e) {
//   console.log('Mensaje recibido en worker')
//   console.log(e)

//   if (e.data.name === 'Toto') {
//     postMessage('Hola Toto')
//   }
// }


// const handler = new WebWorkerMLCEngineHandler();
// self.onmessage = (msg) => {
//   handler.onmessage(msg);
// };