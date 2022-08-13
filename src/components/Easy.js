import React, { useState } from 'react'
import {
  Box,
  Button,
  Collapse,
  Flex,
  IconButton,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react'
import './App.css'
import { EasyOption } from './EasyOption'
import { RepeatIcon } from '@chakra-ui/icons'
export const Easy = ({
  status,
  history,
  vocabulary,
  toggleReview,
  nextQuestion,
}) => {
  const [score, setScore] = useState(0)
  const [time, setTime] = useState(0)
  const saveStorage = (status, history) => {
    let jsonData = [
      {
        app: 'twl',
        status: status,
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
    () =>
      setTime(
        Math.floor(
          new Date().getTime() / 1000 -
            parseInt(history[history.length - 1].id) / 1000,
        ),
      ),
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
  return (
    <>
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
                  <Flex bgColor={'gray.600'}>
                    <Text pl={3} fontSize={'xl'} fontWeight="bold">
                      {'> ' +
                        vocabulary[groupBox.indexOf(askedId.slice(0, 1))]
                          .groupContents[parseInt(askedId.slice(1)) - 1].word}
                    </Text>
                    <Spacer />
                    <Text color={'gray.500'} mt="auto" mb={'auto'} mr="2">
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
              <Text ml={'5px'} pl="3">
                {'>'}
              </Text>
              <Text pl={2}>
                {vocabulary[askingGroupIndex].groupContents[
                  askingContentIndex
                ].sentence
                  .split(' ')
                  .reduce((prev, currentWord) => {
                    if ([0, 2].indexOf(prev.length) !== -1) {
                      return [...prev, '__________']
                    } else {
                      return [...prev, currentWord]
                    }
                  }, [])
                  .map((word, i) => word + ' ')}
              </Text>
            </Flex>
          )}
        </Collapse>
        <VStack spacing={4} maxW="xs" mt="3">
          {history[history.length - 1].choices.map((num, index) => (
            <Button
              w={'xs'}
              borderRadius="xs"
              colorScheme={'whiteAlpha'}
              variant="solid"
              fontSize={'lg'}
              key={'choices' + index}
            >
              <Text ml={'5px'} pl="2" className="pendular">
                {'>'}
              </Text>
              {
                vocabulary[askingGroupIndex].groupContents[
                  askingContentIndex
                ].sentence.split(' ')[num]
              }
              <Spacer />
            </Button>
          ))}

          <Button
            w={'xs'}
            borderRadius="xs"
            colorScheme={'whiteAlpha'}
            variant="solid"
            fontSize={'lg'}
          >
            <Text ml={'5px'} pl="2" className="pendular">
              {'>'}
            </Text>
            choice2
            <Spacer />
          </Button>
          <Button
            w={'xs'}
            borderRadius="xs"
            colorScheme={'whiteAlpha'}
            variant="solid"
            fontSize={'lg'}
          >
            <Text ml={'5px'} pl="2" className="pendular">
              {'>'}
            </Text>
            choice3
            <Spacer />
          </Button>
        </VStack>
      </Box>
      <EasyOption
        time={time}
        nextQuestion={nextQuestion}
        status={status}
        history={history}
        score={score}
        setScore={setScore}
        saveStorage={saveStorage}
      />
    </>
  )
}
