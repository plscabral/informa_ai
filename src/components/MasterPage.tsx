import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";

type Props = {
  titlePage: string;
  children: ReactNode
}

export function MasterPage({ titlePage, children }: Props) {
	return (
		<>
			<Helmet>
				<title>Informa aí | {titlePage}</title>
			</Helmet>

			{children}
		</>
	);
}
