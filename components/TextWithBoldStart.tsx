import * as React from "react";
import { Typography } from "@mui/material";
import { body1 } from "./BasicAccordion";

export const TextWithBoldStart = ({
  title,
  text,
  children,
}: {
  title: string;
  text?: string;
  children?: React.ReactNode;
}) => {
  if ((text === "" || !text) && !children) {
    return;
  }
  return (
    <Typography variant={body1} style={{ whiteSpace: "pre-line" }}>
      <span style={{ fontWeight: "bold" }}>{title} </span>
      {text ? text : null}
      {children ? children : null}
    </Typography>
  );
};
