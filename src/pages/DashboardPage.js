import React from "react";



import NewOrders from "../components/dashboard/NewOrders";
import MonthlySales from "../components/dashboard/MonthlySales";
import BrowserUsage from "../components/dashboard/BrowserUsage";
import Grid from "@material-ui/core/Grid";
import Data from "../data";

const DashboardPage = () => {
  return (
    <div>



      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <NewOrders data={Data.dashBoardPage.newOrders} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MonthlySales data={Data.dashBoardPage.monthlySales} />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <BrowserUsage data={Data.dashBoardPage.browserUsage} />
        </Grid>
      </Grid>
    </div>
  );
};

export default DashboardPage;
