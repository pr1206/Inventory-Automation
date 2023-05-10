function myFunction() {

}
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Send Email')
      .addItem('Send To Manager', 'sendToManager')
      .addToUi();
}

function sendToManager() 
{
  var sheet = SpreadsheetApp.getActive().getSheetByName("Ordered Supplies");
  var email = "<insertemailhere>"
  var dataGrid = sheet.getRange(2, 1, sheet.getLastRow(), 3).getValues();
  var message = ""
  
  message = "<table>";
  message += "<tr>"
  message += "<table border='2'>"
  message += "<td><b>Item Name</td>"
  message += "<td><b>OfficeMax Item # </td>" 
  message += "<td><b>Current Quantity</td>"
  message += "</b> </tr>"
  
  for(var i=1;i<dataGrid.length; i++)
  {
    if(dataGrid[i][0].length != 0){
      message+= "<tr>"
      message+= "<td>" + dataGrid[i][0] + "</td>"
      message+= "<td>" + dataGrid[i][1] + "</td>"
      message+= "<td>" + dataGrid[i][2] + "</td>"
      message+= "</tr>"
    }
  }

  message +="</table>"

  MailApp.sendEmail(email, "Supplies Needed", "", {htmlBody:message});
  Browser.msgBox("Email sent!"); 
}