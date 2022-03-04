import React, { useEffect, useState } from "react";
import { Grid, Paper, Typography, Button } from "@mui/material";
// import '../Datepicker'
import DatePickerComponent from "../Datepicker";
// import moment from "moment";
import TempDisplayChart from "../TempDisplayChart";
import HumDisplayChart from "../HumDisplayChart";
import TempChartinfo from "../TempChart/chart";
import HumChartinfo from "../HumChart/chart";
import TableDisplay from "../Table/Table";
import Control from "../Control/control";

export default function Warehouse(props) {
  const { warehouseId, deviceId, token } = props;
  const [currentData, setCurrentData] = React.useState({
    temp: 0,
    hum: 0,
  });

  useEffect(() => {
    const getCurrentData = async () => {
      var myHeaders = new Headers();
      myHeaders.append("X-Authorization", `Bearer ${token}`);

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };
      var keys = "temp,hum";
      const data = await fetch(
        `http://103.28.32.80:8080/api/plugins/telemetry/DEVICE/${deviceId}/values/timeseries?keys=${keys}&useStrictDataTypes=true\n\n`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          if (result !== null) {
            var temp = result.temp[0].value;
            var hum = result.hum[0].value;
            setCurrentData((prevState) => ({
              ...prevState,
              temp: temp,
              hum: hum,
            }));
          }
        });
    };
    var timer;

    if (token && token !== "") {
      getCurrentData();
      timer = setInterval(getCurrentData, 60000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [token, deviceId]);

  // call back datepicker
  const [datePicker, setDatePicker] = React.useState("");

  //
  // console.log(datePicker);
  // console.log(moment().startOf(date))

  useEffect(() => {
    const getTimeSeriesData = async (datePicker = "") => {
      var keys = "temp,hum";
      var myHeaders = new Headers();
      myHeaders.append("X-Authorization", `Bearer ${token}`);

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      var startTime;
      var endTime;
      if (!datePicker) {
        startTime = Date.now() - 24 * 3600 * 1000;
        endTime = Date.now();
      } else {
        var selectedDate1 = datePicker.toString().slice(0, 15);
        var selectedDate2 = datePicker.toString().slice(24);
        // console.log(selectedDate1 + " 00:00:00" + selectedDate2);
        startTime = Date.parse(selectedDate1 + " 00:00:00" + selectedDate2);
        endTime = startTime + 24 * 3600 * 1000;
      }

      const data1 = await fetch(
        `http://103.28.32.80:8080/api/plugins/telemetry/DEVICE/${deviceId}/values/timeseries?interval=3600000&limit=700&agg=AVG&orderBy=ASC&useStrictDataTypes=true&keys=${keys}&startTs=${startTime}&endTs=${endTime}\n`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          if (result) {
            setDataChart(result);
          } else {
            dataChart = [];
          }
        });
    };
    // var timer1;
    // timer1 = setInterval(getTimeSeriesData, 1000);

    if (token && token !== "") {
      if (!datePicker) {
        getTimeSeriesData();
      } else {
        getTimeSeriesData(datePicker);
      }
    }
  }, [token, datePicker, deviceId]);

  const formatData0 = (object) => {
    return object[Object.keys(object)[0]];
  };
  const formatData1 = (object) => {
    return object[Object.keys(object)[1]];
  };

  const [dataChart, setDataChart] = React.useState([]);

  // ALARM

  const [alarmTotal, setAlarmTotal] = React.useState();
  const [dataTable, setDataTable] = useState();
  const [totalPageAlarm, setTotalPageAlarm] = useState();
  const [pageSelect, setPageSelect] = useState(1);

  const reloadAlarmtable = async () => {
    var myHeaders = new Headers();
    myHeaders.append("X-Authorization", `Bearer ${token}`);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    const data2 = await fetch(
      `http://103.28.32.80:8080/api/alarm/DEVICE/${deviceId}?pageSize=10&page=${
        pageSelect - 1
      }&sortProperty=startTs&sortOrder=DESC&fetchOriginator=true\n`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result3) => {
        // console.log(result3)
        setAlarmTotal(result3.data);
        var dataNew = result3.data;
        setDataTable(dataNew);
        // setDataChart
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    const reloadAlarmtable = async () => {
      var myHeaders = new Headers();
      myHeaders.append("X-Authorization", `Bearer ${token}`);

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };
      const data2 = await fetch(
        `http://103.28.32.80:8080/api/alarm/DEVICE/${deviceId}?pageSize=10&page=${
          pageSelect - 1
        }&sortProperty=startTs&sortOrder=DESC&fetchOriginator=true\n`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result3) => {
          // console.log(result3)
          setTotalPageAlarm(result3.totalPages);
          setAlarmTotal(result3.data);
          var dataNew = result3.data;
          setDataTable(dataNew);
          // setDataChart
        })
        .catch((error) => console.log("error", error));
    };
    if (token !== "") {
      reloadAlarmtable();
    }
  }, [token, deviceId, pageSelect]);

  var alarmID = [];
  if (alarmTotal !== undefined) {
    alarmTotal.map((alarmTotal) => {
      alarmID.push(alarmTotal.id.id);
    });
  }

  // console.log(alarmID)

  // Ack and clear Alarm

  const ackandclearAlarm = async () => {
    var myHeaders = new Headers();
    myHeaders.append("X-Authorization", `Bearer ${token}`);

    if (alarmID !== undefined) {
      for (var i = 0; i < alarmID.length; i++) {
        const ackAlarm = await fetch(
          `http://103.28.32.80:8080/api/alarm/${alarmID[i]}/ack`,
          {
            method: "POST",
            headers: myHeaders,
          }
        );
        const result = await ackAlarm.text();
        const clearAlarm = await fetch(
          `http://103.28.32.80:8080/api/alarm/${alarmID[i]}/clear`,
          {
            method: "POST",
            headers: myHeaders,
          }
        );
        const result2 = await clearAlarm.text();
      }
    }
  };

  

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Paper
          elevation={4}
          style={{
            padding: "10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Grid item xs={2} sx={{ mx: "auto", width: 200 }}>
            <Typography
              // variant="body1"
              variant="h6"
            >
              KHO {warehouseId}
            </Typography>
          </Grid>
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper
          elevation={4}
          style={{
            padding: "5px",
          }}
        >
          <Grid item xs={2} sx={{ mx: "auto", width: 200 }}>
            <DatePickerComponent setDatePicker={setDatePicker} />
          </Grid>
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper elevation={4} style={{ padding: "20px" }}>
          <Grid container justifyCotent="center" spacing={2}>
            <Grid item xs={2}>
              <TempDisplayChart currentData={currentData} />
            </Grid>
            <Grid item xs={10}>
              <TempChartinfo dataChart={formatData0(dataChart)} />
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper elevation={4} style={{ padding: "20px" }}>
          <Grid container justifyCotent="center" spacing={2}>
            <Grid item xs={2}>
              <HumDisplayChart currentData={currentData} />
            </Grid>
            <Grid item xs={10}>
              <HumChartinfo dataChart={formatData1(dataChart)} />
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper
          elevation={4}
          style={{
            padding: "5px",
          }}
        >
          <Control token={token}></Control>
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper elevation={4} style={{ padding: "10px" }}>
          <TableDisplay
            totalPageAlarm={totalPageAlarm}
            dataTable={dataTable}
            setPageSelect={setPageSelect}
          />
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              ackandclearAlarm();
            }}
          >
            CLEAR AND ACKNOWLEDGE
          </Button>

          <Button
            style={{ marginLeft: "1000px" }}
            variant="contained"
            color="success"
            onClick={() => {
              reloadAlarmtable();
            }}
          >
            Reload Table
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
}
