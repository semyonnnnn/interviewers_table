import template from "../template.html";
import cssText from "./styles/styles.css";
// import { ApplyStyles } from "/app/ApplyStyles.js";

// const content = document.querySelectorAll(".content")[1];
// const outer_tables = content.querySelectorAll(":scope > table");

// const data_window = document.createElement("div");
// data_window.classList.add("data_window");
// data_window.classList.add("hidden");

// PROD ONLY
const styleTag = document.createElement("style");
styleTag.textContent = cssText;
document.head.appendChild(styleTag);
//PROD ONLY

// ApplyStyles.init(outer_tables, content);

// setTimeout(() => {
//   document.querySelector(
//     ".col-lg-4.mt-2.mt-lg-0.order-2.order-lg-1"
//   ).style.display = "none";
//   const main = document.querySelectorAll(".col-lg-8.order-1.order-lg-1")[0];
//   main.classList.remove("col-lg-8");
//   main.classList.add("col-lg-12");

//   content.parentElement.appendChild(data_window);
// }, 0);

const parent = document.currentScript.parentElement;

const wrapper = document.createElement("div");
wrapper.innerHTML = template;

parent.appendChild(wrapper);

// https://66.rosstat.gov.ru/folder/270448
