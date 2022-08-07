import { useState } from 'react'

export const useStatus = () => {
  const [status, setStatus] = useState({
    mode: 'title',
    order: 'ascend',
    vocabulary: [],
    wordFilter: [],
    excludedId: [],
  })
  const showStatus = () => {
    return status
  }
  const changeMode = (mode) => {
    let newStatus = status
    newStatus.mode = mode
    setStatus(newStatus)
    console.log('mode changed:' + status.mode)
  }
  const changeOrder = (order) => {
    let newStatus = status
    newStatus.order = order
    setStatus(newStatus)
    console.log('change order:' + status.order)
  }
  const toggleVocabulary = (vocabulary) => {
    let newStatus = status
    if (newStatus.vocabulary.indexOf(vocabulary) === -1) {
      newStatus.vocabulary.push(vocabulary)
    } else {
      newStatus.vocabulary.splice(newStatus.vocabulary.indexOf(vocabulary), 1)
    }
    setStatus(newStatus)
    console.log('vocabulary changed:' + status.vocabulary)
  }
  const addWordFilter = (word) => {
    if (word === '') return
    let newStatus = status
    newStatus.wordFilter.unshift(word)
    setStatus(newStatus)
    console.log('addWordFilter:' + status.wordFilter)
  }
  const deleteWordFilter = (index) => {
    let newStatus = status
    newStatus.wordFilter.splice(index, 1)
    setStatus(newStatus)
    console.log('deleteWordFilter:' + status.wordFilter)
  }
  return {
    status,
    showStatus,
    changeMode,
    changeOrder,
    toggleVocabulary,
    addWordFilter,
    deleteWordFilter,
  }
}
