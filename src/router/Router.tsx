import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardLayout from "../layouts/DashbaordLayout";
import ExtractPdf from "../pages/ExtractPdf/ExtractPdf";
import PdfDetails from "../pages/PdfDetails/PdfDetails";
import FileHistory from "../pages/FileHistory/FileHistory";
import { ROUTES } from "./RouteConfig";
import Home from "../pages/Home/Home";

type Props = {};

const Router = (props: Props) => {
  return (
    <Routes>
      <Route
        path={ROUTES.HOME.path}
        element={<DashboardLayout children={<Home />} />}
      />
      <Route
        path={ROUTES.PDF_EXTRACTOR.path}
        element={<DashboardLayout children={<ExtractPdf />} />}
      />
      <Route
        path={ROUTES.PDF_DETAILS.path}
        element={<DashboardLayout children={<PdfDetails />} />}
      />
      <Route
        path={ROUTES.FILE_HISTORY.path}
        element={<DashboardLayout children={<FileHistory />} />}
      />
    </Routes>
  );
};

export default Router;
