
/*
* Auto generated Codehooks (c) example
* Install: npm i codehooks-js codehooks-crudlify
*/
import {app} from 'codehooks-js'
import {crudlify} from 'codehooks-crudlify'
import { date, object, string } from 'yup';

const flashCardYup = object({
  front: string().required(),
  back: string().required(),
  category: string(), // optional
  createdOn: date().default(() => new Date()),
})

const todoItemYup = object({
  todoItem: string().required(),
  description: string(),
  createdOn: date().default(() => new Date())
})

// test route for https://<PROJECTID>.api.codehooks.io/dev/
app.get('/test', (req, res) => {
  res.json({result: "Im not sure what this means!"})
  // res.send('CRUD server ready')
})

// Use Crudlify to create a REST API for any collection
// crudlify(app)
crudlify(app, {flashCard: flashCardYup})

// bind to serverless runtime
export default app.init();
