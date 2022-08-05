import React, { useState } from 'react'
import { Text, Box, Button } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { PracticeOption } from './PracticeOption'
import { useMemo } from 'react'

export const Practice = ({ vocabulary }) => {
  const [startTime, setStartTime] = useState(new Date().getTime() / 1000)
  const [time, setTime] = useState(0)
  setInterval(
    () => setTime(Math.floor(new Date().getTime() / 1000 - startTime)),
    1000,
  )
  // const time = useMemo(() => )
  // setInterval(() => {
  //   let nowTime = new Date()
  //   time.current.value = (nowTime.getTime() - startTime.getTime()) / 1000
  //   console.log(nowTime.getTime())
  //   console.log(startTime.getTime())
  // }, 1000)
  return (
    <Box maxW={'lg'} m="auto">
      <Text>ここから</Text>
      {vocabulary[0].groupContents.map((content, index) => (
        <Box key={index} p="2">
          <Text pl={3} fontSize={'xl'} fontWeight="bold" bgColor="gray.600">
            {'> ' + content.word}
          </Text>
          <Text pl={3}>{'> ' + content.sentence}</Text>
          <Text>　</Text>
        </Box>
      ))}
      <PracticeOption time={time} />
    </Box>
  )
}
