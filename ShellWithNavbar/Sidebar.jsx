import { Icon } from '@chakra-ui/icons'
import {
  Divider,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import {
  FiBarChart2,
  FiBookmark,
  FiCheckSquare,
  FiHelpCircle,
  FiHome,
  FiSearch,
  FiSettings,
  FiUsers,
} from 'react-icons/fi'
import { Logo } from './Logo'
import { NavButton } from './NavButton'
import { UserProfile } from './UserProfile'

export const Sidebar = () => (
  <Flex as="section" minH="100vh" bg="bg-canvas">
    <Flex
      flex="1"
      bg="bg-surface"
      overflowY="auto"
      boxShadow={useColorModeValue('sm', 'sm-dark')}
      maxW={{
        base: 'full',
        sm: 'xs',
      }}
      py={{
        base: '6',
        sm: '8',
      }}
      px={{
        base: '4',
        sm: '6',
      }}
    >
      <Stack justify="space-between" spacing="1">
        <Stack
          spacing={{
            base: '5',
            sm: '6',
          }}
          shouldWrapChildren
        >
          <Logo />
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon as={FiSearch} color="muted" boxSize="5" />
            </InputLeftElement>
            <Input placeholder="Search" variant={useColorModeValue('outline', 'filled')} />
          </InputGroup>
          <Stack spacing="1">
            <NavButton label="Home" icon={FiHome} />
            <NavButton label="Dashboard" icon={FiBarChart2} aria-current="page" />
            <NavButton label="Tasks" icon={FiCheckSquare} />
            <NavButton label="Bookmarks" icon={FiBookmark} />
            <NavButton label="Users" icon={FiUsers} />
          </Stack>
        </Stack>
        <Stack
          spacing={{
            base: '5',
            sm: '6',
          }}
        >
          <Stack spacing="1">
            <NavButton label="Help" icon={FiHelpCircle} />
            <NavButton label="Settings" icon={FiSettings} />
          </Stack>
          <Divider />
          <UserProfile
            name="Christoph Winston"
            image="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=160&q=80"
            email="chris@chakra-ui.com"
          />
        </Stack>
      </Stack>
    </Flex>
  </Flex>
)
