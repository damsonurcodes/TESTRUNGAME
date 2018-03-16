// Engine Settings.

var engine = {
	// Initial Label
	"Label": "Start",

	// Number of Save Slots
	"Slots": 10,

	// Current Media.
	"Song": "",
	"Sound": "",
	"Scene": "",
	"JS": "",
	"Step": 0,

	// History for the previous function.
	"MusicHistory":[],
	"SoundHistory":[],
	"ImageHistory":[],
	"CharacterHistory":[],
	"SceneHistory":[],

	// Change to true for a MultiLanguage Game
	"MultiLanguage": false
}

// Initial Settings
var settings = {

	// Initial Language.
	"Language": "English",

	// Initial Volumes from 0.0 to 1.
	"Volume":{
		"Music": 1,
		"Voice": 1,
		"Sound": 1
	}
}