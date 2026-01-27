import { Box, Alert } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { styled } from "@mui/material/styles";

export const StyledBox = styled(Box)({
  display: "flex",
  flex: 1,
  flexDirection: "column",
  height: "100vh",
  padding: 0,
  gap: 0,
});

export const StyledAlert = styled(Alert)(({ theme }) => ({
  position: "fixed",
  top: 70,
  right: 24,
  zIndex: theme.zIndex.tooltip,
}));

export const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  "&.MuiDataGrid-root": {
    "--DataGrid-t-header-background-base": theme.palette.background.default,
  },
  flex: 1,
  marginTop: 58,
  "& .MuiDataGrid-row": {
    backgroundColor: theme.palette.background.main,
  },
  "& .MuiDataGrid-row:hover": {
    backgroundColor: theme.palette.action.hover,
  },
  "& .MuiDataGrid-virtualScroller": {
    overflowY: "auto",
  },
  "& .MuiDataGrid-footerContainer": {
    position: "sticky",
    bottom: 0,
    zIndex: 2,
    backgroundColor: theme.palette.background.default,
    borderTop: `1px solid ${theme.palette.divider}`,
  },
  "& .MuiDataGrid-columnHeaders": {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  "& .MuiDataGrid-columnHeader": {
    color: theme.palette.text.primary,
    fontWeight: 600,
    transformOrigin: "left top",
    transition: "background-color 0.35s ease, color 0.35s ease",
  },
}));

