import { FormControl, FormLabel, Input } from "@chakra-ui/react";

function Inputs() {
	return (
		<FormControl>
			<FormLabel htmlFor="username">User name:</FormLabel>
			<Input type="text" id="username" placeholder="Type your user name" />
			<FormLabel htmlFor="password" mt="15px">
				Password:
			</FormLabel>
			<Input type="password" id="password" placeholder="Type a password" />
		</FormControl>
	);
}

export default Inputs;
