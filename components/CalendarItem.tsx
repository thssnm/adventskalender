import React from "react";
import { Overlay } from "./Overlay";
import { CalendarItemType } from "./numbers";
import { Box, Modal, ThemeProvider, Typography } from "@mui/material";
import { theme } from "../pages";

export const CalendarItem = ({
  item,
  count,
  devmode,
}: {
  item: CalendarItemType;
  count: number;
  devmode: boolean;
}) => {
  const [backgroundColor, setBackgroundColor] = React.useState(
    "rgba(217, 30, 24,0.5)"
  );

  const [pointerEvents, setPointerEvents] = React.useState<
    | "auto"
    | "none"
    | "visiblePainted"
    | "visibleFill"
    | "visibleStroke"
    | "visible"
    | "painted"
    | "fill"
    | "stroke"
    | "all"
    | "inherit"
  >("none");

  const number = devmode ? 10 : 11;

  const isActive =
    (Number(item.number) <= new Date().getDate() &&
      new Date().getMonth() === number) ||
    count > 9;

  const onPressItem = () => {
    if (open) {
      handleClose();
    } else {
      handleOpen();
    }
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    if (isActive) {
      setBackgroundColor("rgba(0,135,62, 0.9)");
      setPointerEvents("auto");
    } else {
      setBackgroundColor("rgba(214,0,28, 0.9)");
      setPointerEvents("none");
    }
  }, [isActive, item.number]);

  return (
    <>
      <div
        onClick={onPressItem}
        style={{
          minWidth: 50,
          minHeight: 50,
          width: "20%",
          height: "15%",
          margin: 6,
          display: "flex",
          alignItems: "center",
          backgroundColor,
          justifyContent: "center",
          borderRadius: 12,
          cursor: "pointer",
          pointerEvents,
        }}
      >
        <ThemeProvider theme={theme}>
          <Typography variant="h4" color="white">
            {item.number}
          </Typography>
        </ThemeProvider>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        style={{ borderRadius: 12 }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Overlay item={item} setVisible={handleClose} />
        </Box>
      </Modal>
    </>
  );
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxWidth: 800,
  bgcolor: "gray",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 6,
  overflowY: "auto",
  maxHeight: "90%",
};
