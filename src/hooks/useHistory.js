import { useState } from 'react'
export const useHistory = () => {
  const [history, setHistory] = useState([
    {
      startTime: '',
      asked: [],
      asking: '',
      remaining: [],
    },
  ])
  const showHistory = () => {
    return [...history]
  }
  const nextQuestion = (status) => {
    let newHistory = [...history][history.length - 1]
    if (newHistory.asking !== '') {
      newHistory.asked.push(newHistory.asking)
      newHistory.asking = ''
    }
    if (newHistory.remaining.length < 1) {
      return
    }
    if (status.order === 'ascend') {
      console.log(newHistory.remaining.sort()[0])
      newHistory.asking = newHistory.remaining.sort()[0]
      newHistory.remaining.shift()
    } else if (status.order === 'random') {
      let ranNum = Math.floor(Math.random() * newHistory.remaining.length)
      console.log('ranNum:' + ranNum)
      console.log(newHistory.remaining[ranNum])
      newHistory.asking = newHistory.remaining[ranNum]
      newHistory.remaining.splice(ranNum, 1)
    }
    setHistory([...history,newHistory])
    console.log(newHistory)
  }
  const selectQuestion = (status, vocabulary) => {
    let newHistory = [...history][history.length - 1]
    newHistory.startTime = new Date()
    let groupId = -1
    let remaining = vocabulary.reduce((prevGroup, currentGroup) => {
      groupId += 1
      console.log('status.vocabulary:' + status.vocabulary + '/' + groupId)
      if (status.vocabulary.indexOf(groupId) === -1) {
        return [...prevGroup]
      }
      console.log(currentGroup)
      let i = 0
      let currentId = currentGroup.groupContents.reduce(
        (prevContent, currentContent) => {
          i += 1
          // 検索機能はここに追加
          if (status.wordFilter.length > 0) {
            if (
              status.wordFilter.every((word) => {
                return (
                  currentContent.word.indexOf(word) === -1 &&
                  currentContent.sentence.indexOf(word) === -1
                )
              })
            ) {
              return [...prevContent]
            }
          }
          return [
            ...prevContent,
            [
              'a',
              'b',
              'c',
              'd',
              'e',
              'f',
              'g',
              'h',
              'i',
              'j',
              'k',
              'l',
              'm',
              'n',
              'o',
              'p',
              'q',
              'r',
              's',
              't',
              'u',
              'v',
              'w',
              'x',
              'y',
              'z',
            ][groupId] + ('000' + i).slice(-3),
          ]
        },
        [],
      )
      console.log('currentId:' + currentId)
      return [...prevGroup, ...currentId]
    }, [])
    console.log(remaining)
    newHistory.remaining = remaining
    newHistory.asked = []
    newHistory.asking = []
    setHistory([...history,newHistory])
    console.log('selected question:')
  }

  return { showHistory,selectQuestion, nextQuestion }
}
