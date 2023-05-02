import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export function fDateTime(date: Date | string | number) {
	return format(new Date(date), "dd/MM/yyyy p", { locale: ptBR });
}
