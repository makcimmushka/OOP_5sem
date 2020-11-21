export const validXml = '<?xml version="1.0"?><comment>Test comment</comment>';

export const validXsd = `<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
    <xs:element name="comment" type="xs:string"/></xs:schema>
`;

export const notCorrespondingValidXsd = `<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
    <xs:element name="not-comment" type="xs:string"/></xs:schema>
`;

export const invalidXml = '<?xml invalid""?><comment>Test comment</comment>';

export const invalidXsd = `<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
    <xs:element name="comment" type="xs:string"/>
`;

export const medicineXml = `<?xml version="1.0" encoding="UTF-8"?>
<medicines xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:noNamespaceSchemaLocation="medicine.xsd">
    <medicine id="1">
        <name>Ibuprofen</name>
        <pharm>Marbiopharm</pharm>
        <group>Antibiotics</group>
        <analogs>
            <analog>Bumidol</analog>
            <analog>Deblock</analog>
        </analogs>
        <versions>
            <version>Pills</version>
            <version>Capsules</version>
        </versions>
        <certificate>
            <number>1</number>
            <date>13 Jan 2020 20:35:00 GMT</date>
            <organization>Deltavit</organization>
        </certificate>
        <package>
            <type>Cardboard packaging</type>
            <amount>20</amount>
            <price>150.5</price>
        </package>
        <dosage>
            <dose>2</dose>
            <periodicity>4</periodicity>
        </dosage>
    </medicine>

    <medicine id="2">
        <name>No-Spa</name>
        <pharm>Sanofi</pharm>
        <group>Analgetics</group>
        <analogs>
            <analog>Drotaverin MS</analog>
            <analog>Drotaverin Forte</analog>
        </analogs>
        <versions>
            <version>Pills</version>
        </versions>
        <certificate>
            <number>2</number>
            <date>26 Oct 2019 23:53:00 GMT</date>
            <organization>Hugge</organization>
        </certificate>
        <package>
            <type>Plastic bottle</type>
            <amount>30</amount>
            <price>315.0</price>
        </package>
        <dosage>
            <dose>3</dose>
            <periodicity>3</periodicity>
        </dosage>
    </medicine>

    <medicine id="3">
        <name>Analgin</name>
        <pharm>PharmaDelit</pharm>
        <group>Analgetics</group>
        <analogs>
            <analog>Nurofen</analog>
            <analog>Aspirin</analog>
            <analog>Nimulid</analog>
        </analogs>
        <versions>
            <version>Powder</version>
            <version>Pills</version>
        </versions>
        <certificate>
            <number>3</number>
            <date>30 Dec 2020 08:07:00 GMT</date>
            <organization>Fliit</organization>
        </certificate>
        <package>
            <type>Cardboard packaging</type>
            <amount>40</amount>
            <price>110.0</price>
        </package>
        <dosage>
            <dose>1</dose>
            <periodicity>4</periodicity>
        </dosage>
    </medicine>
</medicines>
`;
