
import { submitAlert,ALERT } from "./src/modules/e_alert/eAlert.js";
import { getMACs,MACs } from "./src/modules/egov/eGov.js";


ALERT.addEventListener('click',submitAlert);
MACs.addEventListener('click',getMACs);