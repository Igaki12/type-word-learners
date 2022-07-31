import logo from './logo.svg'
import { Text, Center, Flex, Box } from '@chakra-ui/react'
import './App.css'

function App() {
  return (
    <Center>
      <Flex>
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
      </Flex>
    </Center>
  )
}

export default App
