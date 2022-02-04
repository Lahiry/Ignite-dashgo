import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";

import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { Search } from "./Search";

export function Header() {
  const { onOpen } = useSidebarDrawer()

  const isMobileVersion = useBreakpointValue({
    base: true,
    lg: false
  })

  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      { isMobileVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          display="flex"
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        >
        </IconButton>
      )}

      <Logo />

      { !isMobileVersion && <Search /> }

      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={!isMobileVersion} />        
      </Flex>
    </Flex>
  );
}