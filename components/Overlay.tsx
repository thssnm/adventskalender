import React from "react";
import { CalendarItemType } from "./numbers";
import BasicAccordion from "./BasicAccordion";
import CloseIcon from "@mui/icons-material/Close";
export const Overlay = ({
  item,
  setVisible,
}: {
  item: CalendarItemType;
  setVisible: (value: boolean) => void;
}) => {
  const time = new Date();
  const hour = time.getHours();

  const isOldItem = time.getDate() > Number(item.number);

  const additionalInfos =
    isOldItem || (hour >= 19 && time.getDay() === Number(item.number));

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
        <CloseIcon
          onClick={() => setVisible(false)}
          style={{
            width: "2.5rem",
            height: "2.5rem",
            cursor: "pointer",
            color: "white",
          }}
        />
      </div>
      <BasicAccordion additionalInfos={additionalInfos} item={item} />
    </div>
  );
};
