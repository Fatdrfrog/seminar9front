import { useEffect } from "react";
import axios from "axios";

function GenerateToken() {
  useEffect(() => {
    axios
      .post("http://localhost:8000/getToken", { username: "Fatdrfrog" })
      .then((res) => res.data)
      .then((res) => {
        console.log(res);
        localStorage.setItem("actoken", JSON.stringify(res));
      });
  }, []);

  return <>SendMoney</>;
}

export default GenerateToken;
