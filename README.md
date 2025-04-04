# Redes_Examen1
Examen de Redes 04/04/2025

# Examen de Redes I – En Busca de la Red Perdida

Este repositorio contiene la documentación y archivos correspondientes a los ejercicios del examen de Redes II. Toda la información está explicada de manera correcta, desarrollada y explayada en el documento de *Pages*. Sin embargo, a continuación encontrarás una descripción breve de cada ejercicio y un enlace a la documentación adicional en formato JavaScript.

Link del repositorio: https://github.com/jsepucas/Redes_Examen1.git


Link de la pagina web: https://jsepucas.github.io/Redes_Examen1/

## Índice

1. [Parte I: Conceptos y Teoría](#parte-i-conceptos-y-teoría)

   1.1 [El Mural de las Siete Capas](#1-el-mural-de-las-siete-capas)  
   1.2 [Los Dos Pergaminos del Mensajero](#2-los-dos-pergaminos-del-mensajero)  
   1.3 [El Enigma de las Subredes](#3-el-enigma-de-las-subredes)  
   1.4 [La Encrucijada de las Rutas](#4-la-encrucijada-de-las-rutas)  
   1.5 [El Guardián de la Máscara Única](#5-el-guardian-de-la-mascara-unica)

2. [Parte II: Práctica con Cisco Packet Tracer](#parte-ii-práctica-con-cisco-packet-tracer)

   2.1 [La Ruta Perdida entre Dos Reinos](#ejercicio-1-la-ruta-perdida-entre-dos-reinos)  

   2.2 [La Ciudad de las Redes Aisladas](#ejercicio-2-la-ciudad-de-las-redes-aisladas)

3. [Documentación](#documentación)  

4. [Entrega](#entrega)  

---

## Parte I: Conceptos y Teoría

### 1. El Mural de las Siete Capas
*Descripción: En este ejercicio, se debe analizar el **modelo OSI* y sus siete capas. Cada capa representa una función específica en la comunicación de datos, y el objetivo es identificar cada capa, describir su función y entender cómo se aplica a la transmisión de información en redes modernas.

### 2. Los Dos Pergaminos del Mensajero
*Descripción*: Aquí se comparan dos tipos de protocolos de comunicación:
- El *mensajero confiable (TCP)*, que garantiza la entrega del mensaje mediante confirmaciones.
- El *mensajero veloz (UDP)*, que prioriza la velocidad pero no garantiza la entrega.
El ejercicio te pide identificar las características de ambos protocolos y comparar sus ventajas y desventajas según el tipo de red y aplicación.

### 3. El Enigma de las Subredes
*Descripción: En este ejercicio, se debe resolver el problema de crear **subredes* a partir de una dirección IP base. Usando la dirección 192.168.50.0 y la necesidad de crear 4 subredes iguales, el objetivo es calcular la máscara de subred y determinar las direcciones IP utilizables en cada una de las subredes.

### 4. La Encrucijada de las Rutas
*Descripción: Este ejercicio trata sobre las **tablas de enrutamiento* y cómo se utilizan para dirigir el tráfico de datos en una red. Se analizan los conceptos de *enrutamiento estático* y *dinámico*, y cómo se relacionan con las flechas del tótem que representan los diferentes caminos para dirigir los datos.

### 5. El Guardián de la Máscara Única
*Descripción: Aquí se aborda el concepto de **NAT (Network Address Translation)*. Este mecanismo permite que múltiples dispositivos dentro de una red local compartan una única dirección IP pública para comunicarse con redes externas, ocultando así las direcciones internas. Se deben explicar los beneficios de esta técnica, como la mejora de la seguridad y la conservación de direcciones IP.

---

## Parte II: Práctica con Cisco Packet Tracer

### Ejercicio 1: La Ruta Perdida entre Dos Reinos
*Descripción: En este ejercicio, debes recrear un enlace de comunicación entre dos ciudades que están desconectadas. Cada ciudad tiene su propia **red local* y está conectada a través de *routers* y *switches. El objetivo es configurar la **dirección IP* de cada red, establecer un *enlace serial* entre los routers y configurar el *enrutamiento estático* para permitir la comunicación entre las dos redes. Después, debes verificar la conectividad mediante *ping* entre PCs en las dos ciudades.

*Objetivos*:
1. Crear la topología de red con routers y switches.
2. Configurar direcciones IP y rutas estáticas.
3. Verificar la conectividad entre las dos ciudades mediante *ping*.

### Ejercicio 2: La Ciudad de las Redes Aisladas
*Descripción: Este ejercicio recrea una ciudad segmentada en diferentes **VLANs, donde cada grupo de dispositivos (gremio) tiene su propia **red aislada. Se debe configurar un **router-on-a-stick* para interconectar las VLANs, permitiendo que los dispositivos en diferentes VLANs se comuniquen. Las tareas incluyen configurar el *switch* con múltiples VLANs, asignar *subinterfaces* en el router y verificar la conectividad inter-VLAN mediante *ping*.

*Objetivos*:
1. Configurar VLANs en el switch para segmentar la red.
2. Configurar el router para realizar el enrutamiento entre VLANs (router-on-a-stick).
3. Verificar la conectividad entre dispositivos de diferentes VLANs utilizando *ping*.

---

## Documentación

Este repositorio contiene los siguientes archivos:

- *Parte I: Conceptos y Teoría*: Documentación sobre los conceptos teóricos tratados en el examen.
- *Parte II: Práctica con Cisco Packet Tracer*: Archivos .pkt de Packet Tracer con las topologías y configuraciones de cada ejercicio.
- *Documentación Adicional en JavaScript*: 
  - *app.js*: Documento que sirve como presentación técnica de los ejercicios. Contiene una estructura dinámica y detallada con interacciones basadas en JavaScript.
  - *styles.css*: Estilos personalizados para la presentación del documento.
  - *index.html*: Página adicional explicativa con el contenido detallado de cada ejercicio.

Puedes abrir el archivo index.js para ver la documentación completa en formato web. El archivo JavaScript agrega interactividad al documento, proporcionando un entorno más dinámico para revisar las configuraciones y resultados. El contenido de *Pages* está organizado de manera visual y explicativa para mejorar la comprensión.

### Instrucciones para la ejecución de los ejercicios:
1. *Ejercicio 1 (La Ruta Perdida entre Dos Reinos)*:
   - Abre el archivo CiudadA-CiudadB.pkt en Cisco Packet Tracer.
   - Revisa la topología y verifica la configuración de los routers y switches.
   - Realiza el *ping* desde los PCs de una ciudad a los de la otra para comprobar la conectividad.

2. *Ejercicio 2 (La Ciudad de las Redes Aisladas)*:
   - Abre el archivo CiudadSegmentada.pkt en Cisco Packet Tracer.
   - Revisa la configuración de VLANs en el switch y el enrutamiento inter-VLAN en el router.
   - Verifica la conectividad entre dispositivos de diferentes VLANs usando *ping*.

---

## Entrega

Los archivos y documentación deben ser entregados en un repositorio en GitHub con los siguientes elementos:

- El archivo *README.md* que describe los ejercicios y las configuraciones realizadas.
- Los archivos *.pkt* correspondientes a cada ejercicio práctico.
- Un resumen de la configuración de cada ejercicio, incluyendo direcciones IP utilizadas y rutas configuradas.
- Los archivos *index.js, **styles.css* y *pages.html* con la documentación explicativa adicional.
