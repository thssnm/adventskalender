import React from "react";
import { CalendarItemType } from "./numbers";
import BasicAccordion from "./BasicAccordion";

export const Overlay = ({
  item,
  devMode,
}: {
  item: CalendarItemType;
  devMode: boolean;
}) => {
  const time = new Date();
  const hour = time.getHours();

  const isOldItem = time.getDate() > Number(item.number);

  const additionalInfos =
    devMode ||
    isOldItem ||
    (hour >= 19 && time.getDate() === Number(item.number));

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
        <h2 style={{ color: "white" }}>{item.userName}</h2>
        <div></div>
      </div>
      <BasicAccordion additionalInfos={additionalInfos} item={item} />
    </div>
  );
};
