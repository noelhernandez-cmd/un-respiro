/** Apps Script vinculado a una Google Sheet privada. Publicar como aplicación web:
 * Ejecutar como: Yo; acceso: Cualquier usuario. No coloques información confidencial en el código.
 */
function doPost(e) {
  try {
    var p = (e && e.parameter) || {};
    var mood = String(p.mood || 'No respondido').slice(0,80);
    var help = String(p.help || 'No respondido').slice(0,80);
    var note = String(p.note || '').slice(0,500);
    // Evitar que el texto de usuario sea interpretado como fórmula por Sheets.
    function safe(s){ return /^[=+\-@]/.test(s) ? "'" + s : s; }
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Respuestas');
    if (!sheet) return ContentService.createTextOutput('La pestaña Respuestas no existe.');
    sheet.appendRow([new Date(), safe(mood), safe(help), safe(note)]);
    return ContentService.createTextOutput('OK');
  } catch (err) {return ContentService.createTextOutput('ERROR');}
}
