import {
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import PropTypes from "prop-types";

const TimeTable = ({ userTimeData }) => {
    const [activeUser] = useContext(UserContext);

    //converting timestamp to proper date format mm/dd/yyyy and time
    const convertToActualDate = (timestamp) => {
        const date = new Date(timestamp);
        const formattedDate = date.toLocaleString("en-US", { timeZone: "UTC" });
        return formattedDate;
    };

    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    //filters only show current user and only a week
    const filteredData = userTimeData
        .filter((dataUser) => dataUser.email === activeUser.email)
        .filter((data) => new Date(data.dateCreated) >= oneWeekAgo);

    return (
        <>
            <TableContainer
                width="99vw"
                mt="5"
                boxShadow={{ base: "none", sm: "md" }}
                padding="2rem"
                backgroundColor="white"
            >
                <Table variant="striped">
                    <TableCaption>Work Recorded for a Week</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Project</Th>
                            <Th>Description</Th>
                            <Th>Total Time (H:M)</Th>
                            <Th>Date Submitted</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {filteredData.map((data, index) => {
                            return (
                                <Tr key={index}>
                                    <Td>{data.project}</Td>
                                    <Td>{data.description}</Td>
                                    <Td>
                                        {data.hours}:{data.minutes}
                                    </Td>
                                    <Td>
                                        {convertToActualDate(data.dateCreated)}
                                    </Td>
                                </Tr>
                            );
                        })}
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    );
};

export default TimeTable;

TimeTable.propTypes = {
    userTimeData: PropTypes.array,
};
