function calculateHalts(halts, totalDistance) {
    let haltsCovered = 0;
    for (let i = 0; i < halts.length; i++) {
      if (halts[i] < totalDistance) {
        totalDistance = totalDistance - halts[i];
        haltsCovered += 1;
      } else {
        break;
      }
    }
  
    return haltsCovered;
  }
  
  
  let X = 4; // petrol available
  let K = 30; // 30km per litre
  let totalDistanceByA = X * K;
  
  let Y = 5; // petrol available
  let L = 30; // 30km per litre
  let totalDistanceByB = Y * L;
  
  let halts = [25, 65, 35, 40, 90];
  
  console.log(calculateHalts(halts, totalDistanceByA));
  console.log(calculateHalts(halts, totalDistanceByB));
  