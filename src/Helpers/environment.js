let APIURL = ""

switch (window.location.hostname) {
    case "localhost" || "127.0.0.1" :
        APIURL = "http://localhost:3000" //after "host" put your SERVER port number
        break
    case "ventea.herokuapp.com" :
        APIURL = "https://lm-ventea.herokuapp.com"
        break
}
export default APIURL


// replace all urls that are using server stuff - CRUD functions need replaced