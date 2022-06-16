import React, { Component } from "react";
import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";
import BarChart from "../components/BarChart";

import { Grid, Container, Typography } from '@material-ui/core';
import AppWidgetSummary from "../components/AppWidgetSummary";
import { Box } from '@material-ui/core';
class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
        
          series: [{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
          }, {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41]
          }],
          options: {
            chart: {
              height: 350,
              type: 'area'
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth'
            },
            xaxis: {
              type: 'datetime',
              categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
            },
            tooltip: {
              x: {
                format: 'dd/MM/yy HH:mm'
              },
            },
          },
        
        
        };
      }
  render() {
    return (
      <div>
      <Box title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Welcome Back, Lesan Admin
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Weekly Sales" total={714000} icon={'ant-design:android-filled'} />
          </Grid>
          </Grid>
        </Container>
        </Box>
        
        <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={350} />
        <BarChart/>
      </div>
      </div>
    );
  }
}

export default Home;