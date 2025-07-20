import React, { useState } from "react";

import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  WeekView,
  MonthView,
  Appointments,
  Toolbar,
  ViewSwitcher,
  AppointmentTooltip,
} from "@devexpress/dx-react-scheduler-material-ui";

// Import Styles
import theme from "./styles/theme";

// Import Mui Components
import {
  Grid,
  Box,
  Typography,
  Paper,
  ThemeProvider,
  Tabs,
  Tab,
  withStyles,
  IconButton,
  Avatar,
} from "@material-ui/core";

// Import Mui Icons
import HouseOutlinedIcon from "@material-ui/icons/HouseOutlined";
import EventOutlinedIcon from "@material-ui/icons/EventOutlined";

const StyledMenuTab = withStyles((theme) => ({
  root: {
    minWidth: "100%",
    maxWidth: "100%",
  },
}))((props) => <Tab {...props} />);

export default () => {
  const [menuTabs, setMenuTabs] = useState(0);

  const handleMenuTabs = (e, newValue) => {
    setMenuTabs(newValue);
  };

  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid item xs={1}>
          <Paper
            square
            elevation={10}
            style={{
              height: "100vh",
              backgroundColor: theme.palette.primary.main,
            }}
          >
            <Grid container>
              <Grid item xs={12}>
                <Box py={2}>
                  <Typography variant="h5" color="secondary" align="center">
                    Activity Tracker
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Tabs
                  orientation="vertical"
                  indicatorColor="secondary"
                  textColor="secondary"
                  value={menuTabs}
                  onChange={handleMenuTabs}
                >
                  {[
                    ["Hem", <HouseOutlinedIcon />],
                    ["Kalender", <EventOutlinedIcon />],
                  ].map((item, i) => (
                    <StyledMenuTab label={item[0]} icon={item[1]} />
                  ))}
                </Tabs>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={11}>
          <Box px={5}>
            <Grid container>
              <Grid item xs={12}>
                <Box py={2}>
                  <Grid container justify="flex-end">
                    <IconButton color="primary" size="small">
                      <Avatar
                        style={{
                          backgroundColor: theme.palette.primary.main,
                          color: theme.palette.secondary.main,
                        }}
                      >
                        EN
                      </Avatar>
                    </IconButton>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12}>
                {menuTabs === 0 && (
                  <Grid container spacing={3}>
                    <Grid item xs={3}>
                      <Paper elevation={14}>
                        <Box p={3}>
                          <Typography variant="h5">Hej</Typography>
                        </Box>
                      </Paper>
                    </Grid>
                  </Grid>
                )}
                {menuTabs === 1 && (
                  <Paper elevation={14}>
                    <Scheduler height={650} locale="sv-SV" firstDayOfWeek={1}>
                      <ViewState
                        defaultCurrentDate={currentDate}
                        defaultCurrentViewName="Week"
                      />

                      <DayView />
                      <WeekView />
                      <MonthView />

                      <Toolbar />
                      <ViewSwitcher />
                      <Appointments />
                      <AppointmentTooltip />
                    </Scheduler>
                  </Paper>
                )}
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
