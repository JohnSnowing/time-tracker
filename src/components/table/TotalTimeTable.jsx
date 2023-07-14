import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    useDisclosure,
} from "@chakra-ui/react";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import PropTypes from "prop-types";

const TotalTimeTable = ({ userTimeData }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [activeUser] = useContext(UserContext);

    const handleClick = () => {
        onOpen();
    };

    //filter data show only data for a week
    const filteredData = userTimeData.filter((entry) => {
        const entryDate = new Date(entry.dateCreated);
        const currentDate = new Date();
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(currentDate.getDate() - 7);
        return (
            entry.email === activeUser.email &&
            entryDate >= oneWeekAgo &&
            entryDate <= currentDate
        );
    });

    // Get unique project names
    const uniqueProjects = [
        ...new Set(filteredData.map((entry) => entry.project)),
    ];

    // Calculate total hours for each project
    const projectTotals = uniqueProjects.map((project) => {
        const projectEntries = filteredData.filter(
            (entry) => entry.project === project,
        );
        let totalHours = 0;
        let totalMinutes = 0;
        projectEntries.forEach((entry) => {
            totalHours += parseInt(entry.hours);
            totalMinutes += parseInt(entry.minutes);
        });

        // Convert total minutes to hours and minutes
        totalHours += Math.floor(totalMinutes / 60);
        totalMinutes = totalMinutes % 60;
        return { project, totalHours, totalMinutes };
    });

    return (
        <>
            <Button
                onClick={() => handleClick()}
                key="lg"
                m={4}
                backgroundColor="gray.300"
            >
                View Total Hours
            </Button>

            <Drawer onClose={onClose} isOpen={isOpen} size="lg">
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton backgroundColor="brand.100" />
                    <DrawerHeader>
                        Total hours on each project for a week
                    </DrawerHeader>
                    <DrawerBody>
                        <TableContainer>
                            <Table variant="simple">
                                <Thead>
                                    <Tr>
                                        <Th>Project</Th>
                                        <Th>Total Hours (H:M)</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {projectTotals.map((project, index) => (
                                        <Tr key={index}>
                                            <Td>{project.project}</Td>
                                            <Td>
                                                {project.totalHours}:
                                                {project.totalMinutes}
                                            </Td>
                                        </Tr>
                                    ))}
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default TotalTimeTable;

TotalTimeTable.propTypes = {
    userTimeData: PropTypes.array,
};
