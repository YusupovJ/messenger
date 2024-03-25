import { FormControl, FormLabel, IconButton, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";

function Inputs() {
	const [isHide, setIsHide] = useState<boolean>(true);

	const togglePassword = () => {
		setIsHide(!isHide);
	};

	return (
		<FormControl>
			<FormLabel htmlFor="username">User name:</FormLabel>
			<Input type="text" id="username" placeholder="Type your user name" />
			<FormLabel mt="15px" htmlFor="password">
				Password:
			</FormLabel>
			<InputGroup>
				<Input type={isHide ? "password" : "text"} id="password" placeholder="Type a password" />
				<InputRightElement>
					<IconButton aria-label="Show/hide" icon={isHide ? <BiShow /> : <BiHide />} onClick={togglePassword} />
				</InputRightElement>
			</InputGroup>
			<FormLabel mt="15px" htmlFor="verify">
				Verify password:
			</FormLabel>
			<Input type="password" id="verify" placeholder="Type the password again" />
		</FormControl>
	);
}

export default Inputs;
