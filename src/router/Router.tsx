import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardLayout from "../layouts/DashbaordLayout";
import ExtractPdf from "../pages/ExtractPdf/ExtractPdf";
import PdfDetails from "../pages/PdfDetails/PdfDetails";
import { ROUTES } from "./RouteConfig";

type Props = {};

const Router = (props: Props) => {
  return (
    <Routes>
      <Route
        path={ROUTES.HOME.path}
        element={<DashboardLayout children={<ExtractPdf />} />}
      />
      <Route
        path={ROUTES.PDF_DETAILS.path}
        element={<DashboardLayout children={<PdfDetails />} />}
      />
    </Routes>
  );
};

export default Router;
