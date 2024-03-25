import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import { IoEnterOutline } from "react-icons/io5";
import { FormHeader } from "../../components/FormHeader";
import Inputs from "./Inputs";
import RegLink from "./RegLink";

function Login() {
	const { onClose } = useDisclosure();
	return (
		<Modal isOpen={true} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<FormHeader title="Hi there 👋" subtitle="Glad to see you again!" text="Please, enter to your account" />
				<ModalBody>
					<Inputs />
					<RegLink></RegLink>
				</ModalBody>

				<ModalFooter>
					<Button colorScheme="purple">
						<Text mr="3px">Login</Text> <IoEnterOutline fontSize="20px" />
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}

export default Login;
