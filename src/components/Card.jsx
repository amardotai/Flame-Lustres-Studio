import React from "react";

function Card(props) {
  if (props.v == true) {
    return (
      <div
        className={props.cn}
        style={{ height: `${props.height}`, width: `${props.width}` }}
      >
        <span>
          <h1>{props.title}</h1>
        </span>
        <video
          src={props.bi}
          autoPlay
          muted
          loop
          style={{
            height: "80%",
            width: "100%",
            objectFit: "cover",
          }}
        ></video>
      </div>
    );
  }

  return (
    <div
      className={props.cn}
      style={{ height: `${props.height}`, width: `${props.width}` }}
    >
      <span
        style={{
          backgroundImage: `url(${props.bi})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <h1>{props.title}</h1>
      </span>
    </div>
  );
}

export default Card;
