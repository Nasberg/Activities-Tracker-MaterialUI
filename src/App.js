import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import { Spacing } from "@material-ui/system";

import {
  Grid,
  Paper,
  ListItemAvatar,
  Avatar,
  ThemeProvider,
  Button,
  Backdrop,
  CircularProgress,
} from "@material-ui/core/";
import MobileStepper from "@material-ui/core/MobileStepper";

import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import HouseIcon from "@material-ui/icons/House";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SportsBasketballIcon from "@material-ui/icons/SportsBasketball";
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

import theme from "./theme";

import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Appointments,
  Toolbar as ScheduleToolbar,
  ViewSwitcher,
  MonthView,
  DayView,
  DateNavigator,
  TodayButton,
} from "@devexpress/dx-react-scheduler-material-ui";

const drawerWidth = 240;

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },
  {
    label: "NeONBRAND Digital Marketing, Las Vegas, United States",
    imgPath:
      "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 275,
    display: "block",
    maxWidth: 500,
    overflow: "hidden",
    width: "100%",
  },
}));

const App = () => {
  const classes = useStyles();
  // const theme = useTheme();
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const [openBackdrop, setOpenBackdrop] = React.useState(false);

  const handleBackdropClose = () => {
    setOpenBackdrop(false);
  };
  const handleBackdropOpen = () => {
    setOpenBackdrop(true);
  };

  const [selectedDrawerIndex, setSelectedDrawerIndex] = React.useState(0);

  const handleDrawerItemClick = (event, index) => {
    setSelectedDrawerIndex(index);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: openDrawer,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: openDrawer,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap className={classes.title}>
              Sports Tracker
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: openDrawer,
            [classes.drawerClose]: !openDrawer,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: openDrawer,
              [classes.drawerClose]: !openDrawer,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            {[
              {
                icon: <HouseIcon />,
                text: "Hem",
              },
              {
                icon: <PersonOutlineIcon />,
                text: "Min profil",
              },
              {
                icon: <SearchIcon />,
                text: "Sök",
              },
            ].map((item, index) => (
              <ListItem
                button
                key={item.text}
                selected={selectedDrawerIndex === index}
                onClick={(event) => handleDrawerItemClick(event, index)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            <ListItem
              button
              key={1}
              selected={selectedDrawerIndex === 4}
              onClick={(event) => handleDrawerItemClick(event, 4)}
            >
              <ListItemIcon>
                <HelpOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Hjälp" />
            </ListItem>
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {selectedDrawerIndex === 0 && <MainPage />}
          {selectedDrawerIndex === 1 && <ProfilePage />}
        </main>
      </div>
      <Backdrop
        className={classes.backdrop}
        open={openBackdrop}
        onClick={handleBackdropClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </ThemeProvider>
  );
};

const MainPage = (props) => {
  const classes = useStyles();

  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <ActivityCard title="Mitt schema - Idag">
          <ActivityContent
            icon={<SportsBasketballIcon color="primary" />}
            primaryText="Basket"
            secondaryText="17:00-18:30"
          />
          <ActivityContent
            icon={<SportsSoccerIcon color="primary" />}
            primaryText="Fotboll"
            secondaryText="19:00-20:30"
          />
        </ActivityCard>
      </Grid>
      <Grid item xs={3}>
        <ActivityCard title="Mitt schema - Kommande">
          <ActivityContent
            icon={<SportsBasketballIcon color="primary" />}
            primaryText="Basket"
            secondaryText="17:00-18:30"
          />
          <ActivityContent
            icon={<SportsSoccerIcon color="primary" />}
            primaryText="Fotboll"
            secondaryText="19:00-20:30"
          />
        </ActivityCard>
      </Grid>
      <Grid item xs={3}>
        <ActivityCard title="Allmänt">
          <ActivityContent
            icon={<SportsBasketballIcon color="primary" />}
            primaryText="Basket"
            secondaryText="17:00-18:30 26 juni 2020"
          />
          <ActivityContent
            icon={<SportsSoccerIcon color="primary" />}
            primaryText="Fotboll"
            secondaryText="19:00-20:30 3 juli 2020"
          />
        </ActivityCard>
      </Grid>
      <Grid item xs={3}>
        <ActivityCard title="Förslag">
          <ActivityContent
            icon={<SportsBasketballIcon color="primary" />}
            primaryText="Basket"
            secondaryText="Sundsvall Dragons"
          />
          <ActivityContent
            icon={<SportsSoccerIcon color="primary" />}
            primaryText="Fotboll"
            secondaryText="Gif Sundsvall"
          />
        </ActivityCard>
      </Grid>
      <Grid item xs={8}>
        <Paper elevation={3}>
          <Scheduler height={420}>
            <ViewState />

            <MonthView />
            <DayView />

            <ScheduleToolbar />
            <DateNavigator />
            <TodayButton />
            <ViewSwitcher />
            <Appointments />
          </Scheduler>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <ActivityCard title="Nyheter">
          <Paper square elevation={2} className={classes.header}>
            <Typography>{tutorialSteps[activeStep].label}</Typography>
          </Paper>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {tutorialSteps.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <img
                    className={classes.img}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            steps={maxSteps}
            position="static"
            variant="text"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </ActivityCard>
      </Grid>
    </Grid>
  );
};

const ActivityCard = (props) => {
  const { title } = props;

  return (
    <Paper elevation={1}>
      <Typography variant="h6">{title}:</Typography>
      <List>{props.children}</List>
    </Paper>
  );
};

const ActivityContent = (props) => {
  const { icon, primaryText, secondaryText } = props;

  return (
    <>
      <Divider variant="horizontal" component="li" />
      <ListItem button>
        <ListItemAvatar>
          <Avatar>{icon}</Avatar>
        </ListItemAvatar>
        <ListItemText primary={primaryText} secondary={secondaryText} />
      </ListItem>
    </>
  );
};

const ProfilePage = (props) => {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper elevation={3}>
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Erik Näsberg"
                    secondary="Håller på med..."
                  />
                </ListItem>
              </List>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={3}>
              <ActivityCard title="Mina föreningar">
                <ActivityContent
                  icon={<SportsSoccerIcon color="primary" />}
                  primaryText="Gif Sundsvall"
                  secondaryText="Fotboll"
                />
              </ActivityCard>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={8}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper elevation={3}>Hej</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={3}>Hej</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={5}>
              <Scheduler height="400">
                <ViewState />

                <WeekView />
                <DayView />

                <ScheduleToolbar />
                <DateNavigator />
                <TodayButton />
                <ViewSwitcher />
                <Appointments />
              </Scheduler>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
