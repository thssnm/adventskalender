import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CalendarItemType } from "./numbers";
import { ThemeProvider, Typography } from "@mui/material";
import { theme } from "../pages";
import { TextWithBoldStart } from "./TextWithBoldStart";
import Markdown from "react-markdown";

export const body1 = "body1";

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
        disabled={!item.brewAdvices}
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
            color="black"
            style={{ fontWeight: "bold" }}
          >
            {item.brewAdvices ? "Brühempfehlung" : "keine Brühempfehlung"}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ThemeProvider theme={theme}>
            <TextWithBoldStart
              title="Filter: "
              text={item?.brewAdvices?.brewer}
            />
            <TextWithBoldStart
              title="Mahlgrad: "
              text={item?.brewAdvices?.grinding}
            />
            <TextWithBoldStart
              title="Temperatur: "
              text={item.brewAdvices?.temperature}
            />
            <TextWithBoldStart
              title="Verhältnis: "
              text={item.brewAdvices?.ratio}
            />
            <TextWithBoldStart title="Zeit: " text={item.brewAdvices?.time} />

            <TextWithBoldStart
              title="Anmerkungen: "
              text={item.brewAdvices?.notes}
            />
            {item?.brewAdvices?.recipe?.length ? (
              <div>
                <Typography style={{ fontWeight: "bold" }} variant={body1}>
                  {item.brewAdvices?.recipe ? "Rezept: " : null}
                </Typography>

                {item.brewAdvices.recipe.map((item) => {
                  return (
                    <Typography key={item} variant={body1}>
                      {"- " + item}
                    </Typography>
                  );
                })}
              </div>
            ) : null}
            {item?.brewAdvices?.additionalRecipe?.length ? (
              <div>
                <Typography style={{ fontWeight: "bold" }} variant={body1}>
                  {item.brewAdvices?.recipe ? "Rezept: " : null}
                </Typography>

                {item.brewAdvices.additionalRecipe.map((item) => {
                  return (
                    <Typography key={item} variant={body1}>
                      {"- " + item}
                    </Typography>
                  );
                })}
              </div>
            ) : null}
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
          <ThemeProvider theme={theme}>
            <Typography
              variant={body1}
              color={additionalInfos ? "black" : " white"}
              style={{ fontWeight: "bold" }}
            >
              {additionalInfos
                ? "Auflösung"
                : "Die Auflösung gibt es wie immer erst um 19 Uhr."}
            </Typography>
          </ThemeProvider>
        </AccordionSummary>
        <AccordionDetails>
          <ThemeProvider theme={theme}>
            <TextWithBoldStart
              title="Name: "
              text={item.additionalInfos?.name}
            />
            <TextWithBoldStart
              title="Farmer: "
              text={item.additionalInfos?.producer}
            />
            <TextWithBoldStart
              title="Farm: "
              text={item.additionalInfos?.farm}
            />
            <TextWithBoldStart
              title="Rösterei: "
              text={item.additionalInfos?.roastery}
            />
            <TextWithBoldStart
              title="Stadt: "
              text={item.additionalInfos?.city}
            />

            <TextWithBoldStart
              title="Geschmack: "
              text={item.additionalInfos?.taste}
            />
            <TextWithBoldStart
              title="Röstung: "
              text={item.additionalInfos?.roast}
            />
            <TextWithBoldStart
              title="Varität: "
              text={item.additionalInfos?.variety}
            />
            <TextWithBoldStart
              title="Region: "
              text={item.additionalInfos?.region}
            />
            <TextWithBoldStart
              title="Aufbereitung: "
              text={item.additionalInfos?.processing}
            />
            <TextWithBoldStart
              title="Anbauhöhe: "
              text={item.additionalInfos?.height}
            />
            <TextWithBoldStart
              title="Mikrolot: "
              text={item.additionalInfos?.microlot}
            />
            <TextWithBoldStart
              title="Empfohlen für: "
              text={item.additionalInfos?.recommendation}
            />
            <TextWithBoldStart
              title="Cup Score: "
              text={item.additionalInfos?.cupScore}
            />
            {item.additionalInfos?.url ? (
              <Typography variant="body1">
                <a
                  target="_blank"
                  href={item.additionalInfos?.url}
                  rel="noopener noreferrer"
                  style={{
                    color: "black",
                    textDecoration: "underline",
                    fontWeight: "bold",
                  }}
                >
                  Link zur Website
                </a>
              </Typography>
            ) : null}
            {item.additionalInfos?.notes ? (
              <TextWithBoldStart title="Anmerkungen: ">
                <Markdown>{item.additionalInfos?.notes}</Markdown>
              </TextWithBoldStart>
            ) : null}
          </ThemeProvider>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
