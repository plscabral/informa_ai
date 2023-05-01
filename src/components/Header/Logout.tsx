import { IconButton, Tooltip } from "@chakra-ui/react";

// hooks
import { useAuth } from "../../hooks/useAuth";

// icons
import { MdLogout } from "react-icons/md";

export function Logout() {
	const { handleLogout } = useAuth();

	return (
		<Tooltip hasArrow label='Fazer logout' >
			<IconButton
				ml={5}
				variant="ghost"
				transition="filter(0.2)"
				_hover={{
					backgroundColor: "cyan.400",
				}}
				aria-label='Sair'
				icon={<MdLogout fontSize={24} color={"cyan.400"} />}
				onClick={handleLogout}
			/>
		</Tooltip>
	);
}
