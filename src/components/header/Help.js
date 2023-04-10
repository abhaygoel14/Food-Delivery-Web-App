import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

const Section = ({ title, description, isClicked, setisClicked }) => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", margin: 2 }}>
        <Box
          sx={{
            marginLeft: 2,
            marginTop: "100px",
            border: "1px solid black",
            width: "80%",
          }}
        >
          <Typography sx={{ padding: 2 }}>{title}</Typography>
          {isClicked ? (
            <>
              <Button onClick={() => setisClicked(false)}> Hide </Button>
              <Typography sx={{ padding: 2 }}>{description}</Typography>
            </>
          ) : (
            <Button onClick={() => setisClicked(true)}> Show </Button>
          )}
        </Box>
      </Box>
    </>
  );
};
const Help = () => {
  const [isClicked, setisClicked] = useState("about");
  return (
    <>
      <Section
        title={"About Insta Mart"}
        description={
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
        }
        isClicked={isClicked === "about"}
        setisClicked={() =>
          setisClicked(isClicked === "about" ? "what" : "about")
        }
      />
      <Section
        title={"What is Insta Mart ?"}
        description={
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
        }
        isClicked={isClicked === "what"}
        setisClicked={() =>
          setisClicked(isClicked === "what" ? "about" : "what")
        }
      />
    </>
  );
};

export default Help;
