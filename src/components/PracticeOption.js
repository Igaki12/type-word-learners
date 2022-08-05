import React from 'react'
import { Button, Box, Text, Spacer, Progress } from '@chakra-ui/react'
import {
  CheckIcon,
  ChevronDownIcon,
  EditIcon,
  RepeatIcon,
  SettingsIcon,
  TimeIcon,
} from '@chakra-ui/icons'
import './App.css'

export const PracticeOption = ({ time }) => {
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
        <Progress colorScheme="gray" size="xs" value={20} />
        <Text textAlign={'right'} color="whiteAlpha.600">
          <EditIcon boxSize={'0.8em'} ml="2" />
          36/60
          <TimeIcon boxSize={'0.8em'} ml="2" />
          {time}
        </Text>
        {-Element.scrollTop - Element.clientHeight + Element.scrollHeight <
        100 ? (
          <>すすむ</>
        ) : (
          <>したまで</>
        )}
      </Box>
      {-Element.scrollTop - Element.clientHeight + Element.scrollHeight >
      100 ? (
        <>
          <Box bottom={'12px'} right={'12px'} position="fixed">
            <Button
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
          <Box
            bottom={3}
            right="80px"
            w={'100px'}
            textAlign="right"
            color={'orange'}
            fontSize="md"
            position={'fixed'}
            opacity="0.7"
          >
            NEXT
          </Box>
          <Box bottom={'12px'} right={'12px'} position="fixed">
            <Button
              boxShadow={'dark-lg'}
              colorScheme="orange"
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
          <RepeatIcon boxSize={'1.5em'} color="red.100" />
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
          <CheckIcon boxSize={'1.5em'} color="teal.100" />
        </Button>
      </Box>
    </>
  )
}
