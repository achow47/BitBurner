/*Return the Server Information
- copy get server info script
- Get Root Access
 */

//Set Variables
target = args[0];
rootFlag = 0;
fileFlag = 0;

//Copy Get Server Info Script from home to Target
if (fileExists("get-server-info.script", target) === true) {
    fileFlag = 1;
    tprint("File already exists.");
}
if (fileFlag === 0) {
    scp("get-server-info.script", "home", target);
    tprint("Get Server Info script copied successfully.")
}

//Check Root Access
if (hasRootAccess(target) === true) {
    rootFlag = 1;
    tprint("You already have root access.")
}
//Get Root Access
if (rootFlag === 0) {
    if (fileExists("BruteSSH.exe", "home")) {
        BruteSSH(target);
    }
    nuke(target);
    rootFlag = 1
}
//Check Root Again
if (hasRootAccess(target) === false){
    tprint("Root access denied.");
}

//Execute Get Server Info in Target
exec("get-server-info.script", target, 1, target);