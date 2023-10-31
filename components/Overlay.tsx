import React from "react";
import { CalendarItemType } from "./numbers";

export const Overlay = ({
  item,
  visible,
  setVisible,
}: {
  item: CalendarItemType;
  visible: boolean;
  setVisible: (value: boolean) => void;
}) => {
  const [windowWidth, setWindowWidth] = React.useState(0);
  React.useEffect(() => {
    const width = window.innerWidth;
    setWindowWidth(width);
  }, []);

  const [showSpoiler, toggleShowSpoiler] = React.useState(false);
  if (!visible) {
    return null;
  }
  const time = new Date();
  const hour = time.getHours();

  const isOldItem = time.getDate() > Number(item.number);

  const additionalInfos =
    isOldItem || (hour >= 19 && time.getDay() === Number(item.number));

  const spoilerText = additionalInfos
    ? "Aufloesung"
    : "Aufloesung erst ab 19 Uhr";

  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.8)",
        position: "absolute",
        width: "100%",
        top: 20,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "80%",
          height: "70%",
          maxWidth: 900,
          backgroundColor: "#828282cd",
          borderRadius: 12,
          padding: 24,
          overflowY: "scroll",
          borderColor: "white",
          borderWidth: 22,
          marginTop: windowWidth < 500 ? 150 : 220,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h2 style={{ color: "white" }}>{item.number}</h2>
          <div
            onClick={() => setVisible(false)}
            style={{
              cursor: "pointer",
              borderRadius: 25,
              width: 50,
              height: 50,
              marginRight: 22,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="3rem"
              viewBox="0 0 24 24"
              width="3rem"
              fill="#fff"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
            </svg>
          </div>
        </div>

        <div
          style={{
            color: "white",
          }}
        >
          {item.brewAdvices ? (
            <p style={{ fontStyle: "italic" }}>Bruehempfehlung: </p>
          ) : null}
          {item.brewAdvices?.brewer ? <p>{item.brewAdvices?.brewer}</p> : null}
          {item.brewAdvices?.grinding ? (
            <p>{item.brewAdvices?.grinding}</p>
          ) : null}
          {item.brewAdvices?.temperature ? (
            <p>{item.brewAdvices?.temperature}</p>
          ) : null}
          {item.brewAdvices?.ratio ? <p>{item.brewAdvices?.ratio}</p> : null}
          {item.brewAdvices?.time ? <p>{item.brewAdvices?.time}</p> : null}
          {item.brewAdvices?.notes ? (
            <p>Anmerkungen: {item.brewAdvices?.notes}</p>
          ) : null}
        </div>
        <div
          style={{
            borderRadius: 2,
            borderColor: "white",
            borderWidth: 2,
            borderStyle: "solid",
            backgroundColor: "#afadadcd",
          }}
        >
          <div
            onClick={() => toggleShowSpoiler(!showSpoiler)}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingRight: 8,
            }}
          >
            <p
              style={{
                cursor: "pointer",
                padding: 8,
              }}
            >
              {showSpoiler ? "Zuklappen" : spoilerText}
            </p>
            <p>
              {showSpoiler
                ? String.fromCharCode(11014)
                : String.fromCharCode(11015)}
            </p>
          </div>
          {showSpoiler ? (
            <div
              style={{
                backgroundColor: "#525252cd",
                padding: 8,
                width: "100%",
              }}
            >
              {additionalInfos ? (
                <div>
                  {item.additionalInfos?.roastery ? (
                    <p>Rösterei: {item.additionalInfos?.roastery}</p>
                  ) : null}
                  {item.additionalInfos?.name ? (
                    <p>Name: {item.additionalInfos?.name}</p>
                  ) : null}
                  {item.additionalInfos?.city ? (
                    <p>Stadt: {item.additionalInfos?.city}</p>
                  ) : null}
                  {item.additionalInfos?.taste ? (
                    <p>Geschmack: {item.additionalInfos?.taste}</p>
                  ) : null}
                  {item.additionalInfos?.roast ? (
                    <p>Röstung: {item.additionalInfos?.roast}</p>
                  ) : null}
                  {item.additionalInfos?.variety ? (
                    <p>Varität: {item.additionalInfos?.variety}</p>
                  ) : null}
                  {item.additionalInfos?.region ? (
                    <p>Region: {item.additionalInfos?.region}</p>
                  ) : null}
                  {item.additionalInfos?.processing ? (
                    <p>Aufbereitung: {item.additionalInfos?.processing}</p>
                  ) : null}
                  {item.additionalInfos?.recommendation ? (
                    <p>Empfohlen für: {item.additionalInfos?.recommendation}</p>
                  ) : null}
                  {item.additionalInfos?.url ? (
                    <a
                      target="_blank"
                      href={item.additionalInfos?.url}
                      rel="noopener noreferrer"
                      style={{
                        color: "lightblue",
                        textDecoration: "underline",
                      }}
                    >
                      Link
                    </a>
                  ) : null}
                </div>
              ) : (
                <p>Die Aufloesung gibt es wie immer erst um 19 Uhr.</p>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
