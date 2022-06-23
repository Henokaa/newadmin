import React from 'react';
import { useAnalyticsApi } from 'react-use-analytics-api';
import {
  AnalyticsDashboard,
  AuthorizeButton,
  SignOutButton,
} from 'react-analytics-charts';
import {
  SessionsByDateChart,
  SessionsGeoChart,
  SessionsBySourceChart,
  SessionsByHourChart,
  PageViewsPerPathChart,
  ActiveUsersChart,
  BounceRateChart,
  OrganicSearchesChart,
  PagesPerSessionChart,
  SessionDurationChart,
  SessionsByDeviceCategoryChart,
  SessionsByUserTypeChart,
} from 'react-analytics-charts';

const AnalyticsChart = () => {
  const { gapi, authorized } = useAnalyticsApi();

  return (
    <div>
      <iframe
        title="Google Analytics Report"
        width="100%"
        height="600"
        src="https://datastudio.google.com/embed/reporting/887a4ec9-9e41-4997-8ff3-7a4dc98fb1d5/page/4VDGB"
        frameborder="0"
        allowfullscreen
      ></iframe>
      <iframe
        title="Google Analytics Geo"
        width="100%"
        height="600"
        src="https://datastudio.google.com/embed/reporting/cc688468-ec37-4e3d-a870-346c0e1b7b55/page/tWDGB"
        frameborder="0"
        allowfullscreen
      ></iframe>
      {!authorized && (
        <div>
          Not authorized. Sign in here:{' '}
          <AuthorizeButton
            gapi={gapi}
            authOptions={{
              clientId:
                '627840255075-olmavsgp8p4qmfe0mvdng12pf9ocr5qt.apps.googleusercontent.com',
            }}
          />
        </div>
      )}
      {authorized && (
        <div>
          We're authorized!
          <SignOutButton gapi={gapi} />
          <AnalyticsDashboard
            authOptions={{
              clientId:
                '627840255075-olmavsgp8p4qmfe0mvdng12pf9ocr5qt.apps.googleusercontent.com',
            }}
            renderCharts={(gapi, viewId) => {
              const chartStyles = {
                margin: '15px',
                maxWidth: 400,
              };
              return (
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  <ActiveUsersChart
                    gapi={gapi}
                    viewId={viewId}
                    days={28}
                    activeUserDays={7}
                    chartStyles={chartStyles}
                    options={{
                      title: 'Active Users',
                      horizontalAxis: {
                        title: 'Active Users',
                        format: 'short',
                      },
                      verticalAxis: {
                        title: 'Date',
                        format: 'short',
                      },
                    }}
                  />

                  <BounceRateChart
                    gapi={gapi}
                    viewId={viewId}
                    chartStyles={chartStyles}
                    days={28}
                    options={{
                      title: 'Bounce Rate',
                      horizontalAxis: {
                        title: 'Bounce Rate',
                        format: 'short',
                      },
                      verticalAxis: {
                        title: 'Date',
                        format: 'short',
                      },
                    }}
                  />

                  <OrganicSearchesChart
                    gapi={gapi}
                    viewId={viewId}
                    chartStyles={chartStyles}
                    options={{
                      title: 'Organic Searches',
                      horizontalAxis: {
                        title: 'Organic Searches',
                        format: 'short',
                      },
                      verticalAxis: {
                        title: 'Date',
                        format: 'short',
                      },
                    }}
                  />

                  <SessionsGeoChart
                    gapi={gapi}
                    viewId={viewId}
                    style={chartStyles}
                    showPageViews
                    options={{ width: 400 }}
                  />

                  <SessionsByDateChart
                    gapi={gapi}
                    viewId={viewId}
                    style={chartStyles}
                    showPageViews
                    showUsers
                  />
                  <SessionsBySourceChart
                    gapi={gapi}
                    viewId={viewId}
                    style={chartStyles}
                  />
                  <SessionsByHourChart
                    gapi={gapi}
                    viewId={viewId}
                    style={chartStyles}
                  />

                  <PagesPerSessionChart
                    gapi={gapi}
                    viewId={viewId}
                    style={chartStyles}
                    options={{
                      title: 'Pages Per Session',
                      horizontalAxis: {
                        title: 'Pages Per Session',
                        format: 'short',
                      },
                      verticalAxis: {
                        title: 'Date',
                        format: 'short',
                      },
                    }}
                  />

                  <SessionDurationChart
                    gapi={gapi}
                    viewId={viewId}
                    style={chartStyles}
                    options={{
                      title: 'Session Duration',
                      horizontalAxis: {
                        title: 'Session Duration',
                        format: 'short',
                      },
                      verticalAxis: {
                        title: 'Date',
                        format: 'short',
                      },
                    }}
                  />

                  <SessionsByDeviceCategoryChart
                    gapi={gapi}
                    viewId={viewId}
                    style={chartStyles}
                    options={{
                      title: 'Sessions By Device Category',
                      horizontalAxis: {
                        title: 'Sessions By Device Category',
                        format: 'short',
                      },
                      verticalAxis: {
                        title: 'Date',
                        format: 'short',
                      },
                    }}
                  />

                  <SessionsByUserTypeChart
                    gapi={gapi}
                    viewId={viewId}
                    style={chartStyles}
                    options={{
                      title: 'Sessions By User Type',
                      horizontalAxis: {
                        title: 'Sessions By User Type',
                        format: 'short',
                      },
                      verticalAxis: {
                        title: 'Date',
                        format: 'short',
                      },
                    }}
                  />

                  <PageViewsPerPathChart
                    gapi={gapi}
                    viewId={viewId}
                    style={{ margin: '15px' }}
                  />
                </div>
              );
            }}
          />
        </div>
      )}
    </div>
  );
};

export default AnalyticsChart;
