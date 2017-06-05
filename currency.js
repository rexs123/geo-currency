function extract(variable) {
    for (var key in variable) {
        window[key] = variable[key];
    }
}
$.getJSON("https://api.fixer.io/latest?base=USD", currency);
function currency(object) {
  console.log(object);
  extract(object);

  $.getJSON('https://freegeoip.net/json/?callback=?', geoip);
  function geoip(data) {
    console.log(data);
    extract(data);
    switch(country_code) {
      case "CA":
        var results = +document.getElementById("cc").innerHTML;
        var ccbyLocation = results * rates.CAD;
        document.getElementById('cc').innerHTML = "$" + Math.round(ccbyLocation * 100) / 100 + " CAD";
      break;
      case "GB":
        var results = +document.getElementById("cc").innerHTML;
        var ccbyLocation = results * rates.GBP;
        document.getElementById('cc').innerHTML = "£" + Math.round(ccbyLocation * 100) / 100 + " GBP";
      break;
      case "AU":
        var results = +document.getElementById("cc").innerHTML;
        var ccbyLocation = results * rates.AUD;
        document.getElementById('cc').innerHTML = "$" + Math.round(ccbyLocation * 100) / 100 + " AUD";
      break;
      case "DE":
        var results = +document.getElementById("cc").innerHTML;
        var ccbyLocation = results * rates.EUR;
        document.getElementById('cc').innerHTML = "€" + Math.round(ccbyLocation * 100) / 100 + " EUR";
      break;
      case "FR":
        var results = +document.getElementById("cc").innerHTML;
        var ccbyLocation = results * rates.EUR;
        document.getElementById('cc').innerHTML = "€" + Math.round(ccbyLocation * 100) / 100 + " EUR";
      break;
      case "DK":
        var results = +document.getElementById("cc").innerHTML;
        var ccbyLocation = results * rates.DKK;
        document.getElementById('cc').innerHTML = Math.round(ccbyLocation * 100) / 100 + " DKK";
      break;
      case "NZ":
        var results = +document.getElementById("cc").innerHTML;
        var ccbyLocation = results * rates.NZD;
        document.getElementById('cc').innerHTML = Math.round(ccbyLocation * 100) / 100 + " NZD";
      break;
      case "PH":
        var results = +document.getElementById("cc").innerHTML;
        var ccbyLocation = results * rates.PHP;
        document.getElementById('cc').innerHTML = "₱" + Math.round(ccbyLocation * 100) / 100 + " PHP";
      break;
      default:
        var results = +document.getElementById("cc").innerHTML;
        var ccbyLocation = results * rates.USD;
        document.getElementById('cc').innerHTML = "$" + Math.round(ccbyLocation * 100) / 100;
      break;
    }
  }

}
