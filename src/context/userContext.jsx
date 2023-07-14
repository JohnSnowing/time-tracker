import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
    let [activeUser, setActiveUser] = useState(() =>
        JSON.parse(localStorage.getItem("activeUser")),
    );

    useEffect(() => {
        if (!activeUser) {
            return;
        }
        localStorage.setItem("activeUser", JSON.stringify(activeUser));
    }, [activeUser]);

    return (
        <UserContext.Provider value={[activeUser, setActiveUser]}>
            {children}
        </UserContext.Provider>
    );
};

UserContextProvider.propTypes = {
    children: PropTypes.node,
};
