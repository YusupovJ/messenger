import { FormControl, FormErrorMessage, FormLabel, IconButton, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Field } from "formik";
import { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import { IFormikProps } from "../../types";

function Password({ formik }: IFormikProps) {
	const [isHide, setIsHide] = useState<boolean>(true);

	const togglePassword = () => {
		setIsHide(!isHide);
	};

	const validatePassword = (value: string) => {
		let errorMessage;

		if (value.length < 6) {
			errorMessage = "Password must have at least 6 characters";
		}

		return errorMessage;
	};

	return (
		<FormControl isInvalid={Boolean(formik.errors.password) && formik.touched.password}>
			<FormLabel mt="15px" htmlFor="password">
				Password:
			</FormLabel>
			<InputGroup>
				<Field
					as={Input}
					type={isHide ? "password" : "text"}
					onChange={formik.handleChange}
					name="password"
					id="password"
					value={formik.values.password}
					placeholder="Type a password"
					validate={validatePassword}
				/>
				<InputRightElement>
					<IconButton aria-label="Show/hide" icon={isHide ? <BiShow /> : <BiHide />} onClick={togglePassword} />
				</InputRightElement>
			</InputGroup>
			<FormErrorMessage>{formik.errors.password}</FormErrorMessage>
		</FormControl>
	);
}

export default Password;
