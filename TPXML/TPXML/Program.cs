using System;
using System.Xml;

class Program
{
    static void Main()
    {
        EscribirXML();
        EscribirXMLtxtWriter("empleadosTxtWriter.xml");
        LeerXML();
        LeerXMLtxtReader("empleadosTxtWriter.xml");
    }

    static void EscribirXML()
    {
        XmlDocument xmlDoc = new XmlDocument();
        xmlDoc.LoadXml(@"
<empleados>
 <listado>
 <empleado>
 <id>4884</id>
 <nombreCompleto>Rodriguez, Victor</nombreCompleto>
 <cuil>20103180326</cuil>
 <sector denominacion='Gerencia Recursos Humanos' id='137'
 valorSemaforo='130.13' colorSemaforo='VERDE'></sector>
 <cupoAsignado>1837.15</cupoAsignado>
 <cupoConsumido>658.02</cupoConsumido>
 </empleado>
 <empleado>
 <id>1225</id>
 <nombreCompleto>Sanchez, Juan Ignacio</nombreCompleto>
 <cuil>20271265817</cuil>
 <sector denominacion='Gerencia Operativa' id='44'
 valorSemaforo='130.13' colorSemaforo='ROJO'></sector>
 <cupoAsignado>750.87</cupoAsignado>
 <cupoConsumido>625.46</cupoConsumido>
 </empleado>
</listado>
 <subsectores>5</subsectores>
 <totalCupoAsignadoSector>4217.21</totalCupoAsignadoSector>
 <totalCupoConsumidoSector>1405.88</totalCupoConsumidoSector>
 <valorDial>33.34</valorDial>
</empleados>");
        xmlDoc.Save("empleados.xml");
    }

    static void EscribirXMLtxtWriter(string archivoRuta)
    {
        using (XmlWriter writer = XmlWriter.Create(archivoRuta))
        {
            writer.WriteStartDocument();
            writer.WriteStartElement("empleados");

            writer.WriteStartElement("listado");

            writer.WriteStartElement("empleado");
            writer.WriteElementString("id", "4884");
            writer.WriteElementString("nombreCompleto", "Rodriguez, Victor");
            writer.WriteElementString("cuil", "20103180326");
            writer.WriteStartElement("sector");
            writer.WriteAttributeString("denominacion", "Gerencia Recursos Humanos");
            writer.WriteAttributeString("id", "137");
            writer.WriteAttributeString("valorSemaforo", "130.13");
            writer.WriteAttributeString("colorSemaforo", "VERDE");
            writer.WriteEndElement(); // sector
            writer.WriteElementString("cupoAsignado", "1837.15");
            writer.WriteElementString("cupoConsumido", "658.02");
            writer.WriteEndElement(); // empleado

            writer.WriteStartElement("empleado");
            writer.WriteElementString("id", "1225");
            writer.WriteElementString("nombreCompleto", "Sanchez, Juan Ignacio");
            writer.WriteElementString("cuil", "20271265817");
            writer.WriteStartElement("sector");
            writer.WriteAttributeString("denominacion", "Gerencia Operativa");
            writer.WriteAttributeString("id", "44");
            writer.WriteAttributeString("valorSemaforo", "130.13");
            writer.WriteAttributeString("colorSemaforo", "ROJO");
            writer.WriteEndElement(); // sector
            writer.WriteElementString("cupoAsignado", "750.87");
            writer.WriteElementString("cupoConsumido", "625.46");
            writer.WriteEndElement(); // empleado

            writer.WriteEndElement(); // listado
            writer.WriteElementString("subsectores", "5");
            writer.WriteElementString("totalCupoAsignadoSector", "4217.21");
            writer.WriteElementString("totalCupoConsumidoSector", "1405.88");
            writer.WriteElementString("valorDial", "33.34");

            writer.WriteEndElement(); // empleados
            writer.WriteEndDocument();
        }
    }

    static void LeerXML()
    {
        XmlDocument xmlDoc = new XmlDocument();
        xmlDoc.Load("empleados.xml");
        Console.WriteLine(xmlDoc.OuterXml);
    }

    static void LeerXMLtxtReader(string archivoRuta)
    {
        using (XmlReader reader = XmlReader.Create(archivoRuta))
        {
            while (reader.Read())
            {
                switch (reader.NodeType)
                {
                    case XmlNodeType.Element:
                        Console.WriteLine($"Elemento: {reader.Name}");
                        if (reader.HasAttributes)
                        {
                            while (reader.MoveToNextAttribute())
                            {
                                Console.WriteLine($"  Atributo: {reader.Name} = {reader.Value}");
                            }
                        }
                        break;
                    case XmlNodeType.Text:
                        Console.WriteLine($"Texto: {reader.Value}");
                        break;
                    case XmlNodeType.EndElement:
                        Console.WriteLine($"Fin Elemento: {reader.Name}");
                        break;
                }
            }
        }
    }
}
