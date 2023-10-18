import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

const NavBar = ({ handleDrawerToggle }) => {
  return (
    <Grid
      container
      sx={{
        width: "100%",
        justifyContent: "space-between",
        padding: {xs:"5px",sm:"8px"},
        alignItems: "center",
      }}
    >
      <Grid iten>
        <Box sx={{ display: "flex", alignItems: "center",width:"140px",justifyContent:"space-between" }}>
          <Button
            sx={{
              display: { xs: "block", sm: "none"},
              width: "20px",
              minWidth:"20px",
            }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon color="#040440" />
          </Button>
          <Typography
            sx={{ fontSize: { xs: "15px", sm: "20px" }, fontWeight: "500",marginLeft:"10px" }}
          >
            Hello user, 👋
          </Typography>
        </Box>
      </Grid>
      <Grid item>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#fff",
            padding: "3px 5px",
            width: { xs: "100px", sm: "180px" },
          }}
        >
          <SearchIcon sx={{ color: "grey", fontSize: "18px" }} />
          <input className="nav-search" placeholder="Search" />
        </Box>
      </Grid>
    </Grid>
  );
};

export default NavBar;
