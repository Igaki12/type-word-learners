import { useState } from 'react'
export const useHistory = () => {
  const [history, useHistory] = useState([
    {
      time: '',
      asked: [],
      asking: [],
      remaining: [],
    },
  ])
  const selectQuestion = (status, vocabulary) => {
    let newHistory = [...history][history.length - 1]
    newHistory.time = new Date()
    vocabulary.forEach((group, groupIndex) => {
      if (status.vocabulary.indexOf(group.groupTag) === -1) {
        return
      }
      let i = 0
      group.reduce((prevRemaining, currentContent) => {
        i += 1
        let id =
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
          ][groupIndex] + i
        // 検索機能はここに追加予定
        return [...prevRemaining, id]
      }, [])
    })

    console.log('selected question:')
  }
  return {}
}
