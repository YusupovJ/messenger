import { Link, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

function LogLink() {
	return (
		<Text align="center" fontSize="14px" mt="15px">
			Already have an account?{" "}
			<Link as={NavLink} to="/login" color="blue.200">
				Sign in
			</Link>
		</Text>
	);
}

export default LogLink;
