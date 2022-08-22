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
  useToast,
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
  selectChoice,
}) => {
  const [score, setScore] = useState(1)
  const [time, setTime] = useState(0)
  const toast = useToast()
  const saveStorage = (status, history) => {
    let jsonData = [
      {
        app: 'twl',
        status: status,
        score: score,
        time: time,
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
  const toastJudge = () => {
    if (
      history[history.length - 1] &&
      history[history.length - 1].result[
        history[history.length - 1].result.length - 1
      ] === true
    ) {
      toast({
        title: 'Correct',
        // description:``,
        status: 'success',
        duration: 2000,
        isClosable: false,
        position: 'top-left',
      })
    } else if (
      history[history.length - 1] &&
      history[history.length - 1].result[
        history[history.length - 1].result.length - 1
      ] === false
    ) {
      toast({
        title: 'Wrong',
        // description:``,
        status: 'warning',
        duration: 2000,
        isClosable: false,
        position: 'top-left',
      })
    }
  }
  // console.log(
  //   'askingGroupIndex/askingContentIndex:' +
  //     askingGroupIndex +
  //     '/' +
  //     askingContentIndex,
  // )
  // console.log(history[history.length - 1].asked)
  return (
    <>
      <Box maxW={'lg'} m="auto" mt={'100px'}>
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
                  if (
                    history[history.length - 1].choices.indexOf(prev.length) !==
                    -1
                  ) {
                    // 文字を入力した後の判定
                    if (
                      history[history.length - 1].choices
                        .slice()
                        .sort((a, b) => a - b)
                        .slice(0, history[history.length - 1].answer.length)
                        .indexOf(prev.length) !== -1
                    ) {
                      return [
                        ...prev,
                        vocabulary[askingGroupIndex].groupContents[
                          askingContentIndex
                        ].sentence.split(' ')[
                          history[history.length - 1].answer[
                            history[history.length - 1].choices
                              .slice()
                              .sort((a, b) => a - b)
                              .indexOf(prev.length)
                          ]
                        ],
                      ]
                    }
                    return [...prev, '(　　　)']
                  } else {
                    return [...prev, currentWord]
                  }
                }, [])
                .map((word, i) => {
                  if (
                    history[history.length - 1].answer.length > 0 &&
                    history[history.length - 1].answer.indexOf(
                      vocabulary[askingGroupIndex].groupContents[
                        askingContentIndex
                      ].sentence
                        .split(' ')
                        .indexOf(word),
                    ) !== -1
                  ) {
                    return (
                      <span key={i + 'easyAskingSpan'} className="revealTxt">
                        {word
                          .toLowerCase()
                          .replace(/\.$/g, '')
                          .replace(/\?$/g, '')
                          .replace(/!$/g, '') + ' '}
                      </span>
                    )
                  } else {
                    return <span key={i + 'easyAskingSpan'}>{word + ' '}</span>
                  }
                })}
            </Text>
          </Flex>
        </Collapse>
        <VStack spacing={4} maxW="2xs" mt="50px" ml={2} >
          {history[history.length - 1].choices.map((num, index) => (
            <>
              {history[history.length - 1].answer.length > 0 &&
              history[history.length - 1].answer.indexOf(num) !== -1 ? (
                <Button
                  w={'2xs'}
                  borderRadius="xs"
                  colorScheme={'whiteAlpha'}
                  variant="outline"
                  fontSize={'lg'}
                  key={'choices' + index}
                  onClick={() => selectChoice(num)}
                >
                  <Text ml={'5px'} pl="2">
                    {'>'}{' '}
                  </Text>
                  {vocabulary[askingGroupIndex].groupContents[
                    askingContentIndex
                  ].sentence
                    .split(' ')
                    [num].toLowerCase()
                    .replace(/\.$/g, '')
                    .replace(/\?$/g, '')
                    .replace(/!$/g, '')}
                  <Spacer />
                  <Text as={'i'} fontSize="xl" mr={2}>
                    {history[history.length - 1].answer.indexOf(num) + 1}
                  </Text>
                </Button>
              ) : (
                <Button
                  w={'2xs'}
                  borderRadius="xs"
                  colorScheme={'whiteAlpha'}
                  variant="solid"
                  fontSize={'lg'}
                  key={'choices' + index}
                  onClick={() => selectChoice(num)}
                  boxShadow="md"
                >
                  <Text ml={'5px'} pl="2" className="pendular">
                    {'>'}
                  </Text>
                  {vocabulary[askingGroupIndex].groupContents[
                    askingContentIndex
                  ].sentence
                    .split(' ')
                    [num].toLowerCase()
                    .replace(/\.$/g, '')
                    .replace(/\?$/g, '')
                    .replace(/!$/g, '')}
                  <Spacer />
                </Button>
              )}
            </>
          ))}
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
        vocabulary={vocabulary}
        toastJudge={toastJudge}
      />
    </>
  )
}
