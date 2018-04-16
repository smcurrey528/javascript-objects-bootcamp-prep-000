var playlist = {
  SlowDive: "Alison",
  MyBloodyValentine: "Sometimes"
};

function updatePlaylist (playlist,'Phil Ochs', 'Heres to the State of Mississippi') {
  return Object.assign ({}, playlist, {['Phil Ochs']:"Here;s to the State of Mississippi"})
}
function removeFromPlaylist (playlist)