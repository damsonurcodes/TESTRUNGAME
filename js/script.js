// Define the messages used in the game.
var messages = {
	"Help":{
		"Title": "Help",
		"Subtitle": "Some useful Links",
		"Message":"<p>Documentation: <a>http://monogatari.hyuchia.com/documentation/</a></p><p>Demo: <a>http://monogatari.hyuchia.com/demo/</p>"
	}
}

// Define the music used in the game.
var music = {

}

// Define the voice files used in the game.
var voice = {

}

// Define the sounds used in the game.
var sound = {

}

// Define the images used in the game.
var images = {

}

// Define the backgrounds for each scene.
var scenes = {
	"lecturehall": "lecturehall.jpg",
	"uni": "uni.jpg",
	"meadow": "meadow.jpg",
	"club": "club.jpg"
}

// Define the Characters
var characters = {
	"s":{
		"Name": "Sana",
		"Color": "#c8ffc8",
		"Images":{
			"normal": "sana_normal.png",
			"giggle": "sana_giggle.png",
			"smile": "sana_smile.png",
			"surprised": "sana_smile.png",
			"normal2": "sana_normal.png",
			"giggle2": "sana_giggle.png",
			"smile2": "sana_smile.png",
			"surprised2": "sana_surprised.png",
		}
	},

	"m":{
		"Name": "Me",
		"Color": "#c8c8ff"
	}
}

var script = {
	// The game starts here.
	"Start":[

		"$ window.soft = false",

		"play music illurock.ogg",

		"scene lecturehall",

		"show s normal with fadeIn",

		"s So you wanna make the perfect cup of coffee?",

		"m Yeah. So, what sachet are we using?",

		"s We're not using any silly! I'm going to teach you how to make REAL coffee!",

		"m For real? With beans and stuff? Don't you need training for that?",

		"s Nope. It's real easy. Plus, I'll be with you every step of the way!",

	    "scene uni",

			"show s normal with fadeIn",

			"s So first, you gotta choose the texture of the beans.",

			"m Aren't beans... beans?",

			"s Well, I'm more talking about how much you ground it.",

			"s It's the texture of the grounded beans - that makes up the body of the coffee itself.",

			"s I've prepped six types here for us.",

			"s Just choose which is which!",

	    {"Choice":{
		    "Soft": {
			  "Text": "The soft one.",
			  "Do": "jump Soft"
		    },
				"Rough": {
			  "Text": "The roughest one.",
			  "Do": "jump Rough"
		    },
				"Medium-Rough": {
			  "Text": "The slightly rough one.",
			  "Do": "jump Med-Rough"
		    },
				"Medium-Soft": {
			  "Text": "The slightly soft one.",
			  "Do": "jump Med-Soft"
		    },
				"Medium": {
			  "Text": "A bit of both.",
			  "Do": "jump Medium"
		    },
	    }}

	],


"Soft":[

			"show s smile",

			"s Soft grinded beans means that the beans are ground to dust.",
			"m Is that bad?",
			"s Not at all, softly grinded beans are more resistant to heat - so it lessens the coffee flavour.",

"show s giggle",
			"m So it's not coffee?",
		    "s It still is! It just doesnt have the strong as hell flavour. This is good for someone that doesn't like really strong coffee.",

"jump Texture-soft",
			],

	"Texture-soft":[

		"show s smile",

		"s Now we choose what to make our coffee with.",
		"m Wait, we're using different machines?",
		"s Yup. Different machines make different characters for the coffee.",

		"s The Moka Pot, for example - is great for soft textured coffee! Brings out the flavour 10/10!",

		"m Aren't these machines expensive?",
	    "s What can I say, I love me my coffee.",
	    "s I have seven types here..",
	    "s You choose!",


						{"Choice":{
			  			"Aeropress":{
			  				"Text": "The Aeropress.",
			  				"Do": "jump Temp-Fail-B"
			  			},
							"French Press":{
			  				"Text": "The French Press.",
			  				"Do": "jump Temp-Fail-B"
			  			},
							"Chemex":{
			  				"Text": "The Chemex.",
			  				"Do": "jump Temp-Fail-B"
			  			},
							"V60":{
			  				"Text": "The V60.",
			  				"Do": "jump Temp-Fail-B"
			  			},
							"Kalita Wave":{
			  				"Text": "The Kalita Wave.",
			  				"Do": "jump Temp-Fail-B"
			  			},
							"Clever":{
			  				"Text": "The Clever.",
			  				"Do": "jump Temp-Fail-B"
			  			},
							"Moka Pot":{
			  				"Text": "The Moka Pot.",
			  				"Do": "jump Temp-Correct-Soft"
			  			},



			  		}},
  	],

	"Temp-Correct-Soft":[

		"s Next, we set the temperature.",
	    "m Uh.... Hot?",
	    "s We need to be specific silly!",
	    "s Heat makes the beans soluble in water. And different temperatures mean different solubility of flavour.",
	    "m Ohhhh.... okay. So the flavour changes with different temperatures?",

	    "show s normal",

	    "s Exactly. The hotter it goes, the more the flavour blends with the water.",
	    "s I usually heat it up to around 90 degrees. But you choose how long for this cup!",

			{"Choice":{
				"80":{
					"Text": "80 to 90 degrees?",
					"Do": "jump Time-Fail-C"
				},
				"92":{
					"Text": "90 to 92 degres, it is.",
					"Do": "jump Time-Fail-C"
				},
				"96":{
					"Text": "Lets go high, 92 to 96.",
					"Do": "jump Time-Correct-Soft"
				},
				"90":{
					"Text": "Hmmm, lets try 90 to 96.",
					"Do": "jump Time-Fail-C"
				},

			}}

	],


	"Time-Correct-Soft":[

	    "s Next, we decide how long we're gonna brew it.",
	    "m Let me guess, time matters too?",
	    "s Correct! Contact time balances the taste, plus it binds the character of the cup.",
	    "s I usually put the contact time below 5 minutes, so its gonna be up to you!",

			{"Choice":{
				"1":{
					"Text": "3 to 4 minutes should be good.",
					"Do": "jump Chara-Fail-D"
				},
				"2":{
					"Text": "1 to 4 minutes.",
					"Do": "jump Chara-Fail-D"
				},
				"3":{
					"Text": "2 to 4 minutes maybe.",
					"Do": "jump Chara-Fail-D"
				},
				"4":{
					"Text": "Go for 1 to 3 minutes.",
					"Do": "jump Character-Correct-Soft"
				},
			}}

	],

	"Character-Correct-Soft":[

   "show s giggle with fadeIn ",

		"s Hm.....",
	    "s Mmmm.....",

		"show s smile with fadeIn",

	    "s You got a real delicious one here!",
	    "s A real balanced taste, with just the right amount of acidity and the right amount of body.",
	    "s It's a bit too high for my taste, but if you want strong coffee - you brew like this!",

	    "You made a good cup of coffee! Congrats!",

	    "end",

		],

		"Temp-Fail-B":[

			"s Next, we set the temperature.",
		    "m Uh.... Hot?",
		    "s We need to be specific silly!",
		    "s Heat makes the beans soluble in water. And different temperatures mean different solubility of flavour.",
		    "m Ohhhh.... okay. So the flavour changes with different temperatures?",

		    "show s normal",

		    "s Exactly. The hotter it goes, the more the flavour blends with the water.",
		    "s I usually heat it up to around 90 degrees. But you choose how long for this cup!",

				{"Choice":{
					"80":{
						"Text": "80 to 90 degrees?",
						"Do": "jump Time-Fail-C"
					},
					"92":{
						"Text": "90 to 92 degres, it is.",
						"Do": "jump Time-Fail-C"
					},
					"96":{
						"Text": "Lets go high, 92 to 96.",
						"Do": "jump Time-Fail-C"
					},
					"90":{
						"Text": "Hmmm, lets try 90 to 96.",
						"Do": "jump Time-Fail-C"
					},

				}}

		],


		"Time-Fail-C":[

		    "s Next, we decide how long we're gonna brew it.",
		    "m Let me guess, time matters too?",
		    "s Correct! Contact time balances the taste, plus it binds the character of the cup.",
		    "s I usually put the contact time below 5 minutes, so its gonna be up to you!",

				{"Choice":{
					"1":{
						"Text": "3 to 4 minutes should be good.",
						"Do": "jump Chara-Fail-D"
					},
					"2":{
						"Text": "1 to 4 minutes.",
						"Do": "jump Chara-Fail-D"
					},
					"3":{
						"Text": "2 to 4 minutes maybe.",
						"Do": "jump Chara-Fail-D"
					},
					"4":{
						"Text": "Go for 1 to 3 minutes.",
						"Do": "jump Chara-Fail-D"
					},
				}}

		],

	"Chara-Fail-D":[

   "show s giggle with fadeIn ",

		"s Hm.....",
	    "s Mmmm.....",

		"show s surprised with fadeIn",

	    "s Lets stick with instant coffee for now!",

	    "You made a bad cup of coffee. Try Again!",

	    "end",

		],


		"Rough":[

					"show s smile",

					"s Rough grinded beans means that the beans are not really ground properly.",
					"m Is that bad?",
					"s Not at all, softly grinded beans are less resistant to heat - so it enhances the coffee flavour.",

		"show s giggle",
					"m So it's like super coffee?",
				    "s Pretty much! This is probably gonna be strong as hell. This is good for someone who REALLY needs coffee.",

		"jump Texture-Rough",
					],

			"Texture-Rough":[

				"show s smile",

				"s Now we choose what to make our coffee with.",
				"m Wait, we're using different machines?",
				"s Yup. Different machines make different characters for the coffee.",

				"s The French Press, for example - is great for Rough textured coffee! Brings out the flavour 10/10!",

				"m Aren't these machines expensive?",
			    "s What can I say, I love me my coffee.",
			    "s I have seven types here..",
			    "s You choose!",


								{"Choice":{
					  			"Aeropress":{
					  				"Text": "The Aeropress.",
					  				"Do": "jump Temp-Fail-B"
					  			},
									"French Press":{
					  				"Text": "The French Press.",
					  				"Do": "jump Temp-Correct-Rough"
					  			},
									"Chemex":{
					  				"Text": "The Chemex.",
					  				"Do": "jump Temp-Fail-B"
					  			},
									"V60":{
					  				"Text": "The V60.",
					  				"Do": "jump Temp-Fail-B"
					  			},
									"Kalita Wave":{
					  				"Text": "The Kalita Wave.",
					  				"Do": "jump Temp-Fail-B"
					  			},
									"Clever":{
					  				"Text": "The Clever.",
					  				"Do": "jump Temp-Fail-B"
					  			},
									"Moka Pot":{
					  				"Text": "The Moka Pot.",
					  				"Do": "jump Temp-Fail-B"
					  			},



					  		}},
		  	],

			"Temp-Correct-Rough":[

				"s Next, we set the temperature.",
			    "m Uh.... Hot?",
			    "s We need to be specific silly!",
			    "s Heat makes the beans soluble in water. And different temperatures mean different solubility of flavour.",
			    "m Ohhhh.... okay. So the flavour changes with different temperatures?",

			    "show s normal",

			    "s Exactly. The hotter it goes, the more the flavour blends with the water.",
			    "s I usually heat it up to around 90 degrees. But you choose how long for this cup!",

					{"Choice":{
						"80":{
							"Text": "80 to 90 degrees?",
							"Do": "jump Time-Fail-C"
						},
						"92":{
							"Text": "90 to 92 degres, it is.",
							"Do": "jump Time-Fail-C"
						},
						"96":{
							"Text": "Lets go high, 92 to 96.",
							"Do": "jump Time-Fail-C"
						},
						"90":{
							"Text": "Hmmm, lets try 90 to 96.",
							"Do": "jump Time-Correct-Rough"
						},

					}}

			],


			"Time-Correct-Rough":[

			    "s Next, we decide how long we're gonna brew it.",
			    "m Let me guess, time matters too?",
			    "s Correct! Contact time balances the taste, plus it binds the character of the cup.",
			    "s I usually put the contact time below 5 minutes, so its gonna be up to you!",

					{"Choice":{
						"1":{
							"Text": "3 to 4 minutes should be good.",
							"Do": "jump Character-Correct-Rough"
						},
						"2":{
							"Text": "1 to 4 minutes.",
							"Do": "jump Chara-Fail-D"
						},
						"3":{
							"Text": "2 to 4 minutes maybe.",
							"Do": "jump Chara-Fail-D"
						},
						"4":{
							"Text": "Go for 1 to 3 minutes.",
							"Do": "jump Chara-Fail-D"
						},
					}}

			],

			"Character-Correct-Rough":[

		   "show s giggle with fadeIn ",

				"s Hm.....",
			    "s Mmmm.....",

				"show s smile with fadeIn",

			    "s You got a real delicious one here!",
			    "s A real balanced taste, with just the right amount of acidity and the right amount of body.",
			    "s It's a bit too high for my taste, but if you want strong coffee - you brew like this!",

			    "You made a good cup of coffee! Congrats!",

			    "end",

				],

				"Temp-Fail-B":[

					"s Next, we set the temperature.",
				    "m Uh.... Hot?",
				    "s We need to be specific silly!",
				    "s Heat makes the beans soluble in water. And different temperatures mean different solubility of flavour.",
				    "m Ohhhh.... okay. So the flavour changes with different temperatures?",

				    "show s normal",

				    "s Exactly. The hotter it goes, the more the flavour blends with the water.",
				    "s I usually heat it up to around 90 degrees. But you choose how long for this cup!",

						{"Choice":{
							"80":{
								"Text": "80 to 90 degrees?",
								"Do": "jump Time-Fail-C"
							},
							"92":{
								"Text": "90 to 92 degres, it is.",
								"Do": "jump Time-Fail-C"
							},
							"96":{
								"Text": "Lets go high, 92 to 96.",
								"Do": "jump Time-Fail-C"
							},
							"90":{
								"Text": "Hmmm, lets try 90 to 96.",
								"Do": "jump Time-Fail-C"
							},

						}}

				],


				"Time-Fail-C":[

				    "s Next, we decide how long we're gonna brew it.",
				    "m Let me guess, time matters too?",
				    "s Correct! Contact time balances the taste, plus it binds the character of the cup.",
				    "s I usually put the contact time below 5 minutes, so its gonna be up to you!",

						{"Choice":{
							"1":{
								"Text": "3 to 4 minutes should be good.",
								"Do": "jump Chara-Fail-D"
							},
							"2":{
								"Text": "1 to 4 minutes.",
								"Do": "jump Chara-Fail-D"
							},
							"3":{
								"Text": "2 to 4 minutes maybe.",
								"Do": "jump Chara-Fail-D"
							},
							"4":{
								"Text": "Go for 1 to 3 minutes.",
								"Do": "jump Chara-Fail-D"
							},
						}}

				],

			"Chara-Fail-D":[

		   "show s giggle with fadeIn ",

				"s Hm.....",
			    "s Mmmm.....",

				"show s surprised with fadeIn",

			    "s Lets stick with instant coffee for now!",

			    "You made a bad cup of coffee. Try Again!",

			    "end",

				],


						"Med-Rough":[

									"show s smile",

									"s Medium Rough grinded beans means that the beans are not really ground properly, but still have some softness to them.",
									"m Is that bad?",
									"s Not at all, Medium Rough grinded beans are less resistant to heat - so it has a medium strong coffee flavour.",

						"show s giggle",
									"m So it's like a sprinkle of coffee?",
								    "s Pretty much! This is kind of like a caffeine shot. It's good for someone that needs a pick me up.",

						"jump Texture-Med-Rough",
									],

							"Texture-Med-Rough":[

								"show s smile",

								"s Now we choose what to make our coffee with.",
								"m Wait, we're using different machines?",
								"s Yup. Different machines make different characters for the coffee.",

								"s The Chemex, for example - is great for Medium-Rough textured coffee! Brings out the flavour 10/10!",

								"m Aren't these machines expensive?",
							    "s What can I say, I love me my coffee.",
							    "s I have seven types here..",
							    "s You choose!",


												{"Choice":{
									  			"Aeropress":{
									  				"Text": "The Aeropress.",
									  				"Do": "jump Temp-Fail-B"
									  			},
													"French Press":{
									  				"Text": "The French Press.",
									  				"Do": "jump Temp-Fail-B"
									  			},
													"Chemex":{
									  				"Text": "The Chemex.",
									  				"Do": "jump Temp-Correct-Med-Rough"
									  			},
													"V60":{
									  				"Text": "The V60.",
									  				"Do": "jump Temp-Fail-B"
									  			},
													"Kalita Wave":{
									  				"Text": "The Kalita Wave.",
									  				"Do": "jump Temp-Fail-B"
									  			},
													"Clever":{
									  				"Text": "The Clever.",
									  				"Do": "jump Temp-Fail-B"
									  			},
													"Moka Pot":{
									  				"Text": "The Moka Pot.",
									  				"Do": "jump Temp-Fail-B"
									  			},



									  		}},
						  	],

							"Temp-Correct-Med-Rough":[

								"s Next, we set the temperature.",
							    "m Uh.... Hot?",
							    "s We need to be specific silly!",
							    "s Heat makes the beans soluble in water. And different temperatures mean different solubility of flavour.",
							    "m Ohhhh.... okay. So the flavour changes with different temperatures?",

							    "show s normal",

							    "s Exactly. The hotter it goes, the more the flavour blends with the water.",
							    "s I usually heat it up to around 90 degrees. But you choose how long for this cup!",

									{"Choice":{
										"80":{
											"Text": "80 to 90 degrees?",
											"Do": "jump Time-Fail-C"
										},
										"92":{
											"Text": "90 to 92 degres, it is.",
											"Do": "jump Temp-Correct-Med-Rough"
										},
										"96":{
											"Text": "Lets go high, 92 to 96.",
											"Do": "jump Time-Fail-C"
										},
										"90":{
											"Text": "Hmmm, lets try 90 to 96.",
											"Do": "jump Time-Fail-C"
										},

									}}

							],


							"Time-Correct-Med-Rough":[

							    "s Next, we decide how long we're gonna brew it.",
							    "m Let me guess, time matters too?",
							    "s Correct! Contact time balances the taste, plus it binds the character of the cup.",
							    "s I usually put the contact time below 5 minutes, so its gonna be up to you!",

									{"Choice":{
										"1":{
											"Text": "3 to 4 minutes should be good.",
											"Do": "jump Character-Correct-Med-Rough"
										},
										"2":{
											"Text": "1 to 4 minutes.",
											"Do": "jump Chara-Fail-D"
										},
										"3":{
											"Text": "2 to 4 minutes maybe.",
											"Do": "jump Chara-Fail-D"
										},
										"4":{
											"Text": "Go for 1 to 3 minutes.",
											"Do": "jump Chara-Fail-D"
										},
									}}

							],

							"Character-Correct-Med-Rough":[

						   "show s giggle with fadeIn ",

								"s Hm.....",
							    "s Mmmm.....",

								"show s smile with fadeIn",

							    "s You got a real delicious one here!",
							    "s A real balanced taste, with just the right amount of acidity and the right amount of body.",
							    "s It's a bit too high for my taste, but if you want strong coffee - you brew like this!",

							    "You made a good cup of coffee! Congrats!",

							    "end",

								],

								"Temp-Fail-B":[

									"s Next, we set the temperature.",
								    "m Uh.... Hot?",
								    "s We need to be specific silly!",
								    "s Heat makes the beans soluble in water. And different temperatures mean different solubility of flavour.",
								    "m Ohhhh.... okay. So the flavour changes with different temperatures?",

								    "show s normal",

								    "s Exactly. The hotter it goes, the more the flavour blends with the water.",
								    "s I usually heat it up to around 90 degrees. But you choose how long for this cup!",

										{"Choice":{
											"80":{
												"Text": "80 to 90 degrees?",
												"Do": "jump Time-Fail-C"
											},
											"92":{
												"Text": "90 to 92 degres, it is.",
												"Do": "jump Time-Fail-C"
											},
											"96":{
												"Text": "Lets go high, 92 to 96.",
												"Do": "jump Time-Fail-C"
											},
											"90":{
												"Text": "Hmmm, lets try 90 to 96.",
												"Do": "jump Time-Fail-C"
											},

										}}

								],


								"Time-Fail-C":[

								    "s Next, we decide how long we're gonna brew it.",
								    "m Let me guess, time matters too?",
								    "s Correct! Contact time balances the taste, plus it binds the character of the cup.",
								    "s I usually put the contact time below 5 minutes, so its gonna be up to you!",

										{"Choice":{
											"1":{
												"Text": "3 to 4 minutes should be good.",
												"Do": "jump Chara-Fail-D"
											},
											"2":{
												"Text": "1 to 4 minutes.",
												"Do": "jump Chara-Fail-D"
											},
											"3":{
												"Text": "2 to 4 minutes maybe.",
												"Do": "jump Chara-Fail-D"
											},
											"4":{
												"Text": "Go for 1 to 3 minutes.",
												"Do": "jump Chara-Fail-D"
											},
										}}

								],

							"Chara-Fail-D":[

						   "show s giggle with fadeIn ",

								"s Hm.....",
							    "s Mmmm.....",

								"show s surprised with fadeIn",

							    "s Lets stick with instant coffee for now!",

							    "You made a bad cup of coffee. Try Again!",

							    "end",

								],


								"Med-Soft":[

											"show s smile",

											"s Medium-Soft grinded beans means that the beans are ground to dust but still retain some rough edges.",
											"m Is that bad?",
											"s Not at all, Medium-soft grinded beans are easier for the less coffee-inclined.",

								"show s giggle",
											"m So it's not coffee?",
										    "s It still is! It just doesnt have the strong as hell flavour. This is good for someone who doesn't mind a little coffee kick.",

								"jump Texture-Med-soft",
											],

									"Texture-Med-soft":[

										"show s smile",

										"s Now we choose what to make our coffee with.",
										"m Wait, we're using different machines?",
										"s Yup. Different machines make different characters for the coffee.",

										"s The V60, for example - is great for Medium-soft textured coffee! Brings out the flavour 10/10!",

										"m Aren't these machines expensive?",
									    "s What can I say, I love me my coffee.",
									    "s I have seven types here..",
									    "s You choose!",


														{"Choice":{
											  			"Aeropress":{
											  				"Text": "The Aeropress.",
											  				"Do": "jump Temp-Fail-B"
											  			},
															"French Press":{
											  				"Text": "The French Press.",
											  				"Do": "jump Temp-Fail-B"
											  			},
															"Chemex":{
											  				"Text": "The Chemex.",
											  				"Do": "jump Temp-Fail-B"
											  			},
															"V60":{
											  				"Text": "The V60.",
											  				"Do": "jump Temp-Correct-Med-Soft"
											  			},
															"Kalita Wave":{
											  				"Text": "The Kalita Wave.",
											  				"Do": "jump Temp-Fail-B"
											  			},
															"Clever":{
											  				"Text": "The Clever.",
											  				"Do": "jump Temp-Fail-B"
											  			},
															"Moka Pot":{
											  				"Text": "The Moka Pot.",
											  				"Do": "jump Temp-Fail-B"
											  			},



											  		}},
								  	],

									"Temp-Correct-Med-Soft":[

										"s Next, we set the temperature.",
									    "m Uh.... Hot?",
									    "s We need to be specific silly!",
									    "s Heat makes the beans soluble in water. And different temperatures mean different solubility of flavour.",
									    "m Ohhhh.... okay. So the flavour changes with different temperatures?",

									    "show s normal",

									    "s Exactly. The hotter it goes, the more the flavour blends with the water.",
									    "s I usually heat it up to around 90 degrees. But you choose how long for this cup!",

											{"Choice":{
												"80":{
													"Text": "80 to 90 degrees?",
													"Do": "jump Time-Fail-C"
												},
												"92":{
													"Text": "90 to 92 degres, it is.",
													"Do": "jump Time-Correct-Med-Soft"
												},
												"96":{
													"Text": "Lets go high, 92 to 96.",
													"Do": "jump Time-Fail-C"
												},
												"90":{
													"Text": "Hmmm, lets try 90 to 96.",
													"Do": "jump Time-Fail-C"
												},

											}}

									],


									"Time-Correct-Med-Soft":[

									    "s Next, we decide how long we're gonna brew it.",
									    "m Let me guess, time matters too?",
									    "s Correct! Contact time balances the taste, plus it binds the character of the cup.",
									    "s I usually put the contact time below 5 minutes, so its gonna be up to you!",

											{"Choice":{
												"1":{
													"Text": "3 to 4 minutes should be good.",
													"Do": "jump Character-Correct-Med-Soft"
												},
												"2":{
													"Text": "1 to 4 minutes.",
													"Do": "jump Chara-Fail-D"
												},
												"3":{
													"Text": "2 to 4 minutes maybe.",
													"Do": "jump Chara-Fail-D"
												},
												"4":{
													"Text": "Go for 1 to 3 minutes.",
													"Do": "jump Chara-Fail-D"
												},
											}}

									],

									"Character-Correct-Med-Soft":[

								   "show s giggle with fadeIn ",

										"s Hm.....",
									    "s Mmmm.....",

										"show s smile with fadeIn",

									    "s You got a real delicious one here!",
									    "s A real balanced taste, with just the right amount of acidity and the right amount of body.",
									    "s It's a bit too high for my taste, but if you want strong coffee - you brew like this!",

									    "You made a good cup of coffee! Congrats!",

									    "end",

										],

										"Temp-Fail-B":[

											"s Next, we set the temperature.",
										    "m Uh.... Hot?",
										    "s We need to be specific silly!",
										    "s Heat makes the beans soluble in water. And different temperatures mean different solubility of flavour.",
										    "m Ohhhh.... okay. So the flavour changes with different temperatures?",

										    "show s normal",

										    "s Exactly. The hotter it goes, the more the flavour blends with the water.",
										    "s I usually heat it up to around 90 degrees. But you choose how long for this cup!",

												{"Choice":{
													"80":{
														"Text": "80 to 90 degrees?",
														"Do": "jump Time-Fail-C"
													},
													"92":{
														"Text": "90 to 92 degres, it is.",
														"Do": "jump Time-Fail-C"
													},
													"96":{
														"Text": "Lets go high, 92 to 96.",
														"Do": "jump Time-Fail-C"
													},
													"90":{
														"Text": "Hmmm, lets try 90 to 96.",
														"Do": "jump Time-Fail-C"
													},

												}}

										],


										"Time-Fail-C":[

										    "s Next, we decide how long we're gonna brew it.",
										    "m Let me guess, time matters too?",
										    "s Correct! Contact time balances the taste, plus it binds the character of the cup.",
										    "s I usually put the contact time below 5 minutes, so its gonna be up to you!",

												{"Choice":{
													"1":{
														"Text": "3 to 4 minutes should be good.",
														"Do": "jump Chara-Fail-D"
													},
													"2":{
														"Text": "1 to 4 minutes.",
														"Do": "jump Chara-Fail-D"
													},
													"3":{
														"Text": "2 to 4 minutes maybe.",
														"Do": "jump Chara-Fail-D"
													},
													"4":{
														"Text": "Go for 1 to 3 minutes.",
														"Do": "jump Chara-Fail-D"
													},
												}}

										],

									"Chara-Fail-D":[

								   "show s giggle with fadeIn ",

										"s Hm.....",
									    "s Mmmm.....",

										"show s surprised with fadeIn",

									    "s Lets stick with instant coffee for now!",

									    "You made a bad cup of coffee. Try Again!",

									    "end",

										],

										"Medium":[

													"show s smile",

													"s Medium grinded beans means that the beans are ground just right.",
													"m Is that bad?",
													"s Not at all, Medium beans are the most varied and it really depends on your taste and how you fine tune it.",

										"show s giggle",
													"m Sounds complicated.",
														"s Don't worry! You got me.",

										"jump Texture-Medium",
													],

											"Texture-Medium":[

												"show s smile",

												"s Now we choose what to make our coffee with.",
												"m Wait, we're using different machines?",
												"s Yup. Different machines make different characters for the coffee.",

												"s The Aeropress, The Kalita and the Clever, for example - is great for Medium textured coffee! Brings out the flavour 10/10!",

												"m Aren't these machines expensive?",
													"s What can I say, I love me my coffee.",
													"s I have seven types here..",
													"s You choose!",


																{"Choice":{
																	"Aeropress":{
																		"Text": "The Aeropress.",
																		"Do": "jump Temp-Medium-1-Correct"
																	},
																	"French Press":{
																		"Text": "The French Press.",
																		"Do": "jump Temp-Fail-B"
																	},
																	"Chemex":{
																		"Text": "The Chemex.",
																		"Do": "jump Temp-Fail-B"
																	},
																	"V60":{
																		"Text": "The V60.",
																		"Do": "jump Temp-Fail-B"
																	},
																	"Kalita Wave":{
																		"Text": "The Kalita Wave.",
																		"Do": "jump Temp-Medium-2-Correct"
																	},
																	"Clever":{
																		"Text": "The Clever.",
																		"Do": "jump Temp-Medium-3-Correct"
																	},
																	"Moka Pot":{
																		"Text": "The Moka Pot.",
																		"Do": "jump Temp-Fail-B"
																	},



																}},
												],

												"Temp-Medium-1-Correct":[

													"s Next, we set the temperature.",
														"m Uh.... Hot?",
														"s We need to be specific silly!",
														"s Heat makes the beans soluble in water. And different temperatures mean different solubility of flavour.",
														"m Ohhhh.... okay. So the flavour changes with different temperatures?",

														"show s normal",

														"s Exactly. The hotter it goes, the more the flavour blends with the water.",
														"s I usually heat it up to around 90 degrees. But you choose how long for this cup!",

														{"Choice":{
															"80":{
																"Text": "80 to 90 degrees?",
																"Do": "jump Time-Medium-1-Correct"
															},
															"92":{
																"Text": "90 to 92 degres, it is.",
																"Do": "jump Time-Fail-C"
															},
															"96":{
																"Text": "Lets go high, 92 to 96.",
																"Do": "jump Time-Fail-C"
															},
															"90":{
																"Text": "Hmmm, lets try 90 to 96.",
																"Do": "jump Time-Fail-C"
															},

														}}

												],


												"Time-Medium-1-Correct":[

														"s Next, we decide how long we're gonna brew it.",
														"m Let me guess, time matters too?",
														"s Correct! Contact time balances the taste, plus it binds the character of the cup.",
														"s I usually put the contact time below 5 minutes, so its gonna be up to you!",

														{"Choice":{
															"1":{
																"Text": "3 to 4 minutes should be good.",
																"Do": "jump Character-Correct-Medium-1"
															},
															"2":{
																"Text": "1 to 4 minutes.",
																"Do": "jump Chara-Fail-D"
															},
															"3":{
																"Text": "2 to 4 minutes maybe.",
																"Do": "jump Chara-Fail-D"
															},
															"4":{
																"Text": "Go for 1 to 3 minutes.",
																"Do": "jump Chara-Fail-D"
															},
														}}

												],

												"Character-Correct-Medium-1":[

												 "show s giggle with fadeIn ",

													"s Hm.....",
														"s Mmmm.....",

													"show s smile with fadeIn",

														"s You got a real delicious one here!",
														"s A real balanced taste, with just the right amount of acidity and the right amount of body.",
														"s It's a bit too high for my taste, but if you want strong coffee - you brew like this!",

														"You made a good cup of coffee! Congrats!",

														"end",

													],

													"Temp-Fail-B":[

														"s Next, we set the temperature.",
															"m Uh.... Hot?",
															"s We need to be specific silly!",
															"s Heat makes the beans soluble in water. And different temperatures mean different solubility of flavour.",
															"m Ohhhh.... okay. So the flavour changes with different temperatures?",

															"show s normal",

															"s Exactly. The hotter it goes, the more the flavour blends with the water.",
															"s I usually heat it up to around 90 degrees. But you choose how long for this cup!",

															{"Choice":{
																"80":{
																	"Text": "80 to 90 degrees?",
																	"Do": "jump Time-Fail-C"
																},
																"92":{
																	"Text": "90 to 92 degres, it is.",
																	"Do": "jump Time-Fail-C"
																},
																"96":{
																	"Text": "Lets go high, 92 to 96.",
																	"Do": "jump Time-Fail-C"
																},
																"90":{
																	"Text": "Hmmm, lets try 90 to 96.",
																	"Do": "jump Time-Fail-C"
																},

															}}

													],


													"Time-Fail-C":[

															"s Next, we decide how long we're gonna brew it.",
															"m Let me guess, time matters too?",
															"s Correct! Contact time balances the taste, plus it binds the character of the cup.",
															"s I usually put the contact time below 5 minutes, so its gonna be up to you!",

															{"Choice":{
																"1":{
																	"Text": "3 to 4 minutes should be good.",
																	"Do": "jump Chara-Fail-D"
																},
																"2":{
																	"Text": "1 to 4 minutes.",
																	"Do": "jump Chara-Fail-D"
																},
																"3":{
																	"Text": "2 to 4 minutes maybe.",
																	"Do": "jump Chara-Fail-D"
																},
																"4":{
																	"Text": "Go for 1 to 3 minutes.",
																	"Do": "jump Chara-Fail-D"
																},
															}}

													],

												"Chara-Fail-D":[

												 "show s giggle with fadeIn ",

													"s Hm.....",
														"s Mmmm.....",

													"show s surprised with fadeIn",

														"s Lets stick with instant coffee for now!",

														"You made a bad cup of coffee. Try Again!",

														"end",

													],


																									"Temp-Medium-2-Correct":[

																										"s Next, we set the temperature.",
																											"m Uh.... Hot?",
																											"s We need to be specific silly!",
																											"s Heat makes the beans soluble in water. And different temperatures mean different solubility of flavour.",
																											"m Ohhhh.... okay. So the flavour changes with different temperatures?",

																											"show s normal",

																											"s Exactly. The hotter it goes, the more the flavour blends with the water.",
																											"s I usually heat it up to around 90 degrees. But you choose how long for this cup!",

																											{"Choice":{
																												"80":{
																													"Text": "80 to 90 degrees?",
																													"Do": "jump Time-Fail-C"
																												},
																												"92":{
																													"Text": "90 to 92 degres, it is.",
																													"Do": "jump Time-Medium-2-Correct"
																												},
																												"96":{
																													"Text": "Lets go high, 92 to 96.",
																													"Do": "jump Time-Fail-C"
																												},
																												"90":{
																													"Text": "Hmmm, lets try 90 to 96.",
																													"Do": "jump Time-Fail-C"
																												},

																											}}

																									],


																									"Time-Medium-2-Correct":[

																											"s Next, we decide how long we're gonna brew it.",
																											"m Let me guess, time matters too?",
																											"s Correct! Contact time balances the taste, plus it binds the character of the cup.",
																											"s I usually put the contact time below 5 minutes, so its gonna be up to you!",

																											{"Choice":{
																												"1":{
																													"Text": "3 to 4 minutes should be good.",
																													"Do": "jump Chara-Fail-D"
																												},
																												"2":{
																													"Text": "1 to 4 minutes.",
																													"Do": "jump Chara-Fail-D"
																												},
																												"3":{
																													"Text": "2 to 4 minutes maybe.",
																													"Do": "jump Character-Correct-Medium-2"
																												},
																												"4":{
																													"Text": "Go for 1 to 3 minutes.",
																													"Do": "jump Chara-Fail-D"
																												},
																											}}

																									],

																									"Character-Correct-Medium-2":[

																									 "show s giggle with fadeIn ",

																										"s Hm.....",
																											"s Mmmm.....",

																										"show s smile with fadeIn",

																											"s You got a real delicious one here!",
																											"s A real balanced taste, with just the right amount of acidity and the right amount of body.",
																											"s It's a bit too high for my taste, but if you want strong coffee - you brew like this!",

																											"You made a good cup of coffee! Congrats!",

																											"end",

																										],

																										"Temp-Fail-B":[

																											"s Next, we set the temperature.",
																												"m Uh.... Hot?",
																												"s We need to be specific silly!",
																												"s Heat makes the beans soluble in water. And different temperatures mean different solubility of flavour.",
																												"m Ohhhh.... okay. So the flavour changes with different temperatures?",

																												"show s normal",

																												"s Exactly. The hotter it goes, the more the flavour blends with the water.",
																												"s I usually heat it up to around 90 degrees. But you choose how long for this cup!",

																												{"Choice":{
																													"80":{
																														"Text": "80 to 90 degrees?",
																														"Do": "jump Time-Fail-C"
																													},
																													"92":{
																														"Text": "90 to 92 degres, it is.",
																														"Do": "jump Time-Fail-C"
																													},
																													"96":{
																														"Text": "Lets go high, 92 to 96.",
																														"Do": "jump Time-Fail-C"
																													},
																													"90":{
																														"Text": "Hmmm, lets try 90 to 96.",
																														"Do": "jump Time-Fail-C"
																													},

																												}}

																										],


																										"Time-Fail-C":[

																												"s Next, we decide how long we're gonna brew it.",
																												"m Let me guess, time matters too?",
																												"s Correct! Contact time balances the taste, plus it binds the character of the cup.",
																												"s I usually put the contact time below 5 minutes, so its gonna be up to you!",

																												{"Choice":{
																													"1":{
																														"Text": "3 to 4 minutes should be good.",
																														"Do": "jump Chara-Fail-D"
																													},
																													"2":{
																														"Text": "1 to 4 minutes.",
																														"Do": "jump Chara-Fail-D"
																													},
																													"3":{
																														"Text": "2 to 4 minutes maybe.",
																														"Do": "jump Chara-Fail-D"
																													},
																													"4":{
																														"Text": "Go for 1 to 3 minutes.",
																														"Do": "jump Chara-Fail-D"
																													},
																												}}

																										],

																									"Chara-Fail-D":[

																									 "show s giggle with fadeIn ",

																										"s Hm.....",
																											"s Mmmm.....",

																										"show s surprised with fadeIn",

																											"s Lets stick with instant coffee for now!",

																											"You made a bad cup of coffee. Try Again!",

																											"end",

																										],



																																																			"Temp-Medium-3-Correct":[

																																																				"s Next, we set the temperature.",
																																																					"m Uh.... Hot?",
																																																					"s We need to be specific silly!",
																																																					"s Heat makes the beans soluble in water. And different temperatures mean different solubility of flavour.",
																																																					"m Ohhhh.... okay. So the flavour changes with different temperatures?",

																																																					"show s normal",

																																																					"s Exactly. The hotter it goes, the more the flavour blends with the water.",
																																																					"s I usually heat it up to around 90 degrees. But you choose how long for this cup!",

																																																					{"Choice":{
																																																						"80":{
																																																							"Text": "80 to 90 degrees?",
																																																							"Do": "jump Time-Fail-C"
																																																						},
																																																						"92":{
																																																							"Text": "90 to 92 degres, it is.",
																																																							"Do": "jump Time-Medium-3-Correct"
																																																						},
																																																						"96":{
																																																							"Text": "Lets go high, 92 to 96.",
																																																							"Do": "jump Time-Fail-C"
																																																						},
																																																						"90":{
																																																							"Text": "Hmmm, lets try 90 to 96.",
																																																							"Do": "jump Time-Fail-C"
																																																						},

																																																					}}

																																																			],


																																																			"Time-Medium-3-Correct":[

																																																					"s Next, we decide how long we're gonna brew it.",
																																																					"m Let me guess, time matters too?",
																																																					"s Correct! Contact time balances the taste, plus it binds the character of the cup.",
																																																					"s I usually put the contact time below 5 minutes, so its gonna be up to you!",

																																																					{"Choice":{
																																																						"1":{
																																																							"Text": "3 to 4 minutes should be good.",
																																																							"Do": "jump Chara-Fail-D"
																																																						},
																																																						"2":{
																																																							"Text": "1 to 4 minutes.",
																																																							"Do": "jump Chara-Fail-D"
																																																						},
																																																						"3":{
																																																							"Text": "2 to 4 minutes maybe.",
																																																							"Do": "jump Character-Correct-Medium-3"
																																																						},
																																																						"4":{
																																																							"Text": "Go for 1 to 3 minutes.",
																																																							"Do": "jump Chara-Fail-D"
																																																						},
																																																					}}

																																																			],

																																																			"Character-Correct-Medium-3":[

																																																			 "show s giggle with fadeIn ",

																																																				"s Hm.....",
																																																					"s Mmmm.....",

																																																				"show s smile with fadeIn",

																																																					"s You got a real delicious one here!",
																																																					"s A real balanced taste, with just the right amount of acidity and the right amount of body.",
																																																					"s It's a bit too high for my taste, but if you want strong coffee - you brew like this!",

																																																					"You made a good cup of coffee! Congrats!",

																																																					"end",

																																																				],

																																																				"Temp-Fail-B":[

																																																					"s Next, we set the temperature.",
																																																						"m Uh.... Hot?",
																																																						"s We need to be specific silly!",
																																																						"s Heat makes the beans soluble in water. And different temperatures mean different solubility of flavour.",
																																																						"m Ohhhh.... okay. So the flavour changes with different temperatures?",

																																																						"show s normal",

																																																						"s Exactly. The hotter it goes, the more the flavour blends with the water.",
																																																						"s I usually heat it up to around 90 degrees. But you choose how long for this cup!",

																																																						{"Choice":{
																																																							"80":{
																																																								"Text": "80 to 90 degrees?",
																																																								"Do": "jump Time-Fail-C"
																																																							},
																																																							"92":{
																																																								"Text": "90 to 92 degres, it is.",
																																																								"Do": "jump Time-Fail-C"
																																																							},
																																																							"96":{
																																																								"Text": "Lets go high, 92 to 96.",
																																																								"Do": "jump Time-Fail-C"
																																																							},
																																																							"90":{
																																																								"Text": "Hmmm, lets try 90 to 96.",
																																																								"Do": "jump Time-Fail-C"
																																																							},

																																																						}}

																																																				],


																																																				"Time-Fail-C":[

																																																						"s Next, we decide how long we're gonna brew it.",
																																																						"m Let me guess, time matters too?",
																																																						"s Correct! Contact time balances the taste, plus it binds the character of the cup.",
																																																						"s I usually put the contact time below 5 minutes, so its gonna be up to you!",

																																																						{"Choice":{
																																																							"1":{
																																																								"Text": "3 to 4 minutes should be good.",
																																																								"Do": "jump Chara-Fail-D"
																																																							},
																																																							"2":{
																																																								"Text": "1 to 4 minutes.",
																																																								"Do": "jump Chara-Fail-D"
																																																							},
																																																							"3":{
																																																								"Text": "2 to 4 minutes maybe.",
																																																								"Do": "jump Chara-Fail-D"
																																																							},
																																																							"4":{
																																																								"Text": "Go for 1 to 3 minutes.",
																																																								"Do": "jump Chara-Fail-D"
																																																							},
																																																						}}

																																																				],

																																																			"Chara-Fail-D":[

																																																			 "show s giggle with fadeIn ",

																																																				"s Hm.....",
																																																					"s Mmmm.....",

																																																				"show s surprised with fadeIn",

																																																					"s Lets stick with instant coffee for now!",

																																																					"You made a bad cup of coffee. Try Again!",

																																																					"end",

																																																				],

}
