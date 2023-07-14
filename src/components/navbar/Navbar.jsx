import { ChevronDownIcon } from "@chakra-ui/icons";
import {
    Box,
    Flex,
    Icon,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { RiTimerFlashFill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineLogin } from "react-icons/md";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [activeUser] = useContext(UserContext);

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("activeUser");
        navigate("/auth");
    };

    return (
        <>
            <Flex
                position="absolute"
                top="0"
                left="0"
                backgroundColor="gray.300"
                right="0"
                height="65px"
                justifyContent="space-between"
                boxShadow={{ base: "none", sm: "md" }}
            >
                <Box display="flex" alignItems="center">
                    <Icon
                        as={RiTimerFlashFill}
                        fontSize="50px"
                        color="brand.100"
                        ml="5"
                        mt="2"
                    />

                    <Text
                        mt="1.5"
                        fontWeight="700"
                        fontSize="1.3rem"
                        color="textColor.h1"
                    >
                        Time Tracker
                    </Text>
                </Box>

                <Menu>
                    <MenuButton
                        cursor="pointer"
                        padding="0px 25px"
                        borderRadius="4px"
                        _hover={{
                            outline: "1px solid",
                            outlineColor: "gray.200",
                        }}
                        backgroundColor="transparent"
                    >
                        <Flex alignItems="center">
                            <Flex alignItems="center">
                                <>
                                    <Icon
                                        fontSize={24}
                                        mr={1}
                                        color="brand.100"
                                        as={FaUserCircle}
                                    />
                                    <Box
                                        display={{ base: "none", lg: "flex" }}
                                        flexDirection="column"
                                        fontSize="8pt"
                                        alignItems="flex-start"
                                        mr={8}
                                    >
                                        <Text
                                            fontWeight={700}
                                            color="textColor.label"
                                        >
                                            {activeUser.name}
                                        </Text>
                                    </Box>
                                </>
                            </Flex>
                            <ChevronDownIcon color="gray.500" />
                        </Flex>
                    </MenuButton>
                    <MenuList marginRight="20px">
                        <MenuItem
                            fontSize="10pt"
                            fontWeight={700}
                            _hover={{ bg: "blue.500", color: "white" }}
                            onClick={logout}
                        >
                            <Flex alignItems="center">
                                <Icon
                                    fontSize={20}
                                    mr={2}
                                    as={MdOutlineLogin}
                                />
                                Logout
                            </Flex>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
        </>
    );
};

export default Navbar;
