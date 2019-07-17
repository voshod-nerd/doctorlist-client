var builder = require('xmlbuilder');
var fs = require('fs');
var app = require('electron').remote;
var dialog = app.dialog;

 function saveFileNotification (content)  {  
    const options = {
        //Placeholder 1
        title: "Сохранение файла списка врачей и сертификатов",
        
        //Placeholder 2
        defaultPath : "C:\\",
        
        //Placeholder 4
        buttonLabel : "Сохранить список врачей и сертификатов",
        
        //Placeholder 3
        filters :[
         {name: 'Xml файл', extensions: ['xml']},
      
        ]
       }

      dialog.showSaveDialog(null, options, (path) => {
        try { fs.writeFileSync(path, content, 'utf-8'); }
        catch(e) { alert('Failed to save the file !'); }
      });
} 

export function createXML(certifiactionList,doctorList,date) {
    
    var root = builder.create('root');
    let index=1;
    for (let i=0;i<doctorList.length;i++) {
    let iddokt= doctorList[i].iddokt;
    let activeCertification = certifiactionList.filter((x)=>x.date_end>date && x.iddokt===iddokt);
    if (activeCertification===undefined || activeCertification.length==0) continue;
    
    let zap= builder.create('ZAP');
    zap.ele("N_ZAP",index);
    zap.ele("IDDOCT",iddokt);
    zap.ele("LPUKOD",doctorList[i].lpukod);
    zap.ele("FAM",doctorList[i].fam);
    zap.ele("IM",doctorList[i].im);
    zap.ele("OT",doctorList[i].ot);
    zap.ele("DOKT",doctorList[i].dokt);
    for (let j=0;j<activeCertification.length;j++) {
    let sertif= builder.create("SERTIF");
    sertif.ele("N_SERT",activeCertification[j].n_sert);
    sertif.ele("REG_NUM",activeCertification[j].reg_num);
    sertif.ele("DATE_END",activeCertification[j].date_end);
    sertif.ele("PRVS",activeCertification[j].prvs);
    zap.importDocument(sertif);
    }
    root.importDocument(zap);
    index++;
}
    //root.end({ pretty: true}); 

    var xmlString = root.end({ 
        pretty: true,
        indent: '  ',
        newline: '\n',
        width: 0,
        allowEmpty: false,
        spacebeforeslash: ''
      });

   
    saveFileNotification(xmlString);

}
