import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Container,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import * as React from 'react'
import { FiHelpCircle, FiSearch, FiSettings } from 'react-icons/fi'
import { Logo } from './Logo'
import { Sidebar } from './Sidebar'
import { ToggleButton } from './ToggleButton'

export const Navbar = () => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  })
  const { isOpen, onToggle, onClose } = useDisclosure()
  return (
    <Box as="nav" bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')}>
      <Container
        py={{
          base: '3',
          lg: '4',
        }}
      >
        <Flex justify="space-between">
          <HStack spacing="4">
            <Logo />
            {isDesktop && (
              <ButtonGroup variant="ghost" spacing="1">
                <Button>Home</Button>
                <Button aria-current="page">Dashboard</Button>
                <Button>Tasks</Button>
                <Button>Bookmarks</Button>
                <Button>Users</Button>
              </ButtonGroup>
            )}
          </HStack>
          {isDesktop ? (
            <HStack spacing="4">
              <ButtonGroup variant="ghost" spacing="1">
                <IconButton icon={<FiSearch fontSize="1.25rem" />} aria-label="Search" />
                <IconButton icon={<FiSettings fontSize="1.25rem" />} aria-label="Settings" />
                <IconButton icon={<FiHelpCircle fontSize="1.25rem" />} aria-label="Help Center" />
              </ButtonGroup>
              <Avatar
                boxSize="10"
                name="Christoph Winston"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=160&q=80"
              />
            </HStack>
          ) : (
            <>
              <ToggleButton isOpen={isOpen} aria-label="Open Menu" onClick={onToggle} />
              <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                isFullHeight
                preserveScrollBarGap // Only disabled for showcase
                trapFocus={false}
              >
                <DrawerOverlay />
                <DrawerContent>
                  <Sidebar />
                </DrawerContent>
              </Drawer>
            </>
          )}
        </Flex>
      </Container>
    </Box>
  )
}
