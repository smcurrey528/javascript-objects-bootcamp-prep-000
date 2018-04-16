var playlist = {
  Alison: "Slow Dive",
  MyBloodyValentine: "Sometimes"
};
function updatePlaylist (obj, key, value) {
  return Object.assign ({}, playlist, {['Phil Ochs']:"Here;s to the State of Mississippi"})
}