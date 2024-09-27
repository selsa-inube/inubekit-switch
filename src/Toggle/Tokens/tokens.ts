import { inube } from "@inubekit/foundations";

const tokens = {
  on: {
    background: {
      color: {
        regular: inube.palette.green.G400,
        disabled: inube.palette.neutral.N20,
        hover: inube.palette.green.G300,
      },
    },
    toggleBackground: {
      color: {
        regular: inube.palette.neutral.N0,
        disabled: inube.palette.neutral.N0,
        hover: inube.palette.neutral.N0,
      },
    },
    toggleBorder: {
      color: {
        regular: inube.palette.neutralAlpha.N0A,
        disabled: inube.palette.neutral.N70,
        hover: inube.palette.neutralAlpha.N0A,
      },
    },
    icon: {
      appereance: "light",
    },
  },
  off: {
    background: {
      color: {
        regular: inube.palette.neutral.N20,
        disabled: inube.palette.neutral.N20,
        hover: inube.palette.neutral.N10,
      },
    },
    toggleBackground: {
      color: {
        regular: inube.palette.neutral.N0,
        disabled: inube.palette.neutral.N0,
        hover: inube.palette.neutral.N0,
      },
    },
    toggleBorder: {
      color: {
        regular: inube.palette.neutral.N70,
        disabled: inube.palette.neutral.N70,
        hover: inube.palette.neutral.N70,
      },
    },
    icon: {
      appereance: "gray",
    },
  },
};

export { tokens };
