import { Flex } from "@chakra-ui/react";
import Navbar from "../components/navbar/Navbar";
import { useState } from "react";
import TimeDialog from "../components/dialogs/TimeDialog";
const Home = () => {
    const [userTimeData, setUserTimeData] = useState([]);
    return (
        <>
            <Flex flexDirection="column" width="100%" pt="100px">
                <Navbar />
                <Flex>
                    <TimeDialog setUserTimeData={setUserTimeData} />
                    <div></div>
                </Flex>

                <div></div>
            </Flex>
        </>
    );
};

export default Home;
