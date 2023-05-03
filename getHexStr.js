exports.getHexStr = function (color) {
  var hex;
  color = color.toUpperCase();
  if(color === "RED"){
    hex = "#FF0000";
  } else if(color === "GREEN"){
    hex = "#00FF00";
  } else if(color === "BLUE"){
    hex = "#0000FF";
  } else if(color === "WHITE"){
    hex = "#FFFFFF";
  } else if(color === "BLACK"){
    hex = "#000000";
  } else if(color === "YELLOW"){
    hex = "#FFFF00";
  } else if(color === "CYAN"){
    hex = "#00FFFF";
  } else if(color === "MAGENTA"){
    hex = "#FF00FF";
  } else if(color === "SILVER"){
    hex = "#C0C0C0";
  } else if(color === "GRAY"){
    hex = "#808080";
  } else if(color === "MAROON"){
    hex = "#800000";
  } else if(color === "OLIVE"){
    hex = "#808000";
  } else if(color === "LIME"){
    hex = "#00FF00";
  } else if(color === "AQUA"){
    hex = "#00FFFF";
  } else if(color === "TEAL"){
    hex = "#008080";
  } else if(color === "NAVY"){
    hex = "#000080";
  } else if(color === "FUCHSIA"){
    hex = "#FF00FF";
  } else if(color === "PURPLE"){
    hex = "#800080";
  } else {
    hex = "#000000";
  }
  return hex;
}