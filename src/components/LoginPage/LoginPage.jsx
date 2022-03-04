import React from "react";
import ReactDOM from "react-dom";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const appStyle = {
  height: "250px",
  display: "flex",
};

const formStyle = {
  margin: "auto",
  padding: "10px",
  border: "1px solid #c9c9c9",
  borderRadius: "5px",
  background: "#f5f5f5",
  width: "220px",
  display: "block",
};

const labelStyle = {
  margin: "10px 0 5px 0",
  fontFamily: "Arial, Helvetica, sans-serif",
  fontSize: "15px",
};

const inputStyle = {
  margin: "5px 0 10px 0",
  padding: "5px",
  border: "1px solid #bfbfbf",
  borderRadius: "3px",
  boxSizing: "border-box",
  width: "100%",
};

const submitStyle = {
  margin: "10px 0 0 0",
  padding: "7px 10px",
  border: "1px solid #efffff",
  borderRadius: "3px",
  background: "#3085d6",
  width: "100%",
  fontSize: "15px",
  color: "white",
  display: "block",
};

const Field = React.forwardRef(({ label, type }, ref) => {
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      <input ref={ref} type={type} style={inputStyle} />
    </div>
  );
});

const Login = ({ onSubmit }) => {
  const usernameRef = React.useRef();
  const passwordRef = React.useRef();
  const HandleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    onSubmit(data);
  };
  // let navigate = useNavigate();
  // function handleLogin() {
  //   navigate("/admin");
  // }

  return (
    <form style={formStyle} onSubmit={HandleSubmit}>
      <Field ref={usernameRef} label="Username:" type="text" />
      <Field ref={passwordRef} label="Password:" type="password" />
      <div>
        <Button style={submitStyle} type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};

// Usage example:

const LoginApp = () => {
  let navigate = useNavigate();
  const HandleSubmit = (data) => {
    if (data.username === "admin" && data.password === "admin123") {
      // routing to ... /mainDashBoard (localhost:3000/mainDashBoard)

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
        localStorage.setItem("access token", content.token);
        if (localStorage.getItem("access token") !== null) {
          navigate("/admin");
        } else {
          navigate("/");
        }
      };
      getToken();
      
    } else {
      alert("Sai thong tin dang nhap");
    }
  };
  return (
    <div style={appStyle}>
      <Login onSubmit={HandleSubmit} />
    </div>
  );
};

export default LoginApp;
