import {
    Button,
    FormControl,
    FormLabel,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useOutletContext } from "react-router-dom";

const Login = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputs, setInputs] = useState({ email: "", password: "" });
    const { setParentLayoutText } = useOutletContext();

    const onClickReveal = () => {
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        setParentLayoutText({
            headerText: "Log in to your account",
            secondaryHeaderText: "Don't have an account?",
            linkName: "Sign up",
            linkUrl: "register",
        });
    }, []);

    const handleChangeInput = (event) => {
        setInputs((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    const handleLogin = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <form onSubmit={handleLogin}>
                <FormControl mb="1rem">
                    <FormLabel htmlFor="email" color="">
                        Email
                    </FormLabel>
                    <Input
                        required
                        type="email"
                        id="email"
                        name="email"
                        _placeholder={{ color: "gray.500" }}
                        onChange={handleChangeInput}
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
                <FormControl>
                    <FormLabel htmlFor="email" color="">
                        Password
                    </FormLabel>
                    <InputGroup>
                        <InputRightElement>
                            <IconButton
                                variant="text"
                                backgroundColor="transparent"
                                color="textColor.label"
                                aria-label={
                                    isOpen ? "Mask password" : "Reveal password"
                                }
                                icon={isOpen ? <HiEyeOff /> : <HiEye />}
                                onClick={onClickReveal}
                            />
                        </InputRightElement>
                        <Input
                            required
                            name="password"
                            type={isOpen ? "text" : "password"}
                            onChange={handleChangeInput}
                            autoComplete="current-password"
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
                    </InputGroup>
                </FormControl>
                <Stack spacing="6" mt="2rem">
                    <Button variant="primary" type="submit">
                        Sign in
                    </Button>
                </Stack>
            </form>
        </>
    );
};

export default Login;
