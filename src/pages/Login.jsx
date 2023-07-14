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
import { useContext, useEffect, useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useOutletContext, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../context/userContext";

const Login = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputs, setInputs] = useState({ email: "", password: "" });
    const [activeUser, setActiveUser] = useContext(UserContext);
    const { setParentLayoutText } = useOutletContext();

    const navigate = useNavigate();

    const onClickReveal = () => {
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        //set parent header text
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

        const { email, password } = inputs;

        const userData = JSON.parse(localStorage.getItem("user"));

        //find user by email
        const user = userData.find((user) => user.email === email);

        if (user && user.password === password) {
            toast.success("Login successful");
            setActiveUser(user);
            navigate("/");
        } else {
            toast.error("Invalid email or password", {
                position: "top-right",
                autoClose: 3000,
                theme: "light",
            });
        }
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
