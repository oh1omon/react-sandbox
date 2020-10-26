const Animal = (props) => {
    return(
        <div className = "card">
            <img src={props.imgSrc} alt="animalImage"/>
            <h2>{props.animalName}</h2>
            <button onClick={()=> window.alert(`Hello! I am ${props.animalName}. It is nice to meet you!`)}>Greet</button>
        </div>
    );
};

export default Animal