import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import "./NavBar.css";

function NavBar() {
  let userId = 5;
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "flex-start", // Sola hizalama
                alignItems: "center", // Dikey ortalama
              }}
            >
              <Link className="nav-link" to="/">
                Home
              </Link>
            </Typography>
            <Typography variant="h6" component="div">
              <Link
                sx={{ fontWeight: "bold" }}
                className="nav-link"
                to={{ pathname: "/users/" + userId }}
              >
                User
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
export default NavBar;
