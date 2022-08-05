import { Title } from './Title'
import { Practice } from './Practice'
import { useVocabulary } from '../useVocabulary'
import { useStatus } from '../hooks/useStatus'
import { useState } from 'react'

function App() {
  const { showVocabulary } = useVocabulary()
  const { showStatus, changeMode, changeOrder, toggleVocabulary } = useStatus()
  let status = showStatus()
  const vocabulary = showVocabulary()
  const [text,setText] = useState();
  return (
    <>
    {text}
      {status.mode === 'title' ? (
        <>
          <Title
          setText={setText}
            status={status}
            vocabulary={vocabulary}
            changeMode={changeMode}
            changeOrder={changeOrder}
            toggleVocabulary={toggleVocabulary}
          />
        </>
      ) : (
        <></>
      )}
      {status.mode === 'practice' ? (
        <>
          <Practice vocabulary={vocabulary} />
        </>
      ) : (
        <></>
      )}
    </>
  )
}

export default App
