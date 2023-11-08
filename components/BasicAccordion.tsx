import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CalendarItemType } from "./numbers";
import { ThemeProvider, Typography } from "@mui/material";
import { theme } from "../pages";

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

  const body1 = "body1";

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
          <Typography
            variant={body1}
            color={additionalInfos ? "black" : " white"}
            style={{ fontWeight: "bold" }}
          >
            Brühempfehlung
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ThemeProvider theme={theme}>
            <Typography variant={body1}>
              {item.brewAdvices?.brewer ? item.brewAdvices?.brewer : null}
            </Typography>
            <Typography variant={body1}>
              {item.brewAdvices?.grinding ? item.brewAdvices?.grinding : null}
            </Typography>
            <Typography variant={body1}>
              {item.brewAdvices?.temperature
                ? item.brewAdvices?.temperature
                : null}
            </Typography>
            <Typography variant={body1}>
              {item.brewAdvices?.ratio ? item.brewAdvices?.ratio : null}
            </Typography>
            <Typography variant={body1}>
              {item.brewAdvices?.time ? item.brewAdvices?.time : null}
            </Typography>
            <Typography variant={body1}>
              {item.brewAdvices?.notes
                ? "Anmerkungen: " + item.brewAdvices?.notes
                : null}
            </Typography>
          </ThemeProvider>
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
          <Typography
            variant={body1}
            color={additionalInfos ? "black" : " white"}
            style={{ fontWeight: "bold" }}
          >
            {additionalInfos
              ? "Auflösung"
              : "Die Auflösung gibt es wie immer erst um 19 Uhr."}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant={body1}>
            {item.additionalInfos?.roastery
              ? "Rösterei: " + item.additionalInfos?.roastery
              : null}
          </Typography>
          <Typography variant={body1}>
            {item.additionalInfos?.name
              ? "Name: " + item.additionalInfos?.name
              : null}
          </Typography>
          <Typography variant={body1}>
            {item.additionalInfos?.city
              ? "Stadt: " + item.additionalInfos?.city
              : null}
          </Typography>
          <Typography variant={body1}>
            {item.additionalInfos?.taste
              ? "Geschmack: " + item.additionalInfos?.taste
              : null}
          </Typography>
          <Typography variant={body1}>
            {item.additionalInfos?.roast
              ? "Röstung: " + item.additionalInfos?.roast
              : null}
          </Typography>
          <Typography variant={body1}>
            {item.additionalInfos?.variety
              ? "Varität: " + item.additionalInfos?.variety
              : null}
          </Typography>
          <Typography variant={body1}>
            {item.additionalInfos?.region
              ? "Region: " + item.additionalInfos?.region
              : null}
          </Typography>
          <Typography variant={body1}>
            {item.additionalInfos?.processing
              ? "Aufbereitung: " + item.additionalInfos?.processing
              : null}
          </Typography>
          <Typography variant={body1}>
            {item.additionalInfos?.recommendation
              ? "Empfohlen für: " + item.additionalInfos?.recommendation
              : null}
          </Typography>
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
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

const pstyle = {
  marginBottom: 12,
};
