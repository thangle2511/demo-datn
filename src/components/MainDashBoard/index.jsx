import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Grid from "@mui/material/Grid";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import Warehouse from "../Warehose";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Notification from "../Notification/Notification";

const drawerWidth = 240;
var currentAlarmData = [];

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  backgroundColor: "#ffffff",
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    backgroundColor: "#ffffff",
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MainDashBoard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Logic

  // API Device

  const [entityID, setEntityID] = React.useState([])
    const [nameID, setNameID] = React.useState([])
    const [currentWarehouseId, setCurrentWarehouseId] = React.useState(0);


        const getDevices = async () => {
            var myHeaders = new Headers();
            myHeaders.append("X-Authorization", `Bearer ${localStorage.getItem("access token")}`);
        
            var requestOptions = {
              method: "GET",
              headers: myHeaders,
              redirect: "follow",
            };
            const data2 = await fetch(
              'http://103.28.32.80:8080/api/tenant/devices?type=temp-hum&sortProperty=createdTime&sortOrder=ASC&pageSize=10&page=0\n',
              requestOptions
            )
              .then((response) => response.json())
              .then((result3) => {
                var deviceID = []
                var nameID = []
                result3.data.map((data) => {
                    deviceID.push(data.id.id)
                    nameID.push(data.name)
                })
                setEntityID(deviceID)
                setNameID(nameID)
                
                })
              .catch((error) => console.log("error", error));
          };


    React.useEffect(() => {
          getDevices();
    },[]);


    // console.log(nameID)

  // API device //




  


  const [token, setToken] = React.useState(localStorage.getItem("access token"));


  React.useEffect(() => {
    const getToken = async () => {
      var authData = {
        username: "duy1851999@gmail.com",
        password: "duythang10",
      };
      const tokenResponse = await fetch(
        "http://103.28.32.80:8080/api/auth/login",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(authData),
        }
      );
      const content = await tokenResponse.json();
      setToken(content.token);
      localStorage.setItem("access token", content.token);
    };
    var timer;
    timer = setInterval(()=> {
      getToken()
    }, 3600000);
    return () => {
      clearInterval(timer);
    };
  }, [token]);

  // alarm

  React.useEffect(() => {
    const getTotalAlarm = async (token) => {
      var myHeaders = new Headers();
      myHeaders.append("X-Authorization", `Bearer ${token}`);

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };
      
      for (var i = 1; i <= entityID.length; i++) {
         const data2 = await fetch(
          `http://103.28.32.80:8080/api/alarm/DEVICE/${
            entityID[i - 1]
          }?pageSize=1&page=0&fetchOriginator=true\n`,
          requestOptions
        )
          .then((response) => response.json())
          .then((result2) => {
            // var total = result2.totalElements + 1
            // console.log(typeof currentData[i - 1])
            if (
              typeof currentAlarmData[i - 1] !== "undefined" &&
              result2.totalElements > currentAlarmData[i - 1]
            ) {
              setOpenNoti(true)
              setStorageID(i)
            }
            currentAlarmData[i - 1] = result2.totalElements;
            // console.log(result2.totalElements)
          })
          .catch((error) => console.log("error", error));
      }
    };
    var timer;
    if (token && token !== "") {
      timer = setInterval(() => {
        getTotalAlarm(token)
      }, 3000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [token]);



  const [openNoti, setOpenNoti] = React.useState(false);
  const [storageID, setStorageID] = React.useState('')

  

  // alarm
  let navigate = useNavigate();
  let logout = () => {
    localStorage.removeItem("access token");
    navigate("/");
  };

  const warehouseContentDisplay = (id) => {
    return (
        <Warehouse warehouseId={id + 1} deviceId = {entityID[id]} token={token} />
    )

} 
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="default"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <div
            style={{
              height: "64px",
              display: "flex",
              justifyContent: "center",
              padding: "10px",
            }}
          >
            <img
              alt="app-logo"
              style={{ height: "100%" }}
              src="/images/logo_mind.png"
            />
          </div>
          <Grid container spacing={0}>
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                justifyContent: "space-between",
                wrap: "nowrap",
              }}
            >
              <Typography
                variant="h4"
                sx={{ color: "#008c0a" }}
                noWrap
                component="div"
              >
                HỆ THỐNG QUẢN LÝ KHO LẠNH
              </Typography>
              <Grid paddingTop={1}>
                <Button variant="contained" onClick={logout}>
                  Log Out
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                sx={{ color: "#008c0a" }}
                noWrap
                component="div"
              >
                CÔNG TY TNHH CÔNG NGHỆ MIND
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {nameID.map((text, index) => (
            <ListItem
              button
              key={text}
              onClick={() => {
                setCurrentWarehouseId(index);
              }}
            >
              <ListItemIcon>
                <WarehouseIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Button variant="contained" style={{marginTop:'380px'}} onClick={getDevices} > Update </Button>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {warehouseContentDisplay(currentWarehouseId)}
        <Notification openNoti={openNoti} storageID={storageID} setOpenNoti={setOpenNoti} />
      </Box>
    </Box>
  );
}
