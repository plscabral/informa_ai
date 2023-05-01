import { Flex } from "@chakra-ui/react";

import { MasterPage } from "../components/MasterPage";
import { Header } from "../components/Header";

export function Landing() {
	return (
		<MasterPage titlePage="Landing">
			<Flex flex={1} direction="column" align={"center"}>
				<Header />

				<Flex
					flex={1}
					width={1480}
					bg={"black"}
					mt={20}
				>
				</Flex>
			</Flex>
		</MasterPage>
	);
}
