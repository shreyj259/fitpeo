import {
  Box,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { CustomDrawer, CustomListItem } from "../utils/MuiComponents";

//icon imports
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const SideListData = [
  { id: 0, title: "Dashboard", icon: <KeyRoundedIcon /> },
  { id: 1, title: "Product", icon: <Inventory2OutlinedIcon /> },
  { id: 2, title: "Customers", icon: <AccountCircleOutlinedIcon /> },
  { id: 3, title: "Income", icon: <AttachMoneyOutlinedIcon /> },
  { id: 4, title: "Promote", icon: <LocalOfferOutlinedIcon /> },
  { id: 5, title: "Help", icon: <HelpOutlinedIcon /> },
];

const SideBar = ({ mobileOpen, handleDrawerToggle }) => {
  const SidebarContent = (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <SettingsOutlinedIcon color="#fff" />
          <Typography component="h5" variant="h5">
            Dashboard
          </Typography>
        </Box>
        <List sx={{ width: "100%", marginTop: "40px" }}>
          {SideListData.map((item) => (
            <CustomListItem>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
              <KeyboardArrowRightOutlinedIcon />
            </CustomListItem>
          ))}
        </List>
      </Box>
      <List sx={{ width: "100%" }}>
        <ListItemButton sx={{ width: "100%", padding: 0 }}>
          <ListItemAvatar>
            <AccountCircleOutlinedIcon />
          </ListItemAvatar>
          <ListItemText primary="User Name" />
          <KeyboardArrowDownOutlinedIcon />
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <>
      <Box sx={{ width: { sm: "220px" }, flexShrink: { sm: 0 } }}>
        <CustomDrawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: "block", sm: "none" },
          }}
        >
          {SidebarContent}
        </CustomDrawer>
        <CustomDrawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
          }}
          open
        >
          {SidebarContent}
        </CustomDrawer>
      </Box>
    </>
  );
};

export default SideBar;
