import { useEffect, useState } from "react";
import axios from "axios";

function SendMoney() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    let config = {
      headers: {
        authorization: `Bearer ${JSON.parse(localStorage.getItem("actoken"))}`,
      },
    };

    axios
      .get("http://localhost:8000/sendMoney", config)
      .then((res) => res.data)
      .then((res) => {
        setLoggedIn(res.money);
      });
  }, []);

  if (!isLoggedIn) return <>User can not send money :(</>;

  return <>Money amount: {isLoggedIn}</>;
}

export default SendMoney;
