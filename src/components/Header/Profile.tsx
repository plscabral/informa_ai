import { Flex, Box, Text } from "@chakra-ui/react";

export function Profile() {
	const user_name = localStorage.getItem("user_name");
	const user_email = localStorage.getItem("user_email");

	return (
		<Flex align="center">
			<Box textAlign="right">
				<Text
					fontWeight="bold"
					fontSize="sm"
					textTransform="capitalize"
				>
					{user_name}
				</Text>

				<Text
					color="cyan.400"
					fontWeight="bold"
					fontSize="sm"
					textTransform="lowercase"
				>
					{user_email}
				</Text>
			</Box>
		</Flex>
	);
}
