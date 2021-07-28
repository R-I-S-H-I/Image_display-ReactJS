import { useState } from "react";
const App = ({name, photo}) =>{
    const [image, setImage] = useState(``);

    import(`./img/${photo}`).then((image)=>{setImage(image)})
    // console.log(image);
    return(
        <div>
            <h3>{name}</h3>
            <div width="200px" height="200px"> 
                <img src={image} alt={name} width="auto" height="100%"/>
            </div>
        </div>
    )
}

export default App;