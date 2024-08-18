import { format } from "date-fns";

export const formatDate = (date: Date) => format(date, "HH:mm:ss");
