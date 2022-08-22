import { Button, Box, Progress } from '@chakra-ui/react'
import {
  CheckIcon,
  ChevronDownIcon,
  EditIcon,
  QuestionOutlineIcon,
  RepeatIcon,
  SettingsIcon,
  TimeIcon,
  ViewIcon,
} from '@chakra-ui/icons'
import './App.css'

export const HardOption = ({
  time,
  nextQuestion,
  status,
  history,
  score,
  setScore,
  saveStorage,
  vocabulary,
  checkTxtAnswer,
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
      {-Element.scrollTop - Element.clientHeight + Element.scrollHeight > 100 ||
      score - 1 >=
        history[history.length - 1].remaining.length +
          history[history.length - 1].asked.length +
          1 ? (
        <>
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
        </>
      ) : (
        <>
          <Box bottom={'12px'} right={'12px'} position="fixed">
            <Button
              boxShadow={'dark-lg'}
              colorScheme="orange"
              borderRadius="sm"
              variant="solid"
              w={'60px'}
              h="60px"
              onClick={() => {
                checkTxtAnswer()
                nextQuestion(status, score, vocabulary)
                setScore(score + 1)
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
      )}
      <Box bottom={'88px'} right={'12px'} position="fixed">
        <Button
          boxShadow={'dark-lg'}
          colorScheme="whiteAlpha"
          borderRadius="sm"
          variant="solid"
          w={'40px'}
          h="40px"
        >
          <QuestionOutlineIcon boxSize={'1.5em'} />
        </Button>
      </Box>
      <Box bottom={'140px'} right={'12px'} position="fixed">
        <Button
          boxShadow={'dark-lg'}
          colorScheme="whiteAlpha"
          borderRadius="sm"
          variant="solid"
          w={'40px'}
          h="40px"
        >
          <ViewIcon boxSize={'1.5em'} />
        </Button>
      </Box>
    </>
  )
}
