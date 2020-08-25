import { MongoHelper } from '../infra/db/mongodb/helpers/mongo-helper'
import env from './config/env'

MongoHelper.connect(env.mongoUrl)
  .then(async () => {
    console.log(process.env.MONGO_URL)
    console.log(env.mongoUrl)
    console.log(env.port)
    const app = (await import('./config/app')).default
    app.listen(env.port, () => console.log(`Server Running at http://localhost:${env.port}`))
  })
  .catch(console.error)
