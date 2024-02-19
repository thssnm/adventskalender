import React from "react";
import { CalendarItemType } from "./numbers";
import BasicAccordion from "./BasicAccordion";

export const Overlay = ({
  item,
  devMode,
  count,
}: {
  item: CalendarItemType;
  devMode: boolean;
  count: number;
}) => {
  const time = new Date();
  const hour = time.getHours();

  const isOldItem = time.getDate() > Number(item.number);

  const additionalInfos = true;
  /*     count > 9 ||
    devMode ||
    isOldItem ||
    (hour >= 15 && time.getDate() === Number(item.number));
 */
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 style={{ color: "white" }}>{item.number}</h2>
        <h2
          style={
            !additionalInfos
              ? { filter: "blur(10px)", pointerEvents: "none", color: "white" }
              : { color: "white" }
          }
        >
          {item.userName}
        </h2>
        <div></div>
      </div>
      <BasicAccordion additionalInfos={additionalInfos} item={item} />
    </div>
  );
};
