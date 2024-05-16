
var originalNames = ["Noel", "Kusi", "Felix", "Joel"];
var modifiedNames = ["noel", "KUSI", "felix", "joel"];
var userProfiles = createUserProfiles(originalNames, modifiedNames);



function createUserProfiles(names, modifiedNames) {
    var profiles = [];
    for (var i = 0; i < names.length; i++) {
        var profile = {
            originalName: names[i],
            modifiedName: modifiedNames[i],
            id: i + 1
        };
        profiles.push(profile);
    }
    return profiles;
}
console.log(userProfiles);