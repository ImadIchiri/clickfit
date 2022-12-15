const APIURL = "http://numbersapi.com/1/30/date?json";

$.ajax({
  url: APIURL,
  dataType: "json",
  caches: false,
  success: (data, status) => {
    addData(data);
  },
  error: (xhr, textStatus, err) => {
    console.log(textStatus);
  },
});

function addData({ text, year, number, found, type }) {
  $("#api_year").text(year);
  $("#api_text").text(text);
}
