import React from 'react'
import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
  } from "@react-pdf/renderer";

;
export default function ReadingBook() {
  return (
    <div >
    <PDFViewer style={{width:"1200px",height:"650px",backgroundColor: "#d11fb6"}}>

      {/* Start of the document*/}
      <Document style={{width:"1200px",height:"950px"}}>
    <Page style={{width:"1200px",height:"950px"}}>
      <Text style={{ backgroundColor: 'tomato' }}>
        ~ Created with react-pdf ~
      </Text>
      <Text >Don Quijote de la Mancha</Text>
      <Text >Miguel de Cervantes</Text>
   
      <Text >
        Capítulo I: Que trata de la condición y ejercicio del famoso hidalgo D.
        Quijote de la Mancha
      </Text>
      
      <Text >
        Luego volvía diciendo, como si verdaderamente fuera enamorado: —¡Oh
        princesa Dulcinea, señora deste cautivo corazón! Mucho agravio me
        habedes fecho en despedirme y reprocharme con el riguroso afincamiento
        de mandarme no parecer ante la vuestra fermosura. Plégaos, señora, de
        membraros deste vuestro sujeto corazón, que tantas cuitas por vuestro
        amor padece. Con estos iba ensartando otros disparates, todos al modo de
        los que sus libros le habían enseñado, imitando en cuanto podía su
        lenguaje. Con esto caminaba tan despacio, y el sol entraba tan apriesa y
        con tanto ardor, que fuera bastante a derretirle los sesos, si algunos
        tuviera
      </Text>
    
     
    </Page>
  </Document>
    </PDFViewer>
    </div>
  )
}
