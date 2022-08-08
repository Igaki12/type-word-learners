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

export const Practice = ({ vocabulary, history, nextQuestion, status }) => {
  const [startTime, setStartTime] = useState(new Date().getTime() / 1000)
  const [time, setTime] = useState(0)
  const [score, setScore] = useState(1)
  setInterval(
    () => setTime(Math.floor(new Date().getTime() / 1000 - startTime)),
    1000,
  )
  const groupBox = [
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
  ]
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
  ].indexOf(history[history.length - 1].asking.slice(0, 1))
  const askingContentIndex =
    parseInt(history[history.length - 1].asking.slice(1)) - 1
  console.log(
    'askingGroupIndex/askingContentIndex:' +
      askingGroupIndex +
      '/' +
      askingContentIndex,
  )
  console.log(history[history.length - 1].asked)
  // const time = useMemo(() => )
  // setInterval(() => {
  //   let nowTime = new Date()
  //   time.current.value = (nowTime.getTime() - startTime.getTime()) / 1000
  //   console.log(nowTime.getTime())
  //   console.log(startTime.getTime())
  // }, 1000)
  return (
    <Box maxW={'lg'} m="auto" mt={10}>
      {history[history.length - 1].asked.length === 0 ? (
        <></>
      ) : (
        <>
          {history[history.length - 1].asked.map((askedId) => (
            <Collapse p="2" in={true}>
              <Flex bgColor={'gray.600'}>
                <Text pl={3} fontSize={'xl'} fontWeight="bold">
                  {'> ' +
                    vocabulary[groupBox.indexOf(askedId.slice(0, 1))]
                      .groupContents[parseInt(askedId.slice(1)) - 1].word}
                </Text>
                <Spacer />
                <Text color={'gray.500'} mt="auto" mb={'auto'} mr="2">
                  {`${
                    vocabulary[groupBox.indexOf(askedId.slice(0, 1))].groupTag
                  } (${parseInt(askedId.slice(1)) - 1 + 1}) `}
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
              <Flex mb={5} fontSize="lg">
                <Text ml={'5px'} pl="3">
                  {'>'}
                </Text>
                <Text pl={2}>
                  {
                    vocabulary[groupBox.indexOf(askedId.slice(0, 1))]
                      .groupContents[parseInt(askedId.slice(1)) - 1].sentence
                  }
                </Text>
              </Flex>
            </Collapse>
          ))}
        </>
      )}
      <Collapse p="2" in={true}>
        <Flex bgColor={'gray.600'}>
          <Text pl={3} fontSize={'xl'} fontWeight="bold">
            {'> ' +
              vocabulary[askingGroupIndex].groupContents[askingContentIndex]
                .word}
          </Text>
          <Spacer />
          <Text color={'gray.500'} mt="auto" mb={'auto'} mr="2">
            {`${vocabulary[askingGroupIndex].groupTag} (${
              askingContentIndex + 1
            }) `}
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
        {history[history.length - 1].isAnswered === 1 ? (
          <Flex mb={5} fontSize="lg">
            <Text ml={'5px'} pl="3">
              {'>'}
            </Text>
            <Text pl={2}>
              {
                vocabulary[askingGroupIndex].groupContents[askingContentIndex]
                  .sentence
              }
            </Text>
          </Flex>
        ) : (
          <Flex mb={5} fontSize="lg">
            <Text ml={'5px'} pl="3" className="pendular">
              {'>'}
            </Text>
          </Flex>
        )}
      </Collapse>
      <PracticeOption
        time={time}
        nextQuestion={nextQuestion}
        status={status}
        history={history}
        score={score}
        setScore={setScore}
      />
    </Box>
  )
}
