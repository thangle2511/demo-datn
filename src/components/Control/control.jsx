import { Box, Grid, Typography,Button } from "@mui/material";
import React from "react";



const Control = (props) => {

    const { token } = props;    

    const turnonDen = async () => {
        var myHeaders = new Headers();
        myHeaders.append("X-Authorization", `Bearer ${token}`);
    
        var raw = JSON.stringify({
          method: "SET_VALUE",
          params: {
            device_code: "s71200",
            parameter_setting: {
              den: 1,
            },
          },
        });
        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };
    
        fetch(
          "http://103.28.32.80:8080/api/plugins/rpc/oneway/33e697d0-924d-11ec-8b8c-a7e2e87907a2",
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
      };
    
      const turnoffDen = async () => {
        var myHeaders = new Headers();
        myHeaders.append("X-Authorization", `Bearer ${token}`);
    
        var raw = JSON.stringify({
          method: "SET_VALUE",
          params: {
            device_code: "s71200",
            parameter_setting: {
              den: 0,
            },
          },
        });
        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };
    
        fetch(
          "http://103.28.32.80:8080/api/plugins/rpc/oneway/33e697d0-924d-11ec-8b8c-a7e2e87907a2",
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
      };
    
      const stopPLC = async () => {
        var myHeaders = new Headers();
        myHeaders.append("X-Authorization", `Bearer ${token}`);
    
        var raw = JSON.stringify({
          method: "SET_VALUE",
          params: {
            device_code: "s71200",
            parameter_setting: {
              stop: 1,
              start: 0,
            },
          },
        });
        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };
    
        fetch(
          "http://103.28.32.80:8080/api/plugins/rpc/oneway/33e697d0-924d-11ec-8b8c-a7e2e87907a2",
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
      };
    
      const startPLC = () => {
        console.log("aaaaaaaa");
        var myHeaders = new Headers();
        myHeaders.append("X-Authorization", `Bearer ${token}`);
    
        var raw = JSON.stringify({
          method: "SET_VALUE",
          params: {
            device_code: "s71200",
            parameter_setting: {
              start: 1,
              stop: 0,
            },
          },
        });
        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };
    
        fetch(
          "http://103.28.32.80:8080/api/plugins/rpc/oneway/33e697d0-924d-11ec-8b8c-a7e2e87907a2",
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
      };
    
      const turnonMayHutAm = () => {
        console.log("aaaaaaaa");
        var myHeaders = new Headers();
        myHeaders.append("X-Authorization", `Bearer ${token}`);
    
        var raw = JSON.stringify({
          method: "SET_VALUE",
          params: {
            device_code: "s71200",
            parameter_setting: {
              mayhutam: 1,
            },
          },
        });
        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };
    
        fetch(
          "http://103.28.32.80:8080/api/plugins/rpc/oneway/33e697d0-924d-11ec-8b8c-a7e2e87907a2",
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
      };
    
      const turnoffMayHutAm = () => {
        console.log("aaaaaaaa");
        var myHeaders = new Headers();
        myHeaders.append("X-Authorization", `Bearer ${token}`);
    
        var raw = JSON.stringify({
          method: "SET_VALUE",
          params: {
            device_code: "s71200",
            parameter_setting: {
              mayhutam: 0,
            },
          },
        });
        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };
    
        fetch(
          "http://103.28.32.80:8080/api/plugins/rpc/oneway/33e697d0-924d-11ec-8b8c-a7e2e87907a2",
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
      };

      const turnonQuat1 = () => {
        console.log("aaaaaaaa");
        var myHeaders = new Headers();
        myHeaders.append("X-Authorization", `Bearer ${token}`);
    
        var raw = JSON.stringify({
          method: "SET_VALUE",
          params: {
            device_code: "s71200",
            parameter_setting: {
              quat1: 1
            },
          },
        });
        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };
    
        fetch(
          "http://103.28.32.80:8080/api/plugins/rpc/oneway/33e697d0-924d-11ec-8b8c-a7e2e87907a2",
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
      };


      const turnoffQuat1 = () => {
        console.log("aaaaaaaa");
        var myHeaders = new Headers();
        myHeaders.append("X-Authorization", `Bearer ${token}`);
    
        var raw = JSON.stringify({
          method: "SET_VALUE",
          params: {
            device_code: "s71200",
            parameter_setting: {
              quat1: 0
            },
          },
        });
        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };
    
        fetch(
          "http://103.28.32.80:8080/api/plugins/rpc/oneway/33e697d0-924d-11ec-8b8c-a7e2e87907a2",
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
      };
      const turnonQuat2 = () => {
        console.log("aaaaaaaa");
        var myHeaders = new Headers();
        myHeaders.append("X-Authorization", `Bearer ${token}`);
    
        var raw = JSON.stringify({
          method: "SET_VALUE",
          params: {
            device_code: "s71200",
            parameter_setting: {
              quat2: 1
            },
          },
        });
        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };
    
        fetch(
          "http://103.28.32.80:8080/api/plugins/rpc/oneway/33e697d0-924d-11ec-8b8c-a7e2e87907a2",
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
      };


      const turnoffQuat2 = () => {
        console.log("aaaaaaaa");
        var myHeaders = new Headers();
        myHeaders.append("X-Authorization", `Bearer ${token}`);
    
        var raw = JSON.stringify({
          method: "SET_VALUE",
          params: {
            device_code: "s71200",
            parameter_setting: {
              quat2: 0
            },
          },
        });
        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };
    
        fetch(
          "http://103.28.32.80:8080/api/plugins/rpc/oneway/33e697d0-924d-11ec-8b8c-a7e2e87907a2",
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
      };
      const turnonQuat3 = () => {
        console.log("aaaaaaaa");
        var myHeaders = new Headers();
        myHeaders.append("X-Authorization", `Bearer ${token}`);
    
        var raw = JSON.stringify({
          method: "SET_VALUE",
          params: {
            device_code: "s71200",
            parameter_setting: {
              quat3: 1
            },
          },
        });
        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };
    
        fetch(
          "http://103.28.32.80:8080/api/plugins/rpc/oneway/33e697d0-924d-11ec-8b8c-a7e2e87907a2",
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
      };


      const turnoffQuat3 = () => {
        console.log("aaaaaaaa");
        var myHeaders = new Headers();
        myHeaders.append("X-Authorization", `Bearer ${token}`);
    
        var raw = JSON.stringify({
          method: "SET_VALUE",
          params: {
            device_code: "s71200",
            parameter_setting: {
              quat3: 0
            },
          },
        });
        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };
    
        fetch(
          "http://103.28.32.80:8080/api/plugins/rpc/oneway/33e697d0-924d-11ec-8b8c-a7e2e87907a2",
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
      };


  return (
    <Box sx={{ border: "10px solid grey", borderRadius: 16 }}>
      <Grid>
        <Typography
          variant="h5"
          sx={{
            mx: "auto",
            width: 300,
            padding: "20px",
            marginBottom: "50px",
          }}
        >
          {" "}
          BẢNG ĐIỀU KHIỂN{" "}
        </Typography>
      </Grid>

      <Grid container spacing={4} sx={{ padding: "30px" }}>
        <Box
          sx={{
            border: "4px solid grey",
            mx: "auto",
            width: 200,
            height: "300px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              paddingTop: "20px",
              mx: "auto",
              width: 100,
            }}
          >
            PLC
          </Typography>
          <Grid
            item
            xs={6}
            sx={{
              paddingTop: "20px",
              paddingBottom: "20px",
              mx: "auto",
              width: 100,
            }}
          >
            <Button
              variant="contained"
              size="small"
              onClick={() => {
                startPLC();
              }}
            >
              Turn ON
            </Button>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              paddingTop: "20px",
              paddingBottom: "20px",
              mx: "auto",
              width: 100,
            }}
          >
            <Button
              variant="contained"
              size="small"
              onClick={() => {
                stopPLC();
              }}
            >
              Turn OFF
            </Button>
          </Grid>
        </Box>
        <Box sx={{ border: "4px solid grey", mx: "auto", width: 200 }}>
          <Typography
            variant="h6"
            sx={{
              paddingTop: "20px",
              mx: "auto",
              width: 100,
            }}
          >
            Đèn kho
          </Typography>
          <Grid
            item
            xs={6}
            sx={{
              paddingTop: "20px",
              paddingBottom: "20px",
              mx: "auto",
              width: 100,
            }}
          >
            <Button
              variant="contained"
              size="small"
              onClick={() => {
                turnonDen();
              }}
            >
              Turn ON
            </Button>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              paddingTop: "20px",
              paddingBottom: "20px",
              mx: "auto",
              width: 100,
            }}
          >
            <Button
              variant="contained"
              size="small"
              onClick={() => {
                turnoffDen();
              }}
            >
              Turn OFF
            </Button>
          </Grid>
        </Box>
        <Box sx={{ border: "4px solid grey", mx: "auto", width: 500 }}>
          <Typography
            variant="h6"
            sx={{
              paddingTop: "20px",
              mx: "auto",
              width: 200,
            }}
          >
            Quạt mát dàn lạnh
          </Typography>
          <Grid container>
            <Typography
              item
              xs={4}
              sx={{
                paddingTop: "20px",
                paddingBottom: "20px",
                mx: "auto",
                width: 80,
              }}
            >
              Quạt 1
            </Typography>
            <Grid
              item
              xs={4}
              sx={{
                paddingTop: "20px",
                paddingBottom: "20px",
                mx: "auto",
              }}
            >
              <Button
                variant="contained"
                size="small"
                onClick={() => {
                  turnonQuat1();
                }}
              >
                Turn ON
              </Button>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                paddingTop: "20px",
                paddingBottom: "20px",
                mx: "auto",
              }}
            >
              <Button
                variant="contained"
                size="small"
                onClick={() => {
                  turnoffQuat1();
                }}
              >
                Turn OFF
              </Button>
            </Grid>
          </Grid>
          <Grid container>
            <Typography
              item
              xs={4}
              sx={{
                paddingTop: "20px",
                paddingBottom: "20px",
                mx: "auto",
                width: 80,
              }}
            >
              Quạt 2
            </Typography>
            <Grid
              item
              xs={4}
              sx={{
                paddingTop: "20px",
                paddingBottom: "20px",
                mx: "auto",
              }}
            >
              <Button
                variant="contained"
                size="small"
                onClick={() => {
                  turnonQuat2();
                }}
              >
                Turn ON
              </Button>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                paddingTop: "20px",
                paddingBottom: "20px",
                mx: "auto",
              }}
            >
              <Button
                variant="contained"
                size="small"
                onClick={() => {
                  turnoffQuat2();
                }}
              >
                Turn OFF
              </Button>
            </Grid>
          </Grid>
          <Grid container>
            <Typography
              item
              xs={4}
              sx={{
                paddingTop: "20px",
                paddingBottom: "20px",
                mx: "auto",
                width: 80,
              }}
            >
              Quạt 3
            </Typography>
            <Grid
              item
              xs={4}
              sx={{
                paddingTop: "20px",
                paddingBottom: "20px",
                mx: "auto",
              }}
            >
              <Button
                variant="contained"
                size="small"
                onClick={() => {
                  turnonQuat3();
                }}
              >
                Turn ON
              </Button>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                paddingTop: "20px",
                paddingBottom: "20px",
                mx: "auto",
              }}
            >
              <Button
                variant="contained"
                size="small"
                onClick={() => {
                  turnoffQuat3();
                }}
              >
                Turn OFF
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ border: "4px solid grey", mx: "auto", width: 200 }}>
          <Typography
            variant="h6"
            sx={{
              paddingTop: "20px",
              mx: "auto",
              width: 140,
            }}
          >
            Máy hút ẩm
          </Typography>
          <Grid
            item
            xs={6}
            sx={{
              paddingTop: "20px",
              paddingBottom: "20px",
              mx: "auto",
              width: 100,
            }}
          >
            <Button
              variant="contained"
              size="small"
              onClick={() => {
                turnonMayHutAm();
              }}
            >
              Turn ON
            </Button>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              paddingTop: "20px",
              paddingBottom: "20px",
              mx: "auto",
              width: 100,
            }}
          >
            <Button
              variant="contained"
              size="small"
              onClick={() => {
                turnoffMayHutAm();
              }}
            >
              Turn OFF
            </Button>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
};

export default Control;
