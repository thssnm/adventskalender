import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
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
        style={{ borderRadius: 12, marginBottom: 12 }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <p
            color={additionalInfos ? "black" : " white"}
            style={{ fontWeight: "bold" }}
          >
            Brühempfehlung
          </p>
        </AccordionSummary>
        <AccordionDetails>
          {item.brewAdvices?.brewer ? (
            <p style={pstyle}>{item.brewAdvices?.brewer}</p>
          ) : null}
          {item.brewAdvices?.grinding ? (
            <p style={pstyle}>{item.brewAdvices?.grinding}</p>
          ) : null}
          {item.brewAdvices?.temperature ? (
            <p style={pstyle}>{item.brewAdvices?.temperature}</p>
          ) : null}
          {item.brewAdvices?.ratio ? (
            <p style={pstyle}>{item.brewAdvices?.ratio}</p>
          ) : null}
          {item.brewAdvices?.time ? (
            <p style={pstyle}>{item.brewAdvices?.time}</p>
          ) : null}
          {item.brewAdvices?.notes ? (
            <p style={pstyle}>Anmerkungen: {item.brewAdvices?.notes}</p>
          ) : null}
        </AccordionDetails>
      </Accordion>
      <Accordion
        disabled={!additionalInfos}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        style={{ borderRadius: 12 }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <p
            color={additionalInfos ? "black" : " white"}
            style={{ fontWeight: "bold" }}
          >
            {additionalInfos
              ? "Auflösung"
              : "Die Auflösung gibt es wie immer erst um 19 Uhr."}
          </p>
        </AccordionSummary>
        <AccordionDetails>
          {item.additionalInfos?.roastery ? (
            <p style={pstyle}>Rösterei: {item.additionalInfos?.roastery}</p>
          ) : null}
          {item.additionalInfos?.name ? (
            <p style={pstyle}>Name: {item.additionalInfos?.name}</p>
          ) : null}
          {item.additionalInfos?.city ? (
            <p style={pstyle}>Stadt: {item.additionalInfos?.city}</p>
          ) : null}
          {item.additionalInfos?.taste ? (
            <p style={pstyle}>Geschmack: {item.additionalInfos?.taste}</p>
          ) : null}
          {item.additionalInfos?.roast ? (
            <p style={pstyle}>Röstung: {item.additionalInfos?.roast}</p>
          ) : null}
          {item.additionalInfos?.variety ? (
            <p style={pstyle}>Varität: {item.additionalInfos?.variety}</p>
          ) : null}
          {item.additionalInfos?.region ? (
            <p style={pstyle}>Region: {item.additionalInfos?.region}</p>
          ) : null}
          {item.additionalInfos?.processing ? (
            <p style={pstyle}>
              Aufbereitung: {item.additionalInfos?.processing}
            </p>
          ) : null}
          {item.additionalInfos?.recommendation ? (
            <p style={pstyle}>
              Empfohlen für: {item.additionalInfos?.recommendation}
            </p>
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
              <p style={pstyle}>Link</p>
            </a>
          ) : null}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

const pstyle = {
  marginBottom: 12,
};
