import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import { IoEnterOutline } from "react-icons/io5";
import { FormHeader } from "../../components/FormHeader";
import LogLink from "./LogLink";
import { Formik, FormikProps } from "formik";
import { Password, UserName, VerifyPassword } from "../../components/InputComponents";
import { useNavigate } from "react-router-dom";

export interface IValues {
	userName: string;
	password: string;
	verify: string;
}

function Register() {
	const { onClose } = useDisclosure();
	const navigate = useNavigate();

	const submitHandler = (values: IValues) => {
		console.log(values);
		localStorage.setItem("accessToken", "e1092jdsooijads90812.aisudh9812ejh9d8.asd908u12das");
		navigate("/");
	};

	return (
		<Modal isOpen={true} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<FormHeader title="Hello 👋" subtitle="Welcome to the Messenger!" text="First of all, you should sign up" />
				<Formik
					initialValues={{
						userName: "",
						password: "",
						verify: "",
					}}
					onSubmit={submitHandler}
				>
					{(formik: FormikProps<IValues>) => (
						<form onSubmit={formik.handleSubmit}>
							<ModalBody>
								<UserName formik={formik} />
								<Password formik={formik} />
								<VerifyPassword formik={formik} />
								<LogLink />
							</ModalBody>

							<ModalFooter>
								<Button isLoading={formik.isSubmitting} type="submit" colorScheme="purple">
									<Text mr="3px" position="relative" bottom="2px">
										Register
									</Text>
									<IoEnterOutline />
								</Button>
							</ModalFooter>
						</form>
					)}
				</Formik>
			</ModalContent>
		</Modal>
	);
}

export default Register;
