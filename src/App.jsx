import { useState, useMemo } from "react";

const FOODS = [{"nome":"Abóbora, Jerimun Moranga, Crua","id":"TC002","grupo":"LEGUME","tipo":"REGIONAL","af":true,"kcal":"12.36","proteina":"1.00","lipideos":"0.10","cho":"2.70","fibra":"1.70","calcio":"0.00","ferro":"0.01","vitC":"0.00","sodio":"0.00","custo_kg":"R$ 2,50","medida":"Kg","patologia":"","disponibilidade":{"jan":true,"fev":true,"mar":true,"abr":true,"mai":true,"jun":true,"jul":true,"ago":true,"set":true,"out":true,"nov":true,"dez":true}},{"nome":"Achocolatado, Pó","id":"TC008","grupo":"BEBIDA_LÁCTEA","tipo":"RESTRITO","af":false,"kcal":"401.02","proteina":"4.20","lipideos":"2.20","cho":"91.20","fibra":"3.90","calcio":"44.40","ferro":"5.40","vitC":"0.00","sodio":"65.00","custo_kg":"R$ 5,00","medida":"Kg","patologia":"DIABETE","disponibilidade":{"jan":true,"fev":true,"mar":true,"abr":true,"mai":true,"jun":true,"jul":true,"ago":true,"set":true,"out":true,"nov":true,"dez":true}},{"nome":"Açúcar, Cristal","id":"TC009","grupo":"SACAROSE","tipo":"RESTRITO","af":false,"kcal":"386.85","proteina":"0.00","lipideos":"0.00","cho":"99.61","fibra":"0.00","calcio":"4.00","ferro":"0.10","vitC":"0.00","sodio":"12.00","custo_kg":"R$ 3,40","medida":"Kg","patologia":"DIABETE","disponibilidade":{"jan":true,"fev":true,"mar":true,"abr":true,"mai":true,"jun":true,"jul":true,"ago":true,"set":true,"out":true,"nov":true,"dez":true}},{"nome":"Alface, Crespa, Crua","id":"TC012","grupo":"VERDURA","tipo":"REGIONAL","af":true,"kcal":"11.00","proteina":"1.35","lipideos":"2.00","cho":"1.70","fibra":"1.83","calcio":"38.00","ferro":"0.40","vitC":"0.00","sodio":"3.38","custo_kg":"R$ 2,00","medida":"Mc","patologia":"","disponibilidade":{"jan":true,"fev":true,"mar":true,"abr":true,"mai":true,"jun":true,"jul":true,"ago":true,"set":true,"out":true,"nov":true,"dez":true}},{"nome":"Alho, Cru","id":"TC014","grupo":"TUBÉRCULO","tipo":"REGIONAL","af":false,"kcal":"113.13","proteina":"7.01","lipideos":"0.22","cho":"23.91","fibra":"4.32","calcio":"14.00","ferro":"0.80","vitC":"0.00","sodio":"5.36","custo_kg":"R$ 18,00","medida":"Kg","patologia":"","disponibilidade":{"jan":true,"fev":true,"mar":true,"abr":true,"mai":true,"jun":true,"jul":true,"ago":true,"set":true,"out":true,"nov":true,"dez":true}},{"nome":"Arroz, Integral, Cru","id":"TC015","grupo":"CEREAL","tipo":"REGIONAL","af":false,"kcal":"360.00","proteina":"7.30","lipideos":"1.90","cho":"77.50","fibra":"4.80","calcio":"8.00","ferro":"0.90","vitC":"0.00","sodio":"2.00","custo_kg":"R$ 6,50","medida":"Kg","patologia":"","disponibilidade":{"jan":true,"fev":true,"mar":true,"abr":true,"mai":true,"jun":true,"jul":true,"ago":true,"set":true,"out":true,"nov":true,"dez":true}},{"nome":"Arroz, Tipo 1, Cru","id":"TC016","grupo":"CEREAL","tipo":"REGIONAL","af":false,"kcal":"357.79","proteina":"7.16","lipideos":"0.34","cho":"78.76","fibra":"1.64","calcio":"4.41","ferro":"0.68","vitC":"0.00","sodio":"1.02","custo_kg":"R$ 3,70","medida":"Kg","patologia":"","disponibilidade":{"jan":true,"fev":true,"mar":true,"abr":true,"mai":true,"jun":true,"jul":true,"ago":true,"set":true,"out":true,"nov":true,"dez":true}},{"nome":"Arroz, Parboilizado","id":"TC018","grupo":"CEREAL","tipo":"REGIONAL","af":false,"kcal":"358.00","proteina":"7.20","lipideos":"0.30","cho":"78.90","fibra":"1.70","calcio":"5.00","ferro":"0.60","vitC":"0.00","sodio":"1.00","custo_kg":"R$ 3,50","medida":"Kg","patologia":"","disponibilidade":{"jan":true,"fev":true,"mar":true,"abr":true,"mai":true,"jun":true,"jul":true,"ago":true,"set":true,"out":true,"nov":true,"dez":true}},{"nome":"Banana, Prata, Crua","id":"TC021","grupo":"FRUTA","tipo":"REGIONAL","af":true,"kcal":"98.00","proteina":"1.30","lipideos":"0.10","cho":"26.00","fibra":"2.04","calcio":"8.00","ferro":"0.40","vitC":"8.70","sodio":"0.00","custo_kg":"R$ 4,50","medida":"Dz","patologia":"","disponibilidade":{"jan":true,"fev":true,"mar":true,"abr":true,"mai":true,"jun":true,"jul":true,"ago":true,"set":true,"out":true,"nov":true,"dez":true}},{"nome":"Batata, Doce, Branca, Crua","id":"TC022","grupo":"TUBÉRCULO","tipo":"REGIONAL","af":true,"kcal":"118.24","proteina":"1.30","lipideos":"0.13","cho":"28.20","fibra":"2.57","calcio":"21.11","ferro":"0.39","vitC":"0.00","sodio":"9.00","custo_kg":"R$ 4,50","medida":"Kg","patologia":"","disponibilidade":{"jan":true,"fev":true,"mar":true,"abr":true,"mai":true,"jun":true,"jul":true,"ago":true,"set":true,"out":true,"nov":true,"dez":true}},{"nome":"Batata, Inglesa, Crua","id":"TC023","grupo":"TUBÉRCULO","tipo":"REGIONAL","af":false,"kcal":"64.00","proteina":"1.80","lipideos":"0.00","cho":"14.70","fibra":"1.20","calcio":"4.00","ferro":"0.40","vitC":"31.08","sodio":"0.00","custo_kg":"R$ 0,00","medida":"Kg","patologia":"DIABETE","disponibilidade":{"jan":true,"fev":true,"mar":true,"abr":true,"mai":true,"jun":true,"jul":true,"ago":true,"set":true,"out":true,"nov":true,"dez":true}},{"nome":"Beterraba, Crua","id":"TC026","grupo":"TUBÉRCULO","tipo":"REGIONAL","af":true,"kcal":"48.83","proteina":"1.95","lipideos":"0.09","cho":"11.11","fibra":"3.37","calcio":"18.11","ferro":"0.50","vitC":"3.12","sodio":"10.00","custo_kg":"R$ 3,90","medida":"Kg","patologia":"","disponibilidade":{"jan":true,"fev":true,"mar":true,"abr":true,"mai":true,"jun":true,"jul":true,"ago":true,"set":true,"out":true,"nov":true,"dez":true}},{"nome":"Biscoito Doce Tipo Maria","id":"TC027","grupo":"CEREAL","tipo":"RESTRITO","af":false,"kcal":"443.00","proteina":"8.10","lipideos":"12.00","cho":"75.20","fibra":"2.10","calcio":"54.00","ferro":"1.80","vitC":"0.00","sodio":"352.00","custo_kg":"R$ 3,45","medida":"Un","patologia":"","disponibilidade":{"jan":true,"fev":true,"mar":true,"abr":true,"mai":true,"jun":true,"jul":true,"ago":true,"set":true,"out":true,"nov":true,"dez":true}},{"nome":"Biscoito Salgado, 0 Lactose","id":"TC031","grupo":"CEREAL","tipo":"RESTRITO","af":false,"kcal":"365.00","proteina":"10.80","lipideos":"9.00","cho":"65.00","fibra":"2.70","calcio":"0.00","ferro":"2.50","vitC":"0.00","sodio":"789.00","custo_kg":"R$ 4,00","medida":"Un","patologia":"LACTOSE","disponibilidade":{"jan":true,"fev":true,"mar":true,"abr":true,"mai":true,"jun":true,"jul":true,"ago":true,"set":true,"out":true,"nov":true,"dez":true}},{"nome":"Café, Pó, Torrado","id":"TC032","grupo":"CEREAL","tipo":"RESTRITO","af":false,"kcal":"430.00","proteina":"14.70","lipideos":"12.00","cho":"65.80","fibra":"51.30","calcio":"107.00","ferro":"8.14","vitC":"0.00","sodio":"1.14","custo_kg":"R$ 7,00","medida":"Kg","patologia":"","disponibilidade":{"jan":true,"fev":true,"mar":true,"abr":true,"mai":true,"jun":true,"jul":true,"ago":true,"set":true,"out":true,"nov":true,"dez":true}},{"nome":"Carne Moída","id":"TC037","grupo":"CARNE","tipo":"RESTRITO","af":false,"kcal":"214.00","proteina":"26.62","lipideos":"12.00","cho":"0.00","fibra":"0.00","calcio":"12.00","ferro":"2.89","vitC":"0.00","sodio":"61.00","custo_kg":"R$ 10,88","medida":"Kg","patologia":"","disponibilidade":{"jan":true,"fev":true,"mar":true,"abr":true,"mai":true,"jun":true,"jul":true,"ago":true,"set":true,"out":true,"nov":true,"dez":true}},{"nome":"Carne, Charque","id":"TC042","grupo":"CARNE","tipo":"RESTRITO","af":false,"kcal":"248.86","proteina":"22.71","lipideos":"16.84","cho":"0.00","fibra":"0.00","calcio":"15.18","ferro":"1.53","vitC":"0.00","sodio":"5875.00","custo_kg":"R$ 32,00","medida":"Kg","patologia":"HIPERTENSÃO","disponibilidade":{"jan":true,"fev":true,"mar":true,"abr":true,"mai":true,"jun":true,"jul":true,"ago":true,"set":true,"out":true,"nov":true,"dez":true}},{"nome":"Carne, Coxão Mole","id":"TC048","grupo":"CARNE","tipo":"RESTRITO","af":false,"kcal":"169.07","proteina":"21.23","lipideos":"8.69","cho":"0.00","fibra":"0.00","calcio":"2.99","ferro":"1.89","vitC":"0.00","sodio":"61.00","custo_kg":"R$ 35,20","medida":"Kg","patologia":"","disponibilidade":{"jan":true,"fev":true,"mar":true,"abr":true,"mai":true,"jun":true,"jul":true,"ago":true,"set":true,"out":true,"nov":true,"dez":true}},{"nome":"Carne, Fígado, Cru","id":"TC050","grupo":"CARNE","tipo":"RESTRITO","af":false,"kcal":"141.05","proteina":"20.71","lipideos":"5.36","cho":"1.11","fibra":"0.00","calcio":"4.16","ferro":"5.63","vitC":"0.00","sodio":"76.00","custo_kg":"R$ 16,40","medida":"Kg","patologia":"","disponibilidade":{"jan":true,"fev":true,"mar":true,"abr":true,"mai":true,"jun":true,"jul":true,"ago":true,"set":true,"out":true,"nov":true,"dez":true}},{"nome":"Cebola, Crua","id":"TC061","grupo":"LEGUME","tipo":"REGIONAL","af":true,"kcal":"39.42","proteina":"1.71","lipideos":"0.08","cho":"8.85","fibra":"2.19","calcio":"14.00","ferro":"0.20","vitC":"4.70","sodio":"1.00","custo_kg":"R$ 5,50","medida":"Kg","patologia":"","disponibilidade":{"jan":true,"fev":true,"mar":true,"abr":true,"mai":true,"jun":true,"jul":true,"ago":true,"set":true,"out":true,"nov":true,"dez":true}},{"nome":"Cebolinha, Crua","id":"TC062","grupo":"LEGUME","tipo":"REGIONAL","af":true,"kcal":"20.00","proteina":"1.90","lipideos":"0.40","cho":"3.40","fibra":"3.60","calcio":"80.00","ferro":"0.65","vitC":"0.00","sodio":"2.00","custo_kg":"R$ 2,00","medida":"Kg","patologia":"","disponibilidade":{"jan":true,"fev":true,"mar":true,"abr":true,"mai":true,"jun":true,"jul":true,"ago":true,"set":true,"out":true,"nov":true,"dez":true}},{"nome":"Cenoura, Crua","id":"TC063","grupo":"LEGUME","tipo":"REGIONAL","af":true,"kcal":"34.14","proteina":"1.32","lipideos":"0.17","cho":"7.66","fibra":"3.18","calcio":"23.00","ferro":"0.20","vitC":"5.12","sodio":"3.33","custo_kg":"R$ 4,00","medida":"Kg","patologia":"","disponibilidade":{"jan":true,"fev":true,"mar":true,"abr":true,"mai":true,"jun":true,"jul":true,"ago":true,"set":true,"out":true,"nov":true,"dez":true}},{"nome":"Chuchu, Cru","id":"TC066","grupo":"VERDURA","tipo":"REGIONAL","af":false,"kcal":"17.00","proteina":"0.70","lipideos":"0.06","cho":"4.14","fibra":"1.28","calcio":"12.00","ferro":"0.20","vitC":"0.00","sodio":"0.00","custo_kg":"R$ 0,00","medida":"Kg","patologia":"","disponibilidade":{"jan":true,"fev":true,"mar":true,"abr":true,"mai":true,"jun":true,"jul":true,"ago":true,"set":true,"out":true,"nov":true,"dez":true}},{"nome":"Coentro","id":"TC069","grupo":"VERDURA","tipo":"REGIONAL","af":true,"kcal":"279.00","proteina":"21.93","lipideos":"4.78","cho":"52.10","fibra":"10.40","calcio":"1246.00","ferro":"42.46","vitC":"566.70","sodio":"211.00","custo_kg":"R$ 2,00","medida":"Mc","patologia":"","disponibilidade":{"jan":true,"fev":true,"mar":true,"abr":true,"mai":true,"jun":true,"jul":true,"ago":true,"set":true,"out":true,"nov":true,"dez":true}},{"nome":"Couve, Manteiga, Crua","id":"TC072","grupo":"VERDURA","tipo":"REGIONAL","af":true,"kcal":"27.06","proteina":"2.87","lipideos":"0.55","cho":"4.33","fibra":"3.12","calcio":"0.00","ferro":"0.45","vitC":"96.68","sodio":"0.00","custo_kg":"R$ 2,00","medida":"Mc","patologia":"","disponibilidade":{"jan":true,"fev":true,"mar":true,"abr":true,"mai":true,"jun":true,"jul":true,"ago":true,"set":true,"out":true,"nov":true,"dez":true}},{"nome":"Extrato De Tomate","id":"TC076","grupo":"CONSERVAS","tipo":"RESTRITO","af":false,"kcal":"61.00","proteina":"2.40","lipideos":"0.20","cho":"15.00","fibra":"2.80","calcio":"29.10","ferro":"2.10","vitC":"18.00","sodio":"497.90","custo_kg":"R$ 1,20","medida":"Un","patologia":"","disponibilidade":{"jan":true,"fev":true,"mar":true,"abr":true,"mai":true,"jun":true,"jul":true,"ago":true,"set":true,"out":true,"nov":true,"dez":true}},{"nome":"Farinha De Milho Flocada","id":"TC077","grupo":"CEREAL","tipo":"RESTRITO","af":false,"kcal":"351.00","proteina":"7.20","lipideos":"1.50","cho":"79.10","fibra":"5.50","calcio":"1.00","ferro":"2.30","vitC":"0.00","sodio":"45.00","custo_kg":"R$ 1,70","medida":"Kg","patologia":"","disponibilidade":{"jan":true,"fev":true,"mar":true,"abr":true,"mai":true,"jun":true,"jul":true,"ago":true,"set":true,"out":true,"nov":true,"dez":true}},{"nome":"Feijão Carioca","id":"TC083","grupo":"LEGUMINOSA","tipo":"REGIONAL","af":false,"kcal":"329.00","proteina":"20.00","lipideos":"1.30","cho":"61.20","fibra":"18.40","calcio":"122.60","ferro":"8.00","vitC":"0.00","sodio":"0.00","custo_kg":"R$ 6,20","medida":"Kg","patologia":"","disponibilidade":{"jan":true,"fev":true,"mar":true,"abr":true,"mai":true,"jun":true,"jul":true,"ago":true,"set":true,"out":true,"nov":true,"dez":true}},{"nome":"Laranja, Pêra, Crua","id":"TC105","grupo":"FRUTA","tipo":"REGIONAL","af":true,"kcal":"36.77","proteina":"1.04","lipideos":"0.13","cho":"8.95","fibra":"0.80","calcio":"21.89","ferro":"0.09","vitC":"53.73","sodio":"0.00","custo_kg":"R$ 0,50","medida":"Un","patologia":"","disponibilidade":{"jan":true,"fev":true,"mar":true,"abr":true,"mai":true,"jun":true,"jul":true,"ago":true,"set":true,"out":true,"nov":true,"dez":true}},{"nome":"Leite, Desnatado, Pó","id":"TC111","grupo":"LATICINIOS","tipo":"RESTRITO","af":false,"kcal":"361.61","proteina":"34.69","lipideos":"0.93","cho":"53.04","fibra":"0.00","calcio":"1363.17","ferro":"0.93","vitC":"0.00","sodio":"432.00","custo_kg":"R$ 8,50","medida":"Kg","patologia":"","disponibilidade":{"jan":true,"fev":true,"mar":true,"abr":true,"mai":true,"jun":true,"jul":true,"ago":true,"set":true,"out":true,"nov":true,"dez":true}},{"nome":"Leite, Integral, Pó","id":"TC114","grupo":"LATICINIOS","tipo":"RESTRITO","af":false,"kcal":"497.00","proteina":"25.40","lipideos":"26.90","cho":"39.20","fibra":"0.00","calcio":"890.00","ferro":"0.52","vitC":"0.00","sodio":"323.00","custo_kg":"R$ 4,50","medida":"Un","patologia":"","disponibilidade":{"jan":true,"fev":true,"mar":true,"abr":true,"mai":true,"jun":true,"jul":true,"ago":true,"set":true,"out":true,"nov":true,"dez":true}},{"nome":"Aipim, Crua","id":"TC120","grupo":"LEGUME","tipo":"REGIONAL","af":true,"kcal":"151.42","proteina":"1.13","lipideos":"0.30","cho":"36.17","fibra":"1.88","calcio":"15.19","ferro":"0.27","vitC":"16.53","sodio":"2.15","custo_kg":"R$ 4,00","medida":"Kg","patologia":"","disponibilidade":{"jan":true,"fev":true,"mar":true,"abr":true,"mai":true,"jun":true,"jul":true,"ago":true,"set":true,"out":true,"nov":true,"dez":true}},{"nome":"Mamão, Formosa","id":"TC122","grupo":"FRUTA","tipo":"REGIONAL","af":true,"kcal":"45.34","proteina":"0.82","lipideos":"0.12","cho":"11.55","fibra":"1.81","calcio":"24.87","ferro":"0.23","vitC":"78.53","sodio":"3.26","custo_kg":"R$ 2,50","medida":"Kg","patologia":"","disponibilidade":{"jan":true,"fev":true,"mar":true,"abr":true,"mai":true,"jun":true,"jul":true,"ago":true,"set":true,"out":true,"nov":true,"dez":true}},{"nome":"Manga, Espada","id":"TC124","grupo":"FRUTA","tipo":"REGIONAL","af":true,"kcal":"72.49","proteina":"0.41","lipideos":"0.17","cho":"19.35","fibra":"1.63","calcio":"11.64","ferro":"0.09","vitC":"65.52","sodio":"1.86","custo_kg":"R$ 2,50","medida":"Kg","patologia":"","disponibilidade":{"jan":true,"fev":true,"mar":true,"abr":true,"mai":true,"jun":true,"jul":true,"ago":true,"set":true,"out":true,"nov":true,"dez":true}},{"nome":"Maracujá, Cru","id":"TC130","grupo":"FRUTA","tipo":"REGIONAL","af":true,"kcal":"68.44","proteina":"1.99","lipideos":"2.10","cho":"12.26","fibra":"1.14","calcio":"5.39","ferro":"0.56","vitC":"19.84","sodio":"1.58","custo_kg":"R$ 6,00","medida":"Kg","patologia":"","disponibilidade":{"jan":true,"fev":true,"mar":true,"abr":true,"mai":true,"jun":true,"jul":true,"ago":true,"set":true,"out":true,"nov":true,"dez":true}},{"nome":"Melancia","id":"TC135","grupo":"FRUTA","tipo":"REGIONAL","af":true,"kcal":"32.61","proteina":"0.88","lipideos":"0.00","cho":"8.14","fibra":"0.12","calcio":"7.72","ferro":"0.23","vitC":"6.15","sodio":"0.00","custo_kg":"R$ 2,50","medida":"Un","patologia":"","disponibilidade":{"jan":true,"fev":true,"mar":true,"abr":true,"mai":true,"jun":true,"jul":true,"ago":true,"set":true,"out":true,"nov":true,"dez":true}},{"nome":"Melão, Cru","id":"TC136","grupo":"FRUTA","tipo":"REGIONAL","af":true,"kcal":"29.37","proteina":"0.68","lipideos":"0.00","cho":"7.53","fibra":"0.25","calcio":"2.86","ferro":"0.23","vitC":"8.68","sodio":"11.17","custo_kg":"R$ 2,50","medida":"Un","patologia":"","disponibilidade":{"jan":true,"fev":true,"mar":true,"abr":true,"mai":true,"jun":true,"jul":true,"ago":true,"set":true,"out":true,"nov":true,"dez":true}},{"nome":"Óleo De Soja","id":"TC141","grupo":"ENLATADOS","tipo":"RESTRITO","af":false,"kcal":"884.00","proteina":"0.00","lipideos":"100.00","cho":"0.00","fibra":"0.00","calcio":"0.00","ferro":"0.00","vitC":"0.00","sodio":"0.00","custo_kg":"R$ 7,20","medida":"Lt","patologia":"","disponibilidade":{"jan":true,"fev":true,"mar":true,"abr":true,"mai":true,"jun":true,"jul":true,"ago":true,"set":true,"out":true,"nov":true,"dez":true}},{"nome":"Pão Hot Dog","id":"TC143","grupo":"CEREAL","tipo":"RESTRITO","af":false,"kcal":"180.00","proteina":"4.80","lipideos":"3.20","cho":"33.20","fibra":"0.00","calcio":"0.00","ferro":"0.00","vitC":"0.00","sodio":"0.00","custo_kg":"R$ 1,00","medida":"Un","patologia":"","disponibilidade":{"jan":true,"fev":true,"mar":true,"abr":true,"mai":true,"jun":true,"jul":true,"ago":true,"set":true,"out":true,"nov":true,"dez":true}},{"nome":"Pão Integral","id":"TC147","grupo":"PANIFICADOS","tipo":"RESTRITO","af":false,"kcal":"253.19","proteina":"9.43","lipideos":"3.65","cho":"49.94","fibra":"6.88","calcio":"131.76","ferro":"2.99","vitC":"0.00","sodio":"506.10","custo_kg":"R$ 15,00","medida":"Kg","patologia":"DIABETE","disponibilidade":{"jan":true,"fev":true,"mar":true,"abr":true,"mai":true,"jun":true,"jul":true,"ago":true,"set":true,"out":true,"nov":true,"dez":true}},{"nome":"Pimentão, Verde","id":"TC153","grupo":"VERDURA","tipo":"REGIONAL","af":true,"kcal":"21.29","proteina":"1.05","lipideos":"0.15","cho":"4.89","fibra":"2.56","calcio":"8.76","ferro":"0.41","vitC":"100.21","sodio":"0.00","custo_kg":"R$ 3,90","medida":"Kg","patologia":"","disponibilidade":{"jan":true,"fev":true,"mar":true,"abr":true,"mai":true,"jun":true,"jul":true,"ago":true,"set":true,"out":true,"nov":true,"dez":true}},{"nome":"Quiabo, Cru","id":"TC154","grupo":"VERDURA","tipo":"REGIONAL","af":true,"kcal":"29.94","proteina":"1.92","lipideos":"0.30","cho":"6.37","fibra":"4.55","calcio":"112.16","ferro":"0.37","vitC":"5.60","sodio":"0.89","custo_kg":"R$ 4,00","medida":"Kg","patologia":"","disponibilidade":{"jan":true,"fev":true,"mar":true,"abr":true,"mai":true,"jun":true,"jul":true,"ago":true,"set":true,"out":true,"nov":true,"dez":true}},{"nome":"Repolho, Branco","id":"TC155","grupo":"VERDURA","tipo":"REGIONAL","af":true,"kcal":"17.12","proteina":"0.88","lipideos":"0.14","cho":"3.86","fibra":"1.89","calcio":"34.55","ferro":"0.15","vitC":"18.72","sodio":"3.64","custo_kg":"","medida":"Un","patologia":"","disponibilidade":{"jan":true,"fev":true,"mar":true,"abr":true,"mai":true,"jun":true,"jul":true,"ago":true,"set":true,"out":true,"nov":true,"dez":true}}];

const MESES = ["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"];
const MESES_LABEL = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];
const GRUPOS_ICON = {
  FRUTA:"🌿", VERDURA:"🥬", LEGUME:"🫑", TUBÉRCULO:"🥔", CEREAL:"🌾",
  CARNE:"🥩", LATICINIOS:"🥛", BEBIDA_LÁCTEA:"🥤", LEGUMINOSA:"🫘",
  OVOS:"🥚", CONSERVAS:"🫙", ENLATADOS:"🫙", PANIFICADOS:"🍞", SACAROSE:"🍬", MINERAL:"🧂"
};

const GRUPO_COLORS = {
  FRUTA:"#e8a020", VERDURA:"#3a7d44", LEGUME:"#5a9e4b", TUBÉRCULO:"#b8763a",
  CEREAL:"#c4a035", CARNE:"#c0503a", LATICINIOS:"#7a9ec8", BEBIDA_LÁCTEA:"#8a7cc8",
  LEGUMINOSA:"#a06b30", OVOS:"#d4a835", CONSERVAS:"#8a9e6a", ENLATADOS:"#6a8e7a",
  PANIFICADOS:"#c4903a", SACAROSE:"#d47a5a", MINERAL:"#8a8a9a"
};

function App() {
  const [mesSel, setMesSel] = useState("abr");
  const [grupoSel, setGrupoSel] = useState("TODOS");
  const [patSel, setPatSel] = useState("TODOS");
  const [apenasAF, setApenasAF] = useState(false);
  const [selecionados, setSelecionados] = useState([]);
  const [search, setSearch] = useState("");

  const grupos = useMemo(() => {
    const g = [...new Set(FOODS.map(f => f.grupo))].sort();
    return ["TODOS", ...g];
  }, []);

  const patologias = ["TODOS","DIABETE","HIPERTENSÃO","CELIACO","LACTOSE"];

  const filtered = useMemo(() => {
    return FOODS.filter(f => {
      if (!f.disponibilidade[mesSel]) return false;
      if (grupoSel !== "TODOS" && f.grupo !== grupoSel) return false;
      if (apenasAF && !f.af) return false;
      if (patSel !== "TODOS") {
        if (f.patologia !== patSel) return false;
      }
      if (search && !f.nome.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [mesSel, grupoSel, patSel, apenasAF, search]);

  const afCount = filtered.filter(f => f.af).length;
  const afPct = filtered.length > 0 ? Math.round((afCount / filtered.length) * 100) : 0;

  const toggleSelect = (id) => {
    setSelecionados(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const selectedFoods = FOODS.filter(f => selecionados.includes(f.id));
  const totals = selectedFoods.reduce((acc, f) => ({
    kcal: acc.kcal + (parseFloat(f.kcal)||0),
    proteina: acc.proteina + (parseFloat(f.proteina)||0),
    cho: acc.cho + (parseFloat(f.cho)||0),
    fibra: acc.fibra + (parseFloat(f.fibra)||0),
  }), {kcal:0, proteina:0, cho:0, fibra:0});

  return (
    <div style={{
      fontFamily:"'DM Sans', system-ui, sans-serif",
      background:"#0f1a0e",
      minHeight:"100vh",
      color:"#e8dfc8",
      padding:"0",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet"/>
      
      {/* Header */}
      <div style={{
        background:"linear-gradient(135deg, #1a2e0f 0%, #0f1a0e 60%, #1a1208 100%)",
        borderBottom:"1px solid #2a4020",
        padding:"20px 24px 16px",
      }}>
        <div style={{display:"flex", alignItems:"flex-start", justifyContent:"space-between", flexWrap:"wrap", gap:"12px"}}>
          <div>
            <div style={{display:"flex", alignItems:"center", gap:"10px", marginBottom:"4px"}}>
              <span style={{fontSize:"22px"}}>🌱</span>
              <span style={{
                fontFamily:"'DM Serif Display', serif",
                fontSize:"22px",
                color:"#c8e87a",
                letterSpacing:"-0.3px"
              }}>AgroNutri IA</span>
              <span style={{
                background:"#2a4020",
                color:"#8ec85a",
                fontSize:"10px",
                fontWeight:"600",
                padding:"2px 8px",
                borderRadius:"20px",
                letterSpacing:"0.5px"
              }}>PROTÓTIPO</span>
            </div>
            <p style={{margin:0, fontSize:"12px", color:"#7a9060", letterSpacing:"0.2px"}}>
              Planejamento Territorial de Cardápios Escolares · Semiárido Baiano
            </p>
          </div>
          <div style={{display:"flex", gap:"16px", flexWrap:"wrap"}}>
            {[
              {label:"Alimentos", val:filtered.length, color:"#c8e87a"},
              {label:"Agric. Familiar", val:`${afCount} (${afPct}%)`, color:"#8ec85a"},
              {label:"Selecionados", val:selecionados.length, color:"#e8c87a"},
            ].map(s => (
              <div key={s.label} style={{textAlign:"center"}}>
                <div style={{fontSize:"20px", fontWeight:"600", color:s.color, lineHeight:1}}>{s.val}</div>
                <div style={{fontSize:"10px", color:"#5a7040", marginTop:"2px"}}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{display:"flex", gap:0, height:"calc(100vh - 100px)", overflow:"hidden"}}>
        
        {/* Sidebar Filters */}
        <div style={{
          width:"220px", minWidth:"220px",
          background:"#111a0c",
          borderRight:"1px solid #1e2e14",
          padding:"16px 14px",
          overflowY:"auto",
          display:"flex",
          flexDirection:"column",
          gap:"18px"
        }}>
          {/* Mês */}
          <div>
            <div style={{fontSize:"10px", color:"#5a7040", fontWeight:"600", letterSpacing:"1px", marginBottom:"8px", textTransform:"uppercase"}}>Mês</div>
            <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"4px"}}>
              {MESES.map((m, i) => (
                <button key={m} onClick={() => setMesSel(m)} style={{
                  background: mesSel===m ? "#3a6020" : "#1a2a10",
                  color: mesSel===m ? "#c8e87a" : "#7a9060",
                  border: mesSel===m ? "1px solid #5a9030" : "1px solid #243018",
                  borderRadius:"6px",
                  padding:"5px 2px",
                  fontSize:"11px",
                  fontWeight: mesSel===m ? "600" : "400",
                  cursor:"pointer",
                  transition:"all 0.15s",
                }}>
                  {MESES_LABEL[i]}
                </button>
              ))}
            </div>
          </div>

          {/* Grupo */}
          <div>
            <div style={{fontSize:"10px", color:"#5a7040", fontWeight:"600", letterSpacing:"1px", marginBottom:"8px", textTransform:"uppercase"}}>Grupo</div>
            <div style={{display:"flex", flexDirection:"column", gap:"3px"}}>
              {grupos.map(g => (
                <button key={g} onClick={() => setGrupoSel(g)} style={{
                  background: grupoSel===g ? (GRUPO_COLORS[g]+"22"||"#2a4020") : "transparent",
                  color: grupoSel===g ? (GRUPO_COLORS[g]||"#c8e87a") : "#6a8050",
                  border: grupoSel===g ? `1px solid ${GRUPO_COLORS[g]||"#3a6020"}44` : "1px solid transparent",
                  borderRadius:"6px",
                  padding:"5px 8px",
                  fontSize:"11px",
                  textAlign:"left",
                  cursor:"pointer",
                  display:"flex",
                  alignItems:"center",
                  gap:"6px",
                }}>
                  <span>{GRUPOS_ICON[g]||"•"}</span>
                  <span>{g === "TODOS" ? "Todos os grupos" : g.replace("_"," ")}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Patologia */}
          <div>
            <div style={{fontSize:"10px", color:"#5a7040", fontWeight:"600", letterSpacing:"1px", marginBottom:"8px", textTransform:"uppercase"}}>Restrição</div>
            <div style={{display:"flex", flexDirection:"column", gap:"3px"}}>
              {patologias.map(p => (
                <button key={p} onClick={() => setPatSel(p)} style={{
                  background: patSel===p ? "#2a2010" : "transparent",
                  color: patSel===p ? "#e8c87a" : "#6a8050",
                  border: patSel===p ? "1px solid #4a4020" : "1px solid transparent",
                  borderRadius:"6px",
                  padding:"5px 8px",
                  fontSize:"11px",
                  textAlign:"left",
                  cursor:"pointer",
                }}>
                  {p === "TODOS" ? "Sem restrição" : p}
                </button>
              ))}
            </div>
          </div>

          {/* AF Toggle */}
          <div>
            <button onClick={() => setApenasAF(!apenasAF)} style={{
              width:"100%",
              background: apenasAF ? "#1a3010" : "transparent",
              color: apenasAF ? "#8ec85a" : "#5a7040",
              border: apenasAF ? "1px solid #3a6020" : "1px solid #2a3820",
              borderRadius:"8px",
              padding:"8px 10px",
              fontSize:"12px",
              cursor:"pointer",
              display:"flex",
              alignItems:"center",
              gap:"8px",
              transition:"all 0.2s",
            }}>
              <span style={{fontSize:"16px"}}>🌱</span>
              <span>Apenas Agric. Familiar</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div style={{flex:1, display:"flex", flexDirection:"column", overflow:"hidden"}}>
          {/* Search */}
          <div style={{padding:"12px 16px", borderBottom:"1px solid #1e2e14", background:"#0f1a0e"}}>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="🔍  Buscar alimento..."
              style={{
                width:"100%", boxSizing:"border-box",
                background:"#1a2a10",
                border:"1px solid #2a3a18",
                borderRadius:"8px",
                padding:"8px 12px",
                color:"#e8dfc8",
                fontSize:"13px",
                outline:"none",
              }}
            />
          </div>

          {/* Food Grid */}
          <div style={{
            flex:1, overflowY:"auto", padding:"14px 16px",
            display:"grid",
            gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",
            gap:"10px",
            alignContent:"start",
          }}>
            {filtered.length === 0 && (
              <div style={{gridColumn:"1/-1", textAlign:"center", color:"#4a6030", padding:"40px 0", fontSize:"13px"}}>
                Nenhum alimento disponível neste mês com os filtros selecionados.
              </div>
            )}
            {filtered.map(food => {
              const sel = selecionados.includes(food.id);
              const cor = GRUPO_COLORS[food.grupo] || "#7a9060";
              return (
                <div
                  key={food.id}
                  onClick={() => toggleSelect(food.id)}
                  style={{
                    background: sel ? "#1a2e10" : "#141f0d",
                    border: sel ? `1px solid ${cor}66` : "1px solid #1e2e14",
                    borderRadius:"10px",
                    padding:"12px",
                    cursor:"pointer",
                    transition:"all 0.15s",
                    position:"relative",
                    boxShadow: sel ? `0 0 12px ${cor}22` : "none",
                  }}
                >
                  {/* Grupo badge */}
                  <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:"8px"}}>
                    <span style={{
                      background: cor+"22",
                      color: cor,
                      fontSize:"10px",
                      fontWeight:"600",
                      padding:"2px 7px",
                      borderRadius:"20px",
                      letterSpacing:"0.3px",
                    }}>
                      {GRUPOS_ICON[food.grupo]||""} {food.grupo.replace("_"," ")}
                    </span>
                    {food.af && (
                      <span title="Agricultura Familiar" style={{
                        background:"#1a3010",
                        color:"#7ec84a",
                        fontSize:"10px",
                        padding:"2px 6px",
                        borderRadius:"20px",
                        fontWeight:"600",
                      }}>AF</span>
                    )}
                  </div>

                  {/* Nome */}
                  <div style={{
                    fontSize:"12px",
                    fontWeight:"500",
                    color: sel ? "#e8f4c8" : "#c8d8a8",
                    lineHeight:"1.3",
                    marginBottom:"8px",
                    minHeight:"30px",
                  }}>{food.nome}</div>

                  {/* Nutrition */}
                  <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"4px"}}>
                    {[
                      {l:"Kcal", v:food.kcal, u:""},
                      {l:"Prot", v:food.proteina, u:"g"},
                      {l:"CHO", v:food.cho, u:"g"},
                      {l:"Fibra", v:food.fibra, u:"g"},
                    ].map(n => (
                      <div key={n.l} style={{
                        background:"#0f1a0a",
                        borderRadius:"5px",
                        padding:"3px 6px",
                        display:"flex",
                        justifyContent:"space-between",
                        alignItems:"center",
                      }}>
                        <span style={{fontSize:"9px", color:"#4a6030"}}>{n.l}</span>
                        <span style={{fontSize:"10px", color:"#9ab870", fontWeight:"500"}}>{parseFloat(n.v||0).toFixed(1)}{n.u}</span>
                      </div>
                    ))}
                  </div>

                  {/* Custo */}
                  {food.custo_kg && food.custo_kg !== "R$ 0,00" && (
                    <div style={{marginTop:"6px", fontSize:"10px", color:"#7a9060"}}>
                      {food.custo_kg} / {food.medida}
                    </div>
                  )}

                  {/* Patologia warning */}
                  {food.patologia && (
                    <div style={{
                      marginTop:"6px",
                      background:"#2a1a08",
                      color:"#e8a040",
                      fontSize:"9px",
                      padding:"2px 6px",
                      borderRadius:"4px",
                      fontWeight:"600",
                    }}>⚠ {food.patologia}</div>
                  )}

                  {sel && (
                    <div style={{
                      position:"absolute", top:"8px", right:"8px",
                      background:cor,
                      borderRadius:"50%",
                      width:"16px", height:"16px",
                      display:"flex", alignItems:"center", justifyContent:"center",
                      fontSize:"9px", color:"#0a1008", fontWeight:"700"
                    }}>✓</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Panel - Cardápio Selecionado */}
        <div style={{
          width:"240px", minWidth:"240px",
          background:"#111a0c",
          borderLeft:"1px solid #1e2e14",
          padding:"16px 14px",
          overflowY:"auto",
          display:"flex",
          flexDirection:"column",
          gap:"12px"
        }}>
          <div style={{
            fontFamily:"'DM Serif Display', serif",
            fontSize:"15px",
            color:"#c8e87a",
            borderBottom:"1px solid #1e2e14",
            paddingBottom:"10px",
          }}>
            📋 Cardápio do Dia
          </div>

          {selecionados.length === 0 ? (
            <div style={{
              color:"#3a5028",
              fontSize:"12px",
              textAlign:"center",
              padding:"20px 0",
              lineHeight:"1.6"
            }}>
              Selecione alimentos<br/>para montar o cardápio
            </div>
          ) : (
            <>
              {/* Selected list */}
              <div style={{display:"flex", flexDirection:"column", gap:"4px"}}>
                {selectedFoods.map(f => (
                  <div key={f.id} style={{
                    display:"flex", alignItems:"center", justifyContent:"space-between",
                    background:"#1a2a10",
                    borderRadius:"6px",
                    padding:"6px 8px",
                    fontSize:"11px",
                  }}>
                    <span style={{color:"#b8c898", flex:1, marginRight:"4px"}}>{f.nome.split(",")[0]}</span>
                    <button onClick={() => toggleSelect(f.id)} style={{
                      background:"none", border:"none",
                      color:"#4a6030", cursor:"pointer", fontSize:"12px", padding:"0",
                    }}>×</button>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div style={{
                background:"#0f1a0a",
                borderRadius:"8px",
                padding:"12px",
                marginTop:"4px",
              }}>
                <div style={{fontSize:"10px", color:"#5a7040", marginBottom:"8px", fontWeight:"600", letterSpacing:"0.8px", textTransform:"uppercase"}}>
                  Total Nutricional (100g)
                </div>
                {[
                  {l:"Energia", v:totals.kcal.toFixed(0), u:"kcal", color:"#e8c87a"},
                  {l:"Proteína", v:totals.proteina.toFixed(1), u:"g", color:"#8ec85a"},
                  {l:"Carboidratos", v:totals.cho.toFixed(1), u:"g", color:"#c8a870"},
                  {l:"Fibras", v:totals.fibra.toFixed(1), u:"g", color:"#7ac870"},
                ].map(n => (
                  <div key={n.l} style={{
                    display:"flex", justifyContent:"space-between", alignItems:"center",
                    padding:"4px 0",
                    borderBottom:"1px solid #1a2a10",
                  }}>
                    <span style={{fontSize:"11px", color:"#6a8050"}}>{n.l}</span>
                    <span style={{fontSize:"12px", fontWeight:"600", color:n.color}}>
                      {n.v} <span style={{fontSize:"9px", fontWeight:"400"}}>{n.u}</span>
                    </span>
                  </div>
                ))}
              </div>

              {/* AF indicator */}
              <div style={{
                background:"#1a3010",
                border:"1px solid #2a5020",
                borderRadius:"8px",
                padding:"10px",
                textAlign:"center",
              }}>
                <div style={{fontSize:"20px", marginBottom:"4px"}}>🌱</div>
                <div style={{fontSize:"11px", color:"#8ec85a", fontWeight:"600"}}>
                  {selectedFoods.filter(f=>f.af).length} de {selecionados.length} itens
                </div>
                <div style={{fontSize:"10px", color:"#5a8030", marginTop:"2px"}}>
                  da Agricultura Familiar
                </div>
              </div>

              <button
                onClick={() => setSelecionados([])}
                style={{
                  background:"#1a1a10",
                  border:"1px solid #2a2a18",
                  borderRadius:"6px",
                  color:"#6a6a50",
                  fontSize:"11px",
                  padding:"6px",
                  cursor:"pointer",
                }}
              >
                Limpar cardápio
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default App;
