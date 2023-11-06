import React from "react";
import { Overlay } from "./Overlay";
import { CalendarItemType } from "./numbers";
import { Box, Modal } from "@mui/material";

export const CalendarItem = ({
  item,
  count,
}: {
  item: CalendarItemType;
  count: number;
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

  const isActive =
    (Number(item.number) <= new Date().getDate() &&
      new Date().getMonth() === 11) ||
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
        <h2 style={{ color: "white" }}>{item.number}</h2>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
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
  width: 400,
  bgcolor: "gray",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 6,
};
