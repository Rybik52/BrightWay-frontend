import DropDown, { DropDownItem } from "components/common/DropDown";
import SpinLoader from "components/common/SpinLoader";
import { FC } from "react";
import { useGetAllCompanyQuery } from "store/api";
import { SelectDropDownProps } from "./utils";

const OrgDropDown: FC<SelectDropDownProps> = ({ setSelectedItem }) => {
	const { data, isLoading, isSuccess } = useGetAllCompanyQuery({});
	const handleDropDownChange = (selectedOrg: DropDownItem[]) => {
		setSelectedItem(selectedOrg[0] || null);
	};

	let orgsData = [];
	if (isSuccess) {
		orgsData = data.map((org: { id: number; title: string }) => ({
			id: org.id,
			value: org.title,
		}));
	}

	if (isLoading) return <SpinLoader />;
	return (
		<DropDown
			title="Организация*"
			items={orgsData}
			onChange={handleDropDownChange}
		/>
	);
};

export default OrgDropDown;
