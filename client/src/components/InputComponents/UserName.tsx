import { FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react";
import { Field } from "formik";
import { IFormikProps } from "../../types";
import { memo } from "react";

function UserName({ formik }: IFormikProps) {
	const validateUserName = (value: string) => {
		let errorMessage;

		if (value.length === 0) {
			errorMessage = "User name is required";
		}

		return errorMessage;
	};

	return (
		<FormControl isInvalid={Boolean(formik.errors.userName) && formik.touched.userName}>
			<FormLabel htmlFor="userName">User name:</FormLabel>
			<Field
				as={Input}
				type="text"
				id="userName"
				value={formik.values.userName}
				name="userName"
				placeholder="Type your user name"
				onChange={formik.handleChange}
				validate={validateUserName}
			/>
			<FormErrorMessage>{formik.errors.userName}</FormErrorMessage>
		</FormControl>
	);
}

export default memo(UserName);
