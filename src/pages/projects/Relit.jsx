import GitHubLink from "../../components/GitHubLink"

import "../../w3.css"


const Relit = () => {
    return (
        <div className="w3-content">
            <p>
                This project was the final year project for my engineering degree. 
                We were to make a prototype lighting control mobile app for our sponser UTechnology, so we could control their lights.
                The intital design they wanted us to make was having a bluetooth hub in between our app and light controllers.
                This means our app communicated with a bluetooth hub through wifi/ethernet and the hub would communicate with the lighting controllers using BLE (Bluetooh Low Energy).
            </p>
            <p>
                I was in charge of the AWS architecture and implementation within our app. We were using Expo (React Native framwork) 
                so we can make the app work for both Android and IOS.
                The AWS services we used was Amplify for development as it made connecting the other services easier. 
                AWS Cognito for user authorization. DynamoDB for our backend and IoT Core for the MQTT messaging to our bluetooth hub.
            </p>
            <p>
                I was also in charge of setting up Redux for handling the state within the app. This allowed me to control the flow of data in the app. 
                Using IoT core, I was able to have it deal with writing to the database whenver changes to the lights occured. 
                The redux store was also updated on the app locally.
                This allowed for the database and app to be in sync without requiring for the app to make constant writes or reads from the database.
                The app only read from the database during login and writes to it during account creation. Other than that, there was no other direct communications with the database.
                This let the app stay responsive as it limited the time it needed to wait for communicating over network.
                I realize this only works for the prototype, as more features were to get added, the app would need to communicate with the database.
                For example, a feature that the sponser wish to add in the future was letting other users also temporarily control the ligths. 
                This would require more direct communication with the database from the app.
            </p>

            <p>
                I can't share the github for this project as the repo is private.
            </p>
            {/* <GitHubLink link={"https://github.com/FDIL501st/ENCM511_gr6_Project-Codes/tree/main/AppProject2"} /> */}
        </div>
    )
}

export default Relit
