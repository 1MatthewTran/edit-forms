import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Person2Icon from "@mui/icons-material/Person2";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

const Header = () => {
  return (
    <AppBar position="static" className={`appbar`}>
      <Container className="fullWidth">
        <Toolbar disableGutters>
          <AdsClickIcon className="turn-red" />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              Locations
            </Button>

            <Button sx={{ my: 2, color: "white", display: "block" }}>
              Partners
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }} className="center">
            <NotificationsIcon
              style={{ fill: "none", stroke: "white", strokeWidth: 2 }}
            />
            <Person2Icon
              style={{ fill: "none", stroke: "white", strokeWidth: 2 }}
            />
            <select className="select">
              <option value="victor">Victor Ruscitto</option>
              <option value="matt">Matthew Tran</option>
            </select>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
