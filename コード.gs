function doGet() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("アクセス時刻");
  var number_format = sheet.getRange(1,1).getNumberFormat();
  sheet.insertRowsBefore(1,1);
  var now = new Date();
  sheet.getRange(1,1,1,2).setValues([[now, now.getTime()]]);
  sheet.getRange(1,1,1,1).setNumberFormat(number_format);
  var html_template = HtmlService.createTemplateFromFile("index");
  var html_output = html_template.evaluate();
  return html_output;
}

function recordWebanketo00(start_time, record_time, q1a, q1b, q2, q3, q4a, q4b, q5a, q5b, q5c, q5d, q6a, q6b, q6c, q6d, q7a, q7b, q7c, q7d, q7e, q8a, q8b, q8c, q9, q10a, q10b, q11a, q11b, q12a, q12b){
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("被験者");
  sheet.insertRowsBefore(1,1);
  var range = sheet.getRange(1,1,1,31);
  range.setValues([[start_time, record_time, q1a, q1b, q2, q3, q4a, q4b, q5a, q5b, q5c, q5d, q6a, q6b, q6c, q6d, q7a, q7b, q7c, q7d, q7e, q8a, q8b, q8c, q9, q10a, q10b, q11a, q11b, q12a, q12b]]);
}

function recordTransition(start_time, record_time, target_page) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("遷移時刻");
  sheet.insertRowsBefore(1,1);
  var range = sheet.getRange(1,1,1,3);
  range.setValues([[start_time, record_time, target_page]]);
}

function recordChoice(start_time, record_time, room1, room2, choice, factor, desirability) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("選択結果");
  sheet.insertRowsBefore(1,1);  
  var range = sheet.getRange(1,1,1,7);
  range.setValues([[start_time, record_time, room1, room2, choice, factor, desirability]]);
}

function getRooms(){
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("物件");
  var range = sheet.getDataRange();
  var values = range.getValues();
  values.shift();
  return values;
}

function getComparisonPairs(){
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("比較");
  var range = sheet.getDataRange();
  var values = range.getValues();
  return values;
}
