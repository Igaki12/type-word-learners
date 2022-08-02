import logo from './title3.png'
import {
  Text,
  Center,
  Box,
  Image,
  Button,
  Stack,
  Checkbox,
  Divider,
} from '@chakra-ui/react'
import './App.css'

function App() {
  return (
    <Box w={'100%'} textAlign={'center'}>
      <Box
        margin={'auto'}
        maxW={'sm'}
        // bgColor="white"
        className="blink"
        mb={5}
      >
        <Image src={logo} alt="Dan Abramov" />
      </Box>
      <Box
        margin={'auto'}
        maxW={'sm'}
        textAlign={'left'}
        // bgColor="white"
      >
        <Button colorScheme="white" variant="ghost" fontSize={'3xl'}>
          {'>'}Practice
        </Button>
        <Button colorScheme="white" variant="ghost" fontSize={'3xl'}>
          {'>'}Easy for smartphone
        </Button>
        <Button
          colorScheme="white"
          variant="ghost"
          fontSize={'3xl'}
          color="purple.200"
        >
          {'>'}Hard for PC
        </Button>
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
        mt={'5'}
        mb="2"
      >
        <Stack spacing={[1]} direction={['column']}>
          <Checkbox size={'lg'}>GWL1</Checkbox>
          <Checkbox size={'lg'}>GWL2</Checkbox>
          <Checkbox size={'lg'}>GWL3</Checkbox>
        </Stack>
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
      <Divider orientation="horizontal" maxW={'sm'} margin="auto" />
      <Text color={'gray.300'} fontSize="sm">
        ©2022- IgaTatApps
      </Text>
    </Box>
  )
}

export default App
