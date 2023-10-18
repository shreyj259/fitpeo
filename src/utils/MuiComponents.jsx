import styled from "@emotion/styled";
import { Drawer, ListItem, ListItemButton } from "@mui/material";

export const CustomDrawer=styled(Drawer)({
    '& .MuiDrawer-paper':{
        background:"#040440",
        color:"#fff",
        padding:"20px 15px",
        boxSizing:"border-box",
        width:"220px"
    }
})

export const CustomListItem=styled(ListItemButton)({
    width:"100%",
    padding:"8px 5px",
    alignItems:"center",
    "& .MuiListItemIcon-root":{
        padding:"2px",
        minWidth:"0",
        color:"#fff",
        borderRadius:"3px",
        border:"1px solid white",
        marginRight:"10px"
    },
    "& .MuiSvgIcon-root":{
        width:"15px",
        height:"15px"
    }
})