var program = "notStart";


when("start") //defined by html

function begin() {
    if (program == "notStart") {
        check()
        return;
        console.log("ERROR. HACKS COULD NOT BE LOADED.")
    }else{
        console.log("LOAD SUCCESFULL. COMMENCING...")
        loadHacks();
        security(disable); //disable any checking
        openPanel(); //open up the panel
    }
}

//PLEASE NOTE: WE ARE NOT RESPONSIABLE FOR ANY BANNED ACCOUNTS. ALL ON YOUR RISK. BE WARNED.