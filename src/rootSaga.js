import { watchTestSaga } from './views/Toilets/sagas'

export default function* rootSaga() {
  yield [
    watchTestSaga()
  ]
}
