import { FC } from "react";

interface ReportTypeProps {
	type: string;
}

const ReportType: FC<ReportTypeProps> = ({ type }) => {
	const typeTranslations: { [key: string]: string } = {
		balance: "Отчет по остаткам ЛП",
		disposal: "Отчет о выбытии ЛП",
		traffic: "Отчет о движении ЛП",
		pricing: "Отчет по ценам",
	};

	const typeName = typeTranslations[type] || "";

	return <>{typeName}</>;
};

export default ReportType;
