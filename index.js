// const express = require("express");
// const app = express();
// app.get("/", (req, res) => {
//   res.send(
//     `loading.... <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" data-for="CDN">
//      <script>
//         window.handleSettings({
//             alert: true,
//             content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
//         })
//     </script>
//       `
//   );
// });

// app.listen(5000, () => console.log("listing to port 5000..."));

function appendCDNs() {
  let head = document.querySelectorAll("head")[0];
  if (head)
    // append tailwindcss CDN
    head.innerHTML = `<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" data-for="CDN">`;
}

function handleSettings(options) {
  options ? collectOptions(options) : pushErr();
}

function pushErr() {
  console.log(
    `oops! , please set function handleSettings(options) inside script element or onside your .js files .. :/`
  );
}

function collectOptions(options) {
  if (options.alert) {
    CreateElementsPopups(options.content);
  }
}

function CreateElementsPopups(content) {
  let popupContainer = document.createElement("div");
  let popupBox = document.createElement("div");
  let popupContent = document.createElement("p");
  let popupCancel = document.createElement("button");
  popupBox.append(popupContent);
  popupBox.append(popupCancel);
  popupContainer.append(popupBox);
  popupCancel.innerText = "Cancel";
  popupContainer.className =
    "fixed hidden inset-0 bg-gray-800 bg-opacity-50 z-20";
  popupBox.className =
    "max-w-screen-sm p-3 bg-white rounded-xl mx-auto my-3 font-medium";
  popupContent.className = "p-4 text-gray-700 border-b border-gray-200 mb-3 ";
  popupCancel.className =
    "table ml-auto py-2 px-4 text-red-400 bg-red-50 rounded-xl font-medium";

  popupContainer.classList.replace("hidden", "block");
  document.querySelectorAll("head")[0].querySelector('link[data-for="CDN"]')
    ? (document.body.className = "overflow-hidden")
    : (document.body.style.cssText = "overflow: hidden !important;");

  popupContent.innerText = content;
  popupCancel.onclick = () => {
    popupContainer.classList.replace("block", "hidden");
  };
}

appendCDNs();
module.exports.handleSettings = handleSettings;
