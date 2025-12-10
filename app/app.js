import { ApplyStyles } from "/app/ApplyStyles.js";
import { Timeline } from "./Timeline.js";
import { CityHider } from "./CityHider.js";

const content = document.querySelectorAll(".content")[0];

// PROD ONLY
import template from "../template.html";
import interviewers_styles from "./styles/interviewers.css";
import general_styles from "./styles/general.css";

const styleTag = document.createElement("style");
styleTag.textContent = interviewers_styles + general_styles;

document.head.appendChild(styleTag);
//PROD ONLY

setTimeout(() => {
  const interval = setInterval(() => {
    const dropdown_jcf = document.querySelector(
      ".jcf-select.jcf-unselectable.jcf-select-cityHider"
    );
    const h1 = document.querySelector("h1");

    if (dropdown_jcf) {
      Object.assign(dropdown_jcf.style, {
        position: "relative",
        zIndex: "1",
      });
    }

    if (h1) {
      Object.assign(h1.style, {
        textAlign: "center",
        color: "#4a90e2",
        marginBottom: "25px",
        fontWeight: "300",
      });
    }

    // Stop interval if both elements exist
    if (dropdown_jcf && h1) {
      clearInterval(interval);
    }
  }, 50); // checks every 50ms

  // hide sidebar & expand main
  document.querySelector(
    ".col-lg-4.mt-2.mt-lg-0.order-2.order-lg-1"
  ).style.display = "none";
  const main = document.querySelectorAll(".col-lg-8.order-1.order-lg-1")[0];
  main.classList.replace("col-lg-8", "col-lg-12");

  // Insert template
  const interviewers_container = document.createElement("div");
  interviewers_container.innerHTML = template;
  content.parentElement.appendChild(interviewers_container);

  // Now elements exist, safe to init
  Timeline.timeline = interviewers_container.querySelector(".timeline-grid");

  // Create month labels container if missing
  let monthLabels = interviewers_container.querySelector(".month-labels");
  if (!monthLabels) {
    monthLabels = document.createElement("div");
    monthLabels.classList.add("month-labels");
    Timeline.timeline.parentElement.insertBefore(
      monthLabels,
      Timeline.timeline
    );
  }
  Timeline.monthLabels = monthLabels;

  // CityHider elements
  const table = interviewers_container.querySelector("#surveyTable");
  const select = interviewers_container.querySelector("#cityHider");
  if (table && select) {
    CityHider.table = table;
    CityHider.select = select;
    Timeline.init();
    CityHider.init();
  }
}, 0);

// https://66.rosstat.gov.ru/folder/270448
