import { GoogleLogout } from "react-google-login";

const clientId = "522260929576-gn6staot2clfdhe808nvsi05elqcfhdf.apps.googleusercontent.com"


function Logout() {

    const onSuccess = () => {
        console.log("Logout Successful!");
    }

    return(
        <div id="signOutButton">
            <GoogleLogout
            clientId={clientId}
            buttonText={"Logout"}
            onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout;