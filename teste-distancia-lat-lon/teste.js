// a function to get the distance between two points on the earth
// the distance is calculated in meters
// the earth is a sphere with radius 6371 km
// without deg2rad

/** Converts numeric degrees to radians */
function deg2rad(deg) {
    return deg * (Math.PI/180)
}
let lat1, lat2, lon1, lon2;
function getDistanceFromLatLonInKm(){
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1); 
    var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    
}

let res = getDistanceFromLatLonInKm(-22.81204283010662, -43.35559343768488, -22.809590887424715, -43.35816081120698);
console.log(d);



