import React from 'react'
import {
    Document,
    Page,
    Text,
    View,
    Image,
    Font,
    StyleSheet,
    PDFViewer,
  } from "@react-pdf/renderer";
import { useLoaderData } from 'react-router-dom';

;
export default function ReadingBook() {
  // fetch book which reader want to read
  const book = useLoaderData();

  // destructure books object
  const {
    _id,
    bookName,
    authorName,
    description,
    rating,
    imageUrl,
    quantity,
    category,
  } = book;
  
  const des1 = description.slice(0,150)
  const des2 = description.slice(150)
  //const des3 = description.slice(300,450)
  Font.register({
    family: 'Oswald',
    src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
  });
  
  const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    title: {
      fontSize: 24,
      textAlign: 'center',
      fontFamily: 'Oswald'
    },
    author: {
      fontSize: 12,
      textAlign: 'center',
      marginBottom: 40,
    },
    subtitle: {
      fontSize: 18,
      margin: 12,
      fontFamily: 'Oswald'
    },
    text: {
      margin: 12,
      fontSize: 14,
      textAlign: 'justify',
      fontFamily: 'Times-Roman'
    },
    image: {
      marginVertical: 15,
      marginHorizontal: 100,
    },
    header: {
      fontSize: 12,
      marginBottom: 20,
      textAlign: 'center',
      color: 'grey',
    },
    pageNumber: {
      position: 'absolute',
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: 'center',
      color: 'grey',
    },
  });

//width:"1200px",height:"950px"}

  return (
    <div >
         <Helmet>
          <meta charSet="utf-8" />
          <title>ReadingBook</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
    <PDFViewer style={{width:"1200px",height:"650px",backgroundColor: "#d11fb6"}}>

      {/* Start of the document*/}
      <Document style={{width:"1200px",height:"950px"}}>
    <Page style={styles.body}>
      <Text style={{textAlign:"center",margin:"10px"}}>
        ~ Created by Mohammad Jafar Uddin ~
      </Text>
      <Text style={styles.title}>{bookName}</Text>
      <Text style={styles.author}>{authorName}</Text>
      <Image
        style={styles.image}
        src={imageUrl}
      />
      <Text style={styles.subtitle}>
        {des1}
      </Text>
      
      <Text style={styles.text}>
        {des2}
      </Text>
    
     
    </Page>
  </Document>
    </PDFViewer>
    </div>
  )
}
