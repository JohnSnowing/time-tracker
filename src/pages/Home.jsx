import { Flex } from "@chakra-ui/react";
import Navbar from "../components/navbar/Navbar";
const Home = () => {
    return (
        <>
            <Flex flexDirection="column" width="100%" pt="100px">
                <Navbar />
            </Flex>
        </>
    );
};

export default Home;
