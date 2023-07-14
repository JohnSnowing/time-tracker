import { Box, Container, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";
import { RiTimerFlashFill } from "react-icons/ri";
import { useState } from "react";

const AuthLayout = () => {
    const [parentLayoutText, setParentLayoutText] = useState({
        headerText: "",
        secondaryHeaderText: "",
        linkName: "",
        linkUrl: "",
    });
    return (
        <Container
            maxW="lg"
            py={{ base: "12", md: "24" }}
            px={{ base: "0", sm: "8" }}
        >
            <Stack spacing="8">
                <Box
                    py={{ base: "0", sm: "8" }}
                    px={{ base: "4", sm: "10" }}
                    bg={{ base: "transparent", sm: "bg.surface" }}
                    boxShadow={{ base: "none", sm: "md" }}
                    borderRadius={{ base: "none", sm: "xl" }}
                    width={{ sm: "100%", md: "448px", lg: "448px" }}
                    backgroundColor="white"
                >
                    <Stack
                        spacing="6"
                        textAlign="center"
                        align="center"
                        marginBottom="50px"
                    >
                        <Icon
                            as={RiTimerFlashFill}
                            fontSize="80px"
                            color="brand.100"
                        />
                        <Stack
                            spacing={{ base: "2", md: "3" }}
                            textAlign="center"
                        >
                            <Heading fontSize="30px" color="textColor.h1">
                                {parentLayoutText.headerText}
                            </Heading>
                            <Text color="textColor.p">
                                {parentLayoutText.secondaryHeaderText}{" "}
                                <Link to={parentLayoutText.linkUrl}>
                                    {parentLayoutText.linkName}
                                </Link>
                            </Text>
                        </Stack>
                    </Stack>
                    <Stack spacing="6">
                        <Stack spacing="5">
                            <Outlet context={{ setParentLayoutText }} />
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Container>
    );
};

export default AuthLayout;
