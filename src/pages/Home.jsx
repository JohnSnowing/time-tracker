import { Flex } from "@chakra-ui/react";
import Navbar from "../components/navbar/Navbar";
import { useEffect, useState } from "react";
import TimeDialog from "../components/dialogs/TimeDialog";
import TimeTable from "../components/table/TimeTable";
import TotalTimeTable from "../components/table/TotalTimeTable";
const Home = () => {
    const [userTimeData, setUserTimeData] = useState([]);

    //get Data from local storage when user refresh the page
    useEffect(() => {
        const userLocalTimeData = localStorage.getItem("userTimeData");
        if (userLocalTimeData) {
            const parseData = JSON.parse(userLocalTimeData);
            setUserTimeData(parseData);
        }
    }, []);
    return (
        <>
            <Flex flexDirection="column" width="100%" pt="100px">
                <Navbar />
                <Flex>
                    <TimeDialog setUserTimeData={setUserTimeData} />
                    <TotalTimeTable userTimeData={userTimeData} />
                </Flex>

                <TimeTable userTimeData={userTimeData} />
            </Flex>
        </>
    );
};

export default Home;
