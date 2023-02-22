import "./eventHandler.js";

const viewPath = "src/pages";

const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  event.stopPropagation();
  // window.history.pushState({}, "", event.target.href);
  handleLocation(event.target.getAttribute("to"));
};

const routerElements = document.querySelectorAll("[to]");

const routes = Object.assign(
  {},
  ...Array.from(routerElements)
    .map((link) => {
      link.style.cursor = "pointer";
      const path = link.getAttribute("to");

      // const path = (link.href = link.href.replace(/https?:\/\/.+\d{4,6}/, ""));

      return {
        [path]: `${viewPath}/${path === "/" ? "home" : path}.html`,
      };
    })
    .concat({ 404: viewPath + "/" + "404.html" })
);

const handleLocation = async (path) => {
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("app").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;
routerElements.forEach((el) => (el.onclick = route));

handleLocation(window.location.pathname);

export { route };
