import { Drawer, ListItemText, ListItemIcon, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

import { DRAWER_NAVIGATION_WIDTH } from "./constants";

export const StyledDrawer = styled(Drawer)({
  "& .MuiDrawer-paper": {
    width: DRAWER_NAVIGATION_WIDTH,
  },
});

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  alignSelf: "end",
  display: "flex",
  width: 40,
  height: 40,
  margin: " 16px 16px 0",
  color: theme.palette.text.primary,
  "&:hover": {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.action.hover,
  },
}));

export const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  "& .MuiListItemText-primary": {
    color: theme.palette.text.primary,
    transition: "color .2s ease",
  },
  ".active & .MuiListItemText-primary, .Mui-selected & .MuiListItemText-primary":
    {
      color: theme.palette.primary.main,
      fontWeight: 600,
    },
}));

export const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  alignItems: "center",
  gap: 8,
  color: theme.palette.text.secondary,
  ".active & , .Mui-selected &": {
    color: theme.palette.primary.main,
  },
}));

