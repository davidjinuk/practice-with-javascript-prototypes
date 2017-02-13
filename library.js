/*jshint esversion: 6 */
let library = [];

//constructor: library
function EachLibrary(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
  this.tracks =[];
  library.push(this);
}

//constructor: playlist
function EachPlaylist(name) {
  this.name = name;
  this.tracks = [];
}

//constructor: track
function EachTrack(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}

//EachLibrary method
EachLibrary.prototype.addPlaylist = function(playlist) {
  this.playlists.push(playlist);
};

//EachPlaylist method
EachPlaylist.prototype.addTrack = function(track) {
  this.tracks.push(track);
};

EachPlaylist.prototype.overallRating = function() {
  let sumTracks = this.tracks.length;
  let sumRating = this.tracks.reduce(function(acc, curr) {
    return acc + curr.rating;
  }, 0);
  console.log('The average rating of the playlist is ', sumRating/sumTracks);
};

EachPlaylist.prototype.totalDuration = function() {
  let sumLength = this.tracks.reduce(function(acc, curr) {
    return acc + curr.length;
  }, 0);
  console.log('The total duration is ', sumLength);
};

//instance
let myLibrary = new EachLibrary('myLibrary', 'david');
let rockPlaylist = new EachPlaylist('rock playlist');
let balladPlaylist = new EachPlaylist('ballad playlist');
let track1 = new EachTrack('rockNroll', 4, 3);
let track2 = new EachTrack('rock4life', 5, 3);
let track3 = new EachTrack('slow', 5, 3);

myLibrary.addPlaylist('rock playlist');
myLibrary.addPlaylist('ballad playlist');
rockPlaylist.addTrack(track1);
rockPlaylist.addTrack(track2);
balladPlaylist.addTrack(track3);

console.log(myLibrary);
rockPlaylist.overallRating();
rockPlaylist.totalDuration();
balladPlaylist.overallRating();
balladPlaylist.totalDuration();