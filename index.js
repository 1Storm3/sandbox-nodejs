const art = require("ascii-art");

art.font("This first backend app node js", "Doom", (err, rendered) => {
  if (err) return;
  console.log(rendered);
});
