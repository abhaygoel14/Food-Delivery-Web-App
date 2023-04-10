import { createContext } from "react";

const UserContext = createContext({
  user: { name: "Dummy User", email: "dummy@gmail.com" },
});

export default UserContext;
