
mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kcmV3MjAyNCIsImEiOiJjbHRqZWplM2gwcGtqMmlyaGxwM3VrMHB4In0.vTZ3sbLHtpYFaU2Px_rfvQ';

// Create a new dark theme map
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/dark-v9', //stylesheet location
    center: [-98, 38.88], // starting position
    zoom: 2, // starting zoom
  });

var firebaseData = {
    "Sheet1": [
      {
        "City": "Marysville",
        "State": "Washington",
        "Population": 63269,
        "lat": 48.0517637,
        "lon": -122.1770818
      },
      {
        "City": "Perris",
        "State": "California",
        "Population": 72326,
        "lat": 33.7825194,
        "lon": -117.22864779999999
      },
      {
        "City": "Cleveland",
        "State": "Ohio",
        "Population": 390113,
        "lat": 41.499320000000004,
        "lon": -81.6943605
      },
      {
        "City": "Worcester",
        "State": "Massachusetts",
        "Population": 182544,
        "lat": 42.262593200000005,
        "lon": -71.8022934
      },
      {
        "City": "Columbia",
        "State": "South Carolina",
        "Population": 133358,
        "lat": 34.0007104,
        "lon": -81.0348144
      },
      {
        "City": "Waterbury",
        "State": "Connecticut",
        "Population": 109676,
        "lat": 41.558152500000006,
        "lon": -73.0514965
      },
      {
        "City": "Eagan",
        "State": "Minnesota",
        "Population": 65453,
        "lat": 44.804132200000005,
        "lon": -93.1668858
      },
      {
        "City": "Southfield",
        "State": "Michigan",
        "Population": 73006,
        "lat": 42.473368799999996,
        "lon": -83.2218731
      },
      {
        "City": "Lafayette",
        "State": "Louisiana",
        "Population": 124276,
        "lat": 30.2240897,
        "lon": -92.0198427
      },
      {
        "City": "Boise City",
        "State": "Idaho",
        "Population": 214237,
        "lat": 43.6187102,
        "lon": -116.2146068
      },
      {
        "City": "Elkhart",
        "State": "Indiana",
        "Population": 51265,
        "lat": 41.6819935,
        "lon": -85.9766671
      },
      {
        "City": "Buena Park",
        "State": "California",
        "Population": 82882,
        "lat": 33.867514299999996,
        "lon": -117.99811809999999
      },
      {
        "City": "Marietta",
        "State": "Georgia",
        "Population": 59089,
        "lat": 33.952602,
        "lon": -84.5499327
      },
      {
        "City": "Parker",
        "State": "Colorado",
        "Population": 48608,
        "lat": 39.5186002,
        "lon": -104.76136329999999
      },
      {
        "City": "West Palm Beach",
        "State": "Florida",
        "Population": 102436,
        "lat": 26.7153424,
        "lon": -80.0533746
      },
      {
        "City": "Salem",
        "State": "Massachusetts",
        "Population": 42544,
        "lat": 42.51954,
        "lon": -70.8967155
      },
      {
        "City": "Aurora",
        "State": "Illinois",
        "Population": 199963,
        "lat": 41.7605849,
        "lon": -88.3200715
      },
      {
        "City": "Leesburg",
        "State": "Virginia",
        "Population": 47673,
        "lat": 39.1156615,
        "lon": -77.5636015
      },
      {
        "City": "Doral",
        "State": "Florida",
        "Population": 50213,
        "lat": 25.8195424,
        "lon": -80.3553302
      },
      {
        "City": "Westminster",
        "State": "California",
        "Population": 91739,
        "lat": 33.7513419,
        "lon": -117.99399209999999
      },
      {
        "City": "Lubbock",
        "State": "Texas",
        "Population": 239538,
        "lat": 33.5778631,
        "lon": -101.85516650000001
      },
      {
        "City": "Overland Park",
        "State": "Kansas",
        "Population": 181260,
        "lat": 38.9822282,
        "lon": -94.6707917
      },
      {
        "City": "Jackson",
        "State": "Mississippi",
        "Population": 172638,
        "lat": 32.298757300000005,
        "lon": -90.1848103
      },
      {
        "City": "Gastonia",
        "State": "North Carolina",
        "Population": 73209,
        "lat": 35.262082,
        "lon": -81.1873005
      },
      {
        "City": "Daytona Beach",
        "State": "Florida",
        "Population": 62316,
        "lat": 29.2108147,
        "lon": -81.02283309999999
      },
      {
        "City": "Kansas City",
        "State": "Missouri",
        "Population": 467007,
        "lat": 39.0997265,
        "lon": -94.5785667
      },
      {
        "City": "Rancho Palos Verdes",
        "State": "California",
        "Population": 42448,
        "lat": 33.7444613,
        "lon": -118.3870173
      },
      {
        "City": "Burnsville",
        "State": "Minnesota",
        "Population": 61434,
        "lat": 44.7677424,
        "lon": -93.27772259999999
      },
      {
        "City": "Rowlett",
        "State": "Texas",
        "Population": 58043,
        "lat": 32.9029017,
        "lon": -96.56388000000001
      },
      {
        "City": "Roswell",
        "State": "New Mexico",
        "Population": 48611,
        "lat": 33.3942655,
        "lon": -104.52302420000001
      },
      {
        "City": "Montgomery",
        "State": "Alabama",
        "Population": 201332,
        "lat": 32.366805199999995,
        "lon": -86.2999689
      },
      {
        "City": "Logan",
        "State": "Utah",
        "Population": 48913,
        "lat": 41.7369803,
        "lon": -111.83383590000001
      },
      {
        "City": "Woburn",
        "State": "Massachusetts",
        "Population": 39083,
        "lat": 42.479261799999996,
        "lon": -71.1522765
      },
      {
        "City": "Allentown",
        "State": "Pennsylvania",
        "Population": 118577,
        "lat": 40.6084305,
        "lon": -75.4901833
      },
      {
        "City": "Mount Pleasant",
        "State": "South Carolina",
        "Population": 74885,
        "lat": 32.8323225,
        "lon": -79.82842579999999
      },
      {
        "City": "Columbus",
        "State": "Georgia",
        "Population": 202824,
        "lat": 32.4609764,
        "lon": -84.9877094
      },
      {
        "City": "Buffalo",
        "State": "New York",
        "Population": 258959,
        "lat": 42.8864468,
        "lon": -78.8783689
      },
      {
        "City": "New Berlin",
        "State": "Wisconsin",
        "Population": 39834,
        "lat": 42.9764027,
        "lon": -88.10842240000001
      },
      {
        "City": "North Richland Hills",
        "State": "Texas",
        "Population": 67317,
        "lat": 32.8342952,
        "lon": -97.22890290000001
      },
      {
        "City": "Lima",
        "State": "Ohio",
        "Population": 38355,
        "lat": 40.742551,
        "lon": -84.1052256
      },
      {
        "City": "Sacramento",
        "State": "California",
        "Population": 479686,
        "lat": 38.5815719,
        "lon": -121.49439960000001
      },
      {
        "City": "Fort Smith",
        "State": "Arkansas",
        "Population": 87650,
        "lat": 35.385924200000005,
        "lon": -94.39854749999999
      },
      {
        "City": "East Providence",
        "State": "Rhode Island",
        "Population": 47149,
        "lat": 41.813711600000005,
        "lon": -71.37005450000001
      },
      {
        "City": "Urbandale",
        "State": "Iowa",
        "Population": 41776,
        "lat": 41.6266555,
        "lon": -93.71216559999999
      },
      {
        "City": "Mount Vernon",
        "State": "New York",
        "Population": 68224,
        "lat": 40.9125992,
        "lon": -73.8370786
      },
      {
        "City": "Lakewood",
        "State": "Colorado",
        "Population": 147214,
        "lat": 39.7047095,
        "lon": -105.08137340000002
      },
      {
        "City": "Henderson",
        "State": "Nevada",
        "Population": 270811,
        "lat": 36.0395247,
        "lon": -114.9817213
      },
      {
        "City": "Covina",
        "State": "California",
        "Population": 48508,
        "lat": 34.0900091,
        "lon": -117.89033970000001
      },
      {
        "City": "Stamford",
        "State": "Connecticut",
        "Population": 126456,
        "lat": 41.0534302,
        "lon": -73.53873409999999
      },
      {
        "City": "Bloomington",
        "State": "Indiana",
        "Population": 82575,
        "lat": 39.165325,
        "lon": -86.5263857
      },
      {
        "City": "Kingsport",
        "State": "Tennessee",
        "Population": 52962,
        "lat": 36.548434,
        "lon": -82.5618186
      },
      {
        "City": "Spokane",
        "State": "Washington",
        "Population": 210721,
        "lat": 47.6587802,
        "lon": -117.4260466
      },
      {
        "City": "Kennewick",
        "State": "Washington",
        "Population": 76762,
        "lat": 46.2112458,
        "lon": -119.1372338
      },
      {
        "City": "Philadelphia",
        "State": "Pennsylvania",
        "Population": 1553165,
        "lat": 39.9525839,
        "lon": -75.1652215
      },
      {
        "City": "Bellingham",
        "State": "Washington",
        "Population": 82631,
        "lat": 48.74908,
        "lon": -122.4781473
      },
      {
        "City": "Visalia",
        "State": "California",
        "Population": 127763,
        "lat": 36.330228399999996,
        "lon": -119.2920585
      },
      {
        "City": "La Crosse",
        "State": "Wisconsin",
        "Population": 51522,
        "lat": 43.8013556,
        "lon": -91.2395807
      },
      {
        "City": "Council Bluffs",
        "State": "Iowa",
        "Population": 61969,
        "lat": 41.2619444,
        "lon": -95.8608333
      },
      {
        "City": "North Lauderdale",
        "State": "Florida",
        "Population": 42757,
        "lat": 26.217305,
        "lon": -80.2258811
      },
      {
        "City": "Dallas",
        "State": "Texas",
        "Population": 1257676,
        "lat": 32.7766642,
        "lon": -96.7969879
      },
      {
        "City": "Antioch",
        "State": "California",
        "Population": 107100,
        "lat": 38.0049214,
        "lon": -121.80578899999999
      },
      {
        "City": "Sterling Heights",
        "State": "Michigan",
        "Population": 131224,
        "lat": 42.5803122,
        "lon": -83.0302033
      },
      {
        "City": "Deerfield Beach",
        "State": "Florida",
        "Population": 78041,
        "lat": 26.318412300000002,
        "lon": -80.0997657
      },
      {
        "City": "Fishers",
        "State": "Indiana",
        "Population": 83891,
        "lat": 39.95675479999999,
        "lon": -86.01335
      },
      {
        "City": "Cheyenne",
        "State": "Wyoming",
        "Population": 62448,
        "lat": 41.1399814,
        "lon": -104.8202462
      },
      {
        "City": "Murrieta",
        "State": "California",
        "Population": 107479,
        "lat": 33.553914299999995,
        "lon": -117.21392320000001
      },
      {
        "City": "Lenexa",
        "State": "Kansas",
        "Population": 50344,
        "lat": 38.9536174,
        "lon": -94.7335709
      },
      {
        "City": "Noblesville",
        "State": "Indiana",
        "Population": 56540,
        "lat": 40.0455917,
        "lon": -86.0085955
      },
      {
        "City": "Southaven",
        "State": "Mississippi",
        "Population": 50997,
        "lat": 34.9889818,
        "lon": -90.0125913
      },
      {
        "City": "Chino",
        "State": "California",
        "Population": 80988,
        "lat": 34.0122346,
        "lon": -117.68894399999999
      },
      {
        "City": "Gaithersburg",
        "State": "Maryland",
        "Population": 65690,
        "lat": 39.143440600000005,
        "lon": -77.2013705
      },
      {
        "City": "Fountain Valley",
        "State": "California",
        "Population": 56707,
        "lat": 33.7091847,
        "lon": -117.95366969999999
      },
      {
        "City": "Frederick",
        "State": "Maryland",
        "Population": 66893,
        "lat": 39.414268799999995,
        "lon": -77.41054090000002
      },
      {
        "City": "Greenville",
        "State": "North Carolina",
        "Population": 89130,
        "lat": 35.612660999999996,
        "lon": -77.3663538
      },
      {
        "City": "DeKalb",
        "State": "Illinois",
        "Population": 43849,
        "lat": 41.9294736,
        "lon": -88.7503647
      },
      {
        "City": "West Allis",
        "State": "Wisconsin",
        "Population": 60697,
        "lat": 43.0166806,
        "lon": -88.0070315
      },
      {
        "City": "Thornton",
        "State": "Colorado",
        "Population": 127359,
        "lat": 39.8680412,
        "lon": -104.9719243
      },
      {
        "City": "West Des Moines",
        "State": "Iowa",
        "Population": 61255,
        "lat": 41.5772115,
        "lon": -93.711332
      },
      {
        "City": "Fall River",
        "State": "Massachusetts",
        "Population": 88697,
        "lat": 41.7014912,
        "lon": -71.1550451
      },
      {
        "City": "Tulare",
        "State": "California",
        "Population": 61170,
        "lat": 36.20772879999999,
        "lon": -119.3473379
      },
      {
        "City": "Chula Vista",
        "State": "California",
        "Population": 256780,
        "lat": 32.6400541,
        "lon": -117.0841955
      },
      {
        "City": "Coral Springs",
        "State": "Florida",
        "Population": 126604,
        "lat": 26.271192,
        "lon": -80.27060440000001
      },
      {
        "City": "Concord",
        "State": "North Carolina",
        "Population": 83506,
        "lat": 35.4087517,
        "lon": -80.579511
      },
      {
        "City": "Smyrna",
        "State": "Georgia",
        "Population": 53438,
        "lat": 33.883992600000006,
        "lon": -84.51437609999999
      },
      {
        "City": "Apopka",
        "State": "Florida",
        "Population": 45587,
        "lat": 28.6934076,
        "lon": -81.53221490000001
      },
      {
        "City": "Grand Forks",
        "State": "North Dakota",
        "Population": 54932,
        "lat": 47.9252568,
        "lon": -97.0328547
      },
      {
        "City": "Lancaster",
        "State": "Ohio",
        "Population": 39325,
        "lat": 39.71367539999999,
        "lon": -82.59932940000002
      },
      {
        "City": "Naperville",
        "State": "Illinois",
        "Population": 144864,
        "lat": 41.7508391,
        "lon": -88.15353520000001
      },
      {
        "City": "Hollywood",
        "State": "Florida",
        "Population": 146526,
        "lat": 26.0112014,
        "lon": -80.1494901
      },
      {
        "City": "Rogers",
        "State": "Arkansas",
        "Population": 60112,
        "lat": 36.3320196,
        "lon": -94.1185366
      },
      {
        "City": "New Orleans",
        "State": "Louisiana",
        "Population": 378715,
        "lat": 29.9510658,
        "lon": -90.0715323
      },
      {
        "City": "Lakewood",
        "State": "Washington",
        "Population": 59097,
        "lat": 47.1717649,
        "lon": -122.51845800000001
      },
      {
        "City": "Oak Lawn",
        "State": "Illinois",
        "Population": 57073,
        "lat": 41.719978000000005,
        "lon": -87.7479528
      },
      {
        "City": "Caldwell",
        "State": "Idaho",
        "Population": 48957,
        "lat": 43.662938399999994,
        "lon": -116.6873596
      },
      {
        "City": "Portland",
        "State": "Oregon",
        "Population": 609456,
        "lat": 45.523062200000005,
        "lon": -122.67648159999999
      },
      {
        "City": "Concord",
        "State": "California",
        "Population": 125880,
        "lat": 37.9779776,
        "lon": -122.0310733
      },
      {
        "City": "Burien",
        "State": "Washington",
        "Population": 49858,
        "lat": 47.4703767,
        "lon": -122.3467918
      },
      {
        "City": "St. Charles",
        "State": "Missouri",
        "Population": 67569,
        "lat": 38.7881062,
        "lon": -90.4974359
      },
      {
        "City": "Waukesha",
        "State": "Wisconsin",
        "Population": 71016,
        "lat": 43.0116784,
        "lon": -88.2314813
      },
      {
        "City": "Flagstaff",
        "State": "Arizona",
        "Population": 68667,
        "lat": 35.1982836,
        "lon": -111.651302
      },
      {
        "City": "Puyallup",
        "State": "Washington",
        "Population": 38609,
        "lat": 47.1853785,
        "lon": -122.29289740000002
      },
      {
        "City": "Schenectady",
        "State": "New York",
        "Population": 65902,
        "lat": 42.8142432,
        "lon": -73.93956870000001
      },
      {
        "City": "Denver",
        "State": "Colorado",
        "Population": 649495,
        "lat": 39.739235799999996,
        "lon": -104.990251
      },
      {
        "City": "Springfield",
        "State": "Illinois",
        "Population": 117006,
        "lat": 39.7817213,
        "lon": -89.6501481
      },
      {
        "City": "Campbell",
        "State": "California",
        "Population": 40584,
        "lat": 37.2871651,
        "lon": -121.9499568
      },
      {
        "City": "Moreno Valley",
        "State": "California",
        "Population": 201175,
        "lat": 33.9424658,
        "lon": -117.2296717
      },
      {
        "City": "Kettering",
        "State": "Ohio",
        "Population": 55870,
        "lat": 39.6895036,
        "lon": -84.16882740000001
      },
      {
        "City": "Lincoln Park",
        "State": "Michigan",
        "Population": 37313,
        "lat": 42.250594299999996,
        "lon": -83.17853609999999
      },
      {
        "City": "Lake Havasu City",
        "State": "Arizona",
        "Population": 52844,
        "lat": 34.483901,
        "lon": -114.32245479999999
      },
      {
        "City": "North Little Rock",
        "State": "Arkansas",
        "Population": 66075,
        "lat": 34.769535999999995,
        "lon": -92.2670941
      },
      {
        "City": "Reno",
        "State": "Nevada",
        "Population": 233294,
        "lat": 39.529632899999996,
        "lon": -119.8138027
      },
      {
        "City": "Littleton",
        "State": "Colorado",
        "Population": 44275,
        "lat": 39.613321,
        "lon": -105.0166498
      },
      {
        "City": "Prescott",
        "State": "Arizona",
        "Population": 40590,
        "lat": 34.540024200000005,
        "lon": -112.46850249999999
      },
      {
        "City": "Dublin",
        "State": "California",
        "Population": 52105,
        "lat": 37.7021521,
        "lon": -121.9357918
      },
      {
        "City": "Texarkana",
        "State": "Texas",
        "Population": 37442,
        "lat": 33.425125,
        "lon": -94.0476882
      },
      {
        "City": "Portland",
        "State": "Maine",
        "Population": 66318,
        "lat": 43.661471,
        "lon": -70.2553259
      },
      {
        "City": "Brooklyn Park",
        "State": "Minnesota",
        "Population": 78373,
        "lat": 45.0941315,
        "lon": -93.3563405
      },
      {
        "City": "West Haven",
        "State": "Connecticut",
        "Population": 55046,
        "lat": 41.2705484,
        "lon": -72.94697109999998
      },
      {
        "City": "El Centro",
        "State": "California",
        "Population": 43363,
        "lat": 32.792,
        "lon": -115.56305139999999
      },
      {
        "City": "The Colony",
        "State": "Texas",
        "Population": 39458,
        "lat": 33.0806083,
        "lon": -96.8928309
      },
      {
        "City": "Flint",
        "State": "Michigan",
        "Population": 99763,
        "lat": 43.012527399999996,
        "lon": -83.6874562
      },
      {
        "City": "Pittsburg",
        "State": "California",
        "Population": 66695,
        "lat": 38.027976200000005,
        "lon": -121.88468059999998
      },
      {
        "City": "Buckeye",
        "State": "Arizona",
        "Population": 56683,
        "lat": 33.370319699999996,
        "lon": -112.58377659999998
      },
      {
        "City": "Brea",
        "State": "California",
        "Population": 40963,
        "lat": 33.9166805,
        "lon": -117.9000604
      },
      {
        "City": "Indio",
        "State": "California",
        "Population": 83539,
        "lat": 33.7205771,
        "lon": -116.2155619
      },
      {
        "City": "Scottsdale",
        "State": "Arizona",
        "Population": 226918,
        "lat": 33.494170399999994,
        "lon": -111.9260519
      },
      {
        "City": "Columbus",
        "State": "Ohio",
        "Population": 822553,
        "lat": 39.9611755,
        "lon": -82.9987942
      },
      {
        "City": "Lancaster",
        "State": "Pennsylvania",
        "Population": 59325,
        "lat": 40.0378755,
        "lon": -76.3055144
      },
      {
        "City": "Lincoln",
        "State": "Nebraska",
        "Population": 268738,
        "lat": 40.8257625,
        "lon": -96.6851982
      },
      {
        "City": "Trenton",
        "State": "New Jersey",
        "Population": 84349,
        "lat": 40.2170534,
        "lon": -74.74293840000001
      },
      {
        "City": "Boston",
        "State": "Massachusetts",
        "Population": 645966,
        "lat": 42.360082500000004,
        "lon": -71.0588801
      },
      {
        "City": "Glendora",
        "State": "California",
        "Population": 51074,
        "lat": 34.136118700000004,
        "lon": -117.86533899999999
      },
      {
        "City": "Rochester",
        "State": "Minnesota",
        "Population": 110742,
        "lat": 44.0121221,
        "lon": -92.4801989
      },
      {
        "City": "Florissant",
        "State": "Missouri",
        "Population": 52363,
        "lat": 38.789217,
        "lon": -90.322614
      },
      {
        "City": "Annapolis",
        "State": "Maryland",
        "Population": 38722,
        "lat": 38.9784453,
        "lon": -76.4921829
      },
      {
        "City": "Chapel Hill",
        "State": "North Carolina",
        "Population": 59635,
        "lat": 35.913199600000006,
        "lon": -79.05584449999999
      },
      {
        "City": "Lawrence",
        "State": "Indiana",
        "Population": 47135,
        "lat": 39.8386516,
        "lon": -86.0252612
      },
      {
        "City": "Calexico",
        "State": "California",
        "Population": 39389,
        "lat": 32.6789476,
        "lon": -115.4988834
      },
      {
        "City": "Calumet City",
        "State": "Illinois",
        "Population": 37240,
        "lat": 41.6155909,
        "lon": -87.5294871
      },
      {
        "City": "Missoula",
        "State": "Montana",
        "Population": 69122,
        "lat": 46.8787176,
        "lon": -113.99658600000001
      },
      {
        "City": "Clovis",
        "State": "California",
        "Population": 99769,
        "lat": 36.8252277,
        "lon": -119.70291940000001
      },
      {
        "City": "Pearland",
        "State": "Texas",
        "Population": 100065,
        "lat": 29.5635666,
        "lon": -95.2860474
      },
      {
        "City": "Gilbert",
        "State": "Arizona",
        "Population": 229972,
        "lat": 33.3528264,
        "lon": -111.789027
      },
      {
        "City": "Wausau",
        "State": "Wisconsin",
        "Population": 39309,
        "lat": 44.9591352,
        "lon": -89.6301221
      },
      {
        "City": "Raleigh",
        "State": "North Carolina",
        "Population": 431746,
        "lat": 35.7795897,
        "lon": -78.6381787
      },
      {
        "City": "Orange",
        "State": "California",
        "Population": 139969,
        "lat": 33.787794399999996,
        "lon": -117.8531119
      },
      {
        "City": "Walnut Creek",
        "State": "California",
        "Population": 66900,
        "lat": 37.9100783,
        "lon": -122.06518190000001
      },
      {
        "City": "Bremerton",
        "State": "Washington",
        "Population": 39056,
        "lat": 47.567320200000005,
        "lon": -122.6329356
      },
      {
        "City": "Porterville",
        "State": "California",
        "Population": 55174,
        "lat": 36.06523,
        "lon": -119.0167679
      },
      {
        "City": "Marana",
        "State": "Arizona",
        "Population": 38290,
        "lat": 32.436381,
        "lon": -111.2224422
      },
      {
        "City": "Tallahassee",
        "State": "Florida",
        "Population": 186411,
        "lat": 30.4382559,
        "lon": -84.2807329
      },
      {
        "City": "Conroe",
        "State": "Texas",
        "Population": 63032,
        "lat": 30.311876899999998,
        "lon": -95.4560512
      },
      {
        "City": "Blacksburg",
        "State": "Virginia",
        "Population": 43609,
        "lat": 37.2295733,
        "lon": -80.4139393
      },
      {
        "City": "San Antonio",
        "State": "Texas",
        "Population": 1409019,
        "lat": 29.4241219,
        "lon": -98.4936282
      },
      {
        "City": "Hartford",
        "State": "Connecticut",
        "Population": 125017,
        "lat": 41.7637111,
        "lon": -72.6850932
      },
      {
        "City": "Waterloo",
        "State": "Iowa",
        "Population": 68366,
        "lat": 42.492785999999995,
        "lon": -92.3425775
      },
      {
        "City": "Binghamton",
        "State": "New York",
        "Population": 46444,
        "lat": 42.0986867,
        "lon": -75.9179738
      },
      {
        "City": "Meridian",
        "State": "Idaho",
        "Population": 83596,
        "lat": 43.61210870000001,
        "lon": -116.39151310000001
      },
      {
        "City": "Fond du Lac",
        "State": "Wisconsin",
        "Population": 42970,
        "lat": 43.7730448,
        "lon": -88.44705079999999
      },
      {
        "City": "Baytown",
        "State": "Texas",
        "Population": 75418,
        "lat": 29.735504700000003,
        "lon": -94.97742740000001
      },
      {
        "City": "Cary",
        "State": "North Carolina",
        "Population": 151088,
        "lat": 35.791540000000005,
        "lon": -78.78111690000001
      },
      {
        "City": "Weymouth Town",
        "State": "Massachusetts",
        "Population": 55419,
        "lat": 42.2180724,
        "lon": -70.94103559999999
      },
      {
        "City": "Tulsa",
        "State": "Oklahoma",
        "Population": 398121,
        "lat": 36.1539816,
        "lon": -95.992775
      },
      {
        "City": "Mission",
        "State": "Texas",
        "Population": 81050,
        "lat": 26.2159066,
        "lon": -98.3252932
      },
      {
        "City": "Cuyahoga Falls",
        "State": "Ohio",
        "Population": 49267,
        "lat": 41.133944899999996,
        "lon": -81.48455849999999
      },
      {
        "City": "Malden",
        "State": "Massachusetts",
        "Population": 60509,
        "lat": 42.4250964,
        "lon": -71.066163
      },
      {
        "City": "Allen",
        "State": "Texas",
        "Population": 92020,
        "lat": 33.1031744,
        "lon": -96.6705503
      },
      {
        "City": "Tucson",
        "State": "Arizona",
        "Population": 526116,
        "lat": 32.2217429,
        "lon": -110.926479
      },
      {
        "City": "Franklin",
        "State": "Tennessee",
        "Population": 68886,
        "lat": 35.9250637,
        "lon": -86.86888990000001
      },
      {
        "City": "Shakopee",
        "State": "Minnesota",
        "Population": 39167,
        "lat": 44.79739620000001,
        "lon": -93.5272861
      },
      {
        "City": "Jacksonville",
        "State": "Florida",
        "Population": 842583,
        "lat": 30.3321838,
        "lon": -81.655651
      },
      {
        "City": "Atlantic City",
        "State": "New Jersey",
        "Population": 39551,
        "lat": 39.3642834,
        "lon": -74.4229266
      },
      {
        "City": "Erie",
        "State": "Pennsylvania",
        "Population": 100671,
        "lat": 42.1292241,
        "lon": -80.085059
      },
      {
        "City": "Merced",
        "State": "California",
        "Population": 81102,
        "lat": 37.3021632,
        "lon": -120.48296770000002
      },
      {
        "City": "Abilene",
        "State": "Texas",
        "Population": 120099,
        "lat": 32.4487364,
        "lon": -99.7331439
      },
      {
        "City": "Yorba Linda",
        "State": "California",
        "Population": 67032,
        "lat": 33.888625899999994,
        "lon": -117.8131125
      },
      {
        "City": "Greenville",
        "State": "South Carolina",
        "Population": 61397,
        "lat": 34.8526176,
        "lon": -82.3940104
      },
      {
        "City": "Huntersville",
        "State": "North Carolina",
        "Population": 50458,
        "lat": 35.410694,
        "lon": -80.8428504
      },
      {
        "City": "St. Clair Shores",
        "State": "Michigan",
        "Population": 60070,
        "lat": 42.4974085,
        "lon": -82.8963604
      },
      {
        "City": "Harrisburg",
        "State": "Pennsylvania",
        "Population": 49188,
        "lat": 40.273191100000005,
        "lon": -76.88670079999999
      },
      {
        "City": "San Buenaventura (Ventura)",
        "State": "California",
        "Population": 108817,
        "lat": 34.274646000000004,
        "lon": -119.22903159999998
      },
      {
        "City": "Fremont",
        "State": "California",
        "Population": 224922,
        "lat": 37.548269700000006,
        "lon": -121.98857190000001
      },
      {
        "City": "Pueblo",
        "State": "Colorado",
        "Population": 108249,
        "lat": 38.2544472,
        "lon": -104.60914090000001
      },
      {
        "City": "Chelsea",
        "State": "Massachusetts",
        "Population": 37670,
        "lat": 42.3917638,
        "lon": -71.03282840000001
      },
      {
        "City": "Belleville",
        "State": "Illinois",
        "Population": 42895,
        "lat": 38.520050399999995,
        "lon": -89.98399350000001
      },
      {
        "City": "Minneapolis",
        "State": "Minnesota",
        "Population": 400070,
        "lat": 44.977753,
        "lon": -93.2650108
      },
      {
        "City": "Bartlett",
        "State": "Tennessee",
        "Population": 58226,
        "lat": 35.204532799999996,
        "lon": -89.8739753
      },
      {
        "City": "Wichita Falls",
        "State": "Texas",
        "Population": 104898,
        "lat": 33.913708500000006,
        "lon": -98.49338730000001
      },
      {
        "City": "Missouri City",
        "State": "Texas",
        "Population": 70185,
        "lat": 29.6185669,
        "lon": -95.5377215
      },
      {
        "City": "St. Louis",
        "State": "Missouri",
        "Population": 318416,
        "lat": 38.6270025,
        "lon": -90.1994042
      },
      {
        "City": "Pharr",
        "State": "Texas",
        "Population": 73790,
        "lat": 26.1947962,
        "lon": -98.1836216
      },
      {
        "City": "Albuquerque",
        "State": "New Mexico",
        "Population": 556495,
        "lat": 35.0853336,
        "lon": -106.6055534
      },
      {
        "City": "Athens-Clarke County",
        "State": "Georgia",
        "Population": 119980,
        "lat": 33.9519347,
        "lon": -83.357567
      },
      {
        "City": "South Jordan",
        "State": "Utah",
        "Population": 59366,
        "lat": 40.5621704,
        "lon": -111.929658
      },
      {
        "City": "North Las Vegas",
        "State": "Nevada",
        "Population": 226877,
        "lat": 36.1988592,
        "lon": -115.1175013
      },
      {
        "City": "Pomona",
        "State": "California",
        "Population": 151348,
        "lat": 34.055103,
        "lon": -117.7499909
      },
      {
        "City": "Eastvale",
        "State": "California",
        "Population": 55191,
        "lat": 33.952463,
        "lon": -117.5848025
      },
      {
        "City": "Grove City",
        "State": "Ohio",
        "Population": 37490,
        "lat": 39.881451899999995,
        "lon": -83.09296440000001
      },
      {
        "City": "Lawrence",
        "State": "Kansas",
        "Population": 90811,
        "lat": 38.971668900000004,
        "lon": -95.23525009999999
      },
      {
        "City": "Midland",
        "State": "Texas",
        "Population": 123933,
        "lat": 31.9973456,
        "lon": -102.0779146
      },
      {
        "City": "Oklahoma City",
        "State": "Oklahoma",
        "Population": 610613,
        "lat": 35.4675602,
        "lon": -97.5164276
      },
      {
        "City": "Oro Valley",
        "State": "Arizona",
        "Population": 41627,
        "lat": 32.3909071,
        "lon": -110.96648799999998
      },
      {
        "City": "Mesa",
        "State": "Arizona",
        "Population": 457587,
        "lat": 33.4151843,
        "lon": -111.83147240000001
      },
      {
        "City": "Norwalk",
        "State": "Connecticut",
        "Population": 87776,
        "lat": 41.117744,
        "lon": -73.4081575
      },
      {
        "City": "Kentwood",
        "State": "Michigan",
        "Population": 50233,
        "lat": 42.8694731,
        "lon": -85.6447492
      },
      {
        "City": "Brookfield",
        "State": "Wisconsin",
        "Population": 37999,
        "lat": 43.0605671,
        "lon": -88.1064787
      },
      {
        "City": "Rockwall",
        "State": "Texas",
        "Population": 40922,
        "lat": 32.9312336,
        "lon": -96.45970890000001
      },
      {
        "City": "Mishawaka",
        "State": "Indiana",
        "Population": 47989,
        "lat": 41.6619927,
        "lon": -86.15861559999999
      },
      {
        "City": "Tustin",
        "State": "California",
        "Population": 78327,
        "lat": 33.7458511,
        "lon": -117.82616599999999
      },
      {
        "City": "St. Cloud",
        "State": "Minnesota",
        "Population": 66297,
        "lat": 45.5579451,
        "lon": -94.1632404
      },
      {
        "City": "Passaic",
        "State": "New Jersey",
        "Population": 70868,
        "lat": 40.8567662,
        "lon": -74.12847640000001
      },
      {
        "City": "Escondido",
        "State": "California",
        "Population": 148738,
        "lat": 33.1192068,
        "lon": -117.086421
      },
      {
        "City": "San Bruno",
        "State": "California",
        "Population": 42443,
        "lat": 37.6304904,
        "lon": -122.41108349999999
      },
      {
        "City": "Berkeley",
        "State": "California",
        "Population": 116768,
        "lat": 37.87159260000001,
        "lon": -122.272747
      },
      {
        "City": "San Clemente",
        "State": "California",
        "Population": 65040,
        "lat": 33.4269728,
        "lon": -117.6119925
      },
      {
        "City": "Lawton",
        "State": "Oklahoma",
        "Population": 97151,
        "lat": 34.6035669,
        "lon": -98.3959291
      },
      {
        "City": "Eau Claire",
        "State": "Wisconsin",
        "Population": 67545,
        "lat": 44.811349,
        "lon": -91.4984941
      },
      {
        "City": "Maricopa",
        "State": "Arizona",
        "Population": 45508,
        "lat": 33.058106300000006,
        "lon": -112.04764229999999
      },
      {
        "City": "DeSoto",
        "State": "Texas",
        "Population": 51483,
        "lat": 32.589699800000005,
        "lon": -96.8570738
      },
      {
        "City": "Fort Wayne",
        "State": "Indiana",
        "Population": 256496,
        "lat": 41.079273,
        "lon": -85.13935129999999
      },
      {
        "City": "Shoreline",
        "State": "Washington",
        "Population": 54790,
        "lat": 47.7556531,
        "lon": -122.3415178
      },
      {
        "City": "Medford",
        "State": "Massachusetts",
        "Population": 57170,
        "lat": 42.4184296,
        "lon": -71.10616390000001
      },
      {
        "City": "La Habra",
        "State": "California",
        "Population": 61653,
        "lat": 33.9319578,
        "lon": -117.94617340000002
      },
      {
        "City": "Albany",
        "State": "New York",
        "Population": 98424,
        "lat": 42.65257929999999,
        "lon": -73.7562317
      },
      {
        "City": "Daly City",
        "State": "California",
        "Population": 104739,
        "lat": 37.687924100000004,
        "lon": -122.47020790000002
      },
      {
        "City": "Taylor",
        "State": "Michigan",
        "Population": 61817,
        "lat": 42.240871999999996,
        "lon": -83.2696509
      },
      {
        "City": "Lynchburg",
        "State": "Virginia",
        "Population": 78014,
        "lat": 37.4137536,
        "lon": -79.1422464
      },
      {
        "City": "Bowie",
        "State": "Maryland",
        "Population": 56759,
        "lat": 39.0067768,
        "lon": -76.77913649999999
      },
      {
        "City": "Danbury",
        "State": "Connecticut",
        "Population": 83684,
        "lat": 41.394816999999996,
        "lon": -73.45401109999999
      },
      {
        "City": "Charlottesville",
        "State": "Virginia",
        "Population": 44349,
        "lat": 38.029305900000004,
        "lon": -78.4766781
      },
      {
        "City": "Coral Gables",
        "State": "Florida",
        "Population": 49631,
        "lat": 25.72149,
        "lon": -80.2683838
      },
      {
        "City": "Coeur d'Alene",
        "State": "Idaho",
        "Population": 46402,
        "lat": 47.677683200000004,
        "lon": -116.78046640000001
      },
      {
        "City": "El Monte",
        "State": "California",
        "Population": 115708,
        "lat": 34.0686206,
        "lon": -118.02756670000001
      },
      {
        "City": "Crystal Lake",
        "State": "Illinois",
        "Population": 40388,
        "lat": 42.2411344,
        "lon": -88.3161965
      },
      {
        "City": "Danville",
        "State": "California",
        "Population": 43341,
        "lat": 37.8215929,
        "lon": -121.9999606
      },
      {
        "City": "Goodyear",
        "State": "Arizona",
        "Population": 72864,
        "lat": 33.4353394,
        "lon": -112.3576567
      },
      {
        "City": "Paterson",
        "State": "New Jersey",
        "Population": 145948,
        "lat": 40.916765399999996,
        "lon": -74.171811
      },
      {
        "City": "Salem",
        "State": "Oregon",
        "Population": 160614,
        "lat": 44.9428975,
        "lon": -123.03509629999999
      },
      {
        "City": "Kissimmee",
        "State": "Florida",
        "Population": 65173,
        "lat": 28.291955699999995,
        "lon": -81.40757099999999
      },
      {
        "City": "Saginaw",
        "State": "Michigan",
        "Population": 50303,
        "lat": 43.419469899999996,
        "lon": -83.9508068
      },
      {
        "City": "Brownsville",
        "State": "Texas",
        "Population": 181860,
        "lat": 25.9017472,
        "lon": -97.4974838
      },
      {
        "City": "Flower Mound",
        "State": "Texas",
        "Population": 68609,
        "lat": 33.0145673,
        "lon": -97.0969552
      },
      {
        "City": "Grapevine",
        "State": "Texas",
        "Population": 50195,
        "lat": 32.9342919,
        "lon": -97.07806540000001
      },
      {
        "City": "Edina",
        "State": "Minnesota",
        "Population": 49376,
        "lat": 44.889686600000005,
        "lon": -93.3499489
      },
      {
        "City": "Detroit",
        "State": "Michigan",
        "Population": 688701,
        "lat": 42.331427000000005,
        "lon": -83.0457538
      },
      {
        "City": "Fairfield",
        "State": "Ohio",
        "Population": 42635,
        "lat": 39.345467299999996,
        "lon": -84.56031870000001
      },
      {
        "City": "Mansfield",
        "State": "Texas",
        "Population": 60872,
        "lat": 32.5631924,
        "lon": -97.1416768
      },
      {
        "City": "Rochester",
        "State": "New York",
        "Population": 210358,
        "lat": 43.16103,
        "lon": -77.61092190000001
      },
      {
        "City": "Birmingham",
        "State": "Alabama",
        "Population": 212113,
        "lat": 33.5206608,
        "lon": -86.80249
      },
      {
        "City": "Austin",
        "State": "Texas",
        "Population": 885400,
        "lat": 30.267153000000004,
        "lon": -97.7430608
      },
      {
        "City": "Santa Barbara",
        "State": "California",
        "Population": 90412,
        "lat": 34.4208305,
        "lon": -119.69819009999999
      },
      {
        "City": "Addison",
        "State": "Illinois",
        "Population": 37385,
        "lat": 41.931696,
        "lon": -87.9889556
      },
      {
        "City": "Rio Rancho",
        "State": "New Mexico",
        "Population": 91956,
        "lat": 35.2327544,
        "lon": -106.66304369999999
      },
      {
        "City": "Normal",
        "State": "Illinois",
        "Population": 54664,
        "lat": 40.514202600000004,
        "lon": -88.99063120000001
      },
      {
        "City": "Romeoville",
        "State": "Illinois",
        "Population": 39650,
        "lat": 41.6475306,
        "lon": -88.0895061
      },
      {
        "City": "Coon Rapids",
        "State": "Minnesota",
        "Population": 62103,
        "lat": 45.1732394,
        "lon": -93.30300629999999
      },
      {
        "City": "San Mateo",
        "State": "California",
        "Population": 101128,
        "lat": 37.562991700000005,
        "lon": -122.32552539999999
      },
      {
        "City": "Orlando",
        "State": "Florida",
        "Population": 255483,
        "lat": 28.5383355,
        "lon": -81.3792365
      },
      {
        "City": "Casper",
        "State": "Wyoming",
        "Population": 59628,
        "lat": 42.866632,
        "lon": -106.31308100000001
      },
      {
        "City": "Bedford",
        "State": "Texas",
        "Population": 48592,
        "lat": 32.844017,
        "lon": -97.1430671
      },
      {
        "City": "Wilmington",
        "State": "North Carolina",
        "Population": 112067,
        "lat": 34.2257255,
        "lon": -77.9447102
      },
      {
        "City": "Pinellas Park",
        "State": "Florida",
        "Population": 49998,
        "lat": 27.8428025,
        "lon": -82.6995443
      },
      {
        "City": "North Miami Beach",
        "State": "Florida",
        "Population": 43250,
        "lat": 25.9331488,
        "lon": -80.1625463
      },
      {
        "City": "Kansas City",
        "State": "Kansas",
        "Population": 148483,
        "lat": 39.114053000000006,
        "lon": -94.6274636
      },
      {
        "City": "Fitchburg",
        "State": "Massachusetts",
        "Population": 40383,
        "lat": 42.583422799999994,
        "lon": -71.8022955
      },
      {
        "City": "Wheeling",
        "State": "Illinois",
        "Population": 38015,
        "lat": 42.1391927,
        "lon": -87.92895909999999
      },
      {
        "City": "Newton",
        "State": "Massachusetts",
        "Population": 87971,
        "lat": 42.337041299999996,
        "lon": -71.2092214
      },
      {
        "City": "North Miami",
        "State": "Florida",
        "Population": 61007,
        "lat": 25.890094899999998,
        "lon": -80.18671379999999
      },
      {
        "City": "Norwich",
        "State": "Connecticut",
        "Population": 40347,
        "lat": 41.5242649,
        "lon": -72.07591049999999
      },
      {
        "City": "Newark",
        "State": "New Jersey",
        "Population": 278427,
        "lat": 40.735657,
        "lon": -74.1723667
      },
      {
        "City": "Alexandria",
        "State": "Louisiana",
        "Population": 48426,
        "lat": 31.3112936,
        "lon": -92.4451371
      },
      {
        "City": "Blaine",
        "State": "Minnesota",
        "Population": 60407,
        "lat": 45.1607987,
        "lon": -93.2349489
      },
      {
        "City": "Harlingen",
        "State": "Texas",
        "Population": 65665,
        "lat": 26.190630600000002,
        "lon": -97.69610259999999
      },
      {
        "City": "Lompoc",
        "State": "California",
        "Population": 43509,
        "lat": 34.6391501,
        "lon": -120.4579409
      },
      {
        "City": "Denton",
        "State": "Texas",
        "Population": 123099,
        "lat": 33.2148412,
        "lon": -97.13306829999999
      },
      {
        "City": "Galveston",
        "State": "Texas",
        "Population": 48733,
        "lat": 29.3013479,
        "lon": -94.7976958
      },
      {
        "City": "Greenwood",
        "State": "Indiana",
        "Population": 53665,
        "lat": 39.6136578,
        "lon": -86.10665259999999
      },
      {
        "City": "Salinas",
        "State": "California",
        "Population": 155662,
        "lat": 36.6777372,
        "lon": -121.6555013
      },
      {
        "City": "Miami Gardens",
        "State": "Florida",
        "Population": 111378,
        "lat": 25.942037699999997,
        "lon": -80.2456045
      },
      {
        "City": "Huntington",
        "State": "West Virginia",
        "Population": 49177,
        "lat": 38.41924960000001,
        "lon": -82.445154
      },
      {
        "City": "Laredo",
        "State": "Texas",
        "Population": 248142,
        "lat": 27.530567100000003,
        "lon": -99.48032409999999
      },
      {
        "City": "Melbourne",
        "State": "Florida",
        "Population": 77508,
        "lat": 28.0836269,
        "lon": -80.6081089
      },
      {
        "City": "Haltom City",
        "State": "Texas",
        "Population": 43580,
        "lat": 32.799573800000005,
        "lon": -97.2691817
      },
      {
        "City": "Palm Bay",
        "State": "Florida",
        "Population": 104898,
        "lat": 28.034462100000006,
        "lon": -80.5886646
      },
      {
        "City": "Wilson",
        "State": "North Carolina",
        "Population": 49628,
        "lat": 35.7212689,
        "lon": -77.91553950000001
      },
      {
        "City": "Bountiful",
        "State": "Utah",
        "Population": 43023,
        "lat": 40.8893895,
        "lon": -111.880771
      },
      {
        "City": "Ceres",
        "State": "California",
        "Population": 46714,
        "lat": 37.5949316,
        "lon": -120.9577098
      },
      {
        "City": "Parma",
        "State": "Ohio",
        "Population": 80429,
        "lat": 41.404774200000006,
        "lon": -81.72290859999998
      },
      {
        "City": "Rapid City",
        "State": "South Dakota",
        "Population": 70812,
        "lat": 44.0805434,
        "lon": -103.2310149
      },
      {
        "City": "Bell Gardens",
        "State": "California",
        "Population": 42889,
        "lat": 33.965291799999996,
        "lon": -118.1514588
      },
      {
        "City": "Commerce City",
        "State": "Colorado",
        "Population": 49799,
        "lat": 39.8083196,
        "lon": -104.9338675
      },
      {
        "City": "Springfield",
        "State": "Massachusetts",
        "Population": 153703,
        "lat": 42.1014831,
        "lon": -72.589811
      },
      {
        "City": "Fort Collins",
        "State": "Colorado",
        "Population": 152061,
        "lat": 40.5852602,
        "lon": -105.084423
      },
      {
        "City": "San Leandro",
        "State": "California",
        "Population": 87965,
        "lat": 37.7249296,
        "lon": -122.1560768
      },
      {
        "City": "Vista",
        "State": "California",
        "Population": 96929,
        "lat": 33.2000368,
        "lon": -117.2425355
      },
      {
        "City": "Yonkers",
        "State": "New York",
        "Population": 199766,
        "lat": 40.9312099,
        "lon": -73.8987469
      },
      {
        "City": "Cincinnati",
        "State": "Ohio",
        "Population": 297517,
        "lat": 39.103118200000004,
        "lon": -84.5120196
      },
      {
        "City": "Hagerstown",
        "State": "Maryland",
        "Population": 40612,
        "lat": 39.641762899999996,
        "lon": -77.7199932
      },
      {
        "City": "Sanford",
        "State": "Florida",
        "Population": 56002,
        "lat": 28.802861199999995,
        "lon": -81.269453
      },
      {
        "City": "Union City",
        "State": "New Jersey",
        "Population": 68247,
        "lat": 40.697589799999996,
        "lon": -74.2631635
      },
      {
        "City": "Toledo",
        "State": "Ohio",
        "Population": 282313,
        "lat": 41.6639383,
        "lon": -83.555212
      },
      {
        "City": "Sierra Vista",
        "State": "Arizona",
        "Population": 45129,
        "lat": 31.545500099999998,
        "lon": -110.27728559999998
      },
      {
        "City": "Newport News",
        "State": "Virginia",
        "Population": 182020,
        "lat": 37.087082099999996,
        "lon": -76.4730122
      },
      {
        "City": "Hammond",
        "State": "Indiana",
        "Population": 78967,
        "lat": 41.583368799999995,
        "lon": -87.5000412
      },
      {
        "City": "Buffalo Grove",
        "State": "Illinois",
        "Population": 41778,
        "lat": 42.1662831,
        "lon": -87.9631308
      },
      {
        "City": "Sugar Land",
        "State": "Texas",
        "Population": 83860,
        "lat": 29.6196787,
        "lon": -95.6349463
      },
      {
        "City": "Huntsville",
        "State": "Alabama",
        "Population": 186254,
        "lat": 34.730368799999994,
        "lon": -86.5861037
      },
      {
        "City": "Lodi",
        "State": "California",
        "Population": 63338,
        "lat": 38.1341477,
        "lon": -121.27221940000001
      },
      {
        "City": "Edmonds",
        "State": "Washington",
        "Population": 40727,
        "lat": 47.8106521,
        "lon": -122.37735520000001
      },
      {
        "City": "Duncanville",
        "State": "Texas",
        "Population": 39605,
        "lat": 32.6518004,
        "lon": -96.9083366
      },
      {
        "City": "Rocky Mount",
        "State": "North Carolina",
        "Population": 56954,
        "lat": 35.938210299999994,
        "lon": -77.7905339
      },
      {
        "City": "Pontiac",
        "State": "Michigan",
        "Population": 59887,
        "lat": 42.6389216,
        "lon": -83.2910468
      },
      {
        "City": "National City",
        "State": "California",
        "Population": 59834,
        "lat": 32.6781085,
        "lon": -117.0991967
      },
      {
        "City": "Hayward",
        "State": "California",
        "Population": 151574,
        "lat": 37.6688205,
        "lon": -122.08079640000001
      },
      {
        "City": "Niagara Falls",
        "State": "New York",
        "Population": 49468,
        "lat": 43.0962143,
        "lon": -79.03773879999999
      },
      {
        "City": "Sparks",
        "State": "Nevada",
        "Population": 93282,
        "lat": 39.5349112,
        "lon": -119.7526886
      },
      {
        "City": "Hanford",
        "State": "California",
        "Population": 54686,
        "lat": 36.3274502,
        "lon": -119.64568440000001
      },
      {
        "City": "Cypress",
        "State": "California",
        "Population": 49087,
        "lat": 33.8169599,
        "lon": -118.0372852
      },
      {
        "City": "Youngstown",
        "State": "Ohio",
        "Population": 65184,
        "lat": 41.0997803,
        "lon": -80.6495194
      },
      {
        "City": "Madison",
        "State": "Alabama",
        "Population": 45799,
        "lat": 34.6992579,
        "lon": -86.7483318
      },
      {
        "City": "Redlands",
        "State": "California",
        "Population": 69999,
        "lat": 34.055569299999995,
        "lon": -117.1825381
      },
      {
        "City": "Cape Girardeau",
        "State": "Missouri",
        "Population": 38816,
        "lat": 37.3058839,
        "lon": -89.51814759999999
      },
      {
        "City": "Nampa",
        "State": "Idaho",
        "Population": 86518,
        "lat": 43.5407172,
        "lon": -116.5634624
      },
      {
        "City": "Washington",
        "State": "District of Columbia",
        "Population": 646449,
        "lat": 38.9071923,
        "lon": -77.03687070000001
      },
      {
        "City": "Wheaton",
        "State": "Illinois",
        "Population": 53648,
        "lat": 41.8661403,
        "lon": -88.1070127
      },
      {
        "City": "Lancaster",
        "State": "Texas",
        "Population": 38071,
        "lat": 32.5920798,
        "lon": -96.7561082
      },
      {
        "City": "Rialto",
        "State": "California",
        "Population": 101910,
        "lat": 34.1064001,
        "lon": -117.37032350000001
      },
      {
        "City": "Fargo",
        "State": "North Dakota",
        "Population": 113658,
        "lat": 46.8771863,
        "lon": -96.78980340000001
      },
      {
        "City": "Peoria",
        "State": "Illinois",
        "Population": 116513,
        "lat": 40.6936488,
        "lon": -89.58898640000001
      },
      {
        "City": "Omaha",
        "State": "Nebraska",
        "Population": 434353,
        "lat": 41.25236339999999,
        "lon": -95.99798829999999
      },
      {
        "City": "Rancho Santa Margarita",
        "State": "California",
        "Population": 49228,
        "lat": 33.640855,
        "lon": -117.603104
      },
      {
        "City": "Manhattan",
        "State": "Kansas",
        "Population": 56143,
        "lat": 39.1836082,
        "lon": -96.5716694
      },
      {
        "City": "Palm Springs",
        "State": "California",
        "Population": 46281,
        "lat": 33.8302961,
        "lon": -116.54529209999998
      },
      {
        "City": "San Diego",
        "State": "California",
        "Population": 1355896,
        "lat": 32.715738,
        "lon": -117.1610838
      },
      {
        "City": "Santa Rosa",
        "State": "California",
        "Population": 171990,
        "lat": 38.440428999999995,
        "lon": -122.7140548
      },
      {
        "City": "Lowell",
        "State": "Massachusetts",
        "Population": 108861,
        "lat": 42.633424700000006,
        "lon": -71.3161718
      },
      {
        "City": "Broken Arrow",
        "State": "Oklahoma",
        "Population": 103500,
        "lat": 36.060949,
        "lon": -95.7974526
      },
      {
        "City": "Kent",
        "State": "Washington",
        "Population": 124435,
        "lat": 47.380933500000005,
        "lon": -122.23484309999999
      },
      {
        "City": "Nashville",
        "State": "Tennessee",
        "Population": 634464,
        "lat": 36.1626638,
        "lon": -86.78160159999999
      },
      {
        "City": "Hackensack",
        "State": "New Jersey",
        "Population": 44113,
        "lat": 40.8859325,
        "lon": -74.0434736
      },
      {
        "City": "Broomfield",
        "State": "Colorado",
        "Population": 59471,
        "lat": 39.9205411,
        "lon": -105.0866504
      },
      {
        "City": "Durham",
        "State": "North Carolina",
        "Population": 245475,
        "lat": 35.99403289999999,
        "lon": -78.898619
      },
      {
        "City": "Wichita",
        "State": "Kansas",
        "Population": 386552,
        "lat": 37.688889,
        "lon": -97.336111
      },
      {
        "City": "Cathedral City",
        "State": "California",
        "Population": 52977,
        "lat": 33.780538799999995,
        "lon": -116.46680359999999
      },
      {
        "City": "Lakeville",
        "State": "Minnesota",
        "Population": 58562,
        "lat": 44.6496868,
        "lon": -93.24271999999999
      },
      {
        "City": "Elmhurst",
        "State": "Illinois",
        "Population": 45556,
        "lat": 41.8994744,
        "lon": -87.9403418
      },
      {
        "City": "Weslaco",
        "State": "Texas",
        "Population": 37093,
        "lat": 26.159519399999997,
        "lon": -97.9908366
      },
      {
        "City": "Greenfield",
        "State": "Wisconsin",
        "Population": 37159,
        "lat": 42.9614039,
        "lon": -88.0125865
      },
      {
        "City": "Sunnyvale",
        "State": "California",
        "Population": 147559,
        "lat": 37.368829999999996,
        "lon": -122.03634960000001
      },
      {
        "City": "Santa Cruz",
        "State": "California",
        "Population": 62864,
        "lat": 36.9741171,
        "lon": -122.0307963
      },
      {
        "City": "Kenosha",
        "State": "Wisconsin",
        "Population": 99889,
        "lat": 42.5847425,
        "lon": -87.8211854
      },
      {
        "City": "State College",
        "State": "Pennsylvania",
        "Population": 41757,
        "lat": 40.793394899999996,
        "lon": -77.8600012
      },
      {
        "City": "Mansfield",
        "State": "Ohio",
        "Population": 46454,
        "lat": 40.758390000000006,
        "lon": -82.51544709999999
      },
      {
        "City": "Quincy",
        "State": "Illinois",
        "Population": 40915,
        "lat": 39.9356016,
        "lon": -91.40987259999999
      },
      {
        "City": "Pompano Beach",
        "State": "Florida",
        "Population": 104410,
        "lat": 26.2378597,
        "lon": -80.1247667
      },
      {
        "City": "San Angelo",
        "State": "Texas",
        "Population": 97492,
        "lat": 31.4637723,
        "lon": -100.4370375
      },
      {
        "City": "Bloomington",
        "State": "Illinois",
        "Population": 78902,
        "lat": 40.4842027,
        "lon": -88.9936873
      },
      {
        "City": "Tracy",
        "State": "California",
        "Population": 84691,
        "lat": 37.7396513,
        "lon": -121.42522269999999
      },
      {
        "City": "Spartanburg",
        "State": "South Carolina",
        "Population": 37647,
        "lat": 34.949567200000004,
        "lon": -81.93204820000001
      },
      {
        "City": "Nashua",
        "State": "New Hampshire",
        "Population": 87137,
        "lat": 42.7653662,
        "lon": -71.467566
      },
      {
        "City": "Macon",
        "State": "Georgia",
        "Population": 89981,
        "lat": 32.8406946,
        "lon": -83.6324022
      },
      {
        "City": "Hempstead",
        "State": "New York",
        "Population": 55361,
        "lat": 40.706212799999996,
        "lon": -73.6187397
      },
      {
        "City": "Camden",
        "State": "New Jersey",
        "Population": 76903,
        "lat": 39.9259463,
        "lon": -75.1196199
      },
      {
        "City": "Palm Desert",
        "State": "California",
        "Population": 50508,
        "lat": 33.7222445,
        "lon": -116.37445559999999
      },
      {
        "City": "Streamwood",
        "State": "Illinois",
        "Population": 40351,
        "lat": 42.02558270000001,
        "lon": -88.1784085
      },
      {
        "City": "Chesapeake",
        "State": "Virginia",
        "Population": 230571,
        "lat": 36.7682088,
        "lon": -76.2874927
      },
      {
        "City": "Dublin",
        "State": "Ohio",
        "Population": 43607,
        "lat": 40.0992294,
        "lon": -83.11407709999999
      },
      {
        "City": "Camarillo",
        "State": "California",
        "Population": 66086,
        "lat": 34.216393700000005,
        "lon": -119.0376023
      },
      {
        "City": "Muskegon",
        "State": "Michigan",
        "Population": 37213,
        "lat": 43.234181299999996,
        "lon": -86.2483921
      },
      {
        "City": "Elizabeth",
        "State": "New Jersey",
        "Population": 127558,
        "lat": 40.6639916,
        "lon": -74.2107006
      },
      {
        "City": "Anchorage",
        "State": "Alaska",
        "Population": 300950,
        "lat": 61.2180556,
        "lon": -149.90027780000003
      },
      {
        "City": "Minot",
        "State": "North Dakota",
        "Population": 46321,
        "lat": 48.23296679999999,
        "lon": -101.2922906
      },
      {
        "City": "Davie",
        "State": "Florida",
        "Population": 96830,
        "lat": 26.076478299999998,
        "lon": -80.2521157
      },
      {
        "City": "McAllen",
        "State": "Texas",
        "Population": 136639,
        "lat": 26.203407100000003,
        "lon": -98.2300124
      },
      {
        "City": "McKinney",
        "State": "Texas",
        "Population": 148559,
        "lat": 33.197246500000006,
        "lon": -96.6397822
      },
      {
        "City": "Killeen",
        "State": "Texas",
        "Population": 137147,
        "lat": 31.117119399999996,
        "lon": -97.7277959
      },
      {
        "City": "Findlay",
        "State": "Ohio",
        "Population": 41512,
        "lat": 41.04422,
        "lon": -83.6499321
      },
      {
        "City": "Oakland",
        "State": "California",
        "Population": 406253,
        "lat": 37.8043637,
        "lon": -122.27111370000002
      },
      {
        "City": "Mountain View",
        "State": "California",
        "Population": 77846,
        "lat": 37.3860517,
        "lon": -122.08385109999999
      },
      {
        "City": "Lake Elsinore",
        "State": "California",
        "Population": 57525,
        "lat": 33.668077200000006,
        "lon": -117.3272615
      },
      {
        "City": "Amarillo",
        "State": "Texas",
        "Population": 196429,
        "lat": 35.2219971,
        "lon": -101.8312969
      },
      {
        "City": "Provo",
        "State": "Utah",
        "Population": 116288,
        "lat": 40.233843799999995,
        "lon": -111.6585337
      },
      {
        "City": "Atlanta",
        "State": "Georgia",
        "Population": 447841,
        "lat": 33.7489954,
        "lon": -84.3879824
      },
      {
        "City": "Monterey Park",
        "State": "California",
        "Population": 61085,
        "lat": 34.0625106,
        "lon": -118.1228476
      },
      {
        "City": "Strongsville",
        "State": "Ohio",
        "Population": 44730,
        "lat": 41.3144966,
        "lon": -81.83569
      },
      {
        "City": "Madera",
        "State": "California",
        "Population": 63105,
        "lat": 36.961335600000005,
        "lon": -120.0607176
      },
      {
        "City": "Decatur",
        "State": "Illinois",
        "Population": 74710,
        "lat": 39.84031470000001,
        "lon": -88.9548001
      },
      {
        "City": "Woonsocket",
        "State": "Rhode Island",
        "Population": 41026,
        "lat": 42.0028761,
        "lon": -71.5147839
      },
      {
        "City": "Mobile",
        "State": "Alabama",
        "Population": 194899,
        "lat": 30.6953657,
        "lon": -88.0398912
      },
      {
        "City": "Vallejo",
        "State": "California",
        "Population": 118837,
        "lat": 38.1040864,
        "lon": -122.25663670000002
      },
      {
        "City": "Arcadia",
        "State": "California",
        "Population": 57639,
        "lat": 34.139729200000005,
        "lon": -118.0353449
      },
      {
        "City": "Collierville",
        "State": "Tennessee",
        "Population": 47333,
        "lat": 35.042035999999996,
        "lon": -89.66452659999999
      },
      {
        "City": "Jefferson City",
        "State": "Missouri",
        "Population": 43330,
        "lat": 38.57670170000001,
        "lon": -92.17351640000001
      },
      {
        "City": "Longview",
        "State": "Texas",
        "Population": 81443,
        "lat": 32.5007037,
        "lon": -94.74048909999999
      },
      {
        "City": "Chandler",
        "State": "Arizona",
        "Population": 249146,
        "lat": 33.3061605,
        "lon": -111.8412502
      },
      {
        "City": "Arvada",
        "State": "Colorado",
        "Population": 111707,
        "lat": 39.802764399999994,
        "lon": -105.08748419999999
      },
      {
        "City": "Alhambra",
        "State": "California",
        "Population": 84577,
        "lat": 34.095287,
        "lon": -118.1270146
      },
      {
        "City": "Kokomo",
        "State": "Indiana",
        "Population": 56895,
        "lat": 40.486427,
        "lon": -86.13360329999999
      },
      {
        "City": "Oakland Park",
        "State": "Florida",
        "Population": 43286,
        "lat": 26.1723065,
        "lon": -80.13198929999999
      },
      {
        "City": "Indianapolis",
        "State": "Indiana",
        "Population": 843393,
        "lat": 39.768403,
        "lon": -86.158068
      },
      {
        "City": "Boynton Beach",
        "State": "Florida",
        "Population": 71097,
        "lat": 26.531786600000004,
        "lon": -80.0905465
      },
      {
        "City": "Apache Junction",
        "State": "Arizona",
        "Population": 37130,
        "lat": 33.4150485,
        "lon": -111.5495777
      },
      {
        "City": "Mount Prospect",
        "State": "Illinois",
        "Population": 54771,
        "lat": 42.066416700000005,
        "lon": -87.9372908
      },
      {
        "City": "Cranston",
        "State": "Rhode Island",
        "Population": 80566,
        "lat": 41.7798226,
        "lon": -71.4372796
      },
      {
        "City": "Lafayette",
        "State": "Indiana",
        "Population": 70373,
        "lat": 40.4167022,
        "lon": -86.8752869
      },
      {
        "City": "Olathe",
        "State": "Kansas",
        "Population": 131885,
        "lat": 38.8813958,
        "lon": -94.8191285
      },
      {
        "City": "Johns Creek",
        "State": "Georgia",
        "Population": 82788,
        "lat": 34.0289259,
        "lon": -84.19857900000001
      },
      {
        "City": "Greensboro",
        "State": "North Carolina",
        "Population": 279639,
        "lat": 36.072635399999996,
        "lon": -79.79197540000001
      },
      {
        "City": "Kalamazoo",
        "State": "Michigan",
        "Population": 75548,
        "lat": 42.291706899999994,
        "lon": -85.5872286
      },
      {
        "City": "Tigard",
        "State": "Oregon",
        "Population": 50444,
        "lat": 45.4312294,
        "lon": -122.7714861
      },
      {
        "City": "Jacksonville",
        "State": "North Carolina",
        "Population": 69079,
        "lat": 34.7540524,
        "lon": -77.43024140000001
      },
      {
        "City": "Citrus Heights",
        "State": "California",
        "Population": 85285,
        "lat": 38.7071247,
        "lon": -121.2810611
      },
      {
        "City": "Tuscaloosa",
        "State": "Alabama",
        "Population": 95334,
        "lat": 33.2098407,
        "lon": -87.5691735
      },
      {
        "City": "Ankeny",
        "State": "Iowa",
        "Population": 51567,
        "lat": 41.7317884,
        "lon": -93.6001278
      },
      {
        "City": "Hawthorne",
        "State": "California",
        "Population": 86199,
        "lat": 33.9164032,
        "lon": -118.35257479999999
      },
      {
        "City": "Hoover",
        "State": "Alabama",
        "Population": 84126,
        "lat": 33.405386699999994,
        "lon": -86.8113781
      },
      {
        "City": "Delray Beach",
        "State": "Florida",
        "Population": 64072,
        "lat": 26.4614625,
        "lon": -80.07282009999999
      },
      {
        "City": "Wellington",
        "State": "Florida",
        "Population": 60202,
        "lat": 26.6617635,
        "lon": -80.2683571
      },
      {
        "City": "Bullhead City",
        "State": "Arizona",
        "Population": 39383,
        "lat": 35.1359386,
        "lon": -114.5285981
      },
      {
        "City": "Weston",
        "State": "Florida",
        "Population": 68388,
        "lat": 26.100365399999998,
        "lon": -80.3997748
      },
      {
        "City": "Troy",
        "State": "Michigan",
        "Population": 82821,
        "lat": 42.6064095,
        "lon": -83.1497751
      },
      {
        "City": "New Rochelle",
        "State": "New York",
        "Population": 79446,
        "lat": 40.9114882,
        "lon": -73.78235490000002
      },
      {
        "City": "Stockton",
        "State": "California",
        "Population": 298118,
        "lat": 37.9577016,
        "lon": -121.29077959999998
      },
      {
        "City": "Royal Oak",
        "State": "Michigan",
        "Population": 58946,
        "lat": 42.4894801,
        "lon": -83.1446485
      },
      {
        "City": "Titusville",
        "State": "Florida",
        "Population": 44206,
        "lat": 28.612218699999996,
        "lon": -80.8075537
      },
      {
        "City": "Laguna Niguel",
        "State": "California",
        "Population": 64652,
        "lat": 33.5225261,
        "lon": -117.70755259999999
      },
      {
        "City": "Spokane Valley",
        "State": "Washington",
        "Population": 91113,
        "lat": 47.6732281,
        "lon": -117.2393748
      },
      {
        "City": "Costa Mesa",
        "State": "California",
        "Population": 112174,
        "lat": 33.6411316,
        "lon": -117.9186689
      },
      {
        "City": "Grand Prairie",
        "State": "Texas",
        "Population": 183372,
        "lat": 32.7459645,
        "lon": -96.99778459999999
      },
      {
        "City": "Portsmouth",
        "State": "Virginia",
        "Population": 96205,
        "lat": 36.835425799999996,
        "lon": -76.29827420000001
      },
      {
        "City": "Lacey",
        "State": "Washington",
        "Population": 44919,
        "lat": 47.034262899999995,
        "lon": -122.82319150000001
      },
      {
        "City": "Apex",
        "State": "North Carolina",
        "Population": 42214,
        "lat": 35.732652,
        "lon": -78.85028559999999
      },
      {
        "City": "Sioux City",
        "State": "Iowa",
        "Population": 82459,
        "lat": 42.4999942,
        "lon": -96.4003069
      },
      {
        "City": "Encinitas",
        "State": "California",
        "Population": 61588,
        "lat": 33.0369867,
        "lon": -117.2919818
      },
      {
        "City": "Spanish Fork",
        "State": "Utah",
        "Population": 36956,
        "lat": 40.114955,
        "lon": -111.654923
      },
      {
        "City": "Huntington Park",
        "State": "California",
        "Population": 58879,
        "lat": 33.981681200000004,
        "lon": -118.22507250000001
      },
      {
        "City": "Eden Prairie",
        "State": "Minnesota",
        "Population": 62603,
        "lat": 44.8546856,
        "lon": -93.470786
      },
      {
        "City": "Peoria",
        "State": "Arizona",
        "Population": 162592,
        "lat": 33.5805955,
        "lon": -112.23737790000001
      },
      {
        "City": "Tempe",
        "State": "Arizona",
        "Population": 168228,
        "lat": 33.4255104,
        "lon": -111.9400054
      },
      {
        "City": "Wilmington",
        "State": "Delaware",
        "Population": 71525,
        "lat": 39.7390721,
        "lon": -75.5397878
      },
      {
        "City": "Taylorsville",
        "State": "Utah",
        "Population": 60519,
        "lat": 40.667724799999995,
        "lon": -111.93882579999999
      },
      {
        "City": "Westland",
        "State": "Michigan",
        "Population": 82578,
        "lat": 42.324203999999995,
        "lon": -83.400211
      },
      {
        "City": "Mesquite",
        "State": "Texas",
        "Population": 143484,
        "lat": 32.7667955,
        "lon": -96.5991593
      },
      {
        "City": "Burlington",
        "State": "North Carolina",
        "Population": 51510,
        "lat": 36.0956918,
        "lon": -79.43779909999999
      },
      {
        "City": "Garland",
        "State": "Texas",
        "Population": 234566,
        "lat": 32.912624,
        "lon": -96.6388833
      },
      {
        "City": "Richmond",
        "State": "California",
        "Population": 107571,
        "lat": 37.9357576,
        "lon": -122.3477486
      },
      {
        "City": "Bismarck",
        "State": "North Dakota",
        "Population": 67034,
        "lat": 46.808326799999996,
        "lon": -100.7837392
      },
      {
        "City": "Carson City",
        "State": "Nevada",
        "Population": 54080,
        "lat": 39.1637984,
        "lon": -119.76740339999999
      },
      {
        "City": "Muskogee",
        "State": "Oklahoma",
        "Population": 38863,
        "lat": 35.747876899999994,
        "lon": -95.36969090000001
      },
      {
        "City": "Augusta-Richmond County",
        "State": "Georgia",
        "Population": 197350,
        "lat": 33.4734978,
        "lon": -82.0105148
      },
      {
        "City": "Fayetteville",
        "State": "North Carolina",
        "Population": 204408,
        "lat": 35.0526641,
        "lon": -78.87835849999999
      },
      {
        "City": "Albany",
        "State": "Georgia",
        "Population": 76185,
        "lat": 31.578507399999996,
        "lon": -84.155741
      },
      {
        "City": "Sayreville",
        "State": "New Jersey",
        "Population": 44412,
        "lat": 40.4594021,
        "lon": -74.360846
      },
      {
        "City": "Newark",
        "State": "California",
        "Population": 44096,
        "lat": 37.5296593,
        "lon": -122.0402399
      },
      {
        "City": "Diamond Bar",
        "State": "California",
        "Population": 56449,
        "lat": 34.028622600000006,
        "lon": -117.81033670000001
      },
      {
        "City": "Decatur",
        "State": "Alabama",
        "Population": 55816,
        "lat": 34.605925299999996,
        "lon": -86.9833417
      },
      {
        "City": "Chattanooga",
        "State": "Tennessee",
        "Population": 173366,
        "lat": 35.0456297,
        "lon": -85.3096801
      },
      {
        "City": "Jeffersonville",
        "State": "Indiana",
        "Population": 45929,
        "lat": 38.27757020000001,
        "lon": -85.7371847
      },
      {
        "City": "Bartlett",
        "State": "Illinois",
        "Population": 41679,
        "lat": 41.9950276,
        "lon": -88.1856301
      },
      {
        "City": "Baldwin Park",
        "State": "California",
        "Population": 76635,
        "lat": 34.0852868,
        "lon": -117.96089779999998
      },
      {
        "City": "Miami Beach",
        "State": "Florida",
        "Population": 91026,
        "lat": 25.790654,
        "lon": -80.1300455
      },
      {
        "City": "Jackson",
        "State": "Tennessee",
        "Population": 67685,
        "lat": 35.6145169,
        "lon": -88.8139469
      },
      {
        "City": "Port Arthur",
        "State": "Texas",
        "Population": 54135,
        "lat": 29.884950399999997,
        "lon": -93.939947
      },
      {
        "City": "San Luis Obispo",
        "State": "California",
        "Population": 46377,
        "lat": 35.2827524,
        "lon": -120.6596156
      },
      {
        "City": "Burleson",
        "State": "Texas",
        "Population": 40714,
        "lat": 32.5420821,
        "lon": -97.32084920000001
      },
      {
        "City": "Newport Beach",
        "State": "California",
        "Population": 87273,
        "lat": 33.6189101,
        "lon": -117.9289469
      },
      {
        "City": "Riverton",
        "State": "Utah",
        "Population": 40921,
        "lat": 40.521893,
        "lon": -111.9391023
      },
      {
        "City": "Yakima",
        "State": "Washington",
        "Population": 93257,
        "lat": 46.6020711,
        "lon": -120.5058987
      },
      {
        "City": "Dayton",
        "State": "Ohio",
        "Population": 143355,
        "lat": 39.758947799999994,
        "lon": -84.1916069
      },
      {
        "City": "Gulfport",
        "State": "Mississippi",
        "Population": 71012,
        "lat": 30.367419800000004,
        "lon": -89.0928155
      },
      {
        "City": "Long Beach",
        "State": "California",
        "Population": 469428,
        "lat": 33.770050399999995,
        "lon": -118.1937395
      },
      {
        "City": "Chico",
        "State": "California",
        "Population": 88077,
        "lat": 39.728494399999995,
        "lon": -121.8374777
      },
      {
        "City": "Hattiesburg",
        "State": "Mississippi",
        "Population": 47556,
        "lat": 31.327118900000002,
        "lon": -89.2903392
      },
      {
        "City": "Eugene",
        "State": "Oregon",
        "Population": 159190,
        "lat": 44.0520691,
        "lon": -123.08675359999998
      },
      {
        "City": "Colton",
        "State": "California",
        "Population": 53243,
        "lat": 34.0739016,
        "lon": -117.3136547
      },
      {
        "City": "Montebello",
        "State": "California",
        "Population": 63495,
        "lat": 34.0165053,
        "lon": -118.11375349999999
      },
      {
        "City": "Pleasanton",
        "State": "California",
        "Population": 74110,
        "lat": 37.6624312,
        "lon": -121.8746789
      },
      {
        "City": "Everett",
        "State": "Washington",
        "Population": 105370,
        "lat": 47.9789848,
        "lon": -122.2020794
      },
      {
        "City": "Hutchinson",
        "State": "Kansas",
        "Population": 41889,
        "lat": 38.0608445,
        "lon": -97.9297743
      },
      {
        "City": "Fairfield",
        "State": "California",
        "Population": 109320,
        "lat": 38.2493581,
        "lon": -122.03996629999999
      },
      {
        "City": "Avondale",
        "State": "Arizona",
        "Population": 78822,
        "lat": 33.4355977,
        "lon": -112.3496021
      },
      {
        "City": "Euclid",
        "State": "Ohio",
        "Population": 48139,
        "lat": 41.5931049,
        "lon": -81.5267873
      },
      {
        "City": "Battle Creek",
        "State": "Michigan",
        "Population": 51848,
        "lat": 42.32115220000001,
        "lon": -85.17971419999999
      },
      {
        "City": "Bloomington",
        "State": "Minnesota",
        "Population": 86319,
        "lat": 44.840798,
        "lon": -93.29827990000001
      },
      {
        "City": "Rock Island",
        "State": "Illinois",
        "Population": 38877,
        "lat": 41.5094771,
        "lon": -90.57874759999999
      },
      {
        "City": "Beaverton",
        "State": "Oregon",
        "Population": 93542,
        "lat": 45.487062,
        "lon": -122.8037102
      },
      {
        "City": "Kenner",
        "State": "Louisiana",
        "Population": 66975,
        "lat": 29.9940924,
        "lon": -90.2417434
      },
      {
        "City": "Clovis",
        "State": "New Mexico",
        "Population": 39508,
        "lat": 34.4047987,
        "lon": -103.2052272
      },
      {
        "City": "Troy",
        "State": "New York",
        "Population": 49974,
        "lat": 42.7284117,
        "lon": -73.69178509999999
      },
      {
        "City": "Milpitas",
        "State": "California",
        "Population": 69783,
        "lat": 37.4323341,
        "lon": -121.8995741
      },
      {
        "City": "Des Plaines",
        "State": "Illinois",
        "Population": 58918,
        "lat": 42.03336229999999,
        "lon": -87.88339909999999
      },
      {
        "City": "Placentia",
        "State": "California",
        "Population": 52206,
        "lat": 33.87223710000001,
        "lon": -117.87033629999999
      },
      {
        "City": "Taunton",
        "State": "Massachusetts",
        "Population": 56069,
        "lat": 41.900101,
        "lon": -71.08976740000001
      },
      {
        "City": "Montclair",
        "State": "California",
        "Population": 38027,
        "lat": 34.0775104,
        "lon": -117.68977759999999
      },
      {
        "City": "Johnson City",
        "State": "Tennessee",
        "Population": 65123,
        "lat": 36.3134397,
        "lon": -82.35347270000001
      },
      {
        "City": "Savannah",
        "State": "Georgia",
        "Population": 142772,
        "lat": 32.0835407,
        "lon": -81.0998342
      },
      {
        "City": "Warren",
        "State": "Ohio",
        "Population": 40768,
        "lat": 41.237556899999994,
        "lon": -80.81841659999999
      },
      {
        "City": "Vancouver",
        "State": "Washington",
        "Population": 167405,
        "lat": 45.6387281,
        "lon": -122.6614861
      },
      {
        "City": "Sunrise",
        "State": "Florida",
        "Population": 90116,
        "lat": 26.1669711,
        "lon": -80.25659499999999
      },
      {
        "City": "Muncie",
        "State": "Indiana",
        "Population": 70316,
        "lat": 40.1933767,
        "lon": -85.3863599
      },
      {
        "City": "Lehi",
        "State": "Utah",
        "Population": 54382,
        "lat": 40.3916172,
        "lon": -111.8507662
      },
      {
        "City": "San Francisco",
        "State": "California",
        "Population": 837442,
        "lat": 37.7749295,
        "lon": -122.4194155
      },
      {
        "City": "Fontana",
        "State": "California",
        "Population": 203003,
        "lat": 34.0922335,
        "lon": -117.435048
      },
      {
        "City": "Frisco",
        "State": "Texas",
        "Population": 136791,
        "lat": 33.1506744,
        "lon": -96.82361159999999
      },
      {
        "City": "Chino Hills",
        "State": "California",
        "Population": 76572,
        "lat": 33.989818799999995,
        "lon": -117.7325848
      },
      {
        "City": "Poway",
        "State": "California",
        "Population": 49417,
        "lat": 32.9628232,
        "lon": -117.0358646
      },
      {
        "City": "Huber Heights",
        "State": "Ohio",
        "Population": 38142,
        "lat": 39.843947,
        "lon": -84.1246608
      },
      {
        "City": "New Brunswick",
        "State": "New Jersey",
        "Population": 55831,
        "lat": 40.4862157,
        "lon": -74.4518188
      },
      {
        "City": "Norfolk",
        "State": "Virginia",
        "Population": 246139,
        "lat": 36.8507689,
        "lon": -76.28587259999999
      },
      {
        "City": "Hillsboro",
        "State": "Oregon",
        "Population": 97368,
        "lat": 45.5228939,
        "lon": -122.989827
      },
      {
        "City": "San Jacinto",
        "State": "California",
        "Population": 45851,
        "lat": 33.783908399999994,
        "lon": -116.95863500000002
      },
      {
        "City": "Pensacola",
        "State": "Florida",
        "Population": 52703,
        "lat": 30.421309,
        "lon": -87.2169149
      },
      {
        "City": "Hamilton",
        "State": "Ohio",
        "Population": 62258,
        "lat": 39.3995008,
        "lon": -84.5613355
      },
      {
        "City": "Florence",
        "State": "South Carolina",
        "Population": 37792,
        "lat": 34.1954331,
        "lon": -79.7625625
      },
      {
        "City": "San Bernardino",
        "State": "California",
        "Population": 213708,
        "lat": 34.1083449,
        "lon": -117.2897652
      },
      {
        "City": "Peachtree Corners",
        "State": "Georgia",
        "Population": 40059,
        "lat": 33.9698929,
        "lon": -84.2214551
      },
      {
        "City": "Victorville",
        "State": "California",
        "Population": 121096,
        "lat": 34.5362184,
        "lon": -117.29276409999999
      },
      {
        "City": "Gary",
        "State": "Indiana",
        "Population": 78450,
        "lat": 41.5933696,
        "lon": -87.3464271
      },
      {
        "City": "Casa Grande",
        "State": "Arizona",
        "Population": 50111,
        "lat": 32.8795022,
        "lon": -111.75735209999999
      },
      {
        "City": "Morgan Hill",
        "State": "California",
        "Population": 40836,
        "lat": 37.130501200000005,
        "lon": -121.65439009999999
      },
      {
        "City": "Dubuque",
        "State": "Iowa",
        "Population": 58253,
        "lat": 42.5005583,
        "lon": -90.6645718
      },
      {
        "City": "Syracuse",
        "State": "New York",
        "Population": 144669,
        "lat": 43.0481221,
        "lon": -76.1474244
      },
      {
        "City": "Clarksville",
        "State": "Tennessee",
        "Population": 142357,
        "lat": 36.5297706,
        "lon": -87.3594528
      },
      {
        "City": "Lakeland",
        "State": "Florida",
        "Population": 100710,
        "lat": 28.039465399999997,
        "lon": -81.9498042
      },
      {
        "City": "Valley Stream",
        "State": "New York",
        "Population": 37659,
        "lat": 40.664269899999994,
        "lon": -73.7084645
      },
      {
        "City": "Dover",
        "State": "Delaware",
        "Population": 37366,
        "lat": 39.158167999999996,
        "lon": -75.5243682
      },
      {
        "City": "Moorhead",
        "State": "Minnesota",
        "Population": 39398,
        "lat": 46.8737648,
        "lon": -96.7678039
      },
      {
        "City": "Culver City",
        "State": "California",
        "Population": 39428,
        "lat": 34.021122399999996,
        "lon": -118.3964665
      },
      {
        "City": "Palatine",
        "State": "Illinois",
        "Population": 69350,
        "lat": 42.1103041,
        "lon": -88.03424
      },
      {
        "City": "Seattle",
        "State": "Washington",
        "Population": 652405,
        "lat": 47.6062095,
        "lon": -122.33207079999998
      },
      {
        "City": "Covington",
        "State": "Kentucky",
        "Population": 40956,
        "lat": 39.083671200000005,
        "lon": -84.5085536
      },
      {
        "City": "Elk Grove",
        "State": "California",
        "Population": 161007,
        "lat": 38.4087993,
        "lon": -121.37161780000001
      },
      {
        "City": "Shreveport",
        "State": "Louisiana",
        "Population": 200327,
        "lat": 32.5251516,
        "lon": -93.75017890000001
      },
      {
        "City": "Ogden",
        "State": "Utah",
        "Population": 84249,
        "lat": 41.223,
        "lon": -111.9738304
      },
      {
        "City": "Harrisonburg",
        "State": "Virginia",
        "Population": 51395,
        "lat": 38.449568799999994,
        "lon": -78.8689155
      },
      {
        "City": "Inglewood",
        "State": "California",
        "Population": 111542,
        "lat": 33.9616801,
        "lon": -118.3531311
      },
      {
        "City": "Pasadena",
        "State": "California",
        "Population": 139731,
        "lat": 34.1477849,
        "lon": -118.1445155
      },
      {
        "City": "Lawrence",
        "State": "Massachusetts",
        "Population": 77657,
        "lat": 42.7070354,
        "lon": -71.1631137
      },
      {
        "City": "Lake Oswego",
        "State": "Oregon",
        "Population": 37610,
        "lat": 45.4206749,
        "lon": -122.67064979999999
      },
      {
        "City": "Petaluma",
        "State": "California",
        "Population": 59440,
        "lat": 38.232417,
        "lon": -122.6366524
      },
      {
        "City": "Springfield",
        "State": "Ohio",
        "Population": 59357,
        "lat": 39.9242266,
        "lon": -83.8088171
      },
      {
        "City": "Napa",
        "State": "California",
        "Population": 79068,
        "lat": 38.2975381,
        "lon": -122.28686499999999
      },
      {
        "City": "Aurora",
        "State": "Colorado",
        "Population": 345803,
        "lat": 39.729431899999994,
        "lon": -104.8319195
      },
      {
        "City": "Duluth",
        "State": "Minnesota",
        "Population": 86128,
        "lat": 46.7866719,
        "lon": -92.10048520000001
      },
      {
        "City": "Roanoke",
        "State": "Virginia",
        "Population": 98465,
        "lat": 37.270970399999996,
        "lon": -79.9414266
      },
      {
        "City": "Bend",
        "State": "Oregon",
        "Population": 81236,
        "lat": 44.058172799999994,
        "lon": -121.31530959999999
      },
      {
        "City": "Apple Valley",
        "State": "California",
        "Population": 70924,
        "lat": 34.5008311,
        "lon": -117.18587590000001
      },
      {
        "City": "Waltham",
        "State": "Massachusetts",
        "Population": 62227,
        "lat": 42.376485200000005,
        "lon": -71.2356113
      },
      {
        "City": "Fort Myers",
        "State": "Florida",
        "Population": 68190,
        "lat": 26.640628000000003,
        "lon": -81.87230840000001
      },
      {
        "City": "Tampa",
        "State": "Florida",
        "Population": 352957,
        "lat": 27.950575,
        "lon": -82.4571776
      },
      {
        "City": "Upland",
        "State": "California",
        "Population": 75413,
        "lat": 34.09751,
        "lon": -117.64838759999999
      },
      {
        "City": "Danville",
        "State": "Virginia",
        "Population": 42907,
        "lat": 36.585971799999996,
        "lon": -79.3950228
      },
      {
        "City": "Beloit",
        "State": "Wisconsin",
        "Population": 36888,
        "lat": 42.5083482,
        "lon": -89.0317765
      },
      {
        "City": "Plantation",
        "State": "Florida",
        "Population": 90268,
        "lat": 26.1275862,
        "lon": -80.23310359999999
      },
      {
        "City": "Colorado Springs",
        "State": "Colorado",
        "Population": 439886,
        "lat": 38.8338816,
        "lon": -104.82136340000001
      },
      {
        "City": "Modesto",
        "State": "California",
        "Population": 204933,
        "lat": 37.6390972,
        "lon": -120.99687820000001
      },
      {
        "City": "Grand Rapids",
        "State": "Michigan",
        "Population": 192294,
        "lat": 42.9633599,
        "lon": -85.6680863
      },
      {
        "City": "Oak Park",
        "State": "Illinois",
        "Population": 52066,
        "lat": 41.885031700000006,
        "lon": -87.7845025
      },
      {
        "City": "Sarasota",
        "State": "Florida",
        "Population": 53326,
        "lat": 27.3364347,
        "lon": -82.5306527
      },
      {
        "City": "Jurupa Valley",
        "State": "California",
        "Population": 98030,
        "lat": 33.9971974,
        "lon": -117.48548020000001
      },
      {
        "City": "Bellflower",
        "State": "California",
        "Population": 77593,
        "lat": 33.881681799999996,
        "lon": -118.1170117
      },
      {
        "City": "Boulder",
        "State": "Colorado",
        "Population": 103166,
        "lat": 40.0149856,
        "lon": -105.2705456
      },
      {
        "City": "Santa Fe",
        "State": "New Mexico",
        "Population": 69976,
        "lat": 35.686975200000006,
        "lon": -105.937799
      },
      {
        "City": "Coachella",
        "State": "California",
        "Population": 43092,
        "lat": 33.6803003,
        "lon": -116.17389399999999
      },
      {
        "City": "Marlborough",
        "State": "Massachusetts",
        "Population": 39414,
        "lat": 42.3459271,
        "lon": -71.55228740000001
      },
      {
        "City": "Riverside",
        "State": "California",
        "Population": 316619,
        "lat": 33.9533487,
        "lon": -117.3961564
      },
      {
        "City": "Palmdale",
        "State": "California",
        "Population": 157161,
        "lat": 34.5794343,
        "lon": -118.11646129999998
      },
      {
        "City": "Novato",
        "State": "California",
        "Population": 54194,
        "lat": 38.107419799999995,
        "lon": -122.5697032
      },
      {
        "City": "Layton",
        "State": "Utah",
        "Population": 70790,
        "lat": 41.0602216,
        "lon": -111.9710529
      },
      {
        "City": "Bolingbrook",
        "State": "Illinois",
        "Population": 73936,
        "lat": 41.6986416,
        "lon": -88.0683955
      },
      {
        "City": "Mission Viejo",
        "State": "California",
        "Population": 96346,
        "lat": 33.6000232,
        "lon": -117.67199529999999
      },
      {
        "City": "Glenview",
        "State": "Illinois",
        "Population": 45417,
        "lat": 42.069750899999995,
        "lon": -87.7878408
      },
      {
        "City": "Lincoln",
        "State": "California",
        "Population": 45237,
        "lat": 38.891565,
        "lon": -121.29300790000002
      },
      {
        "City": "Folsom",
        "State": "California",
        "Population": 73098,
        "lat": 38.6779591,
        "lon": -121.17605829999998
      },
      {
        "City": "Prescott Valley",
        "State": "Arizona",
        "Population": 39791,
        "lat": 34.6100243,
        "lon": -112.315721
      },
      {
        "City": "Las Cruces",
        "State": "New Mexico",
        "Population": 101324,
        "lat": 32.3199396,
        "lon": -106.7636538
      },
      {
        "City": "Bozeman",
        "State": "Montana",
        "Population": 39860,
        "lat": 45.676997899999996,
        "lon": -111.04293390000001
      },
      {
        "City": "Schaumburg",
        "State": "Illinois",
        "Population": 74907,
        "lat": 42.0333607,
        "lon": -88.0834059
      },
      {
        "City": "Warren",
        "State": "Michigan",
        "Population": 134873,
        "lat": 42.5144566,
        "lon": -83.01465259999999
      },
      {
        "City": "St. Peters",
        "State": "Missouri",
        "Population": 54842,
        "lat": 38.7874699,
        "lon": -90.6298922
      },
      {
        "City": "Ames",
        "State": "Iowa",
        "Population": 61792,
        "lat": 42.034721999999995,
        "lon": -93.62
      },
      {
        "City": "Surprise",
        "State": "Arizona",
        "Population": 123546,
        "lat": 33.62923370000001,
        "lon": -112.36792790000001
      },
      {
        "City": "Richardson",
        "State": "Texas",
        "Population": 104475,
        "lat": 32.948333500000004,
        "lon": -96.72985190000001
      },
      {
        "City": "Midland",
        "State": "Michigan",
        "Population": 42181,
        "lat": 43.6155825,
        "lon": -84.24721159999999
      },
      {
        "City": "San Marcos",
        "State": "Texas",
        "Population": 54076,
        "lat": 29.8832749,
        "lon": -97.9413941
      },
      {
        "City": "Wilkes-Barre",
        "State": "Pennsylvania",
        "Population": 41108,
        "lat": 41.245914899999995,
        "lon": -75.88130749999999
      },
      {
        "City": "Appleton",
        "State": "Wisconsin",
        "Population": 73596,
        "lat": 44.2619309,
        "lon": -88.4153847
      },
      {
        "City": "Shawnee",
        "State": "Kansas",
        "Population": 64323,
        "lat": 39.0228485,
        "lon": -94.7151865
      },
      {
        "City": "Mentor",
        "State": "Ohio",
        "Population": 46979,
        "lat": 41.666157299999995,
        "lon": -81.339552
      },
      {
        "City": "Livermore",
        "State": "California",
        "Population": 85156,
        "lat": 37.6818745,
        "lon": -121.7680088
      },
      {
        "City": "Charlotte",
        "State": "North Carolina",
        "Population": 792862,
        "lat": 35.2270869,
        "lon": -80.8431267
      },
      {
        "City": "Owensboro",
        "State": "Kentucky",
        "Population": 58416,
        "lat": 37.771907399999996,
        "lon": -87.1111676
      },
      {
        "City": "Jupiter",
        "State": "Florida",
        "Population": 58298,
        "lat": 26.934224600000004,
        "lon": -80.09420870000001
      },
      {
        "City": "Rohnert Park",
        "State": "California",
        "Population": 41398,
        "lat": 38.3396367,
        "lon": -122.70109840000002
      },
      {
        "City": "Chicago",
        "State": "Illinois",
        "Population": 2718782,
        "lat": 41.8781136,
        "lon": -87.62979820000001
      },
      {
        "City": "Billings",
        "State": "Montana",
        "Population": 109059,
        "lat": 45.783285600000006,
        "lon": -108.50069040000001
      },
      {
        "City": "Wauwatosa",
        "State": "Wisconsin",
        "Population": 47134,
        "lat": 43.049457200000006,
        "lon": -88.0075875
      },
      {
        "City": "Lombard",
        "State": "Illinois",
        "Population": 43907,
        "lat": 41.8800296,
        "lon": -88.0078435
      },
      {
        "City": "New Haven",
        "State": "Connecticut",
        "Population": 130660,
        "lat": 41.308274,
        "lon": -72.9278835
      },
      {
        "City": "York",
        "State": "Pennsylvania",
        "Population": 43935,
        "lat": 39.9625984,
        "lon": -76.727745
      },
      {
        "City": "Knoxville",
        "State": "Tennessee",
        "Population": 183270,
        "lat": 35.96063839999999,
        "lon": -83.9207392
      },
      {
        "City": "Elyria",
        "State": "Ohio",
        "Population": 53956,
        "lat": 41.36837979999999,
        "lon": -82.10764859999999
      },
      {
        "City": "Barnstable Town",
        "State": "Massachusetts",
        "Population": 44641,
        "lat": 41.7003208,
        "lon": -70.3002024
      },
      {
        "City": "Murray",
        "State": "Utah",
        "Population": 48612,
        "lat": 40.6668916,
        "lon": -111.8879909
      },
      {
        "City": "Alameda",
        "State": "California",
        "Population": 76419,
        "lat": 37.7652065,
        "lon": -122.2416355
      },
      {
        "City": "Manteca",
        "State": "California",
        "Population": 71948,
        "lat": 37.797427299999995,
        "lon": -121.21605259999998
      },
      {
        "City": "Maplewood",
        "State": "Minnesota",
        "Population": 39765,
        "lat": 44.953021500000006,
        "lon": -92.9952153
      },
      {
        "City": "Medford",
        "State": "Oregon",
        "Population": 77677,
        "lat": 42.3265152,
        "lon": -122.8755949
      },
      {
        "City": "Murfreesboro",
        "State": "Tennessee",
        "Population": 117044,
        "lat": 35.8456213,
        "lon": -86.39027
      },
      {
        "City": "Yuba City",
        "State": "California",
        "Population": 65416,
        "lat": 39.1404477,
        "lon": -121.6169108
      },
      {
        "City": "Shelton",
        "State": "Connecticut",
        "Population": 40999,
        "lat": 41.3164856,
        "lon": -73.0931641
      },
      {
        "City": "Cedar Falls",
        "State": "Iowa",
        "Population": 40566,
        "lat": 42.5348993,
        "lon": -92.4453161
      },
      {
        "City": "Germantown",
        "State": "Tennessee",
        "Population": 39375,
        "lat": 35.08675770000001,
        "lon": -89.8100858
      },
      {
        "City": "Scranton",
        "State": "Pennsylvania",
        "Population": 75806,
        "lat": 41.408969,
        "lon": -75.66241219999999
      },
      {
        "City": "Auburn",
        "State": "Alabama",
        "Population": 58582,
        "lat": 32.6098566,
        "lon": -85.48078249999999
      },
      {
        "City": "Manassas",
        "State": "Virginia",
        "Population": 41705,
        "lat": 38.750948799999996,
        "lon": -77.4752667
      },
      {
        "City": "Vacaville",
        "State": "California",
        "Population": 94275,
        "lat": 38.3565773,
        "lon": -121.98774440000001
      },
      {
        "City": "Santa Monica",
        "State": "California",
        "Population": 92472,
        "lat": 34.01945429999999,
        "lon": -118.4911912
      },
      {
        "City": "Suffolk",
        "State": "Virginia",
        "Population": 85728,
        "lat": 36.7282054,
        "lon": -76.5835621
      },
      {
        "City": "Rochester Hills",
        "State": "Michigan",
        "Population": 72952,
        "lat": 42.6583661,
        "lon": -83.14993220000001
      },
      {
        "City": "La Quinta",
        "State": "California",
        "Population": 39331,
        "lat": 33.663357299999994,
        "lon": -116.31000949999999
      },
      {
        "City": "Charleston",
        "State": "West Virginia",
        "Population": 50821,
        "lat": 38.3498195,
        "lon": -81.6326234
      },
      {
        "City": "Delano",
        "State": "California",
        "Population": 52403,
        "lat": 35.7688425,
        "lon": -119.24705359999999
      },
      {
        "City": "St. Cloud",
        "State": "Florida",
        "Population": 40918,
        "lat": 28.2489016,
        "lon": -81.2811801
      },
      {
        "City": "Charleston",
        "State": "South Carolina",
        "Population": 127999,
        "lat": 32.776474900000004,
        "lon": -79.9310512
      },
      {
        "City": "Kannapolis",
        "State": "North Carolina",
        "Population": 44359,
        "lat": 35.487361299999996,
        "lon": -80.62173409999998
      },
      {
        "City": "Corona",
        "State": "California",
        "Population": 159503,
        "lat": 33.8752935,
        "lon": -117.56643840000001
      },
      {
        "City": "Rocklin",
        "State": "California",
        "Population": 59738,
        "lat": 38.7907339,
        "lon": -121.2357828
      },
      {
        "City": "Lee's Summit",
        "State": "Missouri",
        "Population": 93184,
        "lat": 38.9108408,
        "lon": -94.3821724
      },
      {
        "City": "Palm Coast",
        "State": "Florida",
        "Population": 78740,
        "lat": 29.584452399999996,
        "lon": -81.2078699
      },
      {
        "City": "Sandy",
        "State": "Utah",
        "Population": 90231,
        "lat": 40.564978100000005,
        "lon": -111.8389726
      },
      {
        "City": "Bentonville",
        "State": "Arkansas",
        "Population": 40167,
        "lat": 36.372853799999994,
        "lon": -94.2088172
      },
      {
        "City": "Santa Clarita",
        "State": "California",
        "Population": 179590,
        "lat": 34.3916641,
        "lon": -118.54258600000001
      },
      {
        "City": "Altamonte Springs",
        "State": "Florida",
        "Population": 42150,
        "lat": 28.6611089,
        "lon": -81.36562420000001
      },
      {
        "City": "New Braunfels",
        "State": "Texas",
        "Population": 63279,
        "lat": 29.7030024,
        "lon": -98.1244531
      },
      {
        "City": "Memphis",
        "State": "Tennessee",
        "Population": 653450,
        "lat": 35.1495343,
        "lon": -90.0489801
      },
      {
        "City": "Irving",
        "State": "Texas",
        "Population": 228653,
        "lat": 32.814017699999994,
        "lon": -96.9488945
      },
      {
        "City": "Alexandria",
        "State": "Virginia",
        "Population": 148892,
        "lat": 38.804835499999996,
        "lon": -77.0469214
      },
      {
        "City": "Hesperia",
        "State": "California",
        "Population": 92147,
        "lat": 34.4263886,
        "lon": -117.3008784
      },
      {
        "City": "Holyoke",
        "State": "Massachusetts",
        "Population": 40249,
        "lat": 42.2042586,
        "lon": -72.61620090000001
      },
      {
        "City": "Dunwoody",
        "State": "Georgia",
        "Population": 47591,
        "lat": 33.9462125,
        "lon": -84.3346473
      },
      {
        "City": "Skokie",
        "State": "Illinois",
        "Population": 65176,
        "lat": 42.0324025,
        "lon": -87.7416246
      },
      {
        "City": "Kearny",
        "State": "New Jersey",
        "Population": 41664,
        "lat": 40.7684342,
        "lon": -74.1454214
      },
      {
        "City": "Bethlehem",
        "State": "Pennsylvania",
        "Population": 75018,
        "lat": 40.6259316,
        "lon": -75.3704579
      },
      {
        "City": "St. Joseph",
        "State": "Missouri",
        "Population": 77147,
        "lat": 39.767457799999995,
        "lon": -94.846681
      },
      {
        "City": "Redondo Beach",
        "State": "California",
        "Population": 67815,
        "lat": 33.8491816,
        "lon": -118.3884078
      },
      {
        "City": "Houston",
        "State": "Texas",
        "Population": 2195914,
        "lat": 29.7604267,
        "lon": -95.36980279999999
      },
      {
        "City": "Temecula",
        "State": "California",
        "Population": 106780,
        "lat": 33.4936391,
        "lon": -117.14836480000001
      },
      {
        "City": "Ann Arbor",
        "State": "Michigan",
        "Population": 117025,
        "lat": 42.2808256,
        "lon": -83.7430378
      },
      {
        "City": "Beaumont",
        "State": "Texas",
        "Population": 117796,
        "lat": 30.080174,
        "lon": -94.12655620000001
      },
      {
        "City": "East Lansing",
        "State": "Michigan",
        "Population": 48554,
        "lat": 42.7369792,
        "lon": -84.48386540000001
      },
      {
        "City": "Santee",
        "State": "California",
        "Population": 56105,
        "lat": 32.8383828,
        "lon": -116.97391670000002
      },
      {
        "City": "Tamarac",
        "State": "Florida",
        "Population": 63155,
        "lat": 26.2128609,
        "lon": -80.2497707
      },
      {
        "City": "Bellevue",
        "State": "Nebraska",
        "Population": 53663,
        "lat": 41.154362299999995,
        "lon": -95.9145568
      },
      {
        "City": "Pembroke Pines",
        "State": "Florida",
        "Population": 162329,
        "lat": 26.007765,
        "lon": -80.2962555
      },
      {
        "City": "Springdale",
        "State": "Arkansas",
        "Population": 75229,
        "lat": 36.18674420000001,
        "lon": -94.1288141
      },
      {
        "City": "Oxnard",
        "State": "California",
        "Population": 203007,
        "lat": 34.1975048,
        "lon": -119.17705159999998
      },
      {
        "City": "Odessa",
        "State": "Texas",
        "Population": 110720,
        "lat": 31.8456816,
        "lon": -102.3676431
      },
      {
        "City": "Stillwater",
        "State": "Oklahoma",
        "Population": 47186,
        "lat": 36.1156071,
        "lon": -97.0583681
      },
      {
        "City": "Brockton",
        "State": "Massachusetts",
        "Population": 94089,
        "lat": 42.083433500000005,
        "lon": -71.0183787
      },
      {
        "City": "Bayonne",
        "State": "New Jersey",
        "Population": 65028,
        "lat": 40.6687141,
        "lon": -74.11430909999999
      },
      {
        "City": "Paramount",
        "State": "California",
        "Population": 54980,
        "lat": 33.8894598,
        "lon": -118.15979109999998
      },
      {
        "City": "Moline",
        "State": "Illinois",
        "Population": 43116,
        "lat": 41.5067003,
        "lon": -90.5151342
      },
      {
        "City": "Meridian",
        "State": "Mississippi",
        "Population": 40921,
        "lat": 32.3643098,
        "lon": -88.70365600000001
      },
      {
        "City": "Cleveland",
        "State": "Tennessee",
        "Population": 42774,
        "lat": 35.1595182,
        "lon": -84.8766115
      },
      {
        "City": "Jersey City",
        "State": "New Jersey",
        "Population": 257342,
        "lat": 40.7281575,
        "lon": -74.0776417
      },
      {
        "City": "St. Paul",
        "State": "Minnesota",
        "Population": 294873,
        "lat": 44.953702899999996,
        "lon": -93.0899578
      },
      {
        "City": "Deltona",
        "State": "Florida",
        "Population": 86290,
        "lat": 28.9005446,
        "lon": -81.2636738
      },
      {
        "City": "Freeport",
        "State": "New York",
        "Population": 43167,
        "lat": 40.65760220000001,
        "lon": -73.58318349999999
      },
      {
        "City": "Iowa City",
        "State": "Iowa",
        "Population": 71591,
        "lat": 41.6611277,
        "lon": -91.5301683
      },
      {
        "City": "Anaheim",
        "State": "California",
        "Population": 345012,
        "lat": 33.8352932,
        "lon": -117.91450359999999
      },
      {
        "City": "Apple Valley",
        "State": "Minnesota",
        "Population": 50201,
        "lat": 44.7319094,
        "lon": -93.21772
      },
      {
        "City": "Great Falls",
        "State": "Montana",
        "Population": 59351,
        "lat": 47.4941836,
        "lon": -111.2833449
      },
      {
        "City": "West Valley City",
        "State": "Utah",
        "Population": 133579,
        "lat": 40.691613200000006,
        "lon": -112.00105009999999
      },
      {
        "City": "Hampton",
        "State": "Virginia",
        "Population": 136699,
        "lat": 37.0298687,
        "lon": -76.3452218
      },
      {
        "City": "Georgetown",
        "State": "Texas",
        "Population": 54898,
        "lat": 30.633261800000003,
        "lon": -97.67798420000001
      },
      {
        "City": "Orem",
        "State": "Utah",
        "Population": 91648,
        "lat": 40.2968979,
        "lon": -111.69464750000002
      },
      {
        "City": "Monrovia",
        "State": "California",
        "Population": 37101,
        "lat": 34.14426160000001,
        "lon": -118.0019482
      },
      {
        "City": "Keller",
        "State": "Texas",
        "Population": 42907,
        "lat": 32.9341893,
        "lon": -97.229298
      },
      {
        "City": "Goose Creek",
        "State": "South Carolina",
        "Population": 39823,
        "lat": 32.9810059,
        "lon": -80.03258670000001
      },
      {
        "City": "Little Rock",
        "State": "Arkansas",
        "Population": 197357,
        "lat": 34.7464809,
        "lon": -92.2895948
      },
      {
        "City": "Santa Ana",
        "State": "California",
        "Population": 334227,
        "lat": 33.7455731,
        "lon": -117.8678338
      },
      {
        "City": "White Plains",
        "State": "New York",
        "Population": 57866,
        "lat": 41.0339862,
        "lon": -73.76290970000001
      },
      {
        "City": "Idaho Falls",
        "State": "Idaho",
        "Population": 58292,
        "lat": 43.491651399999995,
        "lon": -112.0339645
      },
      {
        "City": "Bellevue",
        "State": "Washington",
        "Population": 133992,
        "lat": 47.610377,
        "lon": -122.20067859999999
      },
      {
        "City": "Roseville",
        "State": "California",
        "Population": 127035,
        "lat": 38.752123499999996,
        "lon": -121.28800590000002
      },
      {
        "City": "Perth Amboy",
        "State": "New Jersey",
        "Population": 51982,
        "lat": 40.5067723,
        "lon": -74.2654234
      },
      {
        "City": "Peabody",
        "State": "Massachusetts",
        "Population": 52044,
        "lat": 42.5278731,
        "lon": -70.92866090000001
      },
      {
        "City": "Grand Island",
        "State": "Nebraska",
        "Population": 50550,
        "lat": 40.92639570000001,
        "lon": -98.34201180000001
      },
      {
        "City": "Columbia",
        "State": "Missouri",
        "Population": 115276,
        "lat": 38.95170529999999,
        "lon": -92.33407240000001
      },
      {
        "City": "Racine",
        "State": "Wisconsin",
        "Population": 78199,
        "lat": 42.7261309,
        "lon": -87.78285229999999
      },
      {
        "City": "Carmel",
        "State": "Indiana",
        "Population": 85927,
        "lat": 39.978371,
        "lon": -86.1180435
      },
      {
        "City": "Portage",
        "State": "Michigan",
        "Population": 47523,
        "lat": 42.20115379999999,
        "lon": -85.5800022
      },
      {
        "City": "Middletown",
        "State": "Ohio",
        "Population": 48630,
        "lat": 39.5150576,
        "lon": -84.39827629999999
      },
      {
        "City": "Woodland",
        "State": "California",
        "Population": 56590,
        "lat": 38.6785157,
        "lon": -121.7732971
      },
      {
        "City": "Revere",
        "State": "Massachusetts",
        "Population": 53756,
        "lat": 42.408430200000005,
        "lon": -71.0119948
      },
      {
        "City": "Euless",
        "State": "Texas",
        "Population": 53224,
        "lat": 32.8370727,
        "lon": -97.08195409999999
      },
      {
        "City": "Arlington Heights",
        "State": "Illinois",
        "Population": 75994,
        "lat": 42.0883603,
        "lon": -87.9806265
      },
      {
        "City": "Hemet",
        "State": "California",
        "Population": 81750,
        "lat": 33.7475203,
        "lon": -116.97196840000001
      },
      {
        "City": "High Point",
        "State": "North Carolina",
        "Population": 107741,
        "lat": 35.955692299999995,
        "lon": -80.0053176
      },
      {
        "City": "Newark",
        "State": "Ohio",
        "Population": 47777,
        "lat": 40.0581205,
        "lon": -82.4012642
      },
      {
        "City": "Midwest City",
        "State": "Oklahoma",
        "Population": 56756,
        "lat": 35.4495065,
        "lon": -97.39670190000001
      },
      {
        "City": "San Marcos",
        "State": "California",
        "Population": 89387,
        "lat": 33.1433723,
        "lon": -117.1661449
      },
      {
        "City": "Port Orange",
        "State": "Florida",
        "Population": 57203,
        "lat": 29.1383165,
        "lon": -80.9956105
      },
      {
        "City": "Lakewood",
        "State": "California",
        "Population": 81121,
        "lat": 33.853626899999995,
        "lon": -118.13395630000001
      },
      {
        "City": "Westerville",
        "State": "Ohio",
        "Population": 37530,
        "lat": 40.126174299999995,
        "lon": -82.9290696
      },
      {
        "City": "Rockford",
        "State": "Illinois",
        "Population": 150251,
        "lat": 42.2711311,
        "lon": -89.09399520000001
      },
      {
        "City": "El Cajon",
        "State": "California",
        "Population": 102211,
        "lat": 32.7947731,
        "lon": -116.96252690000001
      },
      {
        "City": "St. Petersburg",
        "State": "Florida",
        "Population": 249688,
        "lat": 27.773056,
        "lon": -82.64
      },
      {
        "City": "Downers Grove",
        "State": "Illinois",
        "Population": 49670,
        "lat": 41.8089191,
        "lon": -88.01117459999999
      },
      {
        "City": "Milford",
        "State": "Connecticut",
        "Population": 51644,
        "lat": 41.2306979,
        "lon": -73.064036
      },
      {
        "City": "Albany",
        "State": "Oregon",
        "Population": 51583,
        "lat": 44.6365107,
        "lon": -123.10592820000001
      },
      {
        "City": "Las Vegas",
        "State": "Nevada",
        "Population": 603488,
        "lat": 36.169941200000004,
        "lon": -115.13982959999998
      },
      {
        "City": "Pasadena",
        "State": "Texas",
        "Population": 152735,
        "lat": 29.6910625,
        "lon": -95.2091006
      },
      {
        "City": "Port St. Lucie",
        "State": "Florida",
        "Population": 171016,
        "lat": 27.273049199999996,
        "lon": -80.3582261
      },
      {
        "City": "Cedar Rapids",
        "State": "Iowa",
        "Population": 128429,
        "lat": 41.9778795,
        "lon": -91.66562320000001
      },
      {
        "City": "Ormond Beach",
        "State": "Florida",
        "Population": 38661,
        "lat": 29.285812899999996,
        "lon": -81.05588940000001
      },
      {
        "City": "Quincy",
        "State": "Massachusetts",
        "Population": 93494,
        "lat": 42.25287720000001,
        "lon": -71.0022705
      },
      {
        "City": "Miramar",
        "State": "Florida",
        "Population": 130288,
        "lat": 25.9860762,
        "lon": -80.3035602
      },
      {
        "City": "El Paso",
        "State": "Texas",
        "Population": 674433,
        "lat": 31.7775757,
        "lon": -106.44245590000001
      },
      {
        "City": "Topeka",
        "State": "Kansas",
        "Population": 127679,
        "lat": 39.055823499999995,
        "lon": -95.6890185
      },
      {
        "City": "Rosemead",
        "State": "California",
        "Population": 54561,
        "lat": 34.0805651,
        "lon": -118.072846
      },
      {
        "City": "Keizer",
        "State": "Oregon",
        "Population": 37064,
        "lat": 44.9901194,
        "lon": -123.0262077
      },
      {
        "City": "Minnetonka",
        "State": "Minnesota",
        "Population": 51368,
        "lat": 44.9211836,
        "lon": -93.46874890000001
      },
      {
        "City": "Akron",
        "State": "Ohio",
        "Population": 198100,
        "lat": 41.081444700000006,
        "lon": -81.51900529999999
      },
      {
        "City": "Edinburg",
        "State": "Texas",
        "Population": 80836,
        "lat": 26.3017374,
        "lon": -98.1633432
      },
      {
        "City": "Rancho Cucamonga",
        "State": "California",
        "Population": 171386,
        "lat": 34.1063989,
        "lon": -117.5931084
      },
      {
        "City": "North Charleston",
        "State": "South Carolina",
        "Population": 104054,
        "lat": 32.8546197,
        "lon": -79.9748103
      },
      {
        "City": "Louisville",
        "State": "Kentucky",
        "Population": 609893,
        "lat": 38.252664700000004,
        "lon": -85.7584557
      },
      {
        "City": "Watsonville",
        "State": "California",
        "Population": 52477,
        "lat": 36.910231,
        "lon": -121.7568946
      },
      {
        "City": "Coconut Creek",
        "State": "Florida",
        "Population": 56792,
        "lat": 26.2517482,
        "lon": -80.17893509999999
      },
      {
        "City": "Bradenton",
        "State": "Florida",
        "Population": 51763,
        "lat": 27.4989278,
        "lon": -82.5748194
      },
      {
        "City": "Carlsbad",
        "State": "California",
        "Population": 110972,
        "lat": 33.158093300000004,
        "lon": -117.3505939
      },
      {
        "City": "Texas City",
        "State": "Texas",
        "Population": 46081,
        "lat": 29.383845,
        "lon": -94.9027002
      },
      {
        "City": "Redding",
        "State": "California",
        "Population": 91119,
        "lat": 40.5865396,
        "lon": -122.3916754
      },
      {
        "City": "Wyoming",
        "State": "Michigan",
        "Population": 74100,
        "lat": 42.9133602,
        "lon": -85.7053085
      },
      {
        "City": "Lorain",
        "State": "Ohio",
        "Population": 63710,
        "lat": 41.452819,
        "lon": -82.18237459999999
      },
      {
        "City": "Roy",
        "State": "Utah",
        "Population": 37733,
        "lat": 41.1616108,
        "lon": -112.02633130000001
      },
      {
        "City": "Fort Lauderdale",
        "State": "Florida",
        "Population": 172389,
        "lat": 26.122438600000002,
        "lon": -80.13731740000001
      },
      {
        "City": "Warner Robins",
        "State": "Georgia",
        "Population": 72531,
        "lat": 32.6130007,
        "lon": -83.624201
      },
      {
        "City": "Clearwater",
        "State": "Florida",
        "Population": 109703,
        "lat": 27.9658533,
        "lon": -82.8001026
      },
      {
        "City": "Cutler Bay",
        "State": "Florida",
        "Population": 43328,
        "lat": 25.5808323,
        "lon": -80.3468593
      },
      {
        "City": "Florence",
        "State": "Alabama",
        "Population": 40059,
        "lat": 34.79981,
        "lon": -87.677251
      },
      {
        "City": "Terre Haute",
        "State": "Indiana",
        "Population": 61025,
        "lat": 39.4667034,
        "lon": -87.4139092
      },
      {
        "City": "Temple",
        "State": "Texas",
        "Population": 70190,
        "lat": 31.0982344,
        "lon": -97.342782
      },
      {
        "City": "Beavercreek",
        "State": "Ohio",
        "Population": 45712,
        "lat": 39.7092262,
        "lon": -84.0632685
      },
      {
        "City": "Sioux Falls",
        "State": "South Dakota",
        "Population": 164676,
        "lat": 43.5445959,
        "lon": -96.73110340000001
      },
      {
        "City": "Columbus",
        "State": "Indiana",
        "Population": 45775,
        "lat": 39.201440399999996,
        "lon": -85.9213796
      },
      {
        "City": "Margate",
        "State": "Florida",
        "Population": 55456,
        "lat": 26.244526300000004,
        "lon": -80.206436
      },
      {
        "City": "Leominster",
        "State": "Massachusetts",
        "Population": 41002,
        "lat": 42.5250906,
        "lon": -71.759794
      },
      {
        "City": "Warwick",
        "State": "Rhode Island",
        "Population": 81971,
        "lat": 41.700100899999995,
        "lon": -71.4161671
      },
      {
        "City": "Bakersfield",
        "State": "California",
        "Population": 363630,
        "lat": 35.3732921,
        "lon": -119.0187125
      },
      {
        "City": "Miami",
        "State": "Florida",
        "Population": 417650,
        "lat": 25.7616798,
        "lon": -80.1917902
      },
      {
        "City": "Lake Charles",
        "State": "Louisiana",
        "Population": 74024,
        "lat": 30.226594899999995,
        "lon": -93.21737579999999
      },
      {
        "City": "Richland",
        "State": "Washington",
        "Population": 52413,
        "lat": 46.2856907,
        "lon": -119.2844621
      },
      {
        "City": "Hickory",
        "State": "North Carolina",
        "Population": 40361,
        "lat": 35.7344538,
        "lon": -81.3444573
      },
      {
        "City": "South San Francisco",
        "State": "California",
        "Population": 66174,
        "lat": 37.654656,
        "lon": -122.40774979999999
      },
      {
        "City": "Plymouth",
        "State": "Minnesota",
        "Population": 73987,
        "lat": 45.01051939999999,
        "lon": -93.4555093
      },
      {
        "City": "South Bend",
        "State": "Indiana",
        "Population": 100886,
        "lat": 41.676354499999995,
        "lon": -86.25198979999999
      },
      {
        "City": "Edmond",
        "State": "Oklahoma",
        "Population": 87004,
        "lat": 35.6528323,
        "lon": -97.4780954
      },
      {
        "City": "Des Moines",
        "State": "Iowa",
        "Population": 207510,
        "lat": 41.600544799999994,
        "lon": -93.6091064
      },
      {
        "City": "Bonita Springs",
        "State": "Florida",
        "Population": 47547,
        "lat": 26.339806,
        "lon": -81.77869720000001
      },
      {
        "City": "Draper",
        "State": "Utah",
        "Population": 45285,
        "lat": 40.5246711,
        "lon": -111.8638226
      },
      {
        "City": "Whittier",
        "State": "California",
        "Population": 86635,
        "lat": 33.97917929999999,
        "lon": -118.032844
      },
      {
        "City": "Livonia",
        "State": "Michigan",
        "Population": 95208,
        "lat": 42.36837,
        "lon": -83.3527097
      },
      {
        "City": "Milwaukee",
        "State": "Wisconsin",
        "Population": 599164,
        "lat": 43.0389025,
        "lon": -87.9064736
      },
      {
        "City": "Auburn",
        "State": "Washington",
        "Population": 74860,
        "lat": 47.307322799999994,
        "lon": -122.22845320000002
      },
      {
        "City": "Sumter",
        "State": "South Carolina",
        "Population": 41190,
        "lat": 33.9204354,
        "lon": -80.3414693
      },
      {
        "City": "Beverly",
        "State": "Massachusetts",
        "Population": 40664,
        "lat": 42.5584283,
        "lon": -70.880049
      },
      {
        "City": "Renton",
        "State": "Washington",
        "Population": 97003,
        "lat": 47.4828776,
        "lon": -122.21706609999998
      },
      {
        "City": "Centennial",
        "State": "Colorado",
        "Population": 106114,
        "lat": 39.5807452,
        "lon": -104.87717260000001
      },
      {
        "City": "Richmond",
        "State": "Virginia",
        "Population": 214114,
        "lat": 37.540724600000004,
        "lon": -77.4360481
      },
      {
        "City": "Anderson",
        "State": "Indiana",
        "Population": 55670,
        "lat": 40.1053196,
        "lon": -85.6802541
      },
      {
        "City": "Beaumont",
        "State": "California",
        "Population": 40481,
        "lat": 33.929460600000006,
        "lon": -116.977248
      },
      {
        "City": "Pflugerville",
        "State": "Texas",
        "Population": 53752,
        "lat": 30.4393696,
        "lon": -97.62000429999999
      },
      {
        "City": "Hoboken",
        "State": "New Jersey",
        "Population": 52575,
        "lat": 40.7439905,
        "lon": -74.0323626
      },
      {
        "City": "Lexington-Fayette",
        "State": "Kentucky",
        "Population": 308428,
        "lat": 38.040583700000006,
        "lon": -84.50371640000002
      },
      {
        "City": "Norwalk",
        "State": "California",
        "Population": 106589,
        "lat": 33.9022367,
        "lon": -118.08173300000001
      },
      {
        "City": "Yuma",
        "State": "Arizona",
        "Population": 91923,
        "lat": 32.6926512,
        "lon": -114.62769159999999
      },
      {
        "City": "Highland",
        "State": "California",
        "Population": 54291,
        "lat": 34.1283442,
        "lon": -117.2086513
      },
      {
        "City": "Carol Stream",
        "State": "Illinois",
        "Population": 40379,
        "lat": 41.9125286,
        "lon": -88.1347927
      },
      {
        "City": "Joliet",
        "State": "Illinois",
        "Population": 147806,
        "lat": 41.525031,
        "lon": -88.0817251
      },
      {
        "City": "Rock Hill",
        "State": "South Carolina",
        "Population": 69103,
        "lat": 34.9248667,
        "lon": -81.02507840000001
      },
      {
        "City": "Rancho Cordova",
        "State": "California",
        "Population": 67911,
        "lat": 38.5890723,
        "lon": -121.302728
      },
      {
        "City": "Dearborn Heights",
        "State": "Michigan",
        "Population": 56620,
        "lat": 42.3369816,
        "lon": -83.2732627
      },
      {
        "City": "Honolulu",
        "State": "Hawaii",
        "Population": 347884,
        "lat": 21.3069444,
        "lon": -157.8583333
      },
      {
        "City": "Victoria",
        "State": "Texas",
        "Population": 65098,
        "lat": 28.805267399999998,
        "lon": -97.00359820000001
      },
      {
        "City": "Attleboro",
        "State": "Massachusetts",
        "Population": 43886,
        "lat": 41.9445441,
        "lon": -71.2856082
      },
      {
        "City": "Wylie",
        "State": "Texas",
        "Population": 44575,
        "lat": 33.0151201,
        "lon": -96.53887890000001
      },
      {
        "City": "Carrollton",
        "State": "Texas",
        "Population": 126700,
        "lat": 32.975641499999995,
        "lon": -96.88996359999999
      },
      {
        "City": "Plainfield",
        "State": "Illinois",
        "Population": 41734,
        "lat": 41.632222999999996,
        "lon": -88.2120315
      },
      {
        "City": "Hoffman Estates",
        "State": "Illinois",
        "Population": 52398,
        "lat": 42.062991499999995,
        "lon": -88.1227199
      },
      {
        "City": "Methuen",
        "State": "Massachusetts",
        "Population": 48514,
        "lat": 42.7262016,
        "lon": -71.19089240000001
      },
      {
        "City": "North Port",
        "State": "Florida",
        "Population": 59212,
        "lat": 27.044224,
        "lon": -82.23592540000001
      },
      {
        "City": "Rockville",
        "State": "Maryland",
        "Population": 64072,
        "lat": 39.0839973,
        "lon": -77.1527578
      },
      {
        "City": "Burbank",
        "State": "California",
        "Population": 104709,
        "lat": 34.18083920000001,
        "lon": -118.30896609999998
      },
      {
        "City": "Fullerton",
        "State": "California",
        "Population": 138981,
        "lat": 33.8703596,
        "lon": -117.9242966
      },
      {
        "City": "Oshkosh",
        "State": "Wisconsin",
        "Population": 66778,
        "lat": 44.024706200000004,
        "lon": -88.5426136
      },
      {
        "City": "Huntsville",
        "State": "Texas",
        "Population": 39795,
        "lat": 30.723526300000003,
        "lon": -95.55077709999999
      },
      {
        "City": "Farmington Hills",
        "State": "Michigan",
        "Population": 81295,
        "lat": 42.4989936,
        "lon": -83.3677168
      },
      {
        "City": "Pico Rivera",
        "State": "California",
        "Population": 63771,
        "lat": 33.9830688,
        "lon": -118.09673500000001
      },
      {
        "City": "Cerritos",
        "State": "California",
        "Population": 49707,
        "lat": 33.858348299999996,
        "lon": -118.0647871
      },
      {
        "City": "La Puente",
        "State": "California",
        "Population": 40435,
        "lat": 34.0200114,
        "lon": -117.94950829999999
      },
      {
        "City": "Grand Junction",
        "State": "Colorado",
        "Population": 59778,
        "lat": 39.0638705,
        "lon": -108.5506486
      },
      {
        "City": "Enid",
        "State": "Oklahoma",
        "Population": 50725,
        "lat": 36.3955891,
        "lon": -97.8783911
      },
      {
        "City": "San Jose",
        "State": "California",
        "Population": 998537,
        "lat": 37.338208200000004,
        "lon": -121.88632859999998
      },
      {
        "City": "Round Rock",
        "State": "Texas",
        "Population": 109821,
        "lat": 30.508255100000003,
        "lon": -97.678896
      },
      {
        "City": "Maple Grove",
        "State": "Minnesota",
        "Population": 65415,
        "lat": 45.072464200000006,
        "lon": -93.4557877
      },
      {
        "City": "Norman",
        "State": "Oklahoma",
        "Population": 118197,
        "lat": 35.222566799999996,
        "lon": -97.4394777
      },
      {
        "City": "Homestead",
        "State": "Florida",
        "Population": 64079,
        "lat": 25.468722399999997,
        "lon": -80.4775569
      },
      {
        "City": "Friendswood",
        "State": "Texas",
        "Population": 37587,
        "lat": 29.529399800000004,
        "lon": -95.20104470000001
      },
      {
        "City": "Irvine",
        "State": "California",
        "Population": 236716,
        "lat": 33.6839473,
        "lon": -117.79469420000001
      },
      {
        "City": "Pocatello",
        "State": "Idaho",
        "Population": 54350,
        "lat": 42.8713032,
        "lon": -112.4455344
      },
      {
        "City": "Pacifica",
        "State": "California",
        "Population": 38606,
        "lat": 37.613825299999995,
        "lon": -122.48691940000002
      },
      {
        "City": "Sheboygan",
        "State": "Wisconsin",
        "Population": 48725,
        "lat": 43.750828399999996,
        "lon": -87.71453000000001
      },
      {
        "City": "Bossier City",
        "State": "Louisiana",
        "Population": 66333,
        "lat": 32.5159852,
        "lon": -93.7321228
      },
      {
        "City": "Cedar Park",
        "State": "Texas",
        "Population": 61238,
        "lat": 30.505197999999996,
        "lon": -97.82028879999999
      },
      {
        "City": "Sandy Springs",
        "State": "Georgia",
        "Population": 99770,
        "lat": 33.9304352,
        "lon": -84.3733147
      },
      {
        "City": "Champaign",
        "State": "Illinois",
        "Population": 83424,
        "lat": 40.116420399999996,
        "lon": -88.2433829
      },
      {
        "City": "Clifton",
        "State": "New Jersey",
        "Population": 85390,
        "lat": 40.858432799999996,
        "lon": -74.16375529999999
      },
      {
        "City": "Moore",
        "State": "Oklahoma",
        "Population": 58414,
        "lat": 35.339507899999994,
        "lon": -97.48670279999999
      },
      {
        "City": "Blue Springs",
        "State": "Missouri",
        "Population": 53294,
        "lat": 39.0169509,
        "lon": -94.2816148
      },
      {
        "City": "Lancaster",
        "State": "California",
        "Population": 159523,
        "lat": 34.6867846,
        "lon": -118.1541632
      },
      {
        "City": "Bryan",
        "State": "Texas",
        "Population": 78709,
        "lat": 30.674364299999997,
        "lon": -96.3699632
      },
      {
        "City": "Hurst",
        "State": "Texas",
        "Population": 38448,
        "lat": 32.82346210000001,
        "lon": -97.1705678
      },
      {
        "City": "Cape Coral",
        "State": "Florida",
        "Population": 165831,
        "lat": 26.5628537,
        "lon": -81.94953309999998
      },
      {
        "City": "Cupertino",
        "State": "California",
        "Population": 60189,
        "lat": 37.322997799999996,
        "lon": -122.03218229999999
      },
      {
        "City": "Pittsfield",
        "State": "Massachusetts",
        "Population": 44057,
        "lat": 42.450084499999996,
        "lon": -73.2453824
      },
      {
        "City": "Gilroy",
        "State": "California",
        "Population": 51701,
        "lat": 37.0057816,
        "lon": -121.5682751
      },
      {
        "City": "Manchester",
        "State": "New Hampshire",
        "Population": 110378,
        "lat": 42.995639700000005,
        "lon": -71.4547891
      },
      {
        "City": "Virginia Beach",
        "State": "Virginia",
        "Population": 448479,
        "lat": 36.8529263,
        "lon": -75.977985
      },
      {
        "City": "Salina",
        "State": "Kansas",
        "Population": 47846,
        "lat": 38.8402805,
        "lon": -97.6114237
      },
      {
        "City": "Somerville",
        "State": "Massachusetts",
        "Population": 78804,
        "lat": 42.3875968,
        "lon": -71.0994968
      },
      {
        "City": "Largo",
        "State": "Florida",
        "Population": 78409,
        "lat": 27.909466499999997,
        "lon": -82.7873244
      },
      {
        "City": "Fresno",
        "State": "California",
        "Population": 509924,
        "lat": 36.7468422,
        "lon": -119.7725868
      },
      {
        "City": "Phenix City",
        "State": "Alabama",
        "Population": 37498,
        "lat": 32.4709761,
        "lon": -85.0007653
      },
      {
        "City": "Berwyn",
        "State": "Illinois",
        "Population": 56758,
        "lat": 41.8505874,
        "lon": -87.79366850000001
      },
      {
        "City": "Palm Beach Gardens",
        "State": "Florida",
        "Population": 50699,
        "lat": 26.8233946,
        "lon": -80.1386547
      },
      {
        "City": "Pawtucket",
        "State": "Rhode Island",
        "Population": 71172,
        "lat": 41.878710999999996,
        "lon": -71.38255579999999
      },
      {
        "City": "San Gabriel",
        "State": "California",
        "Population": 40275,
        "lat": 34.0961111,
        "lon": -118.10583329999999
      },
      {
        "City": "Winston-Salem",
        "State": "North Carolina",
        "Population": 236441,
        "lat": 36.0998596,
        "lon": -80.24421600000001
      },
      {
        "City": "Alpharetta",
        "State": "Georgia",
        "Population": 62298,
        "lat": 34.07537620000001,
        "lon": -84.2940899
      },
      {
        "City": "O'Fallon",
        "State": "Missouri",
        "Population": 82809,
        "lat": 38.8106075,
        "lon": -90.6998477
      },
      {
        "City": "Redwood City",
        "State": "California",
        "Population": 80872,
        "lat": 37.4852152,
        "lon": -122.2363548
      },
      {
        "City": "Union City",
        "State": "California",
        "Population": 72528,
        "lat": 37.59339179999999,
        "lon": -122.0438298
      },
      {
        "City": "Hallandale Beach",
        "State": "Florida",
        "Population": 38632,
        "lat": 25.981202399999997,
        "lon": -80.148379
      },
      {
        "City": "Mankato",
        "State": "Minnesota",
        "Population": 40641,
        "lat": 44.1635775,
        "lon": -93.99939959999999
      },
      {
        "City": "Aliso Viejo",
        "State": "California",
        "Population": 50175,
        "lat": 33.5676842,
        "lon": -117.72560829999999
      },
      {
        "City": "Menifee",
        "State": "California",
        "Population": 83447,
        "lat": 33.6971468,
        "lon": -117.185294
      },
      {
        "City": "Loveland",
        "State": "Colorado",
        "Population": 71334,
        "lat": 40.397761200000005,
        "lon": -105.0749801
      },
      {
        "City": "Carpentersville",
        "State": "Illinois",
        "Population": 38241,
        "lat": 42.1211364,
        "lon": -88.2578582
      },
      {
        "City": "Providence",
        "State": "Rhode Island",
        "Population": 177994,
        "lat": 41.8239891,
        "lon": -71.4128343
      },
      {
        "City": "Hialeah",
        "State": "Florida",
        "Population": 233394,
        "lat": 25.8575963,
        "lon": -80.2781057
      },
      {
        "City": "San Ramon",
        "State": "California",
        "Population": 74513,
        "lat": 37.7799273,
        "lon": -121.9780153
      },
      {
        "City": "Ontario",
        "State": "California",
        "Population": 167500,
        "lat": 34.0633443,
        "lon": -117.65088759999999
      },
      {
        "City": "Kirkland",
        "State": "Washington",
        "Population": 84430,
        "lat": 47.6814875,
        "lon": -122.20873529999999
      },
      {
        "City": "St. George",
        "State": "Utah",
        "Population": 76817,
        "lat": 37.0965278,
        "lon": -113.5684164
      },
      {
        "City": "Hilton Head Island",
        "State": "South Carolina",
        "Population": 39412,
        "lat": 32.216316,
        "lon": -80.752608
      },
      {
        "City": "Glendale",
        "State": "California",
        "Population": 196021,
        "lat": 34.1425078,
        "lon": -118.255075
      },
      {
        "City": "Meriden",
        "State": "Connecticut",
        "Population": 60456,
        "lat": 41.5381535,
        "lon": -72.8070435
      },
      {
        "City": "Gardena",
        "State": "California",
        "Population": 59957,
        "lat": 33.8883487,
        "lon": -118.30896240000001
      },
      {
        "City": "Westfield",
        "State": "Massachusetts",
        "Population": 41301,
        "lat": 42.1250929,
        "lon": -72.749538
      },
      {
        "City": "Elgin",
        "State": "Illinois",
        "Population": 110145,
        "lat": 42.035408399999994,
        "lon": -88.2825668
      },
      {
        "City": "Plano",
        "State": "Texas",
        "Population": 274409,
        "lat": 33.0198431,
        "lon": -96.6988856
      },
      {
        "City": "Longmont",
        "State": "Colorado",
        "Population": 89919,
        "lat": 40.167206799999995,
        "lon": -105.10192749999999
      },
      {
        "City": "Coppell",
        "State": "Texas",
        "Population": 40342,
        "lat": 32.954568699999996,
        "lon": -97.01500779999999
      },
      {
        "City": "Lakewood",
        "State": "Ohio",
        "Population": 51143,
        "lat": 41.481993200000005,
        "lon": -81.7981908
      },
      {
        "City": "Jonesboro",
        "State": "Arkansas",
        "Population": 71551,
        "lat": 35.8422967,
        "lon": -90.704279
      },
      {
        "City": "College Station",
        "State": "Texas",
        "Population": 100050,
        "lat": 30.627977,
        "lon": -96.3344068
      },
      {
        "City": "Dearborn",
        "State": "Michigan",
        "Population": 95884,
        "lat": 42.3222599,
        "lon": -83.1763145
      },
      {
        "City": "Utica",
        "State": "New York",
        "Population": 61808,
        "lat": 43.100903,
        "lon": -75.232664
      },
      {
        "City": "Monroe",
        "State": "Louisiana",
        "Population": 49761,
        "lat": 32.5093109,
        "lon": -92.1193012
      },
      {
        "City": "Baltimore",
        "State": "Maryland",
        "Population": 622104,
        "lat": 39.2903848,
        "lon": -76.6121893
      },
      {
        "City": "Springfield",
        "State": "Missouri",
        "Population": 164122,
        "lat": 37.20895720000001,
        "lon": -93.2922989
      },
      {
        "City": "Pine Bluff",
        "State": "Arkansas",
        "Population": 46094,
        "lat": 34.2284312,
        "lon": -92.00319549999999
      },
      {
        "City": "Plainfield",
        "State": "New Jersey",
        "Population": 50588,
        "lat": 40.6337136,
        "lon": -74.40737359999999
      },
      {
        "City": "Lynn",
        "State": "Massachusetts",
        "Population": 91589,
        "lat": 42.466763,
        "lon": -70.9494938
      },
      {
        "City": "Woodbury",
        "State": "Minnesota",
        "Population": 65656,
        "lat": 44.923855200000006,
        "lon": -92.9593797
      },
      {
        "City": "Gainesville",
        "State": "Florida",
        "Population": 127488,
        "lat": 29.6516344,
        "lon": -82.3248262
      },
      {
        "City": "West Sacramento",
        "State": "California",
        "Population": 49891,
        "lat": 38.5804609,
        "lon": -121.53023400000001
      },
      {
        "City": "Sammamish",
        "State": "Washington",
        "Population": 50169,
        "lat": 47.616268299999994,
        "lon": -122.0355736
      },
      {
        "City": "Aventura",
        "State": "Florida",
        "Population": 37199,
        "lat": 25.9564812,
        "lon": -80.1392121
      },
      {
        "City": "Fayetteville",
        "State": "Arkansas",
        "Population": 78960,
        "lat": 36.0625795,
        "lon": -94.1574263
      },
      {
        "City": "San Rafael",
        "State": "California",
        "Population": 58994,
        "lat": 37.9735346,
        "lon": -122.5310874
      },
      {
        "City": "Conway",
        "State": "Arkansas",
        "Population": 63816,
        "lat": 35.0886963,
        "lon": -92.44210109999999
      },
      {
        "City": "Tacoma",
        "State": "Washington",
        "Population": 203446,
        "lat": 47.252876799999996,
        "lon": -122.4442906
      },
      {
        "City": "Middletown",
        "State": "Connecticut",
        "Population": 47333,
        "lat": 41.562320899999996,
        "lon": -72.6506488
      },
      {
        "City": "Burlington",
        "State": "Vermont",
        "Population": 42284,
        "lat": 44.475882500000004,
        "lon": -73.21207199999999
      },
      {
        "City": "Twin Falls",
        "State": "Idaho",
        "Population": 45981,
        "lat": 42.5629668,
        "lon": -114.46087109999999
      },
      {
        "City": "Sherman",
        "State": "Texas",
        "Population": 39296,
        "lat": 33.635661799999994,
        "lon": -96.60888050000001
      },
      {
        "City": "New York",
        "State": "New York",
        "Population": 8405837,
        "lat": 40.7127837,
        "lon": -74.00594129999999
      },
      {
        "City": "Simi Valley",
        "State": "California",
        "Population": 126181,
        "lat": 34.2694474,
        "lon": -118.78148200000001
      },
      {
        "City": "West Covina",
        "State": "California",
        "Population": 107740,
        "lat": 34.0686208,
        "lon": -117.93895259999998
      },
      {
        "City": "Castle Rock",
        "State": "Colorado",
        "Population": 53063,
        "lat": 39.372212100000006,
        "lon": -104.8560902
      },
      {
        "City": "Valdosta",
        "State": "Georgia",
        "Population": 56481,
        "lat": 30.8327022,
        "lon": -83.2784851
      },
      {
        "City": "Fort Worth",
        "State": "Texas",
        "Population": 792727,
        "lat": 32.7554883,
        "lon": -97.3307658
      },
      {
        "City": "Carson",
        "State": "California",
        "Population": 92599,
        "lat": 33.8316745,
        "lon": -118.28169299999999
      },
      {
        "City": "Evansville",
        "State": "Indiana",
        "Population": 120310,
        "lat": 37.9715592,
        "lon": -87.5710898
      },
      {
        "City": "Santa Maria",
        "State": "California",
        "Population": 102216,
        "lat": 34.953033700000006,
        "lon": -120.43571909999999
      },
      {
        "City": "Brentwood",
        "State": "Tennessee",
        "Population": 40021,
        "lat": 36.0331164,
        "lon": -86.7827772
      },
      {
        "City": "La Mesa",
        "State": "California",
        "Population": 58642,
        "lat": 32.7678287,
        "lon": -117.02308390000002
      },
      {
        "City": "Westminster",
        "State": "Colorado",
        "Population": 110945,
        "lat": 39.836652799999996,
        "lon": -105.03720459999998
      },
      {
        "City": "Reading",
        "State": "Pennsylvania",
        "Population": 87893,
        "lat": 40.335648299999995,
        "lon": -75.9268747
      },
      {
        "City": "Turlock",
        "State": "California",
        "Population": 70365,
        "lat": 37.494656799999994,
        "lon": -120.84659409999999
      },
      {
        "City": "Greeley",
        "State": "Colorado",
        "Population": 96539,
        "lat": 40.42331420000001,
        "lon": -104.7091322
      },
      {
        "City": "Tyler",
        "State": "Texas",
        "Population": 100223,
        "lat": 32.351260100000005,
        "lon": -95.3010624
      },
      {
        "City": "Winter Garden",
        "State": "Florida",
        "Population": 37711,
        "lat": 28.5652787,
        "lon": -81.5861847
      },
      {
        "City": "Waco",
        "State": "Texas",
        "Population": 129030,
        "lat": 31.549333,
        "lon": -97.1466695
      },
      {
        "City": "Martinez",
        "State": "California",
        "Population": 37165,
        "lat": 38.0193657,
        "lon": -122.1341321
      },
      {
        "City": "Thousand Oaks",
        "State": "California",
        "Population": 128731,
        "lat": 34.1705609,
        "lon": -118.83759369999999
      },
      {
        "City": "Azusa",
        "State": "California",
        "Population": 47842,
        "lat": 34.1336186,
        "lon": -117.90756270000001
      },
      {
        "City": "Bridgeport",
        "State": "Connecticut",
        "Population": 147216,
        "lat": 41.18654779999999,
        "lon": -73.1951767
      },
      {
        "City": "St. Louis Park",
        "State": "Minnesota",
        "Population": 47411,
        "lat": 44.9597376,
        "lon": -93.3702186
      },
      {
        "City": "Chesterfield",
        "State": "Missouri",
        "Population": 47749,
        "lat": 38.6631083,
        "lon": -90.5770675
      },
      {
        "City": "Greenacres",
        "State": "Florida",
        "Population": 38696,
        "lat": 26.6276276,
        "lon": -80.1353896
      },
      {
        "City": "Pasco",
        "State": "Washington",
        "Population": 67599,
        "lat": 46.239579299999995,
        "lon": -119.10056570000002
      },
      {
        "City": "Torrance",
        "State": "California",
        "Population": 147478,
        "lat": 33.835849200000006,
        "lon": -118.34062879999999
      },
      {
        "City": "Madison",
        "State": "Wisconsin",
        "Population": 243344,
        "lat": 43.07305170000001,
        "lon": -89.4012302
      },
      {
        "City": "Janesville",
        "State": "Wisconsin",
        "Population": 63820,
        "lat": 42.6827885,
        "lon": -89.01872220000001
      },
      {
        "City": "Waukegan",
        "State": "Illinois",
        "Population": 88826,
        "lat": 42.3636331,
        "lon": -87.84479379999999
      },
      {
        "City": "Bowling Green",
        "State": "Kentucky",
        "Population": 61488,
        "lat": 36.9685219,
        "lon": -86.48080429999999
      },
      {
        "City": "Arlington",
        "State": "Texas",
        "Population": 379577,
        "lat": 32.735687,
        "lon": -97.10806559999999
      },
      {
        "City": "Lewisville",
        "State": "Texas",
        "Population": 101074,
        "lat": 33.046233,
        "lon": -96.994174
      },
      {
        "City": "Farmington",
        "State": "New Mexico",
        "Population": 45426,
        "lat": 36.7280583,
        "lon": -108.21868559999999
      },
      {
        "City": "Oakley",
        "State": "California",
        "Population": 38194,
        "lat": 37.9974219,
        "lon": -121.71245359999999
      },
      {
        "City": "Palo Alto",
        "State": "California",
        "Population": 66642,
        "lat": 37.441883399999995,
        "lon": -122.14301950000001
      },
      {
        "City": "Springfield",
        "State": "Oregon",
        "Population": 60177,
        "lat": 44.0462362,
        "lon": -123.02202890000001
      },
      {
        "City": "New Bedford",
        "State": "Massachusetts",
        "Population": 95078,
        "lat": 41.6362152,
        "lon": -70.934205
      },
      {
        "City": "Redmond",
        "State": "Washington",
        "Population": 57530,
        "lat": 47.6739881,
        "lon": -122.12151200000001
      },
      {
        "City": "Brentwood",
        "State": "California",
        "Population": 55000,
        "lat": 37.931868,
        "lon": -121.6957863
      },
      {
        "City": "Davis",
        "State": "California",
        "Population": 66205,
        "lat": 38.5449065,
        "lon": -121.74051670000001
      },
      {
        "City": "La Mirada",
        "State": "California",
        "Population": 49133,
        "lat": 33.9172357,
        "lon": -118.01200859999999
      },
      {
        "City": "Smyrna",
        "State": "Tennessee",
        "Population": 43060,
        "lat": 35.9828412,
        "lon": -86.51860450000001
      },
      {
        "City": "Altoona",
        "State": "Pennsylvania",
        "Population": 45796,
        "lat": 40.5186809,
        "lon": -78.3947359
      },
      {
        "City": "Dothan",
        "State": "Alabama",
        "Population": 68001,
        "lat": 31.223231300000002,
        "lon": -85.39048879999999
      },
      {
        "City": "East Orange",
        "State": "New Jersey",
        "Population": 64544,
        "lat": 40.767323,
        "lon": -74.20486770000001
      },
      {
        "City": "Tinley Park",
        "State": "Illinois",
        "Population": 57282,
        "lat": 41.5731442,
        "lon": -87.7932939
      },
      {
        "City": "Biloxi",
        "State": "Mississippi",
        "Population": 44820,
        "lat": 30.396031800000003,
        "lon": -88.88530779999999
      },
      {
        "City": "Urbana",
        "State": "Illinois",
        "Population": 41752,
        "lat": 40.1105875,
        "lon": -88.2072697
      },
      {
        "City": "Garden Grove",
        "State": "California",
        "Population": 175140,
        "lat": 33.773905299999996,
        "lon": -117.9414477
      },
      {
        "City": "Lynwood",
        "State": "California",
        "Population": 71371,
        "lat": 33.930293,
        "lon": -118.21146029999998
      },
      {
        "City": "Northglenn",
        "State": "Colorado",
        "Population": 37499,
        "lat": 39.8961821,
        "lon": -104.98114679999999
      },
      {
        "City": "Canton",
        "State": "Ohio",
        "Population": 72535,
        "lat": 40.7989473,
        "lon": -81.378447
      },
      {
        "City": "Brookhaven",
        "State": "Georgia",
        "Population": 50603,
        "lat": 33.8651033,
        "lon": -84.3365917
      },
      {
        "City": "Baton Rouge",
        "State": "Louisiana",
        "Population": 229426,
        "lat": 30.458282899999997,
        "lon": -91.1403196
      },
      {
        "City": "Bristol",
        "State": "Connecticut",
        "Population": 60568,
        "lat": 41.6717648,
        "lon": -72.9492703
      },
      {
        "City": "Independence",
        "State": "Missouri",
        "Population": 117240,
        "lat": 39.0911161,
        "lon": -94.4155068
      },
      {
        "City": "Lansing",
        "State": "Michigan",
        "Population": 113972,
        "lat": 42.732535,
        "lon": -84.55553470000001
      },
      {
        "City": "Orland Park",
        "State": "Illinois",
        "Population": 58590,
        "lat": 41.6303103,
        "lon": -87.8539425
      },
      {
        "City": "Vineland",
        "State": "New Jersey",
        "Population": 61050,
        "lat": 39.4863773,
        "lon": -75.0259637
      },
      {
        "City": "Green Bay",
        "State": "Wisconsin",
        "Population": 104779,
        "lat": 44.519159,
        "lon": -88.019826
      },
      {
        "City": "Evanston",
        "State": "Illinois",
        "Population": 75570,
        "lat": 42.0450722,
        "lon": -87.6876969
      },
      {
        "City": "Ocoee",
        "State": "Florida",
        "Population": 39172,
        "lat": 28.569167699999998,
        "lon": -81.5439619
      },
      {
        "City": "Los Angeles",
        "State": "California",
        "Population": 3884307,
        "lat": 34.0522342,
        "lon": -118.24368490000002
      },
      {
        "City": "Federal Way",
        "State": "Washington",
        "Population": 92734,
        "lat": 47.3223221,
        "lon": -122.3126222
      },
      {
        "City": "West Jordan",
        "State": "Utah",
        "Population": 110077,
        "lat": 40.6096698,
        "lon": -111.9391031
      },
      {
        "City": "Yucaipa",
        "State": "California",
        "Population": 52536,
        "lat": 34.033625,
        "lon": -117.0430865
      },
      {
        "City": "Pittsburgh",
        "State": "Pennsylvania",
        "Population": 305841,
        "lat": 40.440624799999995,
        "lon": -79.9958864
      },
      {
        "City": "Downey",
        "State": "California",
        "Population": 113242,
        "lat": 33.9401088,
        "lon": -118.13315929999999
      },
      {
        "City": "Cicero",
        "State": "Illinois",
        "Population": 84103,
        "lat": 41.8455877,
        "lon": -87.7539448
      },
      {
        "City": "South Gate",
        "State": "California",
        "Population": 95677,
        "lat": 33.954737,
        "lon": -118.21201609999999
      },
      {
        "City": "Panama City",
        "State": "Florida",
        "Population": 36877,
        "lat": 30.158812899999997,
        "lon": -85.6602058
      },
      {
        "City": "Joplin",
        "State": "Missouri",
        "Population": 50789,
        "lat": 37.0842271,
        "lon": -94.513281
      },
      {
        "City": "League City",
        "State": "Texas",
        "Population": 90983,
        "lat": 29.5074538,
        "lon": -95.0949303
      },
      {
        "City": "Salt Lake City",
        "State": "Utah",
        "Population": 191180,
        "lat": 40.760779299999996,
        "lon": -111.89104740000002
      },
      {
        "City": "Fort Pierce",
        "State": "Florida",
        "Population": 43074,
        "lat": 27.446705600000005,
        "lon": -80.3256056
      },
      {
        "City": "Phoenix",
        "State": "Arizona",
        "Population": 1513367,
        "lat": 33.4483771,
        "lon": -112.07403729999999
      },
      {
        "City": "Corvallis",
        "State": "Oregon",
        "Population": 55298,
        "lat": 44.5645659,
        "lon": -123.2620435
      },
      {
        "City": "Cedar Hill",
        "State": "Texas",
        "Population": 46663,
        "lat": 32.5884689,
        "lon": -96.9561152
      },
      {
        "City": "Chicopee",
        "State": "Massachusetts",
        "Population": 55717,
        "lat": 42.14870429999999,
        "lon": -72.6078672
      },
      {
        "City": "Ocala",
        "State": "Florida",
        "Population": 57468,
        "lat": 29.187198600000002,
        "lon": -82.14009229999999
      },
      {
        "City": "Roswell",
        "State": "Georgia",
        "Population": 94034,
        "lat": 34.0232431,
        "lon": -84.36155550000001
      },
      {
        "City": "Park Ridge",
        "State": "Illinois",
        "Population": 37839,
        "lat": 42.011141200000004,
        "lon": -87.8406192
      },
      {
        "City": "Concord",
        "State": "New Hampshire",
        "Population": 42419,
        "lat": 43.2081366,
        "lon": -71.5375718
      },
      {
        "City": "Olympia",
        "State": "Washington",
        "Population": 48338,
        "lat": 47.0378741,
        "lon": -122.9006951
      },
      {
        "City": "Huntington Beach",
        "State": "California",
        "Population": 197575,
        "lat": 33.660297,
        "lon": -117.99922649999999
      },
      {
        "City": "Corpus Christi",
        "State": "Texas",
        "Population": 316381,
        "lat": 27.800582799999997,
        "lon": -97.396381
      },
      {
        "City": "Haverhill",
        "State": "Massachusetts",
        "Population": 62088,
        "lat": 42.7762015,
        "lon": -71.0772796
      },
      {
        "City": "Hanover Park",
        "State": "Illinois",
        "Population": 38510,
        "lat": 41.9994722,
        "lon": -88.1450735
      },
      {
        "City": "Cambridge",
        "State": "Massachusetts",
        "Population": 107289,
        "lat": 42.373615799999996,
        "lon": -71.10973349999999
      },
      {
        "City": "Glendale",
        "State": "Arizona",
        "Population": 234632,
        "lat": 33.538652299999995,
        "lon": -112.18598659999999
      },
      {
        "City": "Stanton",
        "State": "California",
        "Population": 38623,
        "lat": 33.802515500000005,
        "lon": -117.9931165
      },
      {
        "City": "Summerville",
        "State": "South Carolina",
        "Population": 46074,
        "lat": 33.0185039,
        "lon": -80.17564809999999
      },
      {
        "City": "Davenport",
        "State": "Iowa",
        "Population": 102157,
        "lat": 41.5236437,
        "lon": -90.57763670000001
      },
      {
        "City": "Boca Raton",
        "State": "Florida",
        "Population": 89407,
        "lat": 26.3683064,
        "lon": -80.1289321
      },
      {
        "City": "New Britain",
        "State": "Connecticut",
        "Population": 72939,
        "lat": 41.6612104,
        "lon": -72.77954190000001
      },
      {
        "City": "Roseville",
        "State": "Michigan",
        "Population": 47555,
        "lat": 42.4972583,
        "lon": -82.93714090000002
      },
      {
        "City": "Cleveland Heights",
        "State": "Ohio",
        "Population": 45394,
        "lat": 41.5200518,
        "lon": -81.556235
      },
      {
        "City": "Gresham",
        "State": "Oregon",
        "Population": 109397,
        "lat": 45.5001357,
        "lon": -122.43020130000001
      },
      {
        "City": "Lauderhill",
        "State": "Florida",
        "Population": 69813,
        "lat": 26.1403635,
        "lon": -80.2133808
      },
      {
        "City": "Hendersonville",
        "State": "Tennessee",
        "Population": 54068,
        "lat": 36.304773499999996,
        "lon": -86.6199957
      },
      {
        "City": "Santa Clara",
        "State": "California",
        "Population": 120245,
        "lat": 37.354107899999995,
        "lon": -121.9552356
      },
      {
        "City": "Oceanside",
        "State": "California",
        "Population": 172794,
        "lat": 33.1958696,
        "lon": -117.3794834
      },
      {
        "City": "Lake Forest",
        "State": "California",
        "Population": 79312,
        "lat": 33.6469661,
        "lon": -117.689218
      },
      {
        "City": "Novi",
        "State": "Michigan",
        "Population": 57960,
        "lat": 42.48059,
        "lon": -83.47549129999999
      },
      {
        "City": "West New York",
        "State": "New Jersey",
        "Population": 52122,
        "lat": 40.787878799999994,
        "lon": -74.0143064
      },
      {
        "City": "Everett",
        "State": "Massachusetts",
        "Population": 42935,
        "lat": 42.408429999999996,
        "lon": -71.0536625
      },
      {
        "City": "Linden",
        "State": "New Jersey",
        "Population": 41301,
        "lat": 40.6220478,
        "lon": -74.2445902
      },
      {
        "City": "Asheville",
        "State": "North Carolina",
        "Population": 87236,
        "lat": 35.5950581,
        "lon": -82.5514869
      },
      {
        "City": "Compton",
        "State": "California",
        "Population": 97877,
        "lat": 33.8958492,
        "lon": -118.2200712
      }
    ]
  }

var firebaseGeojsonFeatures = [];
for (var key in firebaseData.Sheet1) {
	var f = firebaseData.Sheet1[key];
  f.type = "Feature";
  firebaseGeojsonFeatures.push(f);
}
map.on('load', function() {
	map.addSource('firebase', {
	type: 'geojson',
  data: {type: 'FeatureCollection',
  			 features: firebaseGeojsonFeatures
       }
	});

  map.addLayer({
    id: 'firebase',
    source: 'firebase',
    type: 'circle',
    paint: {
      "circle-color":'blue',
      'circle-radius': 15
    }
  })
})