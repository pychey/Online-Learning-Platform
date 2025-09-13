import { Document, Font, Image, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

const pxToPt = (px) => (px * 72) / 96;

const width = pxToPt(4861);
const height = pxToPt(3478);

const styles = StyleSheet.create({
    page: {
        padding: 0,
        margin: 0,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    textOverlay: {
        position: "absolute",
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)", 
        fontSize: 48, 
        fontWeight: "bold",
        color: "#000000",
        textAlign: "center",
    },
    code: {
        position: 'absolute',
        width: '400px',
        height: '100px',
        top: "16.2%",
        right : "9%",
        transform: "translate(-50%, -50%)",
        color: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: 60
    },
    userName : {
        position: 'absolute',
        width: '1500px',
        height: '200px',
        top: "35%",
        left: "31.2%",
        transform: "translate(-50%, -50%)",
        color: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 150
    },
    courseTitle: {
        position: 'absolute',
        width: '1700px',
        height: '200px',
        top: "58%",
        left: "28%",
        transform: "translate(-50%, -50%)",
        color: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 150
    },
    coordinatorName: {
        position: 'absolute',
        width: '600px',
        height: '100px',
        top: "82.5%",
        left: "22.4%",
        transform: "translate(-50%, -50%)",
        color: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 70
    },
    directorName: {
        position: 'absolute',
        width: '600px',
        height: '100px',
        top: "82.5%",
        right: "19.4%",
        transform: "translate(-50%, -50%)",
        color: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 70
    }
});

const CertificatePage = ({ code = '123-45-678', name = "Sok Bunleap", courseTitle = "Deep Research", coordinatorName = 'Vong Rithea', directorName = 'Muy Methy' }) => {
    
	return(
		<Document>
            <Page size={{ width, height }} wrap={false} style={styles.page}>
                <Image src={'https://res.cloudinary.com/dhbuy0um9/image/upload/v1757754109/Certificate_Template_400PPI_mglfod.jpg'} style={styles.image} />

                <View style={styles.code}>
                    <Text style={{ fontFamily: 'Times-Roman', fontWeight: 'light' }}>{code}</Text>
                </View>

                <View style={styles.userName}>
                    <Text style={{ fontFamily: 'Times-Roman', fontWeight: 'light' }}>{name}</Text>
                </View>

                <View style={styles.courseTitle}>
                    <Text style={{ fontFamily: 'Times-Roman', fontWeight: 'light' }}>{courseTitle}</Text>
                </View>

                <View style={styles.coordinatorName}>
                    <Text style={{ fontFamily: 'Times-Roman', fontWeight: 'light' }}>{coordinatorName}</Text>
                </View>

                <View style={styles.directorName}>
                    <Text style={{ fontFamily: 'Times-Roman', fontWeight: 'light' }}>{directorName}</Text>
                </View>
            </Page>
        </Document>
    )
}

Font.register({
  family: 'Titillium Web',
  fonts: [
    {
      src: 'http://fonts.gstatic.com/s/titilliumweb/v4/7XUFZ5tgS-tD6QamInJTcU3KvHLhcNjEHFQzwNtdMQY.ttf'
    }
  ]
})

export default CertificatePage;