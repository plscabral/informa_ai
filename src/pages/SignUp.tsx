import { useState } from "react";
import { Link as LinkReactRouterDom } from "react-router-dom";

// @chakra
import {
	Flex,
	VStack,
	Input,
	Button,
	Text,
	Link,
	Image,
	Heading
} from "@chakra-ui/react";

// assets
import logoImg from "../assets/Informa.ai.png";

export function SignUp() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<Flex as="main"
			flex="8"
			flexDirection="column"
			align="center"
			justify="center"
			h="100vh"
		>
			<Flex
				w="100%"
				flexDirection="column"
				align="center"
				justify="center"
			>
				<Flex
					as={"form"}
					w="100%"
					maxW={["300px", "400px"]}
					flexDirection="column"
				>
					<VStack spacing="5">
						<Image src={logoImg} mb={3}/>

						<Heading
							size="sm"
							fontWeight={"normal"}
						>
              Preencha os campos abaixo:
						</Heading>

						<Input
							name="name"
							placeholder="Nome"
							borderRadius={8}
							size="md"
							value={name}
							onChange={e => setName(e.target.value)}
						/>

						<Input
							name="e-mail"
							placeholder="E-mail"
							borderRadius={8}
							size="md"
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>

						<Input
							name="password"
							placeholder="Senha"
							borderRadius={8}
							size="md"
							value={password}
							onChange={e => setPassword(e.target.value)}
						/>

						<Button
							colorScheme="cyan"
							sx={{ width: "100%" }}
							borderRadius={8}
						>
              Confirmar
						</Button>

						<Text color="gray.300">
              Já possui conta? {" "}
							<Link as={LinkReactRouterDom} to="/">
								<Text as="strong">Voltar</Text>
							</Link>
						</Text>
					</VStack>
				</Flex>
			</Flex>
		</Flex>
	);
}
