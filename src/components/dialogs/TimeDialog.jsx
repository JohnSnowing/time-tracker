import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Select,
    Textarea,
    useDisclosure,
} from "@chakra-ui/react";
import { useContext, useRef, useState } from "react";
import { UserContext } from "../../context/userContext";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const TimeDialog = ({ setUserTimeData }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [activeUser] = useContext(UserContext);
    const formRef = useRef();

    const initialNewTimeState = {
        email: activeUser.email,
        hours: "",
        minutes: "",
        description: "",
        project: "Booking App",
        dateCreated: Date.now(),
    };

    const [timeData, setTimeData] = useState(initialNewTimeState);

    const handleSubmit = (event) => {
        event.preventDefault();

        //Get data from local storage
        const localUserTimeData =
            JSON.parse(localStorage.getItem("userTimeData")) || [];

        const { hours, minutes } = timeData;

        //validations
        if (hours > 24 || hours < 0) {
            toast.error("Hours should not be greater than 24 or less than 0", {
                position: "top-right",
                autoClose: 3000,
                theme: "light",
            });
        } else if (minutes > 60 || minutes < 0) {
            toast.error(
                "Minutes should not be greater than 60 or less than 0",
                {
                    position: "top-right",
                    autoClose: 3000,
                    theme: "light",
                },
            );
        } else {
            updateLocalStorage(localUserTimeData, timeData);
            toast.success("Time added");
            formRef.current.reset();
            setTimeData(initialNewTimeState);
        }
    };

    const updateLocalStorage = (data, newTimeEntry) => {
        if (data.length !== 0) {
            data.push(newTimeEntry);
            localStorage.setItem("userTimeData", JSON.stringify(data));
            setUserTimeData(data);
        } else {
            localStorage.setItem(
                "userTimeData",
                JSON.stringify([newTimeEntry]),
            );
            setUserTimeData([newTimeEntry]);
        }
    };

    const handleInputChange = (event) => {
        setTimeData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    return (
        <Box paddingLeft="20px">
            <Button backgroundColor="brand.100" onClick={onOpen} mt="1rem">
                New Time
            </Button>
            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Log a Time</ModalHeader>
                    <ModalCloseButton backgroundColor="brand.100" />
                    <ModalBody>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <FormControl mb="1rem">
                                <FormLabel htmlFor="hour" color="">
                                    Hour/s
                                </FormLabel>
                                <Input
                                    required
                                    type="number"
                                    id="hour"
                                    name="hours"
                                    onChange={handleInputChange}
                                    _placeholder={{ color: "gray.500" }}
                                    fontSize="13pt"
                                    _hover={{
                                        bg: "white",
                                        border: "1px solid",
                                        borderColor: "brand.100",
                                    }}
                                    _focus={{
                                        outline: "none",
                                        bg: "White",
                                        border: "1px solid",
                                        borderColor: "brand.100",
                                    }}
                                />
                            </FormControl>
                            <FormControl mb="1rem">
                                <FormLabel htmlFor="hour" color="">
                                    Minute/s
                                </FormLabel>
                                <Input
                                    required
                                    type="number"
                                    id="minutes"
                                    name="minutes"
                                    onChange={handleInputChange}
                                    _placeholder={{ color: "gray.500" }}
                                    fontSize="13pt"
                                    _hover={{
                                        bg: "white",
                                        border: "1px solid",
                                        borderColor: "brand.100",
                                    }}
                                    _focus={{
                                        outline: "none",
                                        bg: "White",
                                        border: "1px solid",
                                        borderColor: "brand.100",
                                    }}
                                />
                            </FormControl>
                            <FormControl mb="1rem">
                                <FormLabel htmlFor="hour" color="">
                                    Project
                                </FormLabel>
                                <Select
                                    required
                                    id="project"
                                    name="project"
                                    _placeholder={{ color: "gray.500" }}
                                    onChange={handleInputChange}
                                    fontSize="13pt"
                                    _hover={{
                                        bg: "white",
                                        border: "1px solid",
                                        borderColor: "brand.100",
                                    }}
                                    _focus={{
                                        outline: "none",
                                        bg: "White",
                                        border: "1px solid",
                                        borderColor: "brand.100",
                                    }}
                                >
                                    <option value="Booking App">
                                        Booking App
                                    </option>
                                    <option value="Mobile Application">
                                        Mobile Application
                                    </option>
                                    <option value="Game Development">
                                        Game Development
                                    </option>
                                </Select>
                            </FormControl>
                            <FormControl mb="1rem">
                                <FormLabel htmlFor="hour" color="">
                                    Description
                                </FormLabel>
                                <Textarea
                                    required
                                    type="text"
                                    id="description"
                                    name="description"
                                    _placeholder={{ color: "gray.500" }}
                                    onChange={handleInputChange}
                                    fontSize="13pt"
                                    _hover={{
                                        bg: "white",
                                        border: "1px solid",
                                        borderColor: "brand.100",
                                    }}
                                    _focus={{
                                        outline: "none",
                                        bg: "White",
                                        border: "1px solid",
                                        borderColor: "brand.100",
                                    }}
                                />
                            </FormControl>
                            <Button
                                mt={1}
                                backgroundColor="brand.100"
                                type="submit"
                                color="white"
                                _hover={{ color: "textColor.h1" }}
                            >
                                Submit
                            </Button>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default TimeDialog;

TimeDialog.propTypes = {
    setUserTimeData: PropTypes.func.isRequired,
};
