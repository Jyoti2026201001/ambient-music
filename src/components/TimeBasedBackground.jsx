import {useState, useEffect} from 'react';


function getBackgroundImage() {
    const hour = new Date().getHours();

    if(hour>= 6 && hour < 12) {
        return "/images/morning.gif";
    } else if(hour >= 12 && hour < 18) {
        return "/images/afternoon.gif";
    } else if(hour >= 18 && hour < 21) {
        return "/images/evening.gif";
    } else {
        return "/images/night.gif";
    }
}


const TimeBackground = () => {

    const [backgroundImage, setBackgroundImage] = useState(getBackgroundImage());
    
    useEffect(() => {
        const interval = setInterval(() => {
            setBackgroundImage(getBackgroundImage());
        }, 60000); // Update every minute

        return () => clearInterval(interval);
    }, []);
    const hour = new Date().getHours();
    return (
        <div className="time-background">
            <img src={backgroundImage} alt="Time Background" />
            <div className="overlay"></div>
        </div>
    )
}

export default TimeBackground;