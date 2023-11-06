import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CalendarItemType } from "./numbers";

export default function BasicAccordion({
  additionalInfos,
  item,
}: {
  additionalInfos: boolean;
  item: CalendarItemType;
}) {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography color={additionalInfos ? "black" : " white"}>
            Brühempfehlung
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {item.brewAdvices?.brewer ? (
              <p>{item.brewAdvices?.brewer}</p>
            ) : null}
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
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        disabled={!additionalInfos}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography color={additionalInfos ? "black" : " white"}>
            {additionalInfos
              ? "Auflösung"
              : "Die Auflösung gibt es wie immer erst um 19 Uhr."}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
                  color: "blue",
                  textDecoration: "underline",
                }}
              >
                Link
              </a>
            ) : null}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
