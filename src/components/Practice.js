import React, { useState } from 'react'
import {
  Text,
  Box,
  Button,
  Flex,
  Spacer,
  IconButton,
  Collapse,
} from '@chakra-ui/react'
import { ChevronDownIcon, RepeatIcon } from '@chakra-ui/icons'
import { PracticeOption } from './PracticeOption'
import './App.css'
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
        <Collapse key={index} p="2" in={true}>
          <Flex bgColor={'gray.600'}>
            <Text pl={3} fontSize={'xl'} fontWeight="bold">
              {'> ' + content.word}
            </Text>
            <Spacer />
            <Text color={'gray.500'} mt="auto" mb={'auto'} mr="2">
              {vocabulary[0].groupTag + ' (' + index + ') '}
            </Text>
            <IconButton
              textShadow={'xl'}
              borderRadius={'sm'}
              size={'sm'}
              bgColor="none"
              variant={'ghost'}
            >
              <RepeatIcon boxSize={'1.3em'} color="black" />
            </IconButton>
          </Flex>
          <Flex mb={5}>
            <Text ml={'5px'} pl="3" className="pendular">
              {'>'}
            </Text>
            <Text pl={2}>{content.sentence}</Text>
          </Flex>
        </Collapse>
      ))}
      <PracticeOption time={time} />
    </Box>
  )
}
