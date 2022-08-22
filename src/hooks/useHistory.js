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
      // 以下practice mode では使わない
      correct: 0,
      incorrect: 0,
      // 以下hard限定
      spellingCorrect: [],
      orderCorrect: [],
    },
  ])
  const showHistory = () => {
    return [...history]
  }
  const checkTxtAnswer = (value, askingSentence) => {
    let newHistory = history[history.length - 1]
    newHistory.isAnswered = 1
    const newSpellingCollect = askingSentence
      .split(' ')
      .reduce((prev, currentWord) => {
        if (
          // 100% match
          value
            .toLowerCase()
            .replace(/\./g, '')
            .replace(/\?/g, '')
            .replace(/!/g, '')
            .replace(/,/g, '')
            .indexOf(
              currentWord
                .toLowerCase()
                .replace(/\./g, '')
                .replace(/\?/g, '')
                .replace(/!/g, '')
                .replace(/,/g, ''),
            ) !== -1
        ) {
          return (
            prev +
            currentWord
              .toLowerCase()
              .replace(/\./g, '')
              .replace(/\?/g, '')
              .replace(/!/g, '')
              .replace(/,/g, '').length /
              [
                value
                  .toLowerCase()
                  .replace(' ', '')
                  .replace(/\./g, '')
                  .replace(/\?/g, '')
                  .replace(/!/g, '')
                  .replace(/,/g, '').length,
                askingSentence
                  .toLowerCase()
                  .replace(' ', '')
                  .replace(/\./g, '')
                  .replace(/\?/g, '')
                  .replace(/!/g, '')
                  .replace(/,/g, '').length,
              ].sort((a, b) => b - a)[0]
          )
        }
        return prev
      }, 0)
    newHistory.spellingCorrect.push(newSpellingCollect)
    console.log('spelling collect:' + newSpellingCollect)
    const answerOrder = askingSentence
      .split(' ')
      .reduce((prev, currentWord) => {
        if (
          // 100% match
          value
            .toLowerCase()
            .replace(/\./g, '')
            .replace(/\?/g, '')
            .replace(/!/g, '')
            .replace(/,/g, '')
            .indexOf(
              currentWord
                .toLowerCase()
                .replace(/\./g, '')
                .replace(/\?/g, '')
                .replace(/!/g, '')
                .replace(/,/g, ''),
            ) !== -1
        ) {
          if (
            askingSentence
              .toLowerCase()
              .replace(/\./g, '')
              .replace(/\?/g, '')
              .replace(/!/g, '')
              .replace(/,/g, '')
              .match(
                new RegExp(
                  currentWord
                    .toLowerCase()
                    .replace(/\./g, '')
                    .replace(/\?/g, '')
                    .replace(/!/g, '')
                    .replace(/,/g, ''),
                  'g',
                ),
              ).length > 1
          ) {
            return prev
          } else {
            return [
              ...prev,
              value
                .toLowerCase()
                .replace(/\./g, '')
                .replace(/\?/g, '')
                .replace(/!/g, '')
                .replace(/,/g, '')
                .indexOf(
                  currentWord
                    .toLowerCase()
                    .replace(/\./g, '')
                    .replace(/\?/g, '')
                    .replace(/!/g, '')
                    .replace(/,/g, ''),
                ),
            ]
          }
        }
        return prev
      }, [])
    console.log(answerOrder)
    let newOrderCollect = 0
    answerOrder.forEach((num, index) => {
      if (index === 0) {
        if (answerOrder.slice().sort((a, b) => a - b)[0] === num) {
          newOrderCollect += 1 / answerOrder.length
        }
        return
      } else if (index === answerOrder.length - 1) {
        if (answerOrder.slice().sort((a, b) => b - a)[0] === num) {
          newOrderCollect += 1 / answerOrder.length
        }
        return
      } else if (num > answerOrder[index - 1] && num < answerOrder[index + 1]) {
        newOrderCollect += 1 / answerOrder.length
        return
      } else if (num > answerOrder[index - 1] || num < answerOrder[index + 1]) {
        newOrderCollect += 0.5 / answerOrder.length
        return
      }
    })
    newHistory.orderCorrect.push(newOrderCollect)
    console.log('order collect:' + newOrderCollect)
    if (newOrderCollect <= 0.5 || newSpellingCollect <= 0.5) {
      newHistory.review.push(newHistory.asking)
    }
    setHistory([...history, newHistory])
    console.log('judged answer')
  }
  const selectChoice = (index) => {
    let newHistory = history[history.length - 1]
    if (newHistory.answer === [] || newHistory.answer.indexOf(index) === -1) {
      newHistory.answer.push(index)
    } else {
      newHistory.answer.splice(newHistory.answer.indexOf(index), 1)
    }
    setHistory([...history, newHistory])
    console.log('selectChoice:' + newHistory.answer)
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

  const nextQuestion = (status, score, vocabulary) => {
    let newHistory = [...history][history.length - 1]
    // 最後まで到達したときの結果保持
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
      if (newHistory.answer && newHistory.answer.length > 2) {
        if (
          newHistory.answer.every((num, index) => {
            return (
              num === newHistory.answer.slice().sort((a, b) => a - b)[index]
            )
          })
        ) {
          newHistory.correct += 1
          console.log('正解:' + newHistory.answer)
        } else {
          newHistory.review.push(newHistory.asked[newHistory.asked.length - 1])
          newHistory.incorrect += 1
          console.log(
            '不正解:' +
              newHistory.answer +
              '=>' +
              newHistory.answer.slice().sort((a, b) => a - b),
          )
        }
      }
      // ここから次の問題の準備
      newHistory.choices = []
      newHistory.answer = []
      newHistory.isAnswered = 1
      const askingGroupIndex = [
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
      ].indexOf(newHistory.asking.slice(0, 1))
      const askingContentIndex = parseInt(newHistory.asking.slice(1)) - 1
      // console.log(
      //   vocabulary[askingGroupIndex].groupContents[askingContentIndex].sentence,
      // )
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
      ].splice(
        0,
        vocabulary[askingGroupIndex].groupContents[
          askingContentIndex
        ].sentence.split(' ').length,
      )
      console.log(choiceBox)
      while (newHistory.choices.length < 3) {
        const rand = Math.floor(Math.random() * choiceBox.length)
        if (
          newHistory.choices.length > 0 &&
          newHistory.choices
            .map(
              (num) =>
                vocabulary[askingGroupIndex].groupContents[
                  askingContentIndex
                ].sentence.split(' ')[num],
            )
            .indexOf(
              vocabulary[askingGroupIndex].groupContents[
                askingContentIndex
              ].sentence.split(' ')[choiceBox[rand]],
            ) !== -1
        ) {
          console.log('duplicated')
          continue
        }
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

  return {
    showHistory,
    selectQuestion,
    nextQuestion,
    toggleReview,
    selectChoice,
    checkTxtAnswer,
  }
}
