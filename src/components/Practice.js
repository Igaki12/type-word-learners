import React, { useState } from 'react'
import { Text, Box, Button } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Option } from './Option'

export const Practice = ({ vocabulary }) => {
  const [time,setTime] = useState(0);
  setInterval(() => {
    setTime(time + 1)
  },1000)
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
      <Option time={time} />
    </Box>
  )
}
