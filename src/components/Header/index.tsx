// @chakra ui
import { Flex, Image } from "@chakra-ui/react";

// components
import { Profile } from "./Profile";
import { Logout } from "./Logout";

// assets
import logo from "../../assets/Informa.ai.png";

export function Header() {
	return (
		<Flex
			as="header"
			w="100%"
			h="20"
			mx="auto"
			align="center"
			px="6"
			borderBottom={"1px solid"}
			borderBottomColor={"cyan.500"}
			position="fixed"
		>
			<Image src={logo} width="120px" />

			<Flex
				align="center"
				ml="auto"
			>
				<Profile />
				<Logout />
			</Flex>
		</Flex>
	);
}
