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
import { useEffect, useRef, useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useOutletContext } from "react-router-dom";

const Register = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const formRef = useRef(null);
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
    });
    const { setParentLayoutText } = useOutletContext();

    const onClickReveal = () => {
        setIsOpen((prev) => !prev);
    };

    const handleChangeInput = (event) => {
        setInputs((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    const handleRegister = (event) => {
        event.preventDefault();
        setIsLoading(true);
    };

    useEffect(() => {
        setParentLayoutText({
            headerText: "Create an account",
            secondaryHeaderText: "Already have an account?",
            linkName: "Log in",
            linkUrl: ".",
        });
    }, []);
    return (
        <>
            <form onSubmit={handleRegister} ref={formRef} autoComplete="off">
                <FormControl mb="1rem">
                    <FormLabel htmlFor="email" color="">
                        Name
                    </FormLabel>
                    <Input
                        required
                        type="name"
                        id="name"
                        name="name"
                        onChange={handleChangeInput}
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
                    <FormLabel htmlFor="email" color="">
                        Email
                    </FormLabel>
                    <Input
                        required
                        type="email"
                        id="email"
                        name="email"
                        onChange={handleChangeInput}
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
                            onChange={handleChangeInput}
                            type={isOpen ? "text" : "password"}
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
                    <Button
                        variant="primary"
                        type="submit"
                        isLoading={isLoading}
                    >
                        Sign in
                    </Button>
                </Stack>
            </form>
        </>
    );
};

export default Register;
