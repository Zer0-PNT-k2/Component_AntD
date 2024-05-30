export const plugins = [
  require("postcss-custom-properties")({
    preserve: false, // completely reduce all css vars
    importFrom: [
      "src/schedule/fullcalendar-vars.css", // look here for the new values
    ],
  }),
  require("postcss-calc"),
];
