import React, { useRef, useState } from 'react'
import logo from '../img/title3.png'
import {
  Text,
  Box,
  Image,
  Button,
  Stack,
  Checkbox,
  Divider,
  Tabs,
  TabList,
  Tab,
  InputGroup,
  InputLeftElement,
  Input,
  VStack,
  Tag,
  TagLabel,
  TagCloseButton,
  Spacer,
  Flex,
  IconButton,
  Collapse,
} from '@chakra-ui/react'
import { CloseIcon, Search2Icon } from '@chakra-ui/icons'
import './App.css'
import { TitleOption } from './TitleOption'

export const Title = ({
  status,
  vocabulary,
  changeMode,
  changeOrder,
  toggleVocabulary,
  setText,
  text,
  selectQuestion,
  addWordFilter,
  deleteWordFilter,
}) => {
  const [expectTag, setExpectTag] = useState()
  // const [resultText, setResultText] = useState()
  const searchWord = useRef('')
  return (
    <Box w={'100%'} textAlign={'center'}>
      <Box
        margin={'auto'}
        maxW={'sm'}
        // bgColor="white"
        className="blink"
        mt={10}
        mb="10"
      >
        <Image src={logo} alt="Title Logo" />
      </Box>
      <Box
        margin={'auto'}
        maxW={'sm'}
        p="3"
        textAlign={'center'}
        borderRadius="lg"
        border={'1px'}
        mb="3"
      >
        <Text pl={'3'} fontSize={'2xl'} bgColor="gray" textAlign={'left'}>
          {'>'}Continue
        </Text>
        <Text fontWeight={'bold'} fontSize="xl">
          latest data: 08-03 08:47
        </Text>
        <Text fontSize={'md'}>Hard random 16/60</Text>
        <Text fontSize={'md'}>GWL1 GWL2 GWL3 </Text>
      </Box>
      <Box
        margin={'auto'}
        maxW={'sm'}
        textAlign={'left'}
        mt="6"
        mb="10"
        pl={'5'}
        // bgColor="white"
      >
        <Button
          colorScheme="gray"
          variant="ghost"
          fontSize={'2xl'}
          pl="1"
          borderRadius={'sm'}
          autoFocus
          onClick={() => {
            changeMode('practice')
            setText('練習開始')
            selectQuestion(status, vocabulary)
          }}
        >
          {'>'}Practice
        </Button>
        <Button
          colorScheme="gray"
          variant="ghost"
          fontSize={'2xl'}
          pl="1"
          borderRadius={'sm'}
        >
          {'>'}Easy {'('}for smartphone{')'}
        </Button>
        <Button
          colorScheme="gray"
          variant="ghost"
          fontSize={'2xl'}
          pl="1"
          borderRadius={'sm'}
        >
          {'>'}Hard {'('}for PC{')'}
        </Button>
      </Box>
      <Box margin={'auto'} maxW={'sm'} textAlign={'center'}>
        <Tabs variant="soft-rounded" colorScheme="gray" m={1}>
          <TabList>
            <Tab fontSize="lg" onClick={() => changeOrder('ascend')}>
              ascend
            </Tab>
            <Tab fontSize="lg" onClick={() => changeOrder('random')}>
              random
            </Tab>
          </TabList>
        </Tabs>
      </Box>

      <Box
        margin={'auto'}
        maxW={'sm'}
        bgColor="gray.600"
        textAlign={'center'}
        fontSize="xl"
        pl="5"
        pt={'3'}
        pb="8"
        mb="4"
        mt="4"
      >
        <Stack spacing={[4]} direction={['column']}>
          {vocabulary.map((group, groupIndex) => (
            <Checkbox
              size={'lg'}
              colorScheme="gray"
              key={groupIndex}
              onChange={() => {
                toggleVocabulary(groupIndex)
                setText('ここに検索候補が表示されます')
              }}
            >
              {group.groupTag}
              {' (' + group.groupContents.length + ')'}
              {'  ' + group.groupInfo}
            </Checkbox>
          ))}
          <Checkbox size={'lg'} colorScheme="gray">
            GWL1
          </Checkbox>
          <Checkbox size={'lg'} colorScheme="gray">
            GWL2
          </Checkbox>
          <Checkbox size={'lg'} colorScheme="gray">
            GWL3
          </Checkbox>
        </Stack>
      </Box>
      <Box margin={'auto'} maxW={'sm'} textAlign={'center'} mb="4">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Search2Icon color="gray.300" />}
          />
          <Input
            type="text"
            placeholder="Input keyword to search"
            colorScheme={'blackAlpha'}
            ref={searchWord}
            onChange={() => {
              setExpectTag(searchWord.current.value)
            }}
            onBlur={() => {
              setExpectTag('')
              addWordFilter(searchWord.current.value)
              searchWord.current.value = ''
            }}
            // onFocus={setExpectTag('ここに結果が表示されます')}
          />
        </InputGroup>
      </Box>
      {expectTag ? (
        <>
          <Tag
            size="lg"
            borderRadius="sm"
            variant="outline"
            colorScheme="whiteAlpha"
            w={'sm'}
            fontSize="xl"
            mb={1}
          >
            <Search2Icon color="gray.500" />
            <TagLabel ml={3}>"{expectTag}"</TagLabel>
            <Spacer />
            {vocabulary.reduce((prevGroup, currentGroup) => {
              return (
                prevGroup +
                currentGroup.groupContents.reduce(
                  (prevContent, currentContent) => {
                    if (
                      currentContent.word.indexOf(expectTag) === -1 &&
                      currentContent.sentence.indexOf(expectTag) === -1
                    ) {
                      return prevContent
                    }
                    return prevContent + 1
                  },
                  0,
                )
              )
            }, 0)}
            　Hits
          </Tag>
        </>
      ) : (
        <></>
      )}

      <Box margin={'auto'} maxW="sm" mb={4}>
        <VStack spacing={1}>
          {status.wordFilter.map((word, i) => (
            <Tag
              size="lg"
              key={i}
              borderRadius="sm"
              variant="solid"
              colorScheme="whiteAlpha"
              w={'sm'}
              fontSize="xl"
            >
              <Search2Icon color="gray.300" />
              <TagLabel ml={3}>
                {i > 0 ? '+ ' : ''}"{word}"
              </TagLabel>
              <Spacer />
              {vocabulary.reduce((prevGroup, currentGroup) => {
                return (
                  prevGroup +
                  currentGroup.groupContents.reduce(
                    (prevContent, currentContent) => {
                      if (
                        currentContent.word.indexOf(word) === -1 &&
                        currentContent.sentence.indexOf(word) === -1
                      ) {
                        return prevContent
                      }
                      return prevContent + 1
                    },
                    0,
                  )
                )
              }, 0)}
              <TagCloseButton
                onClick={() => {
                  deleteWordFilter(i)
                  setExpectTag('')
                }}
              />
            </Tag>
          ))}
        </VStack>
      </Box>
      <Text>{text}</Text>
      {vocabulary
        .reduce((prevGroup, currentGroup) => {
          return [
            ...prevGroup,
            {
              groupTag: currentGroup.groupTag,
              groupInfo: currentGroup.groupInfo,
              groupContents: currentGroup.groupContents.reduce(
                (prevContent, currentContent) => {
                  if (status.wordFilter.length > 0) {
                    if (
                      status.wordFilter.every((word) => {
                        return (
                          currentContent.word.indexOf(word) === -1 &&
                          currentContent.sentence.indexOf(word) === -1
                        )
                      })
                    ) {
                      console.log(status.wordFilter.length)
                      return [...prevContent]
                    }
                    console.log(
                      status.wordFilter.reduce(
                        (prevWF, currentWF) => {
                          return prevWF.reduce(
                            (prevSentence, currentSentence) => {
                              return [
                                ...prevSentence,
                                ...currentSentence.split(
                                  new RegExp(`(${currentWF})`, 'g'),
                                ),
                              ]
                            },
                            [],
                          )
                        },
                        [currentContent.sentence],
                      ),
                    )
                    return [
                      ...prevContent,
                      {
                        word: status.wordFilter.reduce(
                          (prevWF, currentWF) => {
                            return prevWF.reduce((prevWord, currentWord) => {
                              return [
                                ...prevWord,
                                ...currentWord.split(
                                  new RegExp(`(${currentWF})`, 'ig'),
                                ),
                              ]
                            }, [])
                          },
                          [currentContent.word],
                        ),
                        sentence: status.wordFilter.reduce(
                          (prevWF, currentWF) => {
                            return prevWF.reduce(
                              (prevSentence, currentSentence) => {
                                return [
                                  ...prevSentence,
                                  ...currentSentence.split(
                                    new RegExp(`(${currentWF})`, 'ig'),
                                  ),
                                ]
                              },
                              [],
                            )
                          },
                          [currentContent.sentence],
                        ),
                      },
                    ]
                  } else {
                    return [
                      ...prevContent,
                      {
                        word: [currentContent.word],
                        sentence: [currentContent.sentence],
                      },
                    ]
                  }
                },
                [],
              ),
            },
          ]
        }, [])
        .map((group, groupIndex) => {
          if (status.vocabulary.indexOf(groupIndex) === -1) {
            return <></>
          }
          return group.groupContents.map((content, contentIndex) => (
            <Collapse
              key={'collapseId' + groupIndex + ',' + contentIndex}
              in={true}
              animateOpacity
              id={'collapseId' + groupIndex + ',' + contentIndex}
            >
              <Box
                key={groupIndex + ',' + contentIndex}
                p="2"
                maxW={'lg'}
                m="auto"
              >
                <Flex bgColor="gray.600">
                  <Text
                    pl={3}
                    fontSize={'xl'}
                    fontWeight="bold"
                    textAlign={'left'}
                  >
                    {'> ' + content.word}
                  </Text>
                  <Spacer />
                  <Text color={'gray.500'} mt="auto" mb={'auto'} mr="2">
                    {`${group.groupTag} (${contentIndex + 1}) `}
                  </Text>
                  <IconButton variant={'ghost'} size="sm" borderRadius={'none'}>
                    <CloseIcon color={'red.200'} size="md" />
                  </IconButton>
                </Flex>
                <Flex textAlign={'left'} pl="3">
                  <Text pr={1}>{'> '}</Text>
                  <Text>
                    {content.sentence.map((s, sentenceIndex) => (
                      <>
                        {status.wordFilter.indexOf(s) === -1 ? (
                          <span key={sentenceIndex + 'CST'} pr="1">
                            {s}
                          </span>
                        ) : (
                          <span
                            key={sentenceIndex + 'CST'}
                            className="redTxt"
                            pr={1}
                          >
                            {s}
                          </span>
                        )}
                      </>
                    ))}
                  </Text>
                </Flex>
              </Box>
            </Collapse>
          ))
        })}
      <Divider orientation="horizontal" maxW={'sm'} margin="auto" />
      <Text color={'gray.300'} fontSize="sm">
        ©2022- IgaTatApps
      </Text>
      <TitleOption />
    </Box>
  )
}
