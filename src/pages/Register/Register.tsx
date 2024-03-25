import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import { IoEnterOutline } from "react-icons/io5";
import { FormHeader } from "../../components/FormHeader";
import Inputs from "./Inputs";
import LogLink from "./LogLink";

function Register() {
	const { onClose } = useDisclosure();
	return (
		<Modal isOpen={true} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<FormHeader title="Hello 👋" subtitle="Welcome to the Messenger!" text="First of all, you should sign up" />
				<ModalBody>
					<Inputs />
					<LogLink />
				</ModalBody>

				<ModalFooter>
					<Button colorScheme="purple">
						<Text mr="3px">Register</Text> <IoEnterOutline fontSize="20px" />
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}

export default Register;
