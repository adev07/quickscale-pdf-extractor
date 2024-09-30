import path from "path";
import { ICONS } from "../assets/icons";

export const ROUTES = {
  HOME: {
    path: "/",
    label: "Home",
    key: "home",
    icon: ICONS.SIDEBAR_DASHBOARD,
  },
  PDF_EXTRACTOR: {
    path: "/extract-pdf",
    label: "Dashboard",
    key: "extract-pdf",
    icon: ICONS.SIDEBAR_DASHBOARD,
  },
  PDF_DETAILS: {
    path: "/pdf-details",
    label: "PDF Details",
    key: "pdf-details",
    icon: ICONS.SIDEBAR_DASHBOARD,
  },
  FILE_HISTORY: {
    path: "/file-history",
    label: "File History",
    key: "file-history",
    icon: ICONS.SIDEBAR_DASHBOARD,
  },
};
