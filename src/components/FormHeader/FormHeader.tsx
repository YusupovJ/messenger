import { Image, ModalHeader, Text } from "@chakra-ui/react";
import logo from "../../images/logo.png";

interface IProps {
	title: string;
	subtitle: string;
	text: string;
}

function FormHeader(props: IProps) {
	return (
		<ModalHeader display="flex" flexDirection="column" alignItems="center">
			<Image width="80px" src={logo} alt="Logo" />
			<Text fontSize="2rem">{props.title}</Text>
			<Text fontSize="1.5rem">{props.subtitle} </Text>
			<Text fontSize="1rem" fontWeight="400">
				{props.text}
			</Text>
		</ModalHeader>
	);
}

export default FormHeader;
