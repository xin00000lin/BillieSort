dataSetVersion = "2024-04-14"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "Books and CDs", key: "book" },
      { name: "The Highly Responsive to Prayers", tooltip: "01 - Reiiden", key: "HRtP" },
      { name: "The Story of Eastern Wonderland", tooltip: "02 - Fuumaroku", key: "SoEW" },
      { name: "Phantasmagoria of Dim.Dream", tooltip: "03 - Yumejikuu", key: "PoDD" },
      { name: "Lotus Land Story", tooltip: "04 - Gensoukyou", key: "LLS" },
      { name: "Mystic Square", tooltip: "05 - Kaikidan", key: "MS" },
      { name: "Embodiment of Scarlet Devil", tooltip: "06 - Koumakan", key: "EoSD" },
      { name: "Perfect Cherry Blossom", tooltip: "07 - Youyoumu", key: "PCB" },
      { name: "Immaterial and Missing Power", tooltip: "07.5 - Suimusou", key: "IaMP" },
      { name: "Imperishable Night", tooltip: "08 - Eiyashou", key: "IN" },
      { name: "Phantasmagoria of Flower View", tooltip: "09 - Kaeidzuka", key: "PoFV" },
      { name: "Shoot the Bullet", tooltip: "09.5 - Bunkachou", key: "StB" },
      { name: "Mountain of Faith", tooltip: "10 - Fuujinroku", key: "MoF" },
      { name: "Scarlet Weather Rhapsody", tooltip: "10.5 - Hisouten", key: "SWR" },
      { name: "Subterranean Animism", tooltip: "11 - Chireiden", key: "SA" },
      { name: "Undefined Fantastic Object", tooltip: "12 - Seirensen", key: "UFO" },
      { name: "Touhou Hisoutensoku", tooltip: "12.3 - Hisoutensoku", key: "Soku" },
      { name: "Double Spoiler", tooltip: "12.5 - Bunkachou", key: "DS" },
      { name: "Great Fairy Wars", tooltip: "12.8 - Daisensou", key: "GFW" },
      { name: "Ten Desires", tooltip: "13 - Shinreibyou", key: "TD" },
      { name: "Hopeless Masquerade", tooltip: "13.5 - Shinkirou", key: "HM" },
      { name: "Double Dealing Character", tooltip: "14 - Kishinjou", key: "DDC" },
      { name: "Impossible Spell Card", tooltip: "14.3 - Amanojaku", key: "ISC" },
      { name: "Urban Legend in Limbo", tooltip: "14.5 - Shinpiroku", key: "ULiL" },
      { name: "Legacy of Lunatic Kingdom", tooltip: "15 - Kanjuden", key: "LoLK" }
    ]
  },
  {
    name: "Filter by Stage Enemy Appearances",
    key: "stage",
    tooltip: "Check this to restrict to characters that appear in certain stages as enemies.",
    checked: false,
    sub: [
      { name: "Stage 1", key: "st1" },
      { name: "Stage 2", key: "st2" },
      { name: "Stage 3", key: "st3" },
      { name: "Stage 4", key: "st4" },
      { name: "Stage 5/Penultimate", tooltip: "Stage 4 in 5-stage games, and Stage 8 in 9-stage games.", key: "st5" },
      { name: "Stage 6/Final", key: "st6" },
      { name: "Stage EX/Phantasm", key: "ex" }
    ]
  },
  {
    name: "Remove PC-98 Duplicates",
    key: "pc98",
    tooltip: "Check this to remove PC-98 characters with a Windows counterpart."
  },
  {
    name: "Remove Non-Girls",
    key: "notgirl",
    tooltip: "Check this to remove all non-female characters."
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Kiyoshi Adachi",
    img: "Adachi.png",
    opts: {
      series: ["book", "EoSD", "PCB", "IaMP", "IN", "PoFV", "StB", "MoF", "SWR", "SA", "UFO", "Soku", "DS", "TD", "HM", "DDC", "ISC", "ULiL", "LoLK"],
      stage: ["st4"]
    }
  },
  {
    name: "Akk",
    img: "Akk.png",
    opts: {
      series: ["book", "EoSD", "PCB", "IaMP", "IN", "PoFV", "StB", "MoF", "SWR", "SA", "UFO", "Soku", "DS", "GFW", "TD", "HM", "DDC", "ISC", "ULiL", "LoLK"],
      stage: ["st4", "ex"]
    }
  },
  {
    name: "Alan",
    img: "Alan.png",
    opts: { series: ["book", "EoSD", "StB", "HM"], stage: ["st1"] }
  },
  {
    name: "Alex Romero",
    img: "Alex (1).png",
    opts: { series: ["book", "EoSD"], stage: ["st2", "ex"] }
  },
  {
    name: "Aragorn",
    img: "Aragorn1.png",
    opts: {
      series: [ "book", "EoSD", "PCB", "PoFV", "StB", "Soku", "GFW", "HM", "DDC", "ISC"
      ],
      stage: ["st2"]
    }
  },
  {
    name: "Arthur",
    img: "Arthut I.png",
    opts: { series: ["book", "EoSD", "IaMP", "StB", "Soku"], stage: ["st3"] }
  },
  {
    name: "Arthur Pendragon",
    img: "Arthut.png",
    opts: { series: ["book", "EoSD"], stage: ["st4"] }
  },
  {
    name: "Baba Voss",
    img: "Baba Voss.png",
    opts: {
      series: ["book", "EoSD", "IaMP", "StB", "MoF", "Soku", "HM"],
      stage: ["st4", "ex"]
    }
  },
  {
    name: "Baekhyun",
    img: "m3iltML.png",
    opts: {
      series: [ "book", "EoSD", "PCB", "IaMP", "IN", "PoFV", "StB", "MoF", "Soku", "HM", "DDC", "ISC"
      ],
      stage: ["st5", "st6"]
    }
  },
  {
    name: "Bawoo",
    img: "Bawoo (1).png",
    opts: {
      series: ["book", "EoSD", "IaMP", "IN", "StB", "MoF", "Soku", "HM", "ISC"],
      stage: ["st6"]
    }
  },
  {
    name: "Bellamy Blake",
    img: "Bellamy (1).png",
    opts: { series: ["book", "EoSD", "StB"], stage: ["ex"] }
  },
  {
    name: "Beth Harmon",
    img: "Beth (1).png",
    opts: { series: ["book", "PCB", "StB", "HM"], stage: ["st1"] }
  },
  {
    name: "Black",
    img: "Black (1).png",
    opts: {
      series: ["book", "PCB", "IaMP", "StB", "MoF", "Soku", "HM"],
      stage: ["st2", "ex"]
    }
  },
  {
    name: "Blaire Waldorf",
    img: "Blaire.png",
    opts: {
      series: ["book", "PCB", "IaMP", "IN", "StB", "MoF", "Soku", "HM"],
      stage: ["st3"]
    }
  },
  {
    name: "Bo",
    img: "Bo (1).png",
    opts: { series: ["book", "PCB", "PoFV", "HM"], stage: ["st4", "ex"] }
  },
  {
    name: "Boss",
    img: "Boss.png",
    opts: { series: ["book", "PCB", "PoFV", "HM"], stage: ["st4"] }
  },
  {
    name: "Brooke Davis",
    img: "Brooke.png",
    opts: { series: ["book", "PCB", "PoFV", "HM"], stage: ["st4"] }
  },
  {
    name: "Cedric Diggory",
    img: "Cedric (1).png",
    opts: { series: ["book", "PCB", "PoFV", "HM"], stage: ["st4"] }
  },
  {
    name: "Chandler Bing",
    img: "Chandler1.png",
    opts: {
      series: [ "book", "PCB", "IaMP", "IN", "PoFV", "StB", "MoF", "Soku", "TD", "HM", "ISC"
      ],
      stage: ["st5", "st6"]
    }
  },
  {
    name: "Danny Williams",
    img: "Danny.png",
    opts: {
      series: [ "book", "PCB", "IaMP", "IN", "StB", "MoF", "Soku", "TD", "HM", "ISC"
      ],
      stage: ["st1", "st6"]
    }
  },
  {
    name: "Declan Harp",
    img: "Declan (1).png",
    opts: {
      series: ["book", "PCB", "IaMP", "IN", "StB", "MoF", "Soku", "HM"],
      stage: ["ex"]
    }
  },
  {
    name: "Derek Hale",
    img: "Derek (1).png",
    opts: {
      series: ["book", "PCB", "IaMP", "IN", "StB", "MoF", "Soku", "HM", "ISC"],
      stage: ["ex"]
    }
  },
  {
    name: "Lee Dongsik",
    img: "Dongsik (1).png",
    opts: {
      series: ["book", "IaMP", "StB", "MoF", "Soku", "DS", "HM", "ISC"],
      stage: ["st6"]
    }
  },
  {
    name: "Draco Malfoy",
    img: "Draco.png",
    opts: { series: ["book", "IN", "StB", "HM"], stage: ["st1"] }
  },
  {
    name: "Ed Teech",
    img: "Ed.png",
    opts: { series: ["book", "IN", "PoFV", "StB", "HM"], stage: ["st2"] }
  },
  {
    name: "Eddie Diaz",
    img: "Eddie.png",
    opts: { series: ["book", "IN", "StB", "HM", "ISC"], stage: ["st3", "ex"] }
  },
  {
    name: "Eloise Bridgerton",
    img: "Eloise.png",
    opts: { series: ["book", "IN", "PoFV", "StB", "HM"], stage: ["st5"] }
  },
  {
    name: "Lee Eunho",
    img: "Eunho (1).png",
    opts: {
      series: ["book", "IN", "PoFV", "StB", "Soku", "HM", "LoLK"],
      stage: ["st5"]
    }
  },
  {
    name: "Faramir",
    img: "Faramir.png",
    opts: { series: ["book", "IN", "StB", "HM"], stage: ["st6"] }
  },
  {
    name: "Gareth Visser",
    img: "Grizz (1).png",
    opts: { series: ["book", "IN", "StB", "HM"], stage: ["st6"] }
  },
  {
    name: "Hannibal Lecter",
    img: "Hannibal (1).png",
    opts: { series: ["book", "IN", "StB", "HM", "ISC", "ULiL"], stage: ["ex"] }
  },
  {
    name: "Harry Hart",
    img: "Harry (1).png",
    opts: {
      series: ["book", "PoFV", "StB", "MoF", "SWR", "Soku", "HM", "ISC"],
      stage: ["st4"]
    }
  },
  {
    name: "Yoon Hwapyung",
    img: "Hwapyung.png",
    opts: { series: ["book", "PoFV", "StB", "HM"], stage: ["st4"] }
  },
  {
    name: "Jo Hyunsoo",
    img: "Hyunsoo (1).png",
    opts: { series: ["book", "PoFV", "StB", "HM"], stage: ["st5"] }
  },
  {
    name: "Ida Kousuke",
    img: "Ida.png",
    opts: {
      series: ["book", "PoFV", "StB", "MoF", "Soku", "HM"],
      stage: ["st5"]
    }
  },
  {
    name: "JJ Maybank",
    img: "JJ (1).png",
    opts: { series: ["book", "PoFV", "StB", "HM"], stage: ["st6"] }
  },
  {
    name: "Seo Jaewon",
    img: "Jaewon (1).png",
    opts: { series: ["SWR", "DS", "HM"], stage: ["st1"] }
  },
  {
    name: "Jang Jaeyoung",
    img: "Jaeyoung.png",
    opts: { series: ["SWR", "DS", "HM"], stage: ["st1"] }
  },
  {
    name: "Javier Suarez",
    img: "Javier.png",
    opts: { series: ["SWR", "DS", "HM"], stage: ["st2"] }
  },
  {
    name: "Jeremy Gilbert",
    img: "Jeremy.png",
    opts: { series: ["SWR", "DS", "HM", "ISC", "ULiL"], stage: ["st3"] }
  },
  {
    name: "Jill Young",
    img: "Jill.png",
    opts: { series: ["SWR", "DS", "ISC"], stage: ["st4"] }
  },
  {
    name: "Jim",
    img: "Jim.png",
    opts: {
      series: ["SWR", "SA", "UFO", "Soku", "DS", "TD", "HM", "ISC", "LoLK"],
      stage: ["st5", "ex"]
    }
  },
  {
    name: "Joey Tribbiani",
    img: "Joey (1).png",
    opts: { series: ["SWR", "Soku", "DS", "HM", "ISC"], stage: ["st6", "ex"] }
  },
  {
    name: "Yoon Jongwoo",
    img: "Jongwoo (1).png",
    opts: { series: ["SWR", "SA", "Soku", "DS", "HM", "ISC"], stage: ["ex"] }
  },
  {
    name: "Lim Jugyeong",
    img: "Jugyeong.png",
    opts: { series: ["MoF", "Soku", "DS", "HM"], stage: ["st5"] }
  },
  {
    name: "Kahlan Amnell",
    img: "Kahlan (1).png",
    opts: { series: ["MoF", "Soku", "DS", "HM", "ISC"], stage: ["st6"] }
  },
  {
    name: "Kang Gook",
    img: "JRka6ff.png",
    opts: { series: ["SA", "DS"], stage: ["st1"] }
  },
  {
    name: "Kaofah",
    img: "Kaofah.png",
    opts: { series: ["SA", "DS", "HM"], stage: ["st1"] }
  },
  {
    name: "Michael Kelso",
    img: "Kelso.png",
    opts: { series: ["SA", "DS", "HM"], stage: ["st2"] }
  },
  {
    name: "Kinn",
    img: "Kinn.png",
    opts: { series: ["SA", "DS", "HM"], stage: ["st3"] }
  },
  {
    name: "Kurosawa Yuichi",
    img: "Kurosawa.png",
    opts: { series: ["SA", "DS", "HM"], stage: ["st4"] }
  },
  {
    name: "Kyo Sohma",
    img: "Kyo (1).png",
    opts: { series: ["SA", "DS", "HM"], stage: ["st4", "st5", "st6"] }
  },
  {
    name: "Legolas",
    img: "Legolas.png",
    opts: { series: ["SA", "Soku", "DS", "HM"], stage: ["st6"] }
  },
  {
    name: "Seo Moonjo",
    img: "Moonjo.png",
    opts: { series: ["SA", "DS", "HM", "ULiL"], stage: ["ex"] }
  },
  {
    name: "Mork",
    img: "Mork.png",
    opts: { series: ["UFO", "DS", "HM"], stage: ["st1", "st5"] }
  },
  {
    name: "Naoya Shinomiya",
    img: "Naoya.png",
    opts: { series: ["UFO", "DS", "HM"], stage: ["st2", "ex"] }
  },
  {
    name: "Nick Clark",
    img: "Nick C.png",
    opts: { series: ["UFO", "DS", "HM", "ULiL"], stage: ["st3"] }
  },
  {
    name: "Pa",
    img: "Pa.png",
    opts: { series: ["UFO", "DS", "HM"], stage: ["st4"] }
  },
  {
    name: "Phayu",
    img: "Phayu.png",
    opts: { series: ["UFO", "DS", "HM"], stage: ["st5"] }
  },
  {
    name: "Phupha",
    img: "Phupha.png",
    opts: { series: ["UFO", "DS", "HM", "ISC", "ULiL"], stage: ["st6"] }
  },
  {
    name: "Pran",
    img: "Pran.png",
    opts: { series: ["UFO", "DS", "TD", "HM"], stage: ["st4", "st6", "ex"] }
  },
  {
    name: "Prapai",
    img: "Prapai.png",
    opts: { series: ["DS", "HM", "ISC"], stage: ["ex"] }
  },
  {
    name: "Prince Charmont",
    img: "Prince Char (1).png",
    opts: { series: ["book", "GFW", "HM"], stage: ["st1", "st2", "st3"] }
  },
  {
    name: "Prince",
    img: "Prince.png",
    opts: { series: ["book", "GFW", "HM"], stage: ["st1", "st2", "st3"] }
  },
  {
    name: "Rachel Green",
    img: "Rachel (1).png",
    opts: { series: ["book", "GFW", "HM"], stage: ["st1", "st2", "st3"] }
  },
  {
    name: "Rae Earl",
    img: "Rae.png",
    opts: { series: ["TD", "HM", "ISC"], stage: ["st2"] }
  },
  {
    name: "Rick Grimes",
    img: "Rick.png",
    opts: { series: ["TD", "HM", "ISC"], stage: ["st3", "st4"] }
  },
  {
    name: "Ron Weasley",
    img: "BvRy423.png",
    opts: { series: ["TD", "HM", "ISC"], stage: ["st4"] }
  },
  {
    name: "Kang Seojoon",
    img: "Seojoon.png",
    opts: { series: ["TD", "HM"], stage: ["st5"] }
  },
  {
    name: "Han Seojun",
    img: "Seojun.png",
    opts: { series: ["TD", "HM", "ISC", "ULiL"], stage: ["st5"] }
  },
  {
    name: "Shawn Hunter",
    img: "LXALO2L.png",
    opts: { series: ["TD", "HM", "ISC", "ULiL"], stage: ["st6"] }
  },
  {
    name: "Zhou Shuyi",
    img: "Shuyi (1).png",
    opts: { series: ["TD", "HM", "ISC", "ULiL"], stage: ["ex"] }
  },
  {
    name: "Yeon Sieun",
    img: "Jp8YrAA.png",
    opts: { series: ["book", "HM", "ULiL"], stage: ["st6"] }
  },
  {
    name: "Hwang Simok",
    img: "Simok.png",
    opts: { series: ["DDC", "ISC"], stage: ["st1"] }
  },
  {
    name: "Sirius Black",
    img: "Sirius (1).png",
    opts: { series: ["DDC", "ISC"], stage: ["st2"] }
  },
  {
    name: "Cha Siwon",
    img: "Siwon.png",
    opts: { series: ["DDC", "ISC"], stage: ["st3"] }
  },
  {
    name: "Stiles Stilinski",
    img: "Stiles.png",
    opts: { series: ["DDC", "ISC"], stage: ["st4", "ex"] }
  },
  {
    name: "Jo Taehyun",
    img: "Taehyun (1).png",
    opts: { series: ["DDC", "ISC"], stage: ["st4", "ex"] }
  },
  {
    name: "Han Taejoo",
    img: "Taejoo.png",
    opts: { series: ["DDC", "ISC"], stage: ["st5", "st6"] }
  },
  {
    name: "Jung Taeju",
    img: "Taeju (1).png",
    opts: { series: ["DDC", "ISC", "ULiL"], stage: ["st6"] }
  },
  {
    name: "Teh",
    img: "Teh.png",
    opts: { series: ["DDC", "ISC"], stage: ["ex"] }
  },
  {
    name: "Tinn",
    img: "Tinn.png",
    opts: { series: ["ULiL"], stage: ["st6"] }
  },
  {
    name: "Todd",
    img: "Todd.png",
    opts: { series: ["LoLK"], stage: ["st1"] }
  },
  {
    name: "Topanga Lawrence",
    img: "Topanga.png",
    opts: { series: ["LoLK"], stage: ["st2"] }
  },
  {
    name: "Vegas",
    img: "Vegas (1).png",
    opts: { series: ["LoLK"], stage: ["st3", "ex"] }
  },
  {
    name: "Veronica Fisher",
    img: "Veronica.png",
    opts: { series: ["LoLK"], stage: ["st4"] }
  },
  {
    name: "Wang",
    img: "Wang (1).png",
    opts: { series: ["LoLK"], stage: ["st5"] }
  },
  {
    name: "Yihwa",
    img: "Yihwa.png",
    opts: { series: ["LoLK"], stage: ["st6", "ex"] }
  },
  {
    name: "Choi Yuna",
    img: "Yuna (1).png",
    opts: { series: ["LoLK"], stage: ["ex"] }
  },
  {
    name: "Roronoa Zoro",
    img: "Zoro (1).png",
    opts: { series: ["book"], stage: [] }
  },
  { name: "Ma Hwiyoung", img: "at18-03.png", opts: { series: ["book"], stage: [] } },
  {
    name: "Steve McGarret",
    img: "steve.png",
    opts: { series: ["book"], stage: [] }
  }
