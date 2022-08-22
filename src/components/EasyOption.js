import React, { useState } from 'react'
import {
  Button,
  Box,
  Progress,
  Text,
  Spacer,
  Flex,
  Stat,
  StatNumber,
  Divider,
  Center,
  CircularProgress,
  CircularProgressLabel,
} from '@chakra-ui/react'
import {
  CheckCircleIcon,
  CheckIcon,
  ChevronDownIcon,
  EditIcon,
  RepeatIcon,
  SettingsIcon,
  TimeIcon,
  WarningTwoIcon,
} from '@chakra-ui/icons'
import './App.css'

export const EasyOption = ({
  time,
  nextQuestion,
  status,
  history,
  score,
  setScore,
  saveStorage,
  vocabulary,
  toastJudge,
}) => {
  const Element = document.documentElement
  const scrollToBottom = () => {
    window.scrollTo({
      top: Element.scrollHeight - Element.clientHeight,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {/* 最下部のゆとり */}
      <Box h={'100px'}></Box>
      <Box w="40px" h="40px" top={'12px'} right={'12px'} position="fixed">
        <Button
          boxShadow={'dark-lg'}
          colorScheme="whiteAlpha"
          size={'3xl'}
          borderRadius="sm"
          variant="solid"
          w={'40px'}
          h="40px"
        >
          <SettingsIcon boxSize={'1.5em'} />
        </Button>
      </Box>
      <Box w="150px" h="40px" top={'20px'} right={'60px'} position="fixed">
        <Progress
          colorScheme="gray"
          size="xs"
          value={
            ((score - history[history.length - 1].isAnswered) * 100) /
            (history[history.length - 1].remaining.length +
              history[history.length - 1].asked.length +
              1)
          }
        />
        <Box textAlign={'right'} color="whiteAlpha.600">
          <EditIcon boxSize={'0.8em'} ml="2" mr={1} />
          {score - history[history.length - 1].isAnswered}/
          {history[history.length - 1].remaining.length +
            history[history.length - 1].asked.length +
            1}
          <TimeIcon boxSize={'0.8em'} ml="2" mr={1} />
          {time}
        </Box>
      </Box>
      <Box
        top={'12px'}
        left={'12px'}
        pl="1"
        pr="1"
        borderRadius={'sm'}
        position="fixed"
        boxShadow="dark-lg"
        bgColor="blackAlpha.700"
      >
        <CircularProgress
          thickness="5px"
          // trackColor="whiteAlpha"
          value={history[history.length - 1].result.reduce(
            (prev, currentResult) => {
              if (currentResult === true) {
                return prev + 100 / history[history.length - 1].result.length
              } else {
                return prev
              }
            },
            0,
          )}
          color="teal.400"
        >
          <CircularProgressLabel color={'whiteAlpha.900'} fontSize="lg" >
            {history[history.length - 1].result.reduce(
              (prev, currentResult) => {
                if (currentResult === true) {
                  return prev + 1
                } else {
                  return prev
                }
              },
              0,
            )}
          </CircularProgressLabel>
        </CircularProgress>
      </Box>
      {/* <Box
        w="70px"
        maxH="100px"
        p={2}
        top={'60px'}
        left={'12px'}
        position="fixed"
        bgColor={'blackAlpha.700'}
        boxShadow="dark-lg"
      >
        <Flex>
          <WarningTwoIcon boxSize={'1.3em'} />
          <Spacer />
          {history[history.length - 1].result.reduce((prev, currentResult) => {
            if (currentResult === false) {
              return prev + 1
            } else {
              return prev
            }
          }, 0)}
        </Flex>
      </Box> */}
      {history[history.length - 1].answer.length > 2 ? (
        <>
          <Box bottom={'12px'} right="80px" position={'fixed'}>
            <Text color="orange">CHECK</Text>
          </Box>
          <Box bottom={'12px'} right={'12px'} position="fixed">
            <Button
              autoFocus
              boxShadow={'dark-lg'}
              colorScheme="orange"
              borderRadius="sm"
              variant="solid"
              w={'60px'}
              h="60px"
              onClick={() => {
                nextQuestion(status, score, vocabulary)
                setScore(score + history[history.length - 1].isAnswered)
                saveStorage(status, history)
                setTimeout(() => {
                  toastJudge()
                  scrollToBottom()
                }, 50)
              }}
            >
              <ChevronDownIcon boxSize={'3em'} />
            </Button>
          </Box>
        </>
      ) : (
        <Box bottom={'12px'} right={'12px'} position="fixed">
          <Button
            autoFocus
            boxShadow={'dark-lg'}
            colorScheme="whiteAlpha"
            borderRadius="sm"
            variant="solid"
            w={'60px'}
            h="60px"
            onClick={scrollToBottom}
          >
            <ChevronDownIcon boxSize={'3em'} />
          </Button>
        </Box>
      )}
    </>
  )
}
