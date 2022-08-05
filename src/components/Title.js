import React, { useState } from 'react'
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
} from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
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
}) => {
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
          />
        </InputGroup>
      </Box>
      <Text>{text}</Text>
      {vocabulary.map((group, groupIndex) => {
        if (status.vocabulary.indexOf(groupIndex) === -1) {
          return
        }
        return group.groupContents.map((content, contentIndex) => (
          <Box key={contentIndex} p="2" maxW={'lg'} m="auto">
            <Text pl={3} fontSize={'xl'} fontWeight="bold" bgColor="gray.600">
              {'> ' + content.word}
            </Text>
            <Text pl={3}>{'> ' + content.sentence}</Text>
            <Text>　</Text>
          </Box>
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
