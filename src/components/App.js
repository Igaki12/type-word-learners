import { Title } from './Title'
import { Practice } from './Practice'
import { useVocabulary } from '../useVocabulary'
import { useStatus } from '../hooks/useStatus'
import { useState } from 'react'
import { useHistory } from '../hooks/useHistory'

function App() {
  const { showVocabulary } = useVocabulary()
  const {
    showStatus,
    changeMode,
    changeOrder,
    toggleVocabulary,
    addWordFilter,
    deleteWordFilter,
  } = useStatus()
  let status = showStatus()
  const vocabulary = showVocabulary()
  const { showHistory, selectQuestion, nextQuestion } = useHistory()
  const history = showHistory()
  const [text, setText] = useState()
  return (
    <>
      {text}
      {status.mode === 'title' ? (
        <>
          <Title
            setText={setText}
            text={text}
            status={status}
            vocabulary={vocabulary}
            changeMode={changeMode}
            changeOrder={changeOrder}
            toggleVocabulary={toggleVocabulary}
            selectQuestion={selectQuestion}
            nextQuestion={nextQuestion}
            addWordFilter={addWordFilter}
            deleteWordFilter={deleteWordFilter}
          />
        </>
      ) : (
        <></>
      )}
      {status.mode === 'practice' ? (
        <>
          <Practice vocabulary={vocabulary} history={history} />
        </>
      ) : (
        <></>
      )}
    </>
  )
}

export default App
