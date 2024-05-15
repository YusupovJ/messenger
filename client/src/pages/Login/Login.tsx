import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import { IoEnterOutline } from "react-icons/io5";
import { FormHeader } from "../../components/FormHeader";
import RegLink from "./RegLink";
import { Password, UserName } from "../../components/InputComponents";
import { Formik, FormikProps } from "formik";
import { useNavigate } from "react-router-dom";

interface IValues {
	userName: string;
	password: string;
}

function Login() {
	const { onClose } = useDisclosure();
	const navigate = useNavigate();

	function submitHandler(values: IValues) {
		console.log(values);
		localStorage.setItem("accessToken", "e1092jdsooijads90812.aisudh9812ejh9d8.asd908u12das");
		navigate("/");
	}

	return (
		<Modal isOpen={true} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<FormHeader title="Hi there 👋" subtitle="Glad to see you again!" text="Please, enter to your account" />
				<Formik initialValues={{ password: "", userName: "" }} onSubmit={submitHandler}>
					{(formik: FormikProps<IValues>) => (
						<form onSubmit={formik.handleSubmit}>
							<ModalBody>
								<UserName formik={formik} />
								<Password formik={formik} />
								<RegLink />
							</ModalBody>

							<ModalFooter>
								<Button isLoading={formik.isSubmitting} colorScheme="purple" type="submit">
									<Text mr="3px" position="relative" bottom="2px">
										Login
									</Text>
									<IoEnterOutline fontSize="20px" />
								</Button>
							</ModalFooter>
						</form>
					)}
				</Formik>
			</ModalContent>
		</Modal>
	);
}

export default Login;
