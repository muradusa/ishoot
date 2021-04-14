import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Subscriber({ userTo, userFrom }) {
  const [subscribeNumber, setSubscribeNumber] = useState(0);
  const [subscribed, setSubscribed] = useState(0);

  const subscribeNumberVariable = {
    userTo,
    userFrom,
  };

  useEffect(() => {
    axios
      .post("/api/subscribe/subscribeNumber", subscribeNumberVariable)
      .then((response) => {
        if (response.data.success) {
          setSubscribeNumber(response.data.subscribeNumber);
        } else {
          alert("Failed to Subscribe");
        }
      });

    axios
      .post("/api/subscribe/subscribed", subscribeNumberVariable)
      .then((response) => {
        if (response.data.success) {
          setSubscribed(response.data.subscribed);
        } else {
          alert("Failed to get subscibed information");
        }
      });
  }, []);

  //Delete later

  const onSubscribe = () => {
    let subscribeVariables = {
      userTo,
      userFrom,
    };
    if (subscribed) {
      // When we are already subscribed
      axios
        .post("/api/subscribe/unsubscribe", subscribeVariables)
        .then((response) => {
          if (response.data.success) {
            setSubscribeNumber(subscribeNumber - 1);
            setSubscribed(!subscribed);
          } else {
            alert("Falied to Unsubscribe");
          }
        });
    } else {
      axios
        .post("/api/subscribe/subscribe", subscribeVariables)
        .then((response) => {
          if (response.data.success) {
            setSubscribeNumber(subscribeNumber + 1);
            setSubscribed(!subscribed);
          } else {
            alert("Falied to Subscribe");
          }
        });
    }
  };

  return (
    <div className="subscriber" style={{ margintTop: "10px" }}>
      <button
        onClick={onSubscribe}
        style={{
          backgroundColor: `${subscribed ? "gray" : "red"}`,
          color: "white",
          outline: "none",
          fontSize: "20px",
          borderRadius: "5px",
          borderColor: "white",
          padding: "5px",
        }}
      >
        {" "}
        <span>{subscribeNumber}</span> {subscribed ? "Subscribed" : `Subscribe`}
      </button>
    </div>
  );
}

export default Subscriber;
