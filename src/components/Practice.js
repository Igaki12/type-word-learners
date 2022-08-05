import React, { useState } from 'react'
import { Text, Box, Button, Flex, Spacer, IconButton } from '@chakra-ui/react'
import { ChevronDownIcon, RepeatIcon } from '@chakra-ui/icons'
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
          <Flex bgColor={'gray.600'}>
            <Text pl={3} fontSize={'xl'} fontWeight="bold">
              {'> ' + content.word}
            </Text>
            <Spacer />
            <Text color={'gray.500'} mt="auto" mb={'auto'} mr="2">
              {vocabulary[0].groupTag + ' (' + index + ') '}
            </Text>
            <IconButton
              boxShadow={'base'}
              borderRadius={'sm'}
              size={'sm'}
              bgColor="gray.500"
              variant={'solid'}
            >
              <RepeatIcon boxSize={'1.3em'} color="orange.900" />
            </IconButton>
          </Flex>
          <Flex>
            <Text pl={3}>{'>'}</Text>
            <Text pl={2}>{content.sentence}</Text>
          </Flex>
        </Box>
      ))}
      <PracticeOption time={time} />
    </Box>
  )
}
