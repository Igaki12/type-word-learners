import React from 'react'
import { Text, Box, Button } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

export const Practice = ({ vocabulary }) => {
  return (
    <Box maxW={'lg'} m="auto">
      <Text>ここから</Text>
      {vocabulary[0].groupContents.map((content, index) => (
        <Box key={index} p="2">
          <Text pl={3} fontSize={'xl'} fontWeight="bold" bgColor="gray.600">
            {'> ' + content.word}
          </Text>
          <Text pl={3}>{'> ' + content.sentence}</Text>
          <Text>　</Text>
        </Box>
      ))}
      <Box w="60px" h="60px" bottom={3} right={3} position="fixed">
        <Button
          boxShadow={'dark-lg'}
          colorScheme="whiteAlpha"
          size={'3xl'}
          borderRadius="sm"
          variant="solid"
          w={'60px'}
          h="60px"
        >
          <ChevronDownIcon boxSize={'2em'} />
        </Button>
      </Box>
    </Box>
  )
}
