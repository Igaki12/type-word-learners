import { Title } from './Title'
import { Practice } from './Practice'
import { useVocabulary } from '../useVocabulary'
import { useStatus } from '../hooks/useStatus'
import { useState } from 'react'
import { useHistory } from '../hooks/useHistory'
import { Easy } from './Easy'

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
  const {
    showHistory,
    selectQuestion,
    nextQuestion,
    toggleReview,
    selectChoice,
  } = useHistory()
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
          <Practice
            vocabulary={vocabulary}
            history={history}
            nextQuestion={nextQuestion}
            status={status}
            toggleReview={toggleReview}
          />
        </>
      ) : (
        <></>
      )}
      {status.mode === 'easy' ? (
        <>
          <Easy
            vocabulary={vocabulary}
            history={history}
            nextQuestion={nextQuestion}
            status={status}
            toggleReview={toggleReview}
            selectChoice={selectChoice}
          ></Easy>
        </>
      ) : (
        <></>
      )}
    </>
  )
}

export default App
