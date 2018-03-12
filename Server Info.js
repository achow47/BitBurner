/*Return the Server Information
- Target Hostname
- Hack Level Required
- Ports Required
- Security Level
- Max Money
 */

//Set Variables
target = args[0]
flag = 1

//Copy Server Info Script from home to Target
if (fileExists("server-info.script", target) === false) {
    scp("server-info.script", "home", target);
    tprint("File copied successfully.");
else (fileExists("server-info.script", target) === true)
    {
        tprint("File already exists.");
    }
}

//Retrieve Hostname
tprint(" |||||| Hostname: " + getHostname(target));
