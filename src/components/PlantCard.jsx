const PlantCard = ({plant}) => {
    return ( 
        <div className="plant-card">
            <h3>{plant.commonName}</h3>
            <img src={plant.imageUrl} alt={plant.commonName}/>
            <p>{plant.description}</p>
            <div>
                <h4>Care Instructions:</h4>
                <p>Light: {plant.light}</p>
                <p>Water: {plant.water}</p>
                <p>Humidity: {plant.humidity}</p>
            </div>
        </div>
     );
}
 
export default PlantCard;