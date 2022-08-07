import { useState } from 'react'
export const useHistory = () => {
  const [history, setHistory] = useState([
    {
      startTime: '',
      asked: [],
      asking: [],
      remaining: [],
    },
  ])
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
      let i = -1
      let currentId = currentGroup.groupContents.reduce(
        (prevContent, currentContent) => {
          i += 1
          // 検索機能はここに追加
          if (status.wordFilter) {
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
            ][groupId] + i,
          ]
        },
        [],
      )
      console.log('currentId:' + currentId)
      return [...prevGroup, currentId]
    }, [])
    console.log('remaining id:' + remaining)
    newHistory.remaining = remaining
    newHistory.asked = []
    newHistory.asking = []
    setHistory(newHistory)
    console.log('selected question:')
  }
  return { selectQuestion }
}
