import * as React from "react";
import { Typography } from "@mui/material";
import { body1 } from "./BasicAccordion";

export const TextWithBoldStart = ({
  title,
  text,
}: {
  title: string;
  text?: string;
}) => {
  if (text === "" || !text) {
    return;
  }
  return (
    <Typography variant={body1} style={{ whiteSpace: "pre-line" }}>
      <span style={{ fontWeight: "bold" }}>{title} </span>
      {text}
    </Typography>
  );
};
