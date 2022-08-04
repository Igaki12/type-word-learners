import { Title } from './Title'
import { Practice } from './Practice'
import {useVocabulary} from '../useVocabulary'

function App() {
  const {showVocabulary} =useVocabulary();
  const vocabulary = showVocabulary()
  return (
    <>
      <Title vocabulary={vocabulary} />
      <Practice vocabulary={vocabulary} />
    </>
  )
}

export default App
