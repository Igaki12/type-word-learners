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
    console.log('selected question:')
  }
  return {}
}
