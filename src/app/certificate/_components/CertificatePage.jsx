import { Document, Font, Image, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

const pxToPt = (px) => (px * 72) / 96;

const width = pxToPt(4677);
const height = pxToPt(3307);

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
        top: "14.5%",
        right : "7%",
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
        left: "30%",
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
        left: "27%",
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
        top: "84.3%",
        left: "21.4%",
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
        top: "84.3%",
        right: "18.4%",
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
                <Image src={'https://res.cloudinary.com/dogwsyf81/image/upload/v1757256454/Certificate_Template_400_PPI_mrufeh.jpg'} style={styles.image} />

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