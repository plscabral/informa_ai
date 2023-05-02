import { useState } from "react";
import { Link as LinkReactRouterDom } from "react-router-dom";

// @chakra
import {
	Flex,
	Box,
	Heading,
	Link,
	Button,
	Icon,
	Spinner,
	Table,
	Thead,
	Tr,
	Th,
	Tbody,
	Td,
	IconButton
} from "@chakra-ui/react";

// components
import { MasterPage } from "../components/MasterPage";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

// // types
// import { Article } from "../types/Article";

// icons
import { RiAddLine, RiDeleteBinFill } from "react-icons/ri";
import { Input } from "../components/Input";

export function TermList() {
	const [isLoading, setIsLoading] = useState(false);

	// const [articles, setArticles] = useState<Article[]>([]);

	// async function handleGetArticles() {
	// 	await fetch(
	// 		"https://newsapi.org/v2/everything?q=Flamengo&sortBy=publishedAt&apiKey=3bf9c14f840245fcb11c521bfee34767&language=pt", {
	// 			method: "GET",
	// 		}).then((response) => response.json()).then((responseData) => {
	// 		console.log(responseData);
	// 		setArticles(responseData.articles);
	// 	});
	// }

	// useEffect(() => {
	// 	handleGetArticles();
	// }, []);

	return (
		<MasterPage titlePage="Lista de termos">
			<Flex direction="column" h="100vh">
				<Header />

				<Flex
					w="100%"
					my="6"
					maxW={1480}
					mx="auto"
					px="6"
				>
					<Sidebar />

					<Box
						flex="1"
						borderRadius={8}
						p="8"
						height={850}
						overflow={"auto"}
						sx={{
							"&::-webkit-scrollbar": {
								width: "5px",
								height: 0,
								scrollbarWidth: "6px"
							},
							"&::-webkit-scrollbar-track": {
								background: "transparent"
							},
							"&::-webkit-scrollbar-thumb": {
								background: "gray.700"
							}
						}}
					>
						<Flex mb="8" justify="space-between" align="center">
							<Heading size="lg" fontWeight="normal">
                Termos

								{!isLoading && <Spinner size="sm" color="gray.500" ml="4" />}
							</Heading>

							<Link as={LinkReactRouterDom} to="/termos/criar-novo">
								<Button
									as="a"
									size="sm"
									fontSize="sm"
									colorScheme="cyan"
									leftIcon={<Icon as={RiAddLine} fontSize="20" />}
								>
                  Criar novo
								</Button>
							</Link>
						</Flex>

						{
							isLoading ? (
								<Flex justify="center">
									<Spinner />
								</Flex>
							) : (
								<Table colorScheme="whiteAlpha">
									<Thead>
										<Th>Termo</Th>
										<Th>Data Cadastro</Th>
										<Th w="8"></Th>
									</Thead>

									<Tbody>
										<Tr>
											<Td>Flamengo</Td>
											<Td>01/05/2023 23:04</Td>
											<Td>
												<IconButton
													aria-label=""
													icon={<RiDeleteBinFill fontSize="18px" />}
													bg="red.500"
													transition="filter(0.2)"
													_hover={{
														filter: "brightness(0.9)"
													}}
												/>
											</Td>
										</Tr>

										<Tr>
											<Td>Bitcoin</Td>
											<Td>01/05/2023 22:55</Td>
											<Td>
												<IconButton
													aria-label=""
													icon={<RiDeleteBinFill fontSize="18px" />}
													bg="red.500"
													transition="filter(0.2)"
													_hover={{
														filter: "brightness(0.9)"
													}}
												/>
											</Td>
										</Tr>

										<Tr>
											<Td>Programação</Td>
											<Td>29/04/2023 22:30</Td>
											<Td>
												<IconButton
													aria-label=""
													icon={<RiDeleteBinFill fontSize="18px" />}
													bg="red.500"
													transition="filter(0.2)"
													_hover={{
														filter: "brightness(0.9)"
													}}
												/>
											</Td>
										</Tr>

										<Tr>
											<Td>Programação</Td>
											<Td>29/04/2023 22:30</Td>
											<Td>
												<IconButton
													aria-label=""
													icon={<RiDeleteBinFill fontSize="18px" />}
													bg="red.500"
													transition="filter(0.2)"
													_hover={{
														filter: "brightness(0.9)"
													}}
												/>
											</Td>
										</Tr>

										<Tr>
											<Td>Programação</Td>
											<Td>29/04/2023 22:30</Td>
											<Td>
												<IconButton
													aria-label=""
													icon={<RiDeleteBinFill fontSize="18px" />}
													bg="red.500"
													transition="filter(0.2)"
													_hover={{
														filter: "brightness(0.9)"
													}}
												/>
											</Td>
										</Tr>

										<Tr>
											<Td>Programação</Td>
											<Td>29/04/2023 22:30</Td>
											<Td>
												<IconButton
													aria-label=""
													icon={<RiDeleteBinFill fontSize="18px" />}
													bg="red.500"
													transition="filter(0.2)"
													_hover={{
														filter: "brightness(0.9)"
													}}
												/>
											</Td>
										</Tr>

										<Tr>
											<Td>Programação</Td>
											<Td>29/04/2023 22:30</Td>
											<Td>
												<IconButton
													aria-label=""
													icon={<RiDeleteBinFill fontSize="18px" />}
													bg="red.500"
													transition="filter(0.2)"
													_hover={{
														filter: "brightness(0.9)"
													}}
												/>
											</Td>
										</Tr>

										<Tr>
											<Td>Programação</Td>
											<Td>29/04/2023 22:30</Td>
											<Td>
												<IconButton
													aria-label=""
													icon={<RiDeleteBinFill fontSize="18px" />}
													bg="red.500"
													transition="filter(0.2)"
													_hover={{
														filter: "brightness(0.9)"
													}}
												/>
											</Td>
										</Tr>

										<Tr>
											<Td>Programação</Td>
											<Td>29/04/2023 22:30</Td>
											<Td>
												<IconButton
													aria-label=""
													icon={<RiDeleteBinFill fontSize="18px" />}
													bg="red.500"
													transition="filter(0.2)"
													_hover={{
														filter: "brightness(0.9)"
													}}
												/>
											</Td>
										</Tr>

										<Tr>
											<Td>Programação</Td>
											<Td>29/04/2023 22:30</Td>
											<Td>
												<IconButton
													aria-label=""
													icon={<RiDeleteBinFill fontSize="18px" />}
													bg="red.500"
													transition="filter(0.2)"
													_hover={{
														filter: "brightness(0.9)"
													}}
												/>
											</Td>
										</Tr>

										<Tr>
											<Td>Programação</Td>
											<Td>29/04/2023 22:30</Td>
											<Td>
												<IconButton
													aria-label=""
													icon={<RiDeleteBinFill fontSize="18px" />}
													bg="red.500"
													transition="filter(0.2)"
													_hover={{
														filter: "brightness(0.9)"
													}}
												/>
											</Td>
										</Tr>

										<Tr>
											<Td>Programação</Td>
											<Td>29/04/2023 22:30</Td>
											<Td>
												<IconButton
													aria-label=""
													icon={<RiDeleteBinFill fontSize="18px" />}
													bg="red.500"
													transition="filter(0.2)"
													_hover={{
														filter: "brightness(0.9)"
													}}
												/>
											</Td>
										</Tr>

										<Tr>
											<Td>Programação</Td>
											<Td>29/04/2023 22:30</Td>
											<Td>
												<IconButton
													aria-label=""
													icon={<RiDeleteBinFill fontSize="18px" />}
													bg="red.500"
													transition="filter(0.2)"
													_hover={{
														filter: "brightness(0.9)"
													}}
												/>
											</Td>
										</Tr>

										<Tr>
											<Td>Programação</Td>
											<Td>29/04/2023 22:30</Td>
											<Td>
												<IconButton
													aria-label=""
													icon={<RiDeleteBinFill fontSize="18px" />}
													bg="red.500"
													transition="filter(0.2)"
													_hover={{
														filter: "brightness(0.9)"
													}}
												/>
											</Td>
										</Tr>

										<Tr>
											<Td>Programação</Td>
											<Td>29/04/2023 22:30</Td>
											<Td>
												<IconButton
													aria-label=""
													icon={<RiDeleteBinFill fontSize="18px" />}
													bg="red.500"
													transition="filter(0.2)"
													_hover={{
														filter: "brightness(0.9)"
													}}
												/>
											</Td>
										</Tr>
									</Tbody>
								</Table>
							)
						}
					</Box>
				</Flex>
			</Flex>
		</MasterPage>
	);
}
