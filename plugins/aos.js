import AOS from "aos";

import "aos/dist/aos.css";

export default ({ app }) => {
  app.AOS = new AOS.init({ disable: "phone", duration: 250 }); // eslint-disable-line new-cap
};