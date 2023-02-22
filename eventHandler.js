import { mutations, computed } from "./store.js";
const domClickElements = document.querySelectorAll("[on-click]");
const domChangeElements = document.querySelectorAll("[on-change]");
// const domCustomElements = document.querySelectorAll(`[${/c\w+/}]`);

Element.prototype.eventHandler = function (eventName) {
  if (mutations[this.getAttribute(eventName)])
    mutations[this.getAttribute(eventName)](this);
  computed[this.getAttribute(eventName)](this);
};

domClickElements.forEach(
  (el) =>
    (el.onclick = function (e) {
      this.eventHandler("on-click");
    })
);

domChangeElements.forEach(
  (el) =>
    (el.onchange = function (e) {
      this.eventHandler("on-change");
    })
);
