import React, { useState } from 'react'
import { Box, Collapse, Flex, IconButton, Spacer, Text } from '@chakra-ui/react'
import './App.css'
import { RepeatIcon } from '@chakra-ui/icons'
export const Easy = ({ status, history, vocabulary, toggleReview }) => {
  const [score, setScore] = useState(0)
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
            <Text pl={2}>
              {vocabulary[askingGroupIndex].groupContents[
                askingContentIndex
              ].sentence
                .split(' ')
                .reduce((prev, currentWord) => {
                  if ([0, 2].indexOf(prev.length) !== -1) {
                    return [...prev, '(　　　)']
                  } else {
                    return [...prev, currentWord]
                  }
                }, [])
                .map((word, i) => word + ' ')}
            </Text>
          </Flex>
        )}
      </Collapse>
    </Box>
  )
}
