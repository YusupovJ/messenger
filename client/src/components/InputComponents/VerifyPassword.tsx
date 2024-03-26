import { FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react";
import { Field } from "formik";
import { IFormikProps } from "../../types";

function VerifyPassword({ formik }: IFormikProps) {
	const validateVerifyPassword = (value: string) => {
		let errorMessage;

		if (formik.values.password !== value) {
			errorMessage = "Passwords must be same";
		}

		return errorMessage;
	};

	return (
		<FormControl isInvalid={Boolean(formik.errors.verify) && formik.touched.verify}>
			<FormLabel mt="15px" htmlFor="verify">
				Verify password:
			</FormLabel>
			<Field
				as={Input}
				type="password"
				value={formik.values.verify}
				onChange={formik.handleChange}
				id="verify"
				name="verify"
				placeholder="Type the password again"
				validate={validateVerifyPassword}
			/>
			<FormErrorMessage>{formik.errors.verify}</FormErrorMessage>
		</FormControl>
	);
}

export default VerifyPassword;
