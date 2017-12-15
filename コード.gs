function doGet() {
  var sheet = SpreadsheetApp.openById("12D-ZMx10I3Yfaq2X_L1U5auMkKAu1gDRaOKJVRyNYUw").getSheetByName("シート1");
  var number_format = sheet.getRange(1,1).getNumberFormat();
  sheet.insertRowsBefore(1,1);
  var now = new Date();
  sheet.getRange(1,1,1,1).setValues([[now]]);
  sheet.getRange(1,1,1,1).setNumberFormat(number_format);
  var html_template = HtmlService.createTemplateFromFile("index");
  var html_output = html_template.evaluate();
  return html_output;
}

function recordKojin(start_time,q1,q2,q3a,q3b,q4a,q4b,q4c,q4d,q4e,q4f,q4g,q4h,q4i,q4j,q4k,q4m,q5a,q5b){
  var sheet = SpreadsheetApp.openById("12D-ZMx10I3Yfaq2X_L1U5auMkKAu1gDRaOKJVRyNYUw").getSheetByName("Kojin");
  sheet.insertRowsBefore(1,1);
  var range = sheet.getRange(1,1,1,19);
  range.setValues([[start_time,q1,q2,q3a,q3b,q4a,q4b,q4c,q4d,q4e,q4f,q4g,q4h,q4i,q4j,q4k,q4m,q5a,q5b]]);
}

function recordChoice(start_time, start_pchoice,click_time, element_id, element_value, element_checked){
  var sheet = SpreadsheetApp.openById("12D-ZMx10I3Yfaq2X_L1U5auMkKAu1gDRaOKJVRyNYUw").getSheetByName("pchoice");
  sheet.insertRowsBefore(1,1);  
  var range = sheet.getRange(1,1,1,6);
  range.setValues([[start_time, start_pchoice,click_time, element_id, element_value, element_checked]]);
}

function recordRank(start_time, start_prank,click0_time, element0_id, element0_value, element0_checked) {
  var sheet = SpreadsheetApp.openById("12D-ZMx10I3Yfaq2X_L1U5auMkKAu1gDRaOKJVRyNYUw").getSheetByName("prank");
  sheet.insertRowsBefore(1,1);  
  var range = sheet.getRange(1,1,1,6);
  range.setValues([[start_time, start_prank,click0_time, element0_id, element0_value, element0_checked]]);
}

function recordBest(start_time, start_pbest00,click_time, element_id, element_value, element_checked) {
  var sheet = SpreadsheetApp.openById("12D-ZMx10I3Yfaq2X_L1U5auMkKAu1gDRaOKJVRyNYUw").getSheetByName("pbest");
  sheet.insertRowsBefore(1,1);  
  var range = sheet.getRange(1,1,1,6);
  range.setValues([[start_time, start_pbest00,click_time, element_id, element_value, element_checked]]);
}











function getTr(choice){
  var htmlTemplate = HtmlService.createTemplateFromFile("tr");
  var sheet = SpreadsheetApp.openById("12D-ZMx10I3Yfaq2X_L1U5auMkKAu1gDRaOKJVRyNYUw").getSheetByName("経路");
  var range = sheet.getRange(1, 1, 17, 30);
  var values = range.getValues();
  var items = [];
  for(var i in values[0]) {
    if(choice === values[0][i]) {
      var range2 = sheet.getRange(1, Number(i)+1, 17, 1);
      var values2 = range2.getValues();
      for(var j in values2) {
        var x = values2[j][0];
        var y = Number(x);
      if(y>=1 && y<=8) {
          items[y-1] = [values[j][0], values[j][1]];
        }
      }
    }
  }
  htmlTemplate.items = items;
  var htmlOutput = htmlTemplate.evaluate();
  return htmlOutput.getContent();
}

//function testGetTr(){
//  Logger.log(getTr("choice01"));
//}