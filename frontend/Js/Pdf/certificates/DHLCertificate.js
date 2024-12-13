export function DHLFunction(
    printText,
    createCell,
    createBorder,
    longText,
    drawLine,
    radioButtonpdf,
    checkbox,
    OrginalOrCopy
) {
    document
    .getElementById("DHLButton")
    .addEventListener("click", async function () {
      const pdf = new jsPDF("p", "in", "a4"); //8.25 x 11.75 inches




            
            pdf.setFont("helvetica");
            pdf.setFontType("bold");
            

            const text1 = "EXPRESS WORLDWIDE";
            const text2 = "DHL Online";
            const text3 = "XPD";
            const text4 = "CORMET INC";
            const text5p1 = "12500 GRAND RIVER ROAD.";
            const text5p2 = "BRIGHTON.MICHIGAN-48116 USA";
            const text6 = "005LM01240930003";
            const text7 = "RAMKRISHNA FORGINGS LIMITED";
            const text8 = "PLANT-V BALIGUMA,KOLABIRA KHARSAWAN 833220, INDIA";
            const text9 = "TW-TXG-TXW";
            const text10 = ""; // DayValue
            const text11 = ""; // TimeValue
            const text12 = "04/30/2024";
            const text13 = "0.5 lb";
            const text14 = "1/1";
            const text15 = "(2L)TW407+32000000";
            const text16 = "(J)JD01 2061 3830 8033 2660";
            const text17 = "240402";
          

            const longText1 = "These commodities, technology, or software were exported from the United States in accordance with the Export Administrattion regulations. Diversion contrary to U.S law prohibited.";
         

            // Structure of the page
            createCell(pdf, 0.60, 0.70, 7.10, 10.00);

            // Row 1
            // Vertical
            drawLine(pdf, 4.00, 0.70, 4.00, 1.40);
            drawLine(pdf, 5.20, 0.70, 5.20, 1.40);

            
            // Horizontal
            drawLine(pdf, 0.60, 1.40, 7.70, 1.40);


            // Row 2 
            // Horizontal
            drawLine(pdf, 0.60, 2.20, 7.70, 2.20);


            // Row 3 
            // Horizontal
            drawLine(pdf, 0.60, 3.70, 7.70, 3.70);


            // Row 4
            // Horizontal
            drawLine(pdf, 0.60, 4.20, 7.70, 4.20);


            // Row 5
            // Horizontal
            drawLine(pdf, 0.60, 4.75, 7.70, 4.75);


            // Row 6
            // Horizontal
            drawLine(pdf, 0.60, 5.20, 7.70, 5.20);

            
          


            // Text Placement
            printText(pdf, 0.65, 0.92, text1, true, 12);
            printText(pdf, 0.65, 1.10, text2, false, 10);



            printText(pdf, 4.25, 1.00, text3, true, 22);

            // Image 1
            var DHL_Logo = new Image()
            DHL_Logo.src = '../DHLLogo.png'
            pdf.addImage(DHL_Logo, 'png', 5.70, 0.50, 1.5, 1.10)

            printText(pdf, 0.65, 1.60, "From: ", true, 10);
            printText(pdf, 1.15, 1.60, text4, false, 10);
            printText(pdf, 1.15, 1.80, text5p1, false, 10);
            printText(pdf, 1.15, 2.00, text5p2, false, 10);

            printText(pdf, 5.00, 1.60, "LC#", true, 10);
            printText(pdf, 5.35, 1.60, text6, false, 10);


            printText(pdf, 0.67, 2.40, "To: ", true, 10);
            printText(pdf, 1.15, 2.40, text7, false, 10);
            printText(pdf, 1.15, 2.65, text8, false, 10);

            printText(pdf, 3.25, 4.05, text9, true, 22);


            printText(pdf, 5.40, 4.45, "Day", true, 10);
            printText(pdf, 5.40, 4.63, text10, false, 10);

            printText(pdf, 6.40, 4.45, "Time: ", true, 10);
            printText(pdf, 6.40, 4.63, text11, false, 10);


            printText(pdf, 4.10, 4.90, "Date:", true, 10);
            printText(pdf, 4.10, 5.10, text12, false, 10);

            printText(pdf, 5.20, 4.90, "Shpt Weight: ", true, 10);
            printText(pdf, 5.20, 5.10, text13, false, 10);
            
            printText(pdf, 6.40, 4.90, "Piece: ", true, 10);
            printText(pdf, 6.40, 5.10, text14, false, 10);
          

            longText(pdf, longText1, 0.65, 5.20, 6.90, 8, false, false);
            // Image 2
            var DHLBarcode1 = new Image()
            DHLBarcode1.src = '../DHLBarcode1.png'
            pdf.addImage(DHLBarcode1, 'png', 1.15, 5.80, 4.20, 1.40)




            printText(pdf, 5.45, 5.90, "Content: ", false, 10);
            // image 3
            var DHLBarcode2 = new Image()
            DHLBarcode2.src = '../DHLBarcode2.png'
            pdf.addImage(DHLBarcode2, 'png', 1.15, 7.41, 3.75, 1.45)


            printText(pdf, 1.15, 7.35, "WAYBILL", true, 10);
            printText(pdf, 1.15, 9.00, text15, true, 10);
            // image 4
            var DHLBarcode2i = new Image()
            DHLBarcode2i.src = '../DHLBarcode2.png'
            pdf.addImage(DHLBarcode2i, 'png', 1.60, 9.05, 3.75, 1.40)

            
            printText(pdf, 1.15, 10.587, text16, true, 10);

           


            printText(pdf, 0.63, 10.85, "THE LC NUMBER: " + text6, false, 8);
            printText(pdf, 0.65, 11.00, "DATE OF LC ISSUANCE " + text17, false, 8);
         

            pdf.setFillColor(0,0,0);
            pdf.rect(0.60, 4.19, 4.75, 0.56, 'F');
          
            // Printing Text
            

            pdf.save("DHL Certificate.pdf");
        });


}