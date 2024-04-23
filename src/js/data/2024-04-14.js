dataSetVersion = "2024-04-14"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "Cherry Magic", key: "CM" },
      { name: "Enchante", key: "E" },
      { name: "Pit Babe", key: "PB" },
      { name: "Bates Motel", key: "BM" },
      { name: "Lord of the Rings", key: "LOtR" },
      { name: "Children of Nobody", key: "CoN" },
      { name: "Sotus", key: "S" },
      { name: "Inception", key: "I" },
      { name: "Merlin", key: "M" },
      { name: "At Eighteen", key: "AE" },
      { name: "See", key: "See" },
      { name: "Extraordinary You", key: "EY" },
      { name: "Blueming", key: "B" },
      { name: "The 100", key: "T1" },
      { name: "The Queen's Gambit", key: "TQG" },
      { name: "Not Me", key: "NM" },
      { name: "Gossip Girl", key: "GG" },
      { name: "Dumplin'", key: "D" },
      { name: "My Engineer", key: "ME" },
      { name: "One Tree Hill", key: "OTH" },
      { name: "Harry Potter", key: "HP" },
      { name: "Friends", key: "F" },
      { name: "Hawaii 5-0", key: "H50" },
      { name: "Frontier", key: "FT" },
      { name: "Teen Wolf", key: "TW" },
      { name: "Beyond Evil", key: "BE" },
      { name: "Our Flag Means Death", key: "OFMD" },
      { name: "9-1-1", key: "911" },
      { name: "Bridgerton", key: "BG" },
      { name: "The Society", key: "TS" },
      { name: "Hannibal", key: "H" },
      { name: "Kingsman", key: "K" },
      { name: "The Guest", key: "TG" },
      { name: "The Merciless", key: "TM" },
      { name: "My Love Mix Up", key: "MLMU" },
      { name: "The Eighth Sense", key: "TES" },
      { name: "Semantic Error", key: "SE" },
      { name: "Dirty Dancing Havana Nights", key: "DDHN" },
      { name: "Vampire Diaries", key: "VD" },
      { name: "Mighty Joe Young", key: "MJY" },
      { name: "Outer Banks", key: "OB" },
      { name: "Strangers from Hell", key: "SfH" },
      { name: "True Beauty", key: "TB" },
      { name: "Legend of the Seeker", key: "LotS" },
      { name: "Where Your Eyes Linger", key: "WYEL" },
      { name: "Sky in Your Heart", key: "SiYH" },
      { name: "That 70's Show", key: "T7S" },
      { name: "Kinnporsche", key: "KP" },
      { name: "Fruits Basket", key: "FB" },
      { name: "Dark Blue Kiss", key: "DBK" },
      { name: "Mr. Unlucky Has No Choice But to Kiss", key: "MUHNCBTK" },
      { name: "Fear the Walking Dead", key: "FTWD" },
      { name: "Bad Buddy", key: "BB" },
      { name: "Love in the Air", key: "LitA" },
      { name: "1000 Stars", key: "1S" },
      { name: "Ella Enchanted", key: "EE" },
      { name: "My Mad Fat Diary", key: "MMFD" },
      { name: "The Walking Dead", key: "TWD" },
      { name: "To My Star", key: "TMS" },
      { name: "Boy Meets World", key: "BMW" },
      { name: "We Best Love", key: "WBL" },
      { name: "Weak Hero Class 1", key: "WHC1" },
      { name: "Strangers", key: "St" },
      { name: "A Shoulder to Cry On", key: "AStCO" },
      { name: "My Name", key: "MN" },
      { name: "I Told Sunset About You", key: "ITSAY" },
      { name: "My School President", key: "MSP" },
      { name: "Shameless", key: "SM" },
      { name: "180 degrees Longitude Passes Through Us", key: "180DLPTU" },
      { name: "Together With Me", key: "TWM" },
      { name: "One Piece", key: "OP" },
      { name: "Vigilante", key: "V" },
      { name: "Bandersnatch", key: "BS" },
      { name: "Coraline", key: "C" },
      { name: "Pride & Predjudice", key: "PP" },
      { name: "Criminal Minds", key: "CrM" },
      { name: "Breeze of Love", key: "BoL" },
      { name: "From", key: "FM" },
      { name: "Midnight", key: "MD" },
      { name: "The Glory", key: "TGl" },
      { name: "Evilive", key: "EL" },
      { name: "The Last of Us", key: "TLoU" },
      { name: "X-Men", key: "XM" },
      { name: "The Eagle", key: "TE" },
      { name: "Sweet Home", key: "SH" },
      { name: "Saltburn", key: "SB" },
      { name: "The Maze Runner", key: "TMR" },
      { name: "The Lovely Writer", key: "TLW" },
      { name: "Anne of Green Gables", key: "AoGG" },
      { name: "Succession", key: "SSN" },
      { name: "Bloodhounds", key: "BH" },
      { name: "Sing My Crush", key: "SMC" },
      { name: "Make Our Days Count", key: "MODC" },
      { name: "My Beautiful Man", key: "MBM" },
      { name: "Navillera", key: "N" },
      { name: "Cheese in the Trap", key: "CitT" },
      { name: "Step by Step", key: "SBS" },
      { name: "Game of Thrones", key: "GoT" },
      { name: "Bump Up Business", key: "BUB" },
      { name: "Stranger Things", key: "StT" },
      { name: "Dead Friend Forever", key: "DFF" },
      { name: "One Ordinary Day", key: "OOD" },
      { name: "Masters of the Air", key: "MotA" },
      { name: "Sing in Love", key: "SiL" },
      { name: "Sense8", key: "S8" },
      { name: "Alice in Borderland", key: "AiB" },
      { name: "Big Time Rush", key: "BTR" },
      { name: "The Red Road", key: "TRR" },
      { name: "Two Weeks Notice", key: "TWN" },
      { name: "Love Syndrome 3", key: "LS3" },
      { name: "It's Always Sunny in Philadelphia", key: "IASIP" },
      { name: "Last Twilight", key: "LT" },
      { name: "Love for Love's Sake", key: "LfLS" },
      { nmae: "His", key: "His" },
      { name: "Light on Me", key: "LoM" },
      { name: "Are You Human, Too?", key: "AYHT" },
      { name: "3 Will Be Free", key: "3WBF" },
      { name: "Heartstopper", key: "HS" },
      { name: "Charlie Countryman", "CC" },
      { name: "The Witch Subversion", key: "TWS" },
      { name: "I Will Knock You", key: "IWKY" },
      { name: "The hunger Games", key: "THG" },
      { name: "Hereditary", key: "HD" },
      { name: "The Sign", key: "TSTS" },
      { name: "Star Wars", key: "SW" },
      { name: "Merli", key: "ML" },
      { name: "En of Love", key: "EoL" },
      { name: "Unknown", key: "UK" },
      { name: "Vikings", key: "VK" },
      { name: "Okja", key: "O" },
      { name: "Mars", key: "MS" },
      { name: "Crashing", key: "CS" },
      { name: "Skam", key: "SkM" },
      { name: "Move to Heaven", key: "MtH" },
      { name: "2gether", key: "2G" },
      { name: "Be Loved in House", key: "BLiH" },
      { name: "Skae Your Soul", key: "SYS" },
      { name: "Twins", key: "Twins" },
      { name: "Blind", key: "BD" },
      { name: "Insider", key: "ISD" },
      { name: "Stay with Me", key: "SwM" },
      { name: "Manner of Death", key: "MoD" },
      { name: "Love by chance", key: "LBC" },
      { name: "Old Fashioned Cupcake", key: "OFC" },
      { name: "Love Mechanics", key: "LM" },
      { name: "Venom", key: "VNM" },
      { name: "Young Royals", key: "YR" },
      { name: "While You Were Sleeping", key: "WYWS" },
      { name: "The Devil Judge", key: "TDJ" },
      { name: "The Call", key: "TC" },
      { name: "Why R U Korea", key: "WRUK" },
      { name: "Crossing the Line", key: "CtL" },
      { name: "13 Reasons Why", key: "13RW" },
      { name: "Hit the Floor", key: "HtF" },
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
    tooltip: "Check this to remove PC-98 characters with a Windows counterpart.",
    checked: false,
  },
  {
    name: "Remove Non-Girls",
    key: "notgirl",
    tooltip: "Check this to remove all non-female characters.",
    checked: false,
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Kiyoshi Adachi",
    img: "Luxc8Lx.png",
    opts: {
      series: ["CM"],
      stage: ["st4"]
    }
  },
  {
    name: "Akk",
    img: "yVtiEhn.png",
    opts: {
      series: ["E"],
      stage: ["st4", "ex"]
    }
  },
  {
    name: "Alan",
    img: "FbdKoSa.png",
    opts: { series: ["PB"], stage: ["st1"] }
  },
  {
    name: "Alex Romero",
    img: "dTu8VYz.png",
    opts: { series: ["BM"], stage: ["st2", "ex"] }
  },
  {
    name: "Aragorn",
    img: "0WVA2LI.png",
    opts: {
      series: [ "LoTR"
      ],
      stage: ["st2"]
    }
  },
  {
    name: "Arthur",
    img: "AHkV1lu.png",
    opts: { series: ["I"], stage: ["st3"] }
  },
  {
    name: "Arthur Pendragon",
    img: "yXcjSkD.png",
    opts: { series: ["M"], stage: ["st4"] }
  },
  {
    name: "Baba Voss",
    img: "637uYiE.png",
    opts: {
      series: ["See"],
      stage: ["st4", "ex"]
    }
  },
  {
    name: "Baekhyun",
    img: "i9FagzQ.png",
    opts: {
      series: [ "EY"
      ],
      stage: ["st5", "st6"]
    }
  },
  {
    name: "Bawoo",
    img: "qLawwaX.png",
    opts: {
      series: ["B"],
      stage: ["st6"]
    }
  },
  {
    name: "Bellamy Blake",
    img: "b3JcKKn.png",
    opts: { series: ["T1"], stage: ["ex"] }
  },
  {
    name: "Beth Harmon",
    img: "wDe8eOh.png",
    opts: { series: ["TQG"], stage: ["st1"] }
  },
  {
    name: "Black",
    img: "aAnR0Av.png",
    opts: {
      series: ["NM"],
      stage: ["st2", "ex"]
    }
  },
  {
    name: "Blaire Waldorf",
    img: "fNF9qnY.png",
    opts: {
      series: ["GG"],
      stage: ["st3"]
    }
  },
  {
    name: "Bo",
    img: "HrGK5DT.png",
    opts: { series: ["D", "HM"], stage: ["st4", "ex"] }
  },
  {
    name: "Boss",
    img: "CDIqXxU.png",
    opts: { series: ["ME"], stage: ["st4"] }
  },
  {
    name: "Brooke Davis",
    img: "UvVyskn.png",
    opts: { series: ["OTH"], stage: ["st4"] }
  },
  {
    name: "Cedric Diggory",
    img: "VRDdSYf.png",
    opts: { series: ["HP"], stage: ["st4"] }
  },
  {
    name: "Chandler Bing",
    img: "M2ErVQ4.png",
    opts: {
      series: [ "F"
      ],
      stage: ["st5", "st6"]
    }
  },
  {
    name: "Danny Williams",
    img: "TUSE2Ta.png",
    opts: {
      series: [ "H50"
      ],
      stage: ["st1", "st6"]
    }
  },
  {
    name: "Declan Harp",
    img: "K7Pzcqo.png",
    opts: {
      series: ["FT"],
      stage: ["ex"]
    }
  },
  {
    name: "Derek Hale",
    img: "q9fUjF5.png",
    opts: {
      series: ["TW"],
      stage: ["ex"]
    }
  },
  {
    name: "Lee Dongsik",
    img: "mLx3MJn.png",
    opts: {
      series: ["BE"],
      stage: ["st6"]
    }
  },
  {
    name: "Draco Malfoy",
    img: "e1U16oU.png",
    opts: { series: ["HP"], stage: ["st1"] }
  },
  {
    name: "Ed Teech",
    img: "V2GqJbZ.png",
    opts: { series: ["OFMD"], stage: ["st2"] }
  },
  {
    name: "Eddie Diaz",
    img: "vimzs1F.png",
    opts: { series: ["911"], stage: ["st3", "ex"] }
  },
  {
    name: "Eloise Bridgerton",
    img: "AoBD9CH.png",
    opts: { series: ["BG"], stage: ["st5"] }
  },
  {
    name: "Lee Eunho",
    img: "uO1177I.png",
    opts: {
      series: ["CoN"],
      stage: ["st5"]
    }
  },
  {
    name: "Faramir",
    img: "FD1rKSq.png",
    opts: { series: ["LoTR"], stage: ["st6"] }
  },
  {
    name: "Gareth Visser",
    img: "5ZSM98w.png",
    opts: { series: ["TS"], stage: ["st6"] }
  },
  {
    name: "Hannibal Lecter",
    img: "SFmc4YO.png",
    opts: { series: ["H"], stage: ["ex"] }
  },
  {
    name: "Harry Hart",
    img: "AgzbE6M.png",
    opts: {
      series: ["K"],
      stage: ["st4"]
    }
  },
  {
    name: "Yoon Hwapyung",
    img: "J3n1fsv.png",
    opts: { series: ["TG"], stage: ["st4"] }
  },
  {
    name: "Jo Hyunsoo",
    img: "roaLGP2.png",
    opts: { series: ["TM"], stage: ["st5"] }
  },
  {
    name: "Ida Kousuke",
    img: "i0tBfjG.png",
    opts: {
      series: ["MLMU"],
      stage: ["st5"]
    }
  },
  {
    name: "JJ Maybank",
    img: "2X3bh8t.png",
    opts: { series: ["OB"], stage: ["st6"] }
  },
  {
    name: "Seo Jaewon",
    img: "JdX6Fqq.png",
    opts: { series: ["TES"], stage: ["st1"] }
  },
  {
    name: "Jang Jaeyoung",
    img: "Q1SkmtB.png",
    opts: { series: ["SE"], stage: ["st1"] }
  },
  {
    name: "Jill Young",
    img: "ZYbRZsK.png",
    opts: { series: ["MJY"], stage: ["st4"] }
  },
  {
    name: "Yoon Jongwoo",
    img: "XhiiKT6.png",
    opts: { series: ["SfH"], stage: ["ex"] }
  },
  {
    name: "Kang Gook",
    img: "JRka6ff.png",
    opts: { series: ["WYEL"], stage: ["st1"] }
  },
  {
    name: "Michael Kelso",
    img: "IoLNLnq.png",
    opts: { series: ["T7S"], stage: ["st2"] }
  },
  {
    name: "Kinn",
    img: "C6AiHKx.png",
    opts: { series: ["KP"], stage: ["st3"] }
  },
  {
    name: "Kyo Sohma",
    img: "Bq4Xn8v.png",
    opts: { series: ["FB"], stage: ["st4", "st5", "st6"] }
  },
  {
    name: "Seo Moonjo",
    img: "ef5JWFH.png",
    opts: { series: ["SfH"], stage: ["ex"] }
  },
  {
    name: "Rick Grimes",
    img: "KG1JmRG.png",
    opts: { series: ["TWD"], stage: ["st3", "st4"] }
  },
  {
    name: "Ron Weasley",
    img: "BvRy423.png",
    opts: { series: ["HP"], stage: ["st4"] }
  },
  {
    name: "Kang Seojoon",
    img: "sJvTaOL.png",
    opts: { series: ["TMS"], stage: ["st5"] }
  },
  {
    name: "Han Seojun",
    img: "BhXeO5T.png",
    opts: { series: ["TB"], stage: ["st5"] }
  },
  {
    name: "Shawn Hunter",
    img: "LXALO2L.png",
    opts: { series: ["BMW"], stage: ["st6"] }
  },
  {
    name: "Zhou Shuyi",
    img: "cMTO4H9.png",
    opts: { series: ["WBL"], stage: ["ex"] }
  },
  {
    name: "Yeon Sieun",
    img: "Jp8YrAA.png",
    opts: { series: ["WHC1"], stage: ["st6"] }
  },
  {
    name: "Teh",
    img: "YgQxy5w.png",
    opts: { series: ["ITSAY"], stage: ["ex"] }
  },
  {
    name: "Tinn",
    img: "cpPljTR.png",
    opts: { series: ["MSP"], stage: ["st6"] }
  },
  {
    name: "Todd",
    img: "HadBceF.png",
    opts: { series: ["NM"], stage: ["st1"] }
  },
  {
    name: "Wang",
    img: "rRQkiyI.png",
    opts: { series: ["180DLPTU"], stage: ["st5"] }
  },
  { name: "Ma Hwiyoung", img: "wGprfbc.png", opts: { series: ["AE"], stage: [] } 
  },
  {
    name: "Arthit",
    img: "eLTiypr.png",
    opts: { series: ["S"], stage: ["st5"] }
  },
  {
    name: "Javier Suarez",
    img: "TN1lE4K.png",
    opts: { series: ["DDHN"], stage: ["st5"] }
  },
  {
    name: "Jeremy Gilbert",
    img: "RgeBvcn.png",
    opts: { series: ["VD"], stage: ["st5"] }
  },
   {
    name: "Jim",
    img: "UeKRK0E.png",
    opts: { series: ["OFMD"], stage: ["st5"] }
  },
  {
    name: "Joey Tribbiani",
    img: "AXPlv1C.png",
    opts: { series: ["F"], stage: ["st5"] }
  },
  {
    name: "Lim Jugyeong",
    img: "6x67AFq.png",
    opts: { series: ["TB"], stage: ["st5"] }
  },
  {
    name: "Kahlan Amnell",
    img: "UTjNKkF.png",
    opts: { series: ["LotS"], stage: ["st5"] }
  },
  {
    name: "Kaofah",
    img: "m5HXB18.png",
    opts: { series: ["SiYH"], stage: ["st5"] }
  },
  {
    name: "Yuichi Kurosawa",
    img: "kamO66B.png",
    opts: { series: ["CM"], stage: ["st5"] }
  },
  {
    name: "Legolas",
    img: "aMYVywf.png",
    opts: { series: ["LotR"], stage: ["st5"] }
  },
  {
    name: "Mork",
    img: "9WLqQMh.png",
    opts: { series: ["DBK"], stage: ["st5"] }
  },
  {
    name: "Naoya Shinomiya",
    img: "WxTSK8N.png",
    opts: { series: ["MUHNCBTK"], stage: ["st5"] }
  },
  {
    name: "Nick Clark",
    img: "7CiuwDV.png",
    opts: { series: ["FTWD"], stage: ["st5"] }
  },
  {
    name: "Pa",
    img: "Sd85bot.png",
    opts: { series: ["BB"], stage: ["st5"] }
  },
  {
    name: "Phayu",
    img: "M0lSn7Y.png",
    opts: { series: ["LitA"], stage: ["st5"] }
  },
  {
    name: "Phupha",
    img: "quL2XK8.png",
    opts: { series: ["1S"], stage: ["st5"] }
  },
  {
    name: "Pran",
    img: "3EWd7Fu.png",
    opts: { series: ["BB"], stage: ["st5"] }
  },
  {
    name: "Prapai",
    img: "mVX7FzU.png",
    opts: { series: ["LitA"], stage: ["st5"] }
  },
  {
    name: "Prince Charmont",
    img: "il90bvg.png",
    opts: { series: ["EE"], stage: ["st5"] }
  },
  {
    name: "Prince",
    img: "xYn9mzf.png",
    opts: { series: ["SiYH"], stage: ["st5"] }
  },
  {
    name: "Rachel Green",
    img: "eCybN0N.png",
    opts: { series: ["F"], stage: ["st5"] }
  },
  {
    name: "Rae Earl",
    img: "23s7Zva.png",
    opts: { series: ["MMFD"], stage: ["st5"] }
  },
  {
    name: "Hwang Simok",
    img: "FbhGjxL.png",
    opts: { series: ["St"], stage: ["st5"] }
  },
  {
    name: "Sirius Black",
    img: "iIFzyNH.png",
    opts: { series: ["HP"], stage: ["st5"] }
  },
  {
    name: "Cha Siwon",
    img: "q7mKihS.png",
    opts: { series: ["B"], stage: ["st5"] }
  },
  {
    name: "Steve McGarret",
    img: "mMfR0Hm.png",
    opts: { series: ["H50"], stage: ["st5"] }
  },
  {
    name: "Stiles Stilinski",
    img: "1U95IMA.png",
    opts: { series: ["TW"], stage: ["st5"] }
  },
  {
    name: "Cho Taehyun",
    img: "hqbj100.png",
    opts: { series: ["AStCO"], stage: ["st5"] }
  },
  {
    name: "Han Taejoo",
    img: "lKp3b5E.png",
    opts: { series: ["WYEL"], stage: ["st5"] }
  },
  {
    name: "Jung Taeju",
    img: "F1dsaaO.png",
    opts: { series: ["MN"], stage: ["st5"] }
  },
  {
    name: "Topanga Lawrence",
    img: "XMqnSoK.png",
    opts: { series: ["BMW"], stage: ["st5"] }
  },
  {
    name: "Vegas",
    img: "3TB75WT.png",
    opts: { series: ["KP"], stage: ["st5"] }
  },
  {
    name: "Veronica Fisher",
    img: "ir1ipBf.png",
    opts: { series: ["SM"], stage: ["st5"] }
  },
  {
    name: "Yihwa",
    img: "nIV2Cn7.png",
    opts: { series: ["TWM"], stage: ["st5"] }
  },
  {
    name: "Choi Yuna",
    img: "ezv9YY9.png",
    opts: { series: ["SE"], stage: ["st5"] }
  },
  {
    name: "Roronoa Zoro",
    img: "qbN3RBT.png",
    opts: { series: ["OP"], stage: ["st5"] }
  },
  {
    name: "Cho Heon",
    img: "lWp17Yp.png",
    opts: { series: ["V"], stage: ["st5"] }
  },
  {
    name: "Colin Ritman",
    img: "qXrgvOB.png",
    opts: { series: ["BS"], stage: ["st5"] }
  },
  {
    name: "Coraline Jones",
    img: "mpk59tf.png",
    opts: { series: ["C"], stage: ["st5"] }
  },
  {
    name: "Fitzwilliam Darcy",
    img: "Phkoma9.png",
    opts: { series: ["PP"], stage: ["st5"] }
  },
  {
    name: "Hyeong Daun",
    img: "tWoadD4.png",
    opts: { series: ["B"], stage: ["st5"] }
  },
  {
    name: "Derek Morgan",
    img: "222hnAz.png",
    opts: { series: ["CrM"], stage: ["st5"] }
  },
  {
    name: "Ban Dongwook",
    img: "zzwZyXx.png",
    opts: { series: ["BoL"], stage: ["st5"] }
  },
  {
    name: "Donna",
    img: "VscL8kZ.png",
    opts: { series: ["FM"], stage: ["st5"] }
  },
  {
    name: "Dosik",
    img: "bZWsAIz.png",
    opts: { series: ["MD"], stage: ["st5"] }
  },
  {
    name: "Ha Doyoung",
    img: "weMmV0P.png",
    opts: { series: ["TGl"], stage: ["st5"] }
  },
  {
    name: "Seo Doyoung",
    img: "M9hP3nd.png",
    opts: { series: ["EL"], stage: ["st5"] }
  },
  {
    name: "Dylan Massett",
    img: "XcRIMJd.png",
    opts: { series: ["BM"], stage: ["st5"] }
  },
  {
    name: "Elijah Mikaelson",
    img: "QOFHsFI.png",
    opts: { series: ["VD"], stage: ["st5"] }
  },
  {
    name: "Ellie",
    img: "UY9gwsw.png",
    opts: { series: ["TLoU"], stage: ["st5"] }
  },
  {
    name: "Eric Matthews",
    img: "LZCw30K.png",
    opts: { series: ["BMW"], stage: ["st5"] }
  },
  {
    name: "Erik Lehnsherr",
    img: "0LOemi1.png",
    opts: { series: ["XM"], stage: ["st5"] }
  },
  {
    name: "Esca Mac Cunoval",
    img: "3iNymhQ.png",
    opts: { series: ["TE"], stage: ["st5"] }
  },
  {
    name: "Lee Eunhyuk",
    img: "ys3LZZO.png",
    opts: { series: ["SH"], stage: ["st5"] }
  },
  {
    name: "Felix Catton",
    img: "f4h6ESt.png",
    opts: { series: ["SB"], stage: ["st5"] }
  },
  {
    name: "Finn Nelson",
    img: "sxJLjqm.png",
    opts: { series: ["MMFD"], stage: ["st5"] }
  },
  {
    name: "Gally",
    img: "g0ugsPp.png",
    opts: { series: ["TMR"], stage: ["st5"] }
  },
  {
    name: "Gene",
    img: "P4zbBsA.png",
    opts: { series: ["TLW"], stage: ["st5"] }
  },
  {
    name: "Gilbert Blythe",
    img: "s1uLu3u.png",
    opts: { series: ["AoGG"], stage: ["st5"] }
  },
  {
    name: "Kang Gilyoung",
    img: "GCgVkv7.png",
    opts: { series: ["TG"], stage: ["st5"] }
  },
  {
    name: "Glenn Rhee",
    img: "C5LGGjU.png",
    opts: { series: ["TWD"], stage: ["st5"] }
  },
  {
    name: "Gram",
    img: "shuHr9q.png",
    opts: { series: ["NM"], stage: ["st5"] }
  },
  {
    name: "Greg Hirsch",
    img: "ei0IYa8.png",
    opts: { series: ["SSN"], stage: ["st5"] }
  },
  {
    name: "Kim Gunwoo",
    img: "GockWDN.png",
    opts: { series: ["BH"], stage: ["st5"] }
  },
  {
    name: "Haley James Scott",
    img: "StCm61a.png",
    opts: { series: ["OTH"], stage: ["st5"] }
  },
  {
    name: "Im Hantae",
    img: "vgln7eL.jpg",
    opts: { series: ["SMC"], stage: ["st5"] }
  },
  {
    name: "Xiang Haoting",
    img: "iW4ZlwZ.png",
    opts: { series: ["MODC"], stage: ["st5"] }
  },
  {
    name: "Harry Potter",
    img: "2UGWky2.jpg",
    opts: { series: ["HP"], stage: ["st5"] }
  },
  {
    name: "Hayley Marshall",
    img: "qkkG6wI.png",
    opts: { series: ["VD"], stage: ["st5"] }
  },
  {
    name: "Hermione Granger",
    img: "EeXxLZ8.png",
    opts: { series: ["HP"], stage: ["st5"] }
  },
  {
    name: "Kazunari Hira",
    img: "8WShnxT.png",
    opts: { series: ["MBM"], stage: ["st5"] }
  },
  {
    name: "Yang Hobeom",
    img: "e19mjw0.png",
    opts: { series: ["N"], stage: ["st5"] }
  },
  {
    name: "Baek Inha",
    img: "8cLXq6r.png",
    opts: { series: ["CitT"], stage: ["st5"] }
  },
  {
    name: "Baek Inho",
    img: "ffsZOoG.png",
    opts: { series: ["CitT"], stage: ["st5"] }
  },
  {
    name: "Ink",
    img: "57yVsaL.png",
    opts: { series: ["BB"], stage: ["st5"] }
  },
  {
    name: "Jaab",
    img: "dJoYCXC.png",
    opts: { series: ["SBS"], stage: ["st5"] }
  },
  {
    name: "Jack Hunter",
    img: "jZZr0ck.png",
    opts: { series: ["BMW"], stage: ["st5"] }
  },
  {
    name: "Han Jaeho",
    img: "dp0FVKL.png",
    opts: { series: ["TM"], stage: ["st5"] }
  },
  {
    name: "Yoo Jaeyi",
    img: "1MKpgBl.png",
    opts: { series: ["BE"], stage: ["st5"] }
  },
  {
    name: "Jaime Lannister",
    img: "6X4W5og.png",
    opts: { series: ["GoT"], stage: ["st5"] }
  },
  {
    name: "Gong Jihoon",
    img: "uCyyIJi.png",
    opts: { series: ["BUB"], stage: ["st5"] }
  },
  {
    name: "Jim Hopper",
    img: "u8yZkFY.png",
    opts: { series: ["StT"], stage: ["st5"] }
  },
  {
    name: "Jin",
    img: "QUusgFg.png",
    opts: { series: ["DFF"], stage: ["st5"] }
  },
  {
    name: "Do Jitae",
    img: "uOHYsre.png",
    opts: { series: ["OOD"], stage: ["st5"] }
  },
  {
    name: "Han Jiwoo",
    img: "R5hNQ8r.png",
    opts: { series: ["TMS"], stage: ["st5"] }
  },
  {
    name: "Kim Jiyong",
    img: "IV0UzVf.png",
    opts: { series: ["V"], stage: ["st5"] }
  },
  {
    name: "Joel",
    img: "lkuFt4h.png",
    opts: { series: ["TLoU"], stage: ["st5"] }
  },
  {
    name: "John Egan",
    img: "aGI8XNO.png",
    opts: { series: ["MotA"], stage: ["st5"] }
  },
  {
    name: "Han Juwon",
    img: "DYpteUZ.png",
    opts: { series: ["BE"], stage: ["st5"] }
  },
  {
    name: "Kai Yuta",
    img: "Bg4tdO8.png",
    opts: { series: ["SiL"], stage: ["st5"] }
  },
  {
    name: "Kala Dandekar",
    img: "tk27txU.png",
    opts: { series: ["S8"], stage: ["st5"] }
  },
  {
    name: "Daikichi Karube",
    img: "0MucS4R.png",
    opts: { series: ["AiB"], stage: ["st5"] }
  },
  {
    name: "Kendall Knight",
    img: "aP1MjQP.png",
    opts: { series: ["BTR"], stage: ["st5"] }
  },
  {
    name: "Kendall Roy",
    img: "60kXIXL.png",
    opts: { series: ["SSN"], stage: ["st5"] }
  },
  {
    name: "Kev Ball",
    img: "BUXVtw0.png",
    opts: { series: ["SM"], stage: ["st5"] }
  },
  {
    name: "Kim",
    img: "WljhpEM.png",
    opts: { series: ["PB"], stage: ["st5"] }
  },
  {
    name: "So Kiyoi",
    img: "RVOsEHF.png",
    opts: { series: ["MBM"], stage: ["st5"] }
  },
  {
    name: "Kofun",
    img: "dqeJwO0.png",
    opts: { series: ["See"], stage: ["st5"] }
  },
  {
    name: "Philip Kopus",
    img: "7h3IRAZ.png",
    opts: { series: ["TRR"], stage: ["st5"] }
  },
  {
    name: "Lucy Kelson",
    img: "SlCfWi4.png",
    opts: { series: ["TWN"], stage: ["st5"] }
  },
  {
    name: "Monkey D. Luffy", 
    img: "3c6gHC2.png",
    opts: { series: ["OP"], stage: ["st5"] }
  },
  {
    name: "Mac", 
    img: "oRhBrK5.png",
    opts: { series: ["LS3"], stage: ["st5"] }
  },
  {
    name: "Mac", 
    img: "yRRhy30.png",
    opts: { series: ["IASIP"], stage: ["st5"] }
  },
  {
    name: "Maggie Rhee", 
    img: "CXXpgec.png",
    opts: { series: ["TWD"], stage: ["st5"] }
  },
  {
    name: "Marcus Flavius Aquila", 
    img: "JS8KAIs.png",
    opts: { series: ["TE"], stage: ["st5"] }
  },
  {
    name: "Mek", 
    img: "xkVUxMz.png",
    opts: { series: ["ME"], stage: ["st5"] }
  },
  {
    name: "Mhok", 
    img: "7rYiOPQ.png",
    opts: { series: ["LT"], stage: ["st5"] }
  },
  {
    name: "Mickey Milkovich", 
    img: "3zgtAYb.png",
    opts: { series: ["SM"], stage: ["st5"] }
  },
  {
    name: "Monica Geller", 
    img: "QeGmFuA.png",
    opts: { series: ["F"], stage: ["st5"] }
  },
  {
    name: "Choi Mujin", 
    img: "9GKqfJM.png",
    opts: { series: ["MN"], stage: ["st5"] }
  },
  {
    name: "Kim Myeonggil", 
    img: "w7L7BzQ.png",
    opts: { series: ["BH"], stage: ["st5"] }
  },
  {
    name: "Tae Myungha", 
    img: "heKJ0lo.png",
    opts: { series: ["LfLS"], stage: ["st5"] }
  },
  {
    name: "Nagisa Hibino", 
    img: "QIYIxPQ.png",
    opts: { series: ["His"], stage: ["st5"] }
  },
  {
    name: "Shiwoon Namgoong", 
    img: "A2H7fVP.png",
    opts: { series: ["LoM"], stage: ["st5"] }
  },
  {
    name: "Nam Shin", 
    img: "mx8YS9y.png",
    opts: { series: ["AYHT"], stage: ["st5"] }
  },
  {
    name: "Nathan Scott", 
    img: "eQyKssy.png",
    opts: { series: ["OTH"], stage: ["st5"] }
  },
  {
    name: "Negan Smith", 
    img: "tlXKLuB.png",
    opts: { series: ["TWD"], stage: ["st5"] }
  },
  {
    name: "Neo", 
    img: "tgO68KA.png",
    opts: { series: ["3WBF"], stage: ["st5"] }
  },
  {
    name: "Nick Nelson", 
    img: "M3N5aT7.png",
    opts: { series: ["HS"], stage: ["st5"] }
  },
  {
    name: "Nigel", 
    img: "130uVuc.png",
    opts: { series: ["CC"], stage: ["st5"] }
  },
  {
    name: "Night", 
    img: "2wJzrbr.png",
    opts: { series: ["LT"], stage: ["st5"] }
  },
  {
    name: "Nobleman", 
    img: "8T93NHR.png",
    opts: { series: ["TWS"], stage: ["st5"] }
  },
  {
    name: "Noey", 
    img: "K6OmXac.png",
    opts: { series: ["IWKY"], stage: ["st5"] }
  },
  {
    name: "Norma Bates", 
    img: "lPYVu38.png",
    opts: { series: ["BM"], stage: ["st5"] }
  },
  {
    name: "Nubsib", 
    img: "m27l654.png",
    opts: { series: ["LW"], stage: ["st5"] }
  },
  {
    name: "Oh Aew", 
    img: "tUArzIz.png",
    opts: { series: ["ITSAY"], stage: ["st5"] }
  },
  {
    name: "Pat", 
    img: "syLExtl.png",
    opts: { series: ["BB"], stage: ["st5"] }
  },
  {
    name: "Peeta Mellark", 
    img: "lrypCpm.png",
    opts: { series: ["THG"], stage: ["st5"] }
  },
  {
    name: "Peter Graham", 
    img: "yqyYThO.png",
    opts: { series: ["HD"], stage: ["st5"] }
  },
  {
    name: "Phaya", 
    img: "vSqjlFD.png",
    opts: { series: ["TSTS"], stage: ["st5"] }
  },
  {
    name: "Phee", 
    img: "UCied5T.png",
    opts: { series: ["DFF"], stage: ["st5"] }
  },
  {
    name: "Poe Dameron", 
    img: "hVNFYhu.png",
    opts: { series: ["SW"], stage: ["st5"] }
  },
  {
    name: "Pol Rubio", 
    img: "aJxv5gY.png",
    opts: { series: ["ML"], stage: ["st5"] }
  },
  {
    name: "Porjai", 
    img: "o5P0sib.png",
    opts: { series: ["LT"], stage: ["st5"] }
  },
  {
    name: "Praram", 
    img: "TqkYZgF.png",
    opts: { series: ["EoL"], stage: ["st5"] }
  },
  {
    name: "Wei Qian", 
    img: "0wvLXlI.png",
    opts: { series: ["UK"], stage: ["st5"] }
  },
  {
    name: "Rafe Cameron", 
    img: "ZFpLH0s.png",
    opts: { series: ["OB"], stage: ["st5"] }
  },
  {
    name: "Ragnar Lothbrok", 
    img: "8GCbHHc.png",
    opts: { series: ["VK"], stage: ["st5"] }
  },
  {
    name: "Red", 
    img: "C4CUoTa.png",
    opts: { series: ["O"], stage: ["st5"] }
  },
  {
    name: "Rei Kashino", 
    img: "IE6uyI6.png",
    opts: { series: ["MS"], stage: ["st5"] }
  },
  {
    name: "Roman Roy", 
    img: "l8eBq8F.png",
    opts: { series: ["SSN"], stage: ["st5"] }
  },
  {
    name: "Sam", 
    img: "W98K3Bp.png",
    opts: { series: ["CS"], stage: ["st5"] }
  },
  {
    name: "Samwise Gamgee", 
    img: "Ekyjfww.png",
    opts: { series: ["LotR"], stage: ["st5"] }
  },
  {
    name: "Sana Bakkoush", 
    img: "3UtJiTi.png",
    opts: { series: ["SkM"], stage: ["st5"] }
  },
  {
    name: "Cho Sanggu", 
    img: "ZEtBLja.png",
    opts: { series: ["MtH"], stage: ["st5"] }
  },
  {
    name: "Cho Sangwoo", 
    img: "ynQBOZW.png",
    opts: { series: ["SE"], stage: ["st5"] }
  },
  {
    name: "Pyeong Sangwook", 
    img: "ioUrbs4.png",
    opts: { series: ["SH"], stage: ["st5"] }
  },
  {
    name: "Vinsmoke Sanji", 
    img: "brYLZHA.png",
    opts: { series: ["OP"], stage: ["st5"] }
  },
  {
    name: "Sarah Cameron", 
    img: "SFOs61i.png",
    opts: { series: ["OB"], stage: ["st5"] }
  },
  {
    name: "Sarawat", 
    img: "jAsRmsa.png",
    opts: { series: ["2G"], stage: ["st5"] }
  },
  {
    name: "Gao Shide", 
    img: "19rKi3k.png",
    opts: { series: ["WBL"], stage: ["st5"] }
  },
  {
    name: "Shi Lei", 
    img: "qApZthq.png",
    opts: { series: ["BLiH"], stage: ["st5"] }
  },
  {
    name: "Noh Shinwoo", 
    img: "y8Ak9jX.png",
    opts: { series: ["LoM"], stage: ["st5"] }
  },
  {
    name: "Igawa Shun", 
    img: "cJaJDdK.png",
    opts: { series: ["His"], stage: ["st5"] }
  },
  {
    name: "Simon", 
    img: "eefsfMa.png",
    opts: { series: ["SYS"], stage: ["st5"] }
  },
  {
    name: "Ahn Sooho", 
    img: "0zcIIEB.png",
    opts: { series: ["WHC1"], stage: ["st5"] }
  },
  {
    name: "Kang Sookin", 
    img: "8wuMvy3.png",
    opts: { series: ["TB"], stage: ["st5"] }
  },
  {
    name: "Sound", 
    img: "FqJ6Uc6.png",
    opts: { series: ["MSP"], stage: ["st5"] }
  },
  {
    name: "Sprite", 
    img: "zrP1LGQ.png",
    opts: { series: ["Twins"], stage: ["st5"] }
  },
  {
    name: "Lee Suho", 
    img: "juaL1Nn.png",
    opts: { series: ["TB"], stage: ["st5"] }
  },
  {
    name: "Ryu Sunghoon", 
    img: "UyZeQJU.png",
    opts: { series: ["BD"], stage: ["st5"] }
  },
  {
    name: "Jang Sunoh", 
    img: "ky7Hm4l.png",
    opts: { series: ["ISD"], stage: ["st5"] }
  },
  {
    name: "Suyu", 
    img: "tauGeXb.png",
    opts: { series: ["SwM"], stage: ["st5"] }
  },
  {
    name: "Tan", 
    img: "fIUgMc4.png",
    opts: { series: ["MoD"], stage: ["st5"] }
  },
  {
    name: "Tao Xu", 
    img: "LP53uYH.png",
    opts: { series: ["HS"], stage: ["st5"] }
  },
  {
    name: "Tin", 
    img: "uKpx04G.png",
    opts: { series: ["LBC"], stage: ["st5"] }
  },
  {
    name: "Togawa", 
    img: "djHxEmn.png",
    opts: { series: ["OFC"], stage: ["st5"] }
  },
  {
    name: "Tom Wambsgans", 
    img: "VtOUZIg.png",
    opts: { series: ["SSN"], stage: ["st5"] }
  },
  {
    name: "Troy Otto", 
    img: "eP1qk2T.png",
    opts: { series: ["FTWD"], stage: ["st5"] }
  },
  {
    name: "Tyrion Lannister", 
    img: "27PqWJP.png",
    opts: { series: ["GoT"], stage: ["st5"] }
  },
  {
    name: "Vee", 
    img: "U6lVgHQ.png",
    opts: { series: ["LM"], stage: ["st5"] }
  },
  {
    name: "Venom", 
    img: "ZfQx5li.png",
    opts: { series: ["VNM"], stage: ["st5"] }
  },
  {
    name: "Way", 
    img: "XV7d1cn.png",
    opts: { series: ["PB"], stage: ["st5"] }
  },
  {
    name: "Wilhelm", 
    img: "OwOnN91.png",
    opts: { series: ["YR"], stage: ["st5"] }
  },
  {
    name: "Will Graham", 
    img: "BLpqLHp.png",
    opts: { series: ["H"], stage: ["st5"] }
  },
  {
    name: "Wolfgang Bogdanow", 
    img: "DdW52pv.png",
    opts: { series: ["S8"], stage: ["st5"] }
  },
  {
    name: "Han Wootak", 
    img: "1PZkrQN.png",
    opts: { series: ["WYWS"], stage: ["st5"] }
  },
  {
    name: "Wubi", 
    img: "UFeFnEl.png",
    opts: { series: ["SwM"], stage: ["st5"] }
  },
  {
    name: "Joo Yeojeong", 
    img: "zMqbpDH.png",
    opts: { series: ["TGl"], stage: ["st5"] }
  },
  {
    name: "Cha Yeowoon", 
    img: "xRU2kNl.png",
    opts: { series: ["LfLS"], stage: ["st5"] }
  },
  {
    name: "Kang Yohan", 
    img: "TlWLSWG.png",
    opts: { series: ["TDJ"], stage: ["st5"] }
  },
  {
    name: "Yok", 
    img: "PLBX4wt.png",
    opts: { series: ["NM"], stage: ["st5"] }
  },
  {
    name: "Choi Yoon", 
    img: "A02fPBy.png",
    opts: { series: ["TG"], stage: ["st5"] }
  },
  {
    name: "Yoonjae", 
    img: "xu0GzE6.png",
    opts: { series: ["BD"], stage: ["st5"] }
  },
  {
    name: "Oh Youngsook", 
    img: "CI6PolX.png",
    opts: { series: ["TC"], stage: ["st5"] }
  },
  {
    name: "Ko Yugyeom", 
    img: "QShG7ji.png",
    opts: { series: ["WRUK"], stage: ["st5"] }
  },
  {
    name: "Xia Yuhao", 
    img: "pmShroq.png",
    opts: { series: ["CtL"], stage: ["st5"] }
  },
  {
    name: "Zach Dempsey", 
    img: "wiJQ9uX.png",
    opts: { series: ["13RW"], stage: ["st5"] }
  },
  {
    name: "Zero", 
    img: "AqHdsxY.png",
    opts: { series: ["HtF"], stage: ["st5"] }
  },
  ];
  
