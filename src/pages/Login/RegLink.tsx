import { Link, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

function RegLink() {
	return (
		<Text align="center" fontSize="14px" mt="15px">
			Don't have an account?{" "}
			<Link as={NavLink} to="/register" color="blue.200">
				Sign up
			</Link>
		</Text>
	);
}

export default RegLink;
