import { useState } from 'react'
export const useHistory = () => {
  const [history, setHistory] = useState([
    {
      id: '',
      startTime: '',
      asked: [],
      asking: '',
      remaining: [],
      isAnswered: 1,
      finTime: '',
      review: [],
    },
  ])
  const showHistory = () => {
    return [...history]
  }
  const toggleReview = (id) => {
    let newHistory = history[history.length - 1]
    if (newHistory.review.indexOf(id) === -1) {
      newHistory.review.push(id)
    } else {
      newHistory.review.splice(newHistory.review.indexOf(id), 1)
    }
    setHistory([...history, newHistory])
    console.log('toggledReview:' + newHistory.review)
  }
  const nextQuestion = (status, score) => {
    let newHistory = [...history][history.length - 1]
    // 最後まで到達したときの結果保持
    console.log(
      score - history[history.length - 1].isAnswered >=
        history[history.length - 1].remaining.length +
          history[history.length - 1].asked.length +
          1,
    )
    if (
      score - history[history.length - 1].isAnswered >=
      history[history.length - 1].remaining.length +
        history[history.length - 1].asked.length +
        1
    ) {
      newHistory.finTime = new Date()
      console.log('everything is over:' + newHistory.finTime)
    }
    if (history[history.length - 1].isAnswered === 0) {
      history[history.length - 1].isAnswered = 1
      return
    }
    history[history.length - 1].isAnswered = 0

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
    if (status.mode === 'easy') {
      newHistory.choices = []
      let choiceBox = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
      ].splice(0, newHistory.asking.split(' ').length)
      while (
        newHistory.choices.length < 3 &&
        newHistory.length < choiceBox.length
      ) {
        const rand = Math.floor(Math.random() * choiceBox.length)
        newHistory.choices.push(choiceBox[rand])
        choiceBox.splice(rand, 1)
      }
    }
    setHistory([...history, newHistory])
    console.log(newHistory)
  }
  const selectQuestion = (status, vocabulary) => {
    let newHistory = [...history][history.length - 1]
    newHistory.startTime = new Date()
    newHistory.id = new Date().getTime()
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
    newHistory.asking = ''
    setHistory([...history, newHistory])
    console.log('selected question:')
  }

  return { showHistory, selectQuestion, nextQuestion, toggleReview }
}
