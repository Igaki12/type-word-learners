import React from 'react'
import { Button, Box, Text } from '@chakra-ui/react'
import { ChevronUpIcon } from '@chakra-ui/icons'
import './App.css'

export const TitleOption = ({}) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <>
      {document.documentElement.scrollTop > 100 ? (
        <Box bottom={3} right={3} position="fixed">
          <Button
            boxShadow={'dark-lg'}
            colorScheme="whiteAlpha"
            borderRadius={'sm'}
            variant="solid"
            w={'60px'}
            h="60px"
            onClick={scrollToTop}
          >
            <ChevronUpIcon boxSize={'3em'} />
          </Button>
        </Box>
      ) : (
        <></>
      )}
    </>
  )
}
