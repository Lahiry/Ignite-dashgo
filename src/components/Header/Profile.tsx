import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Raphael Lahiry</Text>
          <Text color="gray.300" fontSize="small">
            raphael.lahiry@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Raphael Lahiry" bg="pink.500" src="https://github.com/Lahiry.png" />
    </Flex>
  );
}