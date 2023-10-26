const $ = require( "jquery" );
// Load the full build
const _ = require("lodash");
import "./body.css";

let count = 0;

function updateCounter() {
  count++;
  $( "#count" ).text(`${count} clicks on the button` );
}
