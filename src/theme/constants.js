export const DEFAULT_TRANSITION_DURATION = 350;

const DEFAULT_TRANSITION = `${DEFAULT_TRANSITION_DURATION}ms ease`;

export const TRANSITION_CLASSES = {
  "body, #root, .MuiPaper-root": {
    transformOrigin: "left top",
    transition: `background-color ${DEFAULT_TRANSITION}, color ${DEFAULT_TRANSITION}`,
  },
  ".MuiTypography-root": {
    transformOrigin: "left top",
    transition: `background-color ${DEFAULT_TRANSITION}, color ${DEFAULT_TRANSITION}`,
  },
  ".MuiDataGrid-root": {
    transformOrigin: "left top",
    transition: `background-color ${DEFAULT_TRANSITION}, color ${DEFAULT_TRANSITION}, border-color ${DEFAULT_TRANSITION}`,
  },
  ".MuiDataGrid-columnHeaders": {
    transformOrigin: "left top",
    transition: `background-color ${DEFAULT_TRANSITION}, color ${DEFAULT_TRANSITION}, border-color ${DEFAULT_TRANSITION}`,
  },
  ".MuiDataGrid-columnHeader": {
    transformOrigin: "left top",
    transition: `color ${DEFAULT_TRANSITION}`,
  },
  ".MuiDataGrid-footerContainer": {
    transformOrigin: "left top",
    transition: `background-color ${DEFAULT_TRANSITION}, color ${DEFAULT_TRANSITION}, border-color ${DEFAULT_TRANSITION}`,
  },
  ".MuiDrawer-paper": {
    transformOrigin: "left top",
    transition: `background-color ${DEFAULT_TRANSITION}, color ${DEFAULT_TRANSITION}`,
  },
  ".MuiDrawer-paper .MuiListItemButton-root, .MuiDrawer-paper .MuiListItemIcon-root, .MuiDrawer-paper .MuiListItemText-root":
    {
      transformOrigin: "left top",
      transition: `color ${DEFAULT_TRANSITION}, background-color ${DEFAULT_TRANSITION}`,
    },
};

export const BUBBLE_ANIMATION = {
  ":root": {
    "--bubble-scale-start": "0",
    "--bubble-scale-end": "80",
  },
  "body.theme-switching::after": {
    content: '""',
    position: "fixed",
    width: "24px",
    height: "24px",
    top: "var(--bubble-top)",
    right: "var(--bubble-right)",
    bottom: "var(--bubble-bottom)",
    left: "var(--bubble-left)",
    borderRadius: "50%",
    backgroundColor: "var(--theme-bubble-color)",
    opacity: 0.8,
    zIndex: 2000,
    pointerEvents: "none",
    transform: "scale(var(--bubble-scale-start))",
    animation: `theme-bubble ${DEFAULT_TRANSITION} forwards`,
  },
  "@keyframes theme-bubble": {
    "0%": { transform: "scale(var(--bubble-scale-start))", opacity: 0.8 },
    "100%": { transform: "scale(var(--bubble-scale-end))", opacity: 0 },
  },
};

