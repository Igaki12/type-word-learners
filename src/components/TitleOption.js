import React from 'react'
import {
  Button,
  Box,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Divider,
  UnorderedList,
  ListItem,
  OrderedList,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  List,
} from '@chakra-ui/react'
import { ChevronUpIcon, InfoOutlineIcon } from '@chakra-ui/icons'
import './App.css'

export const TitleOption = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
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
      <Box top={3} right={3} position="fixed">
        <Button
          boxShadow={'dark-lg'}
          colorScheme="blackAlpha"
          borderRadius={'sm'}
          variant="solid"
          w={'60px'}
          h="60px"
          onClick={onOpen}
        >
          <InfoOutlineIcon boxSize={'1.5em'} />
        </Button>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent color={'white'} bg="gray.700">
          <ModalHeader m={'auto'}>TUTORIAL</ModalHeader>
          <Divider orientation="horizontal" m={'auto'} />
          <ModalCloseButton />
          <ModalBody m={'auto'}>
            <OrderedList>
              <ListItem>使いたい英単語リストをチェック</ListItem>
              <ListItem>出題する順番を選ぶ</ListItem>
              <ListItem>
                もし検索したいキーワードがあれば、最下部の入力欄で検索
              </ListItem>
              <ListItem>
                テスト形式を選んで開始　*全てのモードでPC/スマホ/タブレット対応済み
              </ListItem>
              <ListItem>
                オートセーブ対応。途中経過を最大9回分まで自動で保存でき、いつでも続きから再開可能
              </ListItem>
            </OrderedList>
            <UnorderedList mt={2} mb="6">
              <ListItem>Practiceでは、簡単な操作で英文を復習できる</ListItem>
              <ListItem>
                Easyでは、自動生成される3か所の穴あき英文の並べ替えにトライできる
              </ListItem>
              <ListItem>Hardでは、英文全体のタイピングに挑戦できる</ListItem>
            </UnorderedList>
          </ModalBody>

          <ModalHeader m={'auto'}>UPDATE HISTORY</ModalHeader>
          <Accordion>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontSize={'lg'}>
                    Ver.0.2_coming soon
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontSize={'lg'}>
                    Ver.0.1_2022/8/31
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <UnorderedList>
                  <ListItem>試作版リリース</ListItem>
                  <ListItem>モードはPractice/Easy/Hardの三種類</ListItem>
                  <ListItem>オートセーブはセーブのみ対応</ListItem>
                  <ListItem>配置したボタンの多数が未対応</ListItem>
                  <ListItem>検索機能・プレビュー表示対応</ListItem>
                </UnorderedList>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <ModalFooter>
            <Button
              colorScheme={'orange'}
              variant="outline"
              onClick={() => {
                document.location.reload(true)
              }}
            >
              Reload App
            </Button>
            <Button colorScheme="orange" ml={3} mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
