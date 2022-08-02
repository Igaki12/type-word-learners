import logo from './title2.png'
import { Text, Center, Flex, Box, Image } from '@chakra-ui/react'
import './App.css'

function App() {
  return (
    <Center>
      <Box maxW={'sm'} bgColor="white">
        <Image src={logo} alt="Dan Abramov" />
      </Box>
      {/* <Flex>
        <Box>
          <Text fontFamily={'fantasy'} fontSize="7xl">
            ≫
          </Text>
        </Box>
        <Box>
          <Text fontFamily={'fantasy'} color="yellow" fontSize="7xl">
            TYPE
          </Text>
          <Text fontFamily={'fantasy'} fontSize="7xl" mt={-10}>
            WORD
          </Text>
          <Text fontFamily={'fantasy'} fontSize="7xl" mt={-10}>
            LEARNERS
          </Text>
        </Box>
      </Flex> */}
    </Center>
  )
}

export default App
