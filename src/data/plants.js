import aloeVeraImage from "../images/aloe-vera.jpg";
import spiderPlantImage from "../images/spider-plant.jpg";
import snakePlantImage from "../images/snake-plant.jpg";
import peaceLilyImage from "../images/peace-lily.jpg";
import pothosImage from "../images/Pothos.jpg";
import zzPlantImage from "../images/zz-plant.jpg";
import fiddleLeafFigImage from "../images/fiddle-leaf-fig.jpg";
import rubberPlantImage from "../images/rubber-plant.jpg";
import succulentMixImage from "../images/succulent-mix.jpg";
import englishIvyImage from "../images/english-ivy.jpg";

const plants = [
  {
    id: 1,
    commonName: "Aloe Vera",
    botanicalName: "Aloe barbadensis miller",
    description: "Aloe Vera is a succulent plant species of the genus Aloe.",
    imageUrl: aloeVeraImage,
    light: "Bright, indirect light",
    water: "Water once every 2-3 weeks",
    humidity: "Low humidity",
  },
  {
    id: 2,
    commonName: "Spider Plant",
    botanicalName: "Chlorophytum comosum",
    description: "A popular houseplant that’s easy to grow and care for.",
    imageUrl: spiderPlantImage,
    light: "Bright, indirect light",
    water: "Water once a week",
    humidity: "Medium humidity",
  },
  {
    id: 3,
    commonName: "Snake Plant",
    botanicalName: "Sansevieria trifasciata",
    description:
      "Snake plants are hardy, low-maintenance plants that are perfect for beginners.",
    imageUrl: snakePlantImage,
    light: "Low to bright indirect light",
    water: "Water every 2-3 weeks",
    humidity: "Low humidity",
  },
  {
    id: 4,
    commonName: "Peace Lily",
    botanicalName: "Spathiphyllum",
    description:
      "Peace Lilies are known for their beautiful white blooms and air-purifying properties.",
    imageUrl: peaceLilyImage,
    light: "Low to medium light",
    water: "Water once a week",
    humidity: "Medium to high humidity",
  },
  {
    id: 5,
    commonName: "Pothos",
    botanicalName: "Epipremnum aureum",
    description:
      "Pothos is a low-maintenance vine plant that is perfect for hanging baskets.",
    imageUrl: pothosImage,
    light: "Low to bright indirect light",
    water: "Water once a week",
    humidity: "Low to medium humidity",
  },
  {
    id: 6,
    commonName: "ZZ Plant",
    botanicalName: "Zamioculcas zamiifolia",
    description:
      "The ZZ Plant is known for its tolerance to low light and infrequent watering.",
    imageUrl: zzPlantImage,
    light: "Low to bright indirect light",
    water: "Water once every 2-3 weeks",
    humidity: "Low humidity",
  },
  {
    id: 7,
    commonName: "Fiddle Leaf Fig",
    botanicalName: "Ficus lyrata",
    description:
      "Fiddle Leaf Figs are large plants with dramatic, violin-shaped leaves.",
    imageUrl: fiddleLeafFigImage,
    light: "Bright, indirect light",
    water: "Water once a week",
    humidity: "Medium humidity",
  },
  {
    id: 8,
    commonName: "Rubber Plant",
    botanicalName: "Ficus elastica",
    description:
      "Rubber Plants are popular for their glossy, dark green leaves and upright growth.",
    imageUrl: rubberPlantImage,
    light: "Bright, indirect light",
    water: "Water once every 1-2 weeks",
    humidity: "Low to medium humidity",
  },
  {
    id: 9,
    commonName: "Succulent Mix",
    botanicalName: "Various species",
    description:
      "A mix of various easy-care succulent plants with different shapes and colors.",
    imageUrl: succulentMixImage,
    light: "Bright, indirect light",
    water: "Water once every 2-3 weeks",
    humidity: "Low humidity",
  },
  {
    id: 10,
    commonName: "English Ivy",
    botanicalName: "Hedera helix",
    description:
      "English Ivy is a fast-growing vine that’s perfect for hanging baskets or as ground cover.",
    imageUrl: englishIvyImage,
    light: "Medium to bright indirect light",
    water: "Water once a week",
    humidity: "Medium humidity",
  },
];

export default plants;
