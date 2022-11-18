var collection = {
  2548: {
    album: "Slippery when Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    album: "ABBA Gold",
  },
};

var oldCollection = JSON.parse(JSON.stringify(collection));

function updateRecords(records, id, prop, value) {
  if (value === "") {
    delete records[id][prop];
  } else if (prop !== "tracks") {
    records[id][prop] = value;
  } else {
    if (records[id].hasOwnProperty("tracks")) {
      records[id].tracks.push(value);
    } else {
      records[id].tracks = [];
      records[id].tracks.push(value);
    }
  }
  return records;
}

console.log(updateRecords(collection, 5439, "artist", "ABBA"));
console.log(updateRecords(collection, 5439, "tracks", "Take a Chance on Me"));
console.log(updateRecords(collection, 2458, "artist", " "));
console.log(updateRecords(collection, 1245, "tracks", "Addicted to love"));
module.exports = updateRecords;
