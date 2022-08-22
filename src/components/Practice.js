import React, { useState } from 'react'
import {
  Text,
  Box,
  Button,
  Flex,
  Spacer,
  IconButton,
  Collapse,
  Stat,
  StatNumber,
  StatHelpText,
} from '@chakra-ui/react'
import { CheckCircleIcon, RepeatIcon } from '@chakra-ui/icons'
import { PracticeOption } from './PracticeOption'
import './App.css'

export const Practice = ({
  vocabulary,
  history,
  nextQuestion,
  status,
  toggleReview,
}) => {
  const [startTime, setStartTime] = useState(new Date().getTime() / 1000)
  const [time, setTime] = useState(0)
  const [score, setScore] = useState(1)
  const saveStorage = (status, history) => {
    let jsonData = [
      {
        app: 'twl',
        status: status,
        time: time,
        score: score,
        history: history[history.length - 1],
      },
    ]
    if (localStorage.getItem('twl')) {
      localStorage.setItem(
        'twl',
        JSON.stringify(
          JSON.parse(localStorage.getItem('twl')).reduce(
            (prev, currentStorage) => {
              if (currentStorage.history.id === jsonData[0].history.id) {
                console.log('被り:' + currentStorage.history.id)
                return [...prev]
              }
              if ([...prev, currentStorage].length > 9) {
                console.log('超過:' + currentStorage)
                return [...prev]
              }
              return [...prev, currentStorage]
            },
            jsonData,
          ),
        ),
      )
    } else {
      localStorage.setItem('twl', JSON.stringify(jsonData))
    }
    console.log(localStorage.getItem('twl'))
  }
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
              {history[history.length - 1].review &&
              history[history.length - 1].review.indexOf(askedId) !== -1 ? (
                <Flex bgColor={'orange.700'}>
                  <Text pl={3} fontSize={'xl'} fontWeight="bold">
                    {'> ' +
                      vocabulary[groupBox.indexOf(askedId.slice(0, 1))]
                        .groupContents[parseInt(askedId.slice(1)) - 1].word}
                  </Text>
                  <Spacer />
                  <Text color={'orange.100'} mt="auto" mb={'auto'} mr="2">
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
                    onClick={() => toggleReview(askedId)}
                  >
                    <RepeatIcon boxSize={'1.3em'} color="orange.100" />
                  </IconButton>
                </Flex>
              ) : (
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
                    onClick={() => toggleReview(askedId)}
                  >
                    <RepeatIcon boxSize={'1.3em'} color="black" />
                  </IconButton>
                </Flex>
              )}

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
        {history[history.length - 1].review &&
        history[history.length - 1].review.indexOf(
          history[history.length - 1].asking,
        ) !== -1 ? (
          <Flex bgColor={'orange.700'}>
            <Text pl={3} fontSize={'xl'} fontWeight="bold">
              {'> ' +
                vocabulary[askingGroupIndex].groupContents[askingContentIndex]
                  .word}
            </Text>
            <Spacer />
            <Text color={'orange.100'} mt="auto" mb={'auto'} mr="2">
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
              onClick={() => toggleReview(history[history.length - 1].asking)}
            >
              <RepeatIcon boxSize={'1.3em'} color="orange.100" />
            </IconButton>
          </Flex>
        ) : (
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
              onClick={() => toggleReview(history[history.length - 1].asking)}
            >
              <RepeatIcon boxSize={'1.3em'} color="black" />
            </IconButton>
          </Flex>
        )}

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
      {score - 1 >=
      history[history.length - 1].remaining.length +
        history[history.length - 1].asked.length +
        1 ? (
        <>
          <Box
            border={'1px'}
            borderRadius="md"
            p="2"
            textAlign={'center'}
            m="1"
            mt={'100px'}
          >
            <Text color={'orange.100'} bgColor="orange.800">
              <CheckCircleIcon color={'orange.100'} mr="2" />
              EVERYTHING IS OVER!
            </Text>
            <Stat>
              <StatNumber as={'em'}>
                {Math.round(
                  (history[history.length - 1].finTime.getTime() / 10 -
                    history[history.length - 1].startTime.getTime() / 10) /
                    (score - 1),
                ) / 100}{' '}
                seconds / sentence
              </StatNumber>

              <StatHelpText>
                <Text>
                  {' '}
                  TOTAL　
                  {Math.round(
                    history[history.length - 1].finTime.getTime() / 100 -
                      history[history.length - 1].startTime.getTime() / 100,
                  ) / 10}{' '}
                  seconds / {score - 1} sentences
                </Text>
                <Text mt={-1}>MODE　Practice</Text>
              </StatHelpText>
            </Stat>
          </Box>
          <Flex justifyContent={'center'} mt="10">
            <Text mr={1}>Now, </Text>
            <Text color="orange.200">
              {history[history.length - 1].review.length}
            </Text>
            <Text ml={1}> sentences are selected to review.</Text>
          </Flex>
          <Box textAlign={'center'} mt="2" mb={2}>
            {' '}
            {history[history.length - 1].review.length > 0 ? (
              <Button
                colorScheme={'whiteAlpha'}
                borderRadius="sm"
                onClick={() => {
                  saveStorage(status, history)
                  document.location.reload(true)
                }}
              >
                Save and Go back to Title
              </Button>
            ) : (
              <></>
            )}
          </Box>
          {history[history.length - 1].review.length === 0 ? (
            <></>
          ) : (
            <>
              {history[history.length - 1].review.map((askedId) => (
                <Collapse p="2" in={true}>
                  {history[history.length - 1].review &&
                  history[history.length - 1].review.indexOf(askedId) !== -1 ? (
                    <Flex bgColor={'orange.700'}>
                      <Text pl={3} fontSize={'xl'} fontWeight="bold">
                        {'> ' +
                          vocabulary[groupBox.indexOf(askedId.slice(0, 1))]
                            .groupContents[parseInt(askedId.slice(1)) - 1].word}
                      </Text>
                      <Spacer />
                      <Text color={'orange.100'} mt="auto" mb={'auto'} mr="2">
                        {`${
                          vocabulary[groupBox.indexOf(askedId.slice(0, 1))]
                            .groupTag
                        } (${parseInt(askedId.slice(1)) - 1 + 1}) `}
                      </Text>
                      <IconButton
                        textShadow={'xl'}
                        borderRadius={'sm'}
                        size={'sm'}
                        bgColor="none"
                        variant={'ghost'}
                        onClick={() => toggleReview(askedId)}
                      >
                        <RepeatIcon boxSize={'1.3em'} color="orange.100" />
                      </IconButton>
                    </Flex>
                  ) : (
                    <Flex bgColor={'gray.600'}></Flex>
                  )}

                  <Flex mb={5} fontSize="lg">
                    <Text ml={'5px'} pl="3">
                      {'>'}
                    </Text>
                    <Text pl={2}>
                      {
                        vocabulary[groupBox.indexOf(askedId.slice(0, 1))]
                          .groupContents[parseInt(askedId.slice(1)) - 1]
                          .sentence
                      }
                    </Text>
                  </Flex>
                </Collapse>
              ))}
            </>
          )}
        </>
      ) : (
        <></>
      )}
      <PracticeOption
        time={time}
        nextQuestion={nextQuestion}
        status={status}
        history={history}
        score={score}
        setScore={setScore}
        saveStorage={saveStorage}
      />
    </Box>
  )
}
