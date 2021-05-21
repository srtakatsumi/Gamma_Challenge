CREATE DATABASE  IF NOT EXISTS `bancodedados` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `bancodedados`;
-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: bancodedados
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address` (
  `idendereco` int NOT NULL AUTO_INCREMENT,
  `idcliente` int NOT NULL,
  `typePublicPlace` varchar(10) DEFAULT NULL,
  `publicPlace` varchar(100) NOT NULL,
  `zipCode` int NOT NULL,
  `number` varchar(45) NOT NULL,
  `complement` varchar(45) DEFAULT NULL,
  `city` int NOT NULL,
  PRIMARY KEY (`idendereco`),
  KEY `fkcliente_idx` (`idcliente`),
  KEY `fkCity_idx` (`city`),
  KEY `city_idx` (`city`),
  CONSTRAINT `city` FOREIGN KEY (`city`) REFERENCES `city` (`idcity`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (1,2,'Rua','Alecrim Dourado',2219081,'666','Apto 145 - B',1),(2,16,'Av','Zootopia',3312891,'101','Apto 503',2),(3,5,'Rua','Dalmata',3319991,'101',NULL,7),(4,6,'Travessa','Criciuma',5612891,'102',NULL,6),(5,7,'Rua','Indios',3312891,'1989','Apto 500',2),(6,8,'Rua','Vinte e três de maio',3333891,'1800',NULL,4),(7,9,'Rua','Albert Einstein',3320891,'1879',NULL,5),(8,10,'Av','Oscar Frei',3321891,'1001','',3),(9,11,'Av','Xepa nas Estralas',3322891,'1999',NULL,11),(10,12,'Av','Linkin Park',3323891,'2017','apto 404',10),(11,13,'Av','Charlie Chaplin',3324891,'1889',NULL,8),(12,14,'Av','Era Venenosa',3325891,'2000','A',9),(13,15,'Av','Feiticeira',3326891,'71',NULL,12),(14,3,'Av','Onze de Setembro',3312791,'73',NULL,13),(15,4,'Av','Zootopia',3312281,'408',NULL,14);
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `city`
--

DROP TABLE IF EXISTS `city`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `city` (
  `idcity` int NOT NULL AUTO_INCREMENT,
  `city` varchar(100) NOT NULL,
  `state` varchar(100) NOT NULL,
  `district` varchar(100) NOT NULL,
  PRIMARY KEY (`idcity`),
  CONSTRAINT `fkcity` FOREIGN KEY (`idcity`) REFERENCES `address` (`idendereco`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `city`
--

LOCK TABLES `city` WRITE;
/*!40000 ALTER TABLE `city` DISABLE KEYS */;
INSERT INTO `city` VALUES (1,'São Paulo','SP','Itu'),(2,'Rio de Janeiro','Barra da Tijuca','Vila da Penha'),(3,'Rio De Janeiro','Complexo do alemão','Icaraí'),(4,'Rio Grande Do Sul','Porto Alegre','Azenha'),(5,'Acre','Rio Branco','Aviário'),(6,'Amapá','Macapá','Maruanum'),(7,'Amazonas','Manaus','Chapada'),(8,'Alagoas','Maceió','Guaxuma'),(9,'Salvador','Bahia','Alto das Pombas'),(10,'Fortaleza','Ceará','Meireles'),(11,'Brasília','Distrito Federal','Asa Norte'),(12,'Vitória','Espírito Santo','Jardim Camburi'),(13,'Goiânia','Goiás','Jardim América'),(14,'São Luís','Maranhão','Conjunto São Raimundo');
/*!40000 ALTER TABLE `city` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `departament`
--

DROP TABLE IF EXISTS `departament`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `departament` (
  `idDept` int NOT NULL AUTO_INCREMENT,
  `nameDept` varchar(100) NOT NULL,
  PRIMARY KEY (`idDept`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departament`
--

LOCK TABLES `departament` WRITE;
/*!40000 ALTER TABLE `departament` DISABLE KEYS */;
INSERT INTO `departament` VALUES (1,'Adaptadores'),(2,'Ferramentas'),(3,'Eletronicos'),(4,'Casa'),(5,'Acessorios'),(6,'Moveis'),(7,'Tablets e Celulares'),(8,'Jogos'),(9,'Informatica');
/*!40000 ALTER TABLE `departament` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `disdest`
--

DROP TABLE IF EXISTS `disdest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `disdest` (
  `idProduto` int NOT NULL,
  `available` varchar(4) NOT NULL,
  PRIMARY KEY (`idProduto`),
  KEY `fkdisp_idx` (`available`),
  CONSTRAINT `fkidprod` FOREIGN KEY (`idProduto`) REFERENCES `products` (`codProduct`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `disdest`
--

LOCK TABLES `disdest` WRITE;
/*!40000 ALTER TABLE `disdest` DISABLE KEYS */;
INSERT INTO `disdest` VALUES (380385,'Sim'),(402265,'Sim'),(435970,'Sim'),(471184,'Sim'),(471185,'Sim'),(472627,'Sim'),(473129,'Sim'),(473141,'Sim'),(473747,'Sim'),(478585,'Sim'),(481432,'Sim'),(481435,'Sim');
/*!40000 ALTER TABLE `disdest` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paymentform`
--

DROP TABLE IF EXISTS `paymentform`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `paymentform` (
  `idPayment` int NOT NULL AUTO_INCREMENT,
  `payment` varchar(45) NOT NULL,
  PRIMARY KEY (`idPayment`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paymentform`
--

LOCK TABLES `paymentform` WRITE;
/*!40000 ALTER TABLE `paymentform` DISABLE KEYS */;
INSERT INTO `paymentform` VALUES (1,'Boleto'),(2,'Cartão de crédito'),(3,'Cartão de débito');
/*!40000 ALTER TABLE `paymentform` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pessoas`
--

DROP TABLE IF EXISTS `pessoas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pessoas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `CPF` varchar(45) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `endereco` int DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `senha` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fkenderecopessoas_idx` (`endereco`),
  CONSTRAINT `fkenderecopessoas` FOREIGN KEY (`endereco`) REFERENCES `address` (`idendereco`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pessoas`
--

LOCK TABLES `pessoas` WRITE;
/*!40000 ALTER TABLE `pessoas` DISABLE KEYS */;
INSERT INTO `pessoas` VALUES (2,'Victoria','Katsumi','66655533322','11961971223',NULL,'srta.katsumi@gmail.com','alecrimelimao'),(3,'Pitty','Quadrado','11433066774','11982847552',NULL,'pitty@yahoo.com.br','setevidas'),(4,'Marilyn','Manson','12345678914','1123245655',NULL,'sweet.dreams@hotmail.com','beautifulpeople'),(5,'Axl','Rose','659878123','1161781999',NULL,'paradise.city@gmail.com','novemberrain'),(6,'Douglas','Jackson','12345678999','11961978855',NULL,'douglas@gmail.com','solitariosurfista'),(7,'Fernanda','Simonal','12366698754','1132405698',NULL,'fernandinha@gmail.com','chantaje'),(8,'Ana','Cristina','12366698755','1132405878',NULL,'ana@gmail.com','calhamberque'),(9,'Aderbaldo','','12366698755','1132405878',NULL,'aderbaldo@gmail.com','ssetevidas'),(10,'Gabriel','Filosofo','56987888822','112347698',NULL,' playboy@gmail.com','cachimbodapaz'),(11,'Geralda','Swift','12366688755','1132415878',NULL,'geralda@gmail.com','crushcrushcrush'),(12,'Itamar','Mulan','12366699755','1132425878',NULL,'itamarzinho@gmail.com','estudoerrado'),(13,'Juca','Muato','12366698755','1132435878',NULL,'juquinha@gmail.com','mascara'),(14,'Jorge','Campos','12366698755','1132445878',NULL,'jorge.campos@gmail.com','felicidade'),(15,'Jao','Vegas','12366698755','1132555878',NULL,'vegas.j@gmail.com','xepanasestrelas'),(16,'Andre','Goku','12366698755','1132405878',NULL,'andre.goku@gmail.com','kamehameha'),(17,'Victoria','Katsumi','66655533322','11961971223',1,'srta.katsumi@gmail.com','alecrimelimao');
/*!40000 ALTER TABLE `pessoas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `codProduct` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `price` float NOT NULL,
  `stockQuantity` int NOT NULL,
  `available` int NOT NULL,
  `highlighted` int NOT NULL,
  `idDepartment` int NOT NULL,
  PRIMARY KEY (`codProduct`),
  KEY `depto_idx` (`idDepartment`),
  KEY `availabe_idx` (`available`),
  CONSTRAINT `id` FOREIGN KEY (`idDepartment`) REFERENCES `departament` (`idDept`)
) ENGINE=InnoDB AUTO_INCREMENT=481436 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (380385,'Suporte para cpu com roda',62.48,33,0,0,1),(402265,'Lápis preto com borracha redondo tabuada PO0072 Leo&Leo',26.53,45,0,0,2),(435970,'Apoio ergonômico para pés Waleu',91.98,102,0,0,1),(471184,'Suporte para monitor triangular AC124 UN0001 Multilaser',54.69,7,0,1,1),(471185,'Suporte para monitor quadrado AC125 UN0001 Multilaser',64.11,140,0,1,1),(472627,'Tesoura uso geral 21cm BL0001 Jocar',6.66,66,0,1,3),(473129,'Lantejoula 06MM 3G Sortido Lantecor - Pacote com 12 Unidades',5.01,844,0,0,3),(473141,'Brocal Escolar 3G Sortido Lantecor - Pacote com 12 Unidades',5.01,33,0,1,3),(473747,'Lápis Preto Grafite Nº 2 Faber-Castell - Cartela com 04 Lápis',4.52,255,0,0,2),(478585,'Lápis preto c/borracha redondo pastel PO0072 Leo&Leo',40.17,0,1,1,2),(481432,'Agenda Diária Espiral O Pequeno Príncipe Azul Escuro 2021 Jandaia',7.37,17,0,0,4),(481435,'Agenda Diária Espiral Eco Línea Rosa 2021 Jandaia',7.37,14,0,0,4);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `requests`
--

DROP TABLE IF EXISTS `requests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `requests` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idClient` int NOT NULL,
  `amount` float NOT NULL,
  `date` varchar(12) NOT NULL,
  `statusPedido` int NOT NULL,
  `formadePagamento` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cliente_idx` (`idClient`),
  KEY `price_idx` (`amount`),
  KEY `fkstatuspedidos_idx` (`statusPedido`),
  KEY `fkpagamento_idx` (`formadePagamento`),
  CONSTRAINT `fkpagamento` FOREIGN KEY (`formadePagamento`) REFERENCES `paymentform` (`idPayment`),
  CONSTRAINT `fkstatuspedidos` FOREIGN KEY (`statusPedido`) REFERENCES `status` (`idStatus`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `requests`
--

LOCK TABLES `requests` WRITE;
/*!40000 ALTER TABLE `requests` DISABLE KEYS */;
/*!40000 ALTER TABLE `requests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `status`
--

DROP TABLE IF EXISTS `status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `status` (
  `idStatus` int NOT NULL AUTO_INCREMENT,
  `status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idStatus`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status`
--

LOCK TABLES `status` WRITE;
/*!40000 ALTER TABLE `status` DISABLE KEYS */;
INSERT INTO `status` VALUES (1,'Aguardando pagamento'),(2,'Pagamento aprovado'),(3,'Em separação'),(4,'Cancelado'),(5,'Enviado'),(6,'Entregue'),(7,'Devolução');
/*!40000 ALTER TABLE `status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stock`
--

DROP TABLE IF EXISTS `stock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stock` (
  `idStock` int NOT NULL AUTO_INCREMENT,
  `amountReceived` int NOT NULL,
  `processedQuantity` int NOT NULL,
  `availableQuantity` int NOT NULL,
  `lockedQuantity` int NOT NULL,
  PRIMARY KEY (`idStock`),
  CONSTRAINT `fkestoque` FOREIGN KEY (`idStock`) REFERENCES `requests` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stock`
--

LOCK TABLES `stock` WRITE;
/*!40000 ALTER TABLE `stock` DISABLE KEYS */;
/*!40000 ALTER TABLE `stock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `totalorders`
--

DROP TABLE IF EXISTS `totalorders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `totalorders` (
  `idProductOrder` int NOT NULL,
  `idClient` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` float NOT NULL,
  `theamount` int NOT NULL,
  `date` date NOT NULL,
  KEY `fkname_idx` (`name`),
  KEY `idProductOrder_idx` (`idProductOrder`,`name`,`price`),
  KEY `name_idx` (`price`),
  KEY `idClient_idx` (`idClient`),
  CONSTRAINT `idClient` FOREIGN KEY (`idClient`) REFERENCES `pessoas` (`id`),
  CONSTRAINT `idProductOrder` FOREIGN KEY (`idProductOrder`) REFERENCES `products` (`codProduct`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `totalorders`
--

LOCK TABLES `totalorders` WRITE;
/*!40000 ALTER TABLE `totalorders` DISABLE KEYS */;
INSERT INTO `totalorders` VALUES (380385,10,'Suporte para cpu com roda',62.48,1,'2021-08-20'),(402265,10,'Lápis preto com borracha redondo tabuada PO0072 Leo&Leo',7.37,5,'2021-08-20'),(435970,3,'Apoio ergonômico para pés Waleu',91.98,1,'2021-05-20'),(473141,2,'Brocal Escolar 3G Sortido Lantecor - Pacote com 12 Unidades',5.01,2,'2021-05-20'),(473141,2,'Brocal Escolar 3G Sortido Lantecor - Pacote com 12 Unidades',5.01,2,'2021-05-20'),(473141,2,'Brocal Escolar 3G Sortido Lantecor - Pacote com 12 Unidades',5.01,2,'2021-05-20'),(481435,3,'Agenda Diária Espiral Eco Línea Rosa 2021 Jandaia',7.37,7,'2021-05-23'),(481432,3,'Agenda Diária Espiral O Pequeno Príncipe Azul Escuro 2021 Jandaia',7.37,3,'2021-05-23'),(473129,14,'Lantejoula 06MM 3G Sortido Lantecor - Pacote com 12 Unidades',5.01,5,'2021-05-23'),(473129,15,'Lantejoula 06MM 3G Sortido Lantecor - Pacote com 12 Unidades',5.01,2,'2021-05-22'),(481432,10,'Agenda Diária Espiral O Pequeno Príncipe Azul Escuro 2021 Jandaia',7.37,1,'2021-06-25'),(473129,5,'Lantejoula 06MM 3G Sortido Lantecor - Pacote com 12 Unidades',5.01,5,'2021-05-23'),(473141,7,'Lantejoula 06MM 3G Sortido Lantecor - Pacote com 12 Unidades',5.01,2,'2021-05-22'),(481432,8,'Agenda Diária Espiral O Pequeno Príncipe Azul Escuro 2021 Jandaia',7.37,1,'2021-06-25');
/*!40000 ALTER TABLE `totalorders` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-20 21:57:00
