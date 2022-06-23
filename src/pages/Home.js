import React, { Component, useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import ReactApexChart from 'react-apexcharts';
import BarChart from '../components/BarChart';
import AnalyticsChart from '../components/analytics/analyticsChart';
import SiteTraffic from './SiteTraffic';

import { Grid, Container, Typography } from '@material-ui/core';
import AppWidgetSummary from '../components/AppWidgetSummary';
import { Box } from '@material-ui/core';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import Areachart from '../pages/Areachart';
import Tickets from './Tickets';
import HomeTicket from './HomeTicket';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Chart.js Horizontal Bar Chart',
    },
  },
};
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [12, 55, 34, 120, 720, 550, 300],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};
function Home() {
  return (
    <div>
      <Box title="Dashboard">
        <Container maxWidth="xl">
          <Typography variant="h4" sx={{ mb: 5 }}>
            Welcome Back, Lesan Admin
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={12}>
              <div id="chart">
                <Areachart />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <AppWidgetSummary title="Weekly Sales" total={714000} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <AppWidgetSummary title="Monthly Sales" total={824000} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <AppWidgetSummary title="Yearly Sales" total={934000} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <AppWidgetSummary title="Yearly Sales" total={434000} />
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <Bar options={options} data={data} />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <BarChart />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <SiteTraffic />
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <HomeTicket />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default Home;
