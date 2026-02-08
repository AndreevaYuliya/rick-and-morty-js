import { Drawer, Box, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  "& .MuiDrawer-paper": {
    width: 250,
    padding: 16,
  },
}));

export const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: 8,
});

export const StyledAvatar = styled(Avatar)({
  width: 56,
  height: 56,
});

