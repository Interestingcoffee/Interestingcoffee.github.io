/* ============================================================
   HELLDIVERS DATABASE — PLACEHOLDER DATA
   ------------------------------------------------------------
   All stats below are PLACEHOLDER values for UI development.
   Replace the values here when you have real game data — the UI
   reads everything from this single file.

   WEAPON "level" = armor penetration tier, TEXT ONLY:
       "Light" | "Medium" | "Heavy"
   The Compare engine maps these to numbers internally
   (Light=2, Medium=4, Heavy=6) via LEVEL_TO_PEN in app.js.

   Support weapons / orbitals / emplacements still use a numeric
   "penetration" (1–6) — they were not part of the text change.

   WEAPON hover-detail fields:
       damage, fireRate, capacity, dps, mags, ergonomics,
       recoil, unlock, unlockCost, unlockUnit
   ============================================================ */

const DB = {

  /* ---------- FACTIONS (used for filtering enemies) ---------- */
  factions: ["Terminids", "Automatons", "Illuminate"],

  /* ---------- WEAPONS ----------
     slot:  Primary | Secondary | Throwable
     type:  weapon class used by the type filter
     level: "Light" | "Medium" | "Heavy"  (armor penetration tier)
     unlockCost / unlockUnit: e.g. 60 + "Medals", 0 + "" for defaults
  */
  weapons: [
    //Primary - Assault Rifles
    { id: "ar-23-liberator", name: "AR-23 Liberator", slot: "Primary", type: "Assault Rifle",
      image: "images/Weapons/Primary-AssaultRifles/AR-23_Liberator_Primary_Render.png",
      level: "Light", damage_ballistic: 90, fireRate: 640, capacity: 45, dps: 960, mags: 8, ergonomics: 65, recoil: 14,
      unlock: "Starter Equipment", unlockCost: 0, unlockUnit: "",
      desc: "The SEAF standard assault rifle, balancing power, fire rate, and weight for a reliable weapon against smaller targets." },

    { id: "ar-23p-liberator-penetrator", name: "AR-23P Liberator Penetrator", slot: "Primary", type: "Assault Rifle",
      image: "images/Weapons/Primary-AssaultRifles/AR-23P_Liberator_Penetrator_Primary_Render.png",
      level: "Medium", damage_ballistic: 65, fireRate: 640, capacity: 45, dps: 693.33, mags: 8, ergonomics: 59, recoil: 12,
      unlock: "Helldivers Mobilize", unlockCost: 40, unlockUnit: "Medals",
      desc: "A modified Liberator fitted with a scope and firing armor-piercing rounds, to help users take down armored targets." },

    { id: "ar-23c-liberator-concussive", name: "AR-23C Liberator Concussive", slot: "Primary", type: "Assault Rifle",
      image: "images/Weapons/Primary-AssaultRifles/AR-23C_Liberator_Concussive_Primary_Render.png",
      level: "Light", damage_ballistic: 75, fireRate: 400, capacity: 60, dps: 500, mags: 6, ergonomics: 65, recoil: 28,
      unlock: "Steeled Veterans", unlockCost: 20, unlockUnit: "Medals",
      desc: "A modified Liberator featuring concussive rounds which do less damage but stagger enemies." },  

    { id: "sta-52-assault-rifle", name: "StA-52 Assault Rifle", slot: "Primary", type: "Assault Rifle",
      image: "images/Weapons/Primary-AssaultRifles/StA-52_Assault_Rifle_Primary_Render.png",
      level: "Light", damage_ballistic: 90, fireRate: 790, capacity: 56, dps: 1185, mags: 6, ergonomics: 55, recoil: 14,
      unlock: "Righteous Revenants", unlockCost: 35, unlockUnit: "Medals",
      desc: "A modified Liberator featuring concussive rounds which do less damage but stagger enemies." },  

    { id: "ar-32-pacifier", name: "AR-32 Pacifier", slot: "Primary", type: "Assault Rifle",
      image: "images/Weapons/Primary-AssaultRifles/AR-32_Pacifier_Primary_Render.png",
      level: "Medium", damage_ballistic: 55, fireRate: 700, capacity: 40, dps: 641.66, mags: 6, ergonomics: 60, recoil: 18,
      unlock: "Force of Law", unlockCost: 35, unlockUnit: "Medals",
      desc: "A large-capacity assault rifle firing humane stun rounds. Reports of lethal incidents have been thoroughly debunked." }, 
      
    { id: "ar-2-coyote", name: "AR-2 Coyote", slot: "Primary", type: "Assault Rifle",
      image: "images/Weapons/Primary-AssaultRifles/AR-2_Coyote_Primary_Render.png",
      level: "Medium", damage_ballistic: 75, fireRate: 600, capacity: 45, dps: 750, mags: 8, ergonomics: 50, recoil: 17,
      unlock: "Dust Devils", unlockCost: 35, unlockUnit: "Medals",
      desc: "A reliable assault rifle with an antique iron sight, firing incendiary ammunition." },    
      
    { id: "ma5c-assault-rifle", name: "MA5C Assault Rifle", slot: "Primary", type: "Assault Rifle",
      image: "images/Weapons/Primary-AssaultRifles/MA5C_Assault_Rifle_Primary_Render.png",
      level: "Medium", damage_ballistic: 90, fireRate: 640, capacity: 32, dps: 960, mags: 8, ergonomics: 60, recoil: 19,
      unlock: "Halo: ODST", unlockCost: 35, unlockUnit: "Medals",
      desc: "Often showcased in the 'Obedient Democracy Support Troopers' cartoon, this assault rifle comes with a convenient ammo counter and compass. Produced by Martian Armory." },    
      
    { id: "ar-23a-liberator-carbine", name: "AR-23A Liberator Carbine", slot: "Primary", type: "Assault Rifle",
      image: "images/Weapons/Primary-AssaultRifles/AR-23A_Liberator_Carbine_Primary_Render.png",
      level: "Light", damage_ballistic: 90, fireRate: 920, capacity: 45, dps: 1380, mags: 8, ergonomics: 70, recoil: 26,
      unlock: "Viper Commandos", unlockCost: 20, unlockUnit: "Medals",
      desc: "A compact version of the Liberator designed for increased viability in close quarters. Has an increased fire rate at the cost of higher spread." },    
      
    { id: "ar-61-tenderizer", name: "AR-61 Tenderizer", slot: "Primary", type: "Assault Rifle",
      image: "images/Weapons/Primary-AssaultRifles/AR-61_Tenderizer_Primary_Render.png",
      level: "Light", damage_ballistic: 105, fireRate_slow: 600, fireRate_fast: 850, capacity: 35, dps_slow: 1050, dps_fast: 1487.5, mags: 7, ergonomics: 65, recoil: 10,
      unlock: "Polar Patriots", unlockCost: 20, unlockUnit: "Medals",
      desc: "A high-caliber assault rifle with a restrictive magazine size but more stopping power." },    
      
    { id: "br-14-adjudicator", name: "BR-14 Adjudicator", slot: "Primary", type: "Assault Rifle",
      image: "images/Weapons/Primary-AssaultRifles/BR-14_Adjudicator_Primary_Render.png",
      level: "Medium", damage_ballistic: 95, fireRate: 550, capacity: 30, dps: 870.83, mags: 8, ergonomics: 40, recoil: 24,
      unlock: "Democratic Detonation", unlockCost: 20, unlockUnit: "Medals",
      desc: "An accurate, armor-penetrating rifle, the BR-14 Adjudicator delivers righteous judgement to medium-sized enemies, though its restrictive magazine limits its effectiveness against large groups." },    
      
    { id: "ar/gl-21-one-two", name: "AR/GL-21 One-Two", slot: "Primary", type: "Assault Rifle",
      image: "images/Weapons/Primary-AssaultRifles/AR-GL-21_One_Two_Primary_Render.png",
      level_8mm: "Light", level_40mm: "Medium", damage_8mm: 95, damage_40mm: 250, damage_rocket: 400, fireRate: 650, capacity: 40, dps: 1029.16, mags: 6, shells: 3, ergonomics: 30, recoil: 13,
      unlock: "Python Commandos", unlockCost: 35, unlockUnit: "Medals",
      desc: "A combination assault rifle/grenade launcher. Versatile, but heavy to wield." },    
      
    { id: "ar-59-suppressor", name: "AR-59 Suppressor", slot: "Primary", type: "Assault Rifle",
      image: "images/Weapons/Primary-AssaultRifles/AR-59_Suppressor_Primary_Render.png",
      level: "Light", damage_ballistic: 80, fireRate: 850, capacity: 45, dps: 1133.34, mags: 8, ergonomics: 60, recoil: 13,
      unlock: "Redacted Regiment", unlockCost: 50, unlockUnit: "Medals",
      desc: "A fully automatic assault rifle featuring a non-removable suppressor and subsonic ammunition. Slower rounds allow low-profile operation." },  

    //Primary - Marksman

    { id: "r-2-amendment", name: "R-2 Amendment", slot: "Primary", type: "Marksman",
      image: "images/Weapons/Primary-MarksmanRifles/R-2_Amendment_Primary_Render.png",
      level: "Heavy", damage_ballistic: 200, fireRate: 480, capacity: 20, dps: 1600, mags: 8, ergonomics: 50, recoil: 20,
      unlock: "Masters of Ceremony", unlockCost: 35, unlockUnit: "Medals",
      desc: "A semi-automatic ceremonial rifle equipped with a bayonet. Can be set to fire in three shot bursts, to easily conduct the Fallen Hero's Salute." },    

    { id: "r-2124-constitution", name: "R-2124 Constitution", slot: "Primary", type: "Marksman",
      image: "images/Weapons/Primary-MarksmanRifles/R-2124_Constitution_Primary_Render.png",
      level: "Medium", damage_ballistic: 180, fireRate: 60, capacity: 5, dps: 180, rounds: 99, ergonomics: 65, recoil: 15,
      unlock: "Liberty Day", unlockCost: 0, unlockUnit: "",
      desc: "This ceremonial rifle is modeled after antique relics from pre-Democratic times. It is traditionally gifted to every citizen upon turning 16 to encourage service." },  

    { id: "r-6-deadeye", name: "R-6 Deadeye", slot: "Primary", type: "Marksman",
      image: "images/Weapons/Primary-MarksmanRifles/R-6_Deadeye_Primary_Render.png",
      level: "Medium", damage_ballistic: 300, fireRate: 100, capacity: 8, dps: 500, rounds: 60, ergonomics: 65, recoil: 120,
      unlock: "Borderline Justice", unlockCost: 35, unlockUnit: "",
      desc: "A mighty rifle with a signature lever-action enabling single round reload. Powerful precision suited to mid- and long-range combat." },
      
    { id: "r-63-diligence", name: "R-63 Diligence", slot: "Primary", type: "Marksman",
      image: "images/Weapons/Primary-MarksmanRifles/R-63_Diligence_Primary_Render.png",
      level: "Light", damage_ballistic: 165, fireRate: 350, capacity: 25, dps: 962, mags: 8, ergonomics: 65, recoil: 35,
      unlock: "Helldivers Mobilize! ", unlockCost: 8, unlockUnit: "",
      desc: "This high-caliber marksman rifle trades magazine capacity and rate of fire for powerful, accurate shots." },
      
    { id: "r-63cs-diligence-counter-sniper", name: "R-63CS Diligence Counter Sniper", slot: "Primary", type: "Marksman",
      image: "images/Weapons/Primary-MarksmanRifles/R-63CS_Diligence_Counter_Sniper_Primary_Render.png",
      level: "Medium", damage_ballistic: 200, fireRate: 350, capacity: 15, dps:  1166.67, mags: 6, ergonomics: 35, recoil: 53,
      unlock: "Helldivers Mobilize!", unlockCost: 40, unlockUnit: "",
      desc: "A modified Diligence rifle offering increased damage at the cost of some maneuverability. Fires a single bullet at a time." },
      
    { id: "r-72-censor", name: "R-72 Censor", slot: "Primary", type: "Marksman",
      image: "images/Weapons/Primary-MarksmanRifles/R-72_Censor_Primary_Render.png",
      level: "Light", damage_ballistic: 165, fireRate: 400, capacity: 20, dps: 1100, mags: 8, ergonomics: 60, recoil: 13,
      unlock: "Redacted Regiment", unlockCost: 35, unlockUnit: "",
      desc: "A mid-range precision rifle. Equipped with an integrated suppressor and subsonic rounds for barely-detectable operation." },  

    // Primary - Submachine Guns

    { id: "mp-98-knight", name: "MP-98 Knight", slot: "Primary", type: "Submachine Guns",
      image: "images/Weapons/Primary-SubmachineGuns/MP-98_Knight_Primary_Render.png",
      level: "Light", damage_ballistic: 90, fireRate: 1380, capacity: 50, dps: 2070, mags: 7, ergonomics: 90, recoil: 15,
      unlock: "Super Citizen Edition", unlockCost: 0, unlockUnit: "",
      desc: "A submachine gun with an extremely high rate of fire, which can be operated with one hand. Ideal for multitasking." },  

    { id: "sta-11-smg", name: "StA-11 SMG", slot: "Primary", type: "Submachine Guns",
      image: "images/Weapons/Primary-SubmachineGuns/StA-11_SMG_Primary_Render.png",
      level: "Light", damage_ballistic: 90, fireRate: 1050, capacity: 48, dps: 1575, mags: 7, ergonomics: 80, recoil: 13,
      unlock: "Righteous Revenants ", unlockCost: 65, unlockUnit: "",
      desc: "A submachine gun with a helical feed magazine, which gives the weapon a higher ammo capacity whilst making it more front-heavy. Produced by Stål Arms." },
      
    { id: "m7s-smg", name: "M7S SMG", slot: "Primary", type: "Submachine Guns",
      image: "images/Weapons/Primary-SubmachineGuns/M7S_SMG_Primary_Render.png",
      level: "Light", damage_ballistic: 90, fireRate: 872, capacity: 48, dps: 1308, mags: 7, ergonomics: 90, recoil: 8,
      unlock: "Halo: ODST", unlockCost: 50, unlockUnit: "",
      desc: "An SMG that fires caseless ammunition and is equipped with a non-removable suppressor. Produced by Martian Armory." },
      
    { id: "smg-32-reprimand", name: "SMG-32 Reprimand", slot: "Primary", type: "Submachine Guns",
      image: "images/Weapons/Primary-SubmachineGuns/SMG-32_Reprimand_Primary_Render.png",
      level: "Medium", damage_ballistic: 140, fireRate: 490, capacity: 25, dps: 1143.33, mags: 9, ergonomics: 55, recoil: 32,
      unlock: "Truth Enforcers", unlockCost: 40, unlockUnit: "",
      desc: "A heavy-duty submachine gun that fires large-caliber rounds, with a slower rate of fire to manage the high recoil. Ideal for use at close to medium range." },
      
    { id: "smg-37-defender", name: "SMG-37 Defender", slot: "Primary", type: "Submachine Guns",
      image: "images/Weapons/Primary-SubmachineGuns/SMG-37_Defender_Primary_Render.png",
      level: "Light", damage_ballistic: 110, fireRate: 520, capacity: 45, dps: 953.34, mags: 7, ergonomics: 90, recoil: 10,
      unlock: "Helldivers Mobilize!", unlockCost: 15, unlockUnit: "",
      desc: "A high-caliber submachine gun which can be fired with one hand. Has a relatively low rate of fire." },
      
    { id: "smg-72-pummeler", name: "SMG-72 Pummeler", slot: "Primary", type: "Submachine Guns",
      image: "images/Weapons/Primary-SubmachineGuns/SMG-72_Pummeler_Primary_Render.png",
      level: "Light", damage_ballistic: 85, fireRate: 475, capacity: 45, dps: 672.91, mags: 7, ergonomics: 90, recoil: 10,
      unlock: "Polar Patriots", unlockCost: 60, unlockUnit: "",
      desc: "Fires concussive rounds that stagger enemies. Slower rate of fire than other SMGs." },
      
    { id: "smg/flam-34-stoker", name: "SMG/FLAM-34 Stoker", slot: "Primary", type: "Submachine Guns",
      image: "images/Weapons/Primary-SubmachineGuns/SMGFLAM-34_Stoker_Primary_Render.png",
      level_12mm: "Light", level_Flamethrower: "Heavy", damage_ballistic: 130, fireRate: 420, capacity: 45, dps: 910, mags: 5, ergonomics: 60, recoil: 9,
      unlock: "Entrenched Division", unlockCost: 35, unlockUnit: "",
      desc: "This versatile submachine gun equipped with iron sights and frontline inciniration capabilities." },
      
    { id: "smg-203-gallant", name: "SMG-203 Gallant", slot: "Primary", type: "Submachine Guns",
      image: "images/Weapons/Primary-SubmachineGuns/SMG-203_Gallant_Primary_Render.png",
      level: "Medium", damage_ballistic: 65, fireRate: 1380 , capacity: 50, dps: 1495, mags: 7, ergonomics: 75, recoil: 15,
      unlock: "Exo Experts", unlockCost: 35, unlockUnit: "",
      desc: "A submachine gun with a longer barrel, allowing for higher muzzle velocity and increased armor penetration." },  

    // Primary - Shotguns  

    { id: "sg-8-punisher", name: "SG-8 Punisher", slot: "Primary", type: "Shotgun",
      image: "images/Weapons/Primary-Shotguns/SG-8_Punisher_Primary_Render.png",
      level: "Light", damage_ballistic: 405, fireRate: 80, capacity: 16, dps: 539.99, shells: 60, ergonomics: 65, recoil: 120,
      unlock: "Helldivers Mobilize!", unlockCost: 4, unlockUnit: "Medals",
      desc: "A powerful dual magazine pump-action shotgun, with limited armor penetration. Ideal for small and fast targets." },

    { id: "sg-8s-slugger", name: "SG-8S Slugger", slot: "Primary", type: "Shotgun",
      image: "images/Weapons/Primary-Shotguns/SG-8S_Slugger_Primary_Render.png",
      level: "Medium", damage_ballistic: 330, fireRate: 80, capacity: 16, dps: 440, shells: 60, ergonomics: 65, recoil: 120,
      unlock: "Helldivers Mobilize!", unlockCost: 60, unlockUnit: "Medals",
      desc: "A Modified Punisher shotgun firing heavy, high-damage slugs. Perfect for punching holes in big targets." },
      
    { id: "sg-20-halt", name: "SG-20 Halt", slot: "Primary", type: "Shotgun",
      image: "images/Weapons/Primary-Shotguns/SG-20_Halt_Primary_Render.png",
      level_flechette: "Medium", level_stun: "Light", damage_flechette: 385, damage_stun: 120, fireRate: 80, capacity: 8, dps_flechette: 513, dps_stun: 160, shells: 60, ergonomics: 65, recoil: 120,
      unlock: "Truth Enforcers", unlockCost: 20, unlockUnit: "Medals",
      desc: "A humane compliance weapon with two separate magazines: one for armor-penetrating flechette rounds and one for stun rounds." },
      
    { id: "sg-451-cookout", name: "SG-451 Cookout", slot: "Primary", type: "Shotgun",
      image: "images/Weapons/Primary-Shotguns/SG-451_Cookout_Primary_Render.png",
      level: "Light", damage_ballistic: 320, fireRate: 80, capacity: 16, dps: 426.67, shells: 60, ergonomics: 65, recoil: 100,
      unlock: "Freedom's Flame", unlockCost: 20, unlockUnit: "Medals",
      desc: "A pump shotgun that fires a burst of incendiary phosphorus pellets, setting targets ablaze." },
      
    { id: "dbs-2-double-freedom", name: "DBS-2 Double Freedom", slot: "Primary", type: "Shotgun",
      image: "images/Weapons/Primary-Shotguns/DBS-2_Shotgun_Primary_Render.png",
      level: "Medium", damage_ballistic: 840, fireRate: 640, capacity: 2, dps: 1680, shells: 40, ergonomics: 65, recoil: 163,
      unlock: "Superstore", unlockCost: 400, unlockUnit: "Super Credits",
      desc: "With its two barrels, one trigger, and vintage feel, this shotgun is perfect for historical reenactments." },
      
    { id: "m90a-shotgun", name: "M90A Shotgun", slot: "Primary", type: "Shotgun",
      image: "images/Weapons/Primary-Shotguns/M90A_Shotgun_Primary_Render.png",
      level: "Light", damage_ballistic: 605, fireRate: 80, capacity: 6, dps: 806.67, shells: 44, ergonomics: 65, recoil: 83,
      unlock: "Halo: ODST", unlockCost: 65, unlockUnit: "Medals",
      desc: "A top-loaded shotgun prominently featured in the final episode of 'Obedient Democracy Support Troopers' Produced by Martian Armory"},
      
    { id: "sg-225-breaker", name: "SG-225 Breaker", slot: "Primary", type: "Shotgun",
      image: "images/Weapons/Primary-Shotguns/SG-225_Breaker_Primary_Render.png",
      level: "Light", damage_ballistic: 330, fireRate: 300, capacity: 16, dps: 1650, mags: 7, ergonomics: 65, recoil: 55,
      unlock: "Helldivers Mobilize!", unlockCost: 20, unlockUnit: "Medals",
      desc: "A fully-automatic shotgun with a high rate of fire, excellent for controlling crowds. Requires frequent reloading." },
      
    { id: "sg-225sp-breaker-spray&pray", name: "SG-225SP Breaker Spray&Pray", slot: "Primary", type: "Shotgun",
      image: "images/Weapons/Primary-Shotguns/SG-225SP_Breaker_Spray&Pray_Primary_Render.png",
      level: "Light", damage_ballistic: 240, fireRate: 330, capacity: 26, dps: 1320, mags: 8, ergonomics: 65, recoil: 45,
      unlock: "Helldivers Mobilize!", unlockCost: 60, unlockUnit: "Medals",
      desc: "A modified breaker shotgun firing birdshot, small pellets which saturate and area to clear up smaller targets." },
      
    { id: "sg-225ie-breaker-incendiary", name: "SG-225IE Breaker Incendiary", slot: "Primary", type: "Shotgun",
      image: "images/Weapons/Primary-Shotguns/SG-225IE_Breaker_Incendiary_Primary_Render.png",
      level: "Light", damage_ballistic: 240, damage_DPS_fire: 100, fireRate: 300, capacity: 26, dps: 1200, mags: 4, ergonomics: 65, recoil: 41,
      unlock: "Steeled Veterans", unlockCost: 60, unlockUnit: "Medals",
      desc: "A modified breaker shotgun firing incendiary projectiles. Generates heat during use, so limited to burst fire." },
      
    { id: "sg-97-sweeper", name: "SG-97 Sweeper", slot: "Primary", type: "Shotgun",
      image: "images/Weapons/Primary-Shotguns/SG-97_Shotgun_Primary_Render.png",
      level: "Medium", damage_ballistic: 504, fireRate: 150, capacity: 7, dps: 1260, shells: 70, ergonomics: 65, recoil: 76,
      unlock: "Superstore", unlockCost: 400, unlockUnit: "Super Credits",
      desc: "A slamfire shotgun: fires continuously while the trigger is depressed, via activation of the pump-action mechanism. Loaded with armor-piercing flechettes and equipped with an extended bayonet." },  

    // Primary - Explosives

    { id: "cb-9-exploding-crossbow", name: "CB-9 Exploding Crossbow", slot: "Primary", type: "Explosives",
      image: "images/Weapons/Primary-Explosives/CB-9_Exploding_Crossbow_Primary_Render.png",
      level: "Medium", damage_projectile: 270, damage_explosion: 350, fireRate: 50, capacity: 5, dps: 516, mags: 8, ergonomics: 45, recoil: 35,
      unlock: "Democratic Detonation", unlockCost: 80, unlockUnit: "Medals",
      desc: "Fires powerful exploding bolts which do maximum damage upon direct impact. Gravity must be accounted for when aiming." },
      
    { id: "r-36-eruptor", name: "R-36 Eruptor", slot: "Primary", type: "Explosives",
      image: "images/Weapons/Primary-Explosives/R-36_Eruptor_Primary_Render.png",
      level_projectile: "Heavy", level_Explosion: "Medium", damage_projectile: 230, damage_explosion: 225, fireRate: 32, capacity: 5, dps: 853.12, mags: 6, ergonomics: 25, recoil: 75,
      unlock: "Democratic Detonation", unlockCost: 60, unlockUnit: "Medals",
      desc: "This bolt-action rifle fires jet-assisted shells that explode shrapnel in all directions upon impact. Not recommended for close-quarters use." },  

    // Primary - Energy

    { id: "sg-8p-punisher-plasma", name: "SG-8P Punisher Plasma", slot: "Primary", type: "Energy",
      image: "images/Weapons/Primary-Energy-Based/SG-8P_Punisher_Plasma_Primary_Render.png",
      level: "Medium", damage_explosion: 225, fireRate: 80, capacity: 10, dps: 299.99, mags: 8, ergonomics: 65, recoil: 110,
      unlock: "Cutting Edge", unlockCost: 60, unlockUnit: "Medals",
      desc: "A modified Punisher shotgun firing exploding plasma rounds. Fire carefully - exploding plasma can injure squadmates." },

    { id: "plas-39-accelerator-rifle", name: "PLAS-39 Accelerator Rifle", slot: "Primary", type: "Energy",
      image: "images/Weapons/Primary-Energy-Based/PLAS-39_Accelerator_Rifle_Primary_Render.png",
      level: "Medium", damage_ballistic: 250, damage_explosion: 100, fireRate: 550, capacity: 9, dps: 3208.33, mags: 12, ergonomics: 60, recoil: 3,
      unlock: "Righteous Revenants", unlockCost: 50, unlockUnit: "Medals",
      desc: "A high-precision burst-fire plasma rifle that must be charged to fire." },
      
    { id: "arc-12-blitzer", name: "ARC-12 Blitzer", slot: "Primary", type: "Energy",
      image: "images/Weapons/Primary-Energy-Based/ARC-12_Blitzer_Primary_Render.png",
      level: "Medium", damage_arc: 250, fireRate: 45, capacity: "∞", dps: 333.33, ergonomics: 65, recoil: 60,
      unlock: "Cutting Edge", unlockCost: 80, unlockUnit: "Medals",
      desc: "This shotgun blasts a wide burst of high-voltage electricity that arcs between all units—enemy or otherwise—within range." },
      
    { id: "las-5-scythe", name: "LAS-5 Scythe", slot: "Primary", type: "Energy",
      image: "images/Weapons/Primary-Energy-Based/LAS-5_Scythe_Primary_Render.png",
      level: "Light", damage_DPS_laser: 350, damage_DPS_fire: 100, capacity: 8, mags: 4, ergonomics: 65, recoil: 0,
      unlock: "Helldivers Mobilize!", unlockCost: 30, unlockUnit: "Medals",
      desc: "A laser rifle firing a continuous beam. Does not need reloading, but if it overheats a new heat sink must be fitted." },
      
    { id: "las-16-sickle", name: "LAS-16 Sickle", slot: "Primary", type: "Energy",
      image: "images/Weapons/Primary-Energy-Based/LAS-16_Sickle_Primary_Render.png",
      level: "Light", damage_ballistic: 60, fireRate: 750, capacity: 7, dps: 750, mags: 3, ergonomics: 65, recoil: 2,
      unlock: "Cutting Edge", unlockCost: 20, unlockUnit: "Medals",
      desc: "A laser rifle, firing in short bursts. Does not need reloading, but if it overheats a new heat sink must be fitted." },
      
    { id: "las-17-double-edge-sickle", name: "LAS-17 Double-Edge Sickle", slot: "Primary", type: "Energy",
      image: "images/Weapons/Primary-Energy-Based/LAS-17_Double-Edge_Sickle_Primary_Render.png",
      level: "Heavy", damage_projectile: "55-70", fireRate: 700, capacity: 15, dps: 700, mags: 3, ergonomics: 65,
      unlock: "Servants of Freedom", unlockCost: 35, unlockUnit: "Medals",
      desc: "A LAS-16 Sickle model with all overheating protections conveniently removed, allowing for far longer bursts of fire. Does more damage when overheating, at the cost of slightly burning the user." },
      
    { id: "plas-1-scorcher", name: "PLAS-1 Scorcher", slot: "Primary", type: "Energy",
      image: "images/Weapons/Primary-Energy-Based/PLAS-1_Scorcher_Primary_Render.png",
      level_projectile: "Light", level_explosion: "Medium", damage_ballistic: 100, damage_explosion: 100, fireRate: 350, capacity: 20, dps: 1166, mags: 5, ergonomics: 65, recoil: 20,
      unlock: "Helldivers Mobilize!", unlockCost: 75, unlockUnit: "Medals",
      desc: "A plasma rifle, firing a bolt of superheated gas which explodes on impact. Avoid standing in proximity to the blast." },
      
    { id: "plas-101-purifier", name: "PLAS-101 Purifier", slot: "Primary", type: "Energy",
      image: "images/Weapons/Primary-Energy-Based/PLAS-101_Purifier_Primary_Render.png",
      level: "Medium", damage_ballistic: "100-200", damage_explosion: "75-300", fireRate: 1000, capacity: 15, dps: 2916, mags: 6, ergonomics: 65, recoil: 20,
      unlock: "Polar Patriots", unlockCost: 80, unlockUnit: "Medals",
      desc: "A plasma rifle firing a bolt of superheated gas, which can be charged by holding down the trigger. Charging up a shot fully makes the bolt explode on impact." },
      
    { id: "las-13-trident", name: "LAS-13 Trident", slot: "Primary", type: "Energy",
      image: "images/Weapons/Primary-Energy-Based/LAS-13_Trident_Primary_Render.png",
      level: "Light", damage_laser: 360, fireRate: 300, capacity: 10, dps: 1800, mags: 3, ergonomics: 65, recoil: 4,
      unlock: "Siege Breakers", unlockCost: 35, unlockUnit: "Medals",
      desc: "This time-honored shotgun-like weapon has been improved since the First Galactic War, and now fires six beams instead of three." },
    
    // Primary - Special
    
    { id: "vg-70-variable", name: "VG-70 Variable", slot: "Primary", type: "Special",
      image: "images/Weapons/Primary-Special/VG-70_Variable_Primary_Render.png",
      level: "Light", damage_ballistic: 85, fireRate_small: 300, fireRate_medium: 550, fireRate_large: 750, capacity: 49, dps_small: 425, dps_medium: 779.16, dps_large: 1062.5, mags: 7, ergonomics: 25, recoil: 7,
      unlock: "Control Group", unlockCost: 35, unlockUnit: "Medals",
      desc: "A speed-loaded volley gun with three different firing modes and three different RPM options. Warning: recoil varies significantly between firing modes." },

    { id: "flam-66-torcher", name: "FLAM-66 Torcher", slot: "Primary", type: "Special",
      image: "images/Weapons/Primary-Special/FLAM-66_Torcher_Primary_Render.png",
      level: "Heavy", damage_DPS_Fire: 150, capacity: 100, mags: 6, ergonomics: 45, recoil: 2,
      unlock: "Freedom's Flame", unlockCost: 40, unlockUnit: "Medals",
      desc: "A lightweight flamethrower. Shoots pressurized fuel through a dispersion nozzle into an open flame" },
      
    { id: "jar-5-dominator", name: "JAR-5 Dominator", slot: "Primary", type: "Special",
      image: "images/Weapons/Primary-Special/JAR-5_Dominator_Primary_Render.png",
      level: "Medium", damage_ballistic: 275, fireRate: 250, capacity: 15, dps: 1145.83, mags: 6, ergonomics: 30, recoil: 75,
      unlock: "Steeled Veterans", unlockCost: 80, unlockUnit: "Medals",
      desc: "Firing jet-propelled rounds, the Dominator trades fire rate and magazine capacity for increased damage per projectile." },  

    // Secondary - Pistols

    { id: "p-92-warrant", name: "P-92 Warrant", slot: "Secondary", type: "Pistol",
      image: "images/Weapons/Secondary-Pistols/P-92_Warrant_Secondary_Render.png",
      level: "Medium", damage_ballistic: 80, fireRate: 450, capacity: 13, dps: 600, mags: 7, ergonomics: 100, recoil: 31,
      unlock: "Superstore", unlockCost: 300, unlockUnit: "Super Credits",
      desc: "A pistol firing bursts of guided, jet-propelled ammunition. Can be set to non-guided mode at any time, removing the need to lock on to targets." },

    { id: "p-2-peacemaker", name: "P-2 Peacemaker", slot: "Secondary", type: "Pistol",
      image: "images/Weapons/Secondary-Pistols/P-2_Peacemaker_Secondary_Render.png",
      level: "Light", damage_ballistic: 100, fireRate: 900, capacity: 15, dps: 1500, mags: 8, ergonomics: 100, recoil: 23,
      unlock: "Starter Equipment", unlockCost: 0, unlockUnit: "Medals",
      desc: "The SEAF standard pistol - offering a high rate of fire, generous capacity, and fast reloading." },

    { id: "p-19-redeemer", name: "P-19 Redeemer", slot: "Secondary", type: "Pistol",
      image: "images/Weapons/Secondary-Pistols/P-19_Redeemer_Secondary_Render.png",
      level: "Light", damage_ballistic: 70, fireRate: 1100, capacity: 31, dps: 1283.33, mags: 4, ergonomics: 95, recoil: 15,
      unlock: "Helldivers Mobilize!", unlockCost: 5, unlockUnit: "Medals",
      desc: "A fully-automatic pistol with an extremely high fire rate, allowing for efficient crowd control." },

    { id: "p-113-verdict", name: "P-113 Verdict", slot: "Secondary", type: "Pistol",
      image: "images/Weapons/Secondary-Pistols/P-113_Verdict_Secondary_Render.png",
      level: "Medium", damage_ballistic: 140, fireRate: 450, capacity: 10, dps: 10500, mags: 8, ergonomics: 100, recoil: 31,
      unlock: "Polar Patriots", unlockCost: 60, unlockUnit: "Medals",
      desc: "The gas-operated, semiautomatic P-113 chambers the 14mm 'Rapid Deliberation,' the largest centerfire cartridge of any magazine-fed pistol." },
      
    { id: "m6c/socom-pistol", name: "M6C/SOCOM Pistol", slot: "Secondary", type: "Pistol",
      image: "images/Weapons/Secondary-Pistols/M6C-SOCOM_Pistol_Secondary_Render.png",
      level: "Light", damage_ballistic: 125, fireRate: 900, capacity: 12, dps: 1875, mags: 8, ergonomics: 100, recoil: 20,
      unlock: "Halo: ODST", unlockCost: 75, unlockUnit: "Medals",
      desc: "A pistol with a built-in laser sight, suppressor, and flashlight. Produced by Martian Armory." },
      
    { id: "p-4-senator", name: "P-4 Senator", slot: "Secondary", type: "Pistol",
      image: "images/Weapons/Secondary-Pistols/P-4_Senator_Secondary_Render.png",
      level: "Heavy", damage_ballistic: 225, fireRate: 200, capacity: 6, dps: 749.99, rounds: 40, ergonomics: 75, recoil: 43,
      unlock: "Steeled Veterans", unlockCost: 15, unlockUnit: "Medals",
      desc: "A high-damage revolver, which can be reloaded with single rounds. A heavy-hitting and reliable sidearm." },
      
    { id: "p-69-veto", name: "P-69 Veto", slot: "Secondary", type: "Pistol",
      image: "images/Weapons/Secondary-Pistols/P-69_Veto_Secondary_Render.png",
      level: "Medium", damage_ballistic: 105, fireRate: 750, capacity: 12, dps: 1312.5, rounds: 90, ergonomics: 100, recoil: 30,
      unlock: "Entrenched Division", unlockCost: 65, unlockUnit: "Medals",
      desc: "Loaded with jet-assisted rounds, this pistol is calibrated for creating and maintaining tactical distance from encroaching hostiles" },  

    // Secondary - Melees  

    { id: "cqc-19-stun-lance", name: "CQC-19 Stun Lance", slot: "Secondary", type: "Melee",
      image: "images/Weapons/Secondary-Melees/CQC-19_Stun_Lance_Secondary_Render.png",
      level: "Medium", damage_melee: 165, fireRate: 117, ergonomics: 0, recoil: 8,
      unlock: "Urban Legends", unlockCost: 30, unlockUnit: "Medals",
      desc: "A melee weapon tipped with electrified prongs that temporarily stun targets. Can be wielded one-handed." },  

    { id: "cqc-2-saber", name: "CQC-2 Saber", slot: "Secondary", type: "Melee",
      image: "images/Weapons/Secondary-Melees/CQC-2_Saber_Secondary_Render.png",
      level: "Medium", damage_melee: 188, fireRate: 150, capacity: "N/A", ergonomics: 0, recoil: 6,
      unlock: "Masters of Ceremony", unlockCost: 40, unlockUnit: "Medals",
      desc: "A one-handed ceremonial sword suitable for use in parades, sabrage, and combat." },  
      
    { id: "cqc-30-stun-baton", name: "CQC-30 Stun Baton", slot: "Secondary", type: "Melee",
      image: "images/Weapons/Secondary-Melees/CQC-30_Stun_Baton_Secondary_Render.png",
      level: "Medium", damage_melee: 120, fireRate: "N/A", capacity: "N/A", ergonomics: 0, recoil: 8,
      unlock: "Superstore", unlockCost: 200, unlockUnit: "Super Credits",
      desc: "A lightweight melee weapon that temporarily stuns enemies. Can be wielded one-handed." },  
      
    { id: "cqc-5-combat-hatchet", name: "CQC-5 Combat Hatchet", slot: "Secondary", type: "Melee",
      image: "images/Weapons/Secondary-Melees/CQC-5_Combat_Hatchet_Secondary_Render.png",
      level: "Medium", damage_melee: 240, fireRate: 100, capacity: "N/A", ergonomics: 0, recoil: 8,
      unlock: "Superstore", unlockCost: 200, unlockUnit: "Super Credits",
      desc: "A heavy-hitting, one-handed melee weapon." },  
      
    { id: "cqc-73-entrenchment-tool", name: "CQC-73 Entrenchment Tool", slot: "Secondary", type: "Melee",
      image: "images/Weapons/Secondary-Melees/CQC-73_Entrenchment_Tool_Secondary_Render.png",
      level: "Medium", damage_melee: 165, fireRate: 150,
      tags: ["UNRELEASED"],
      desc: "Item is currently not in the game. Please stand by for an update." },  
      
    { id: "cqc-42-machete", name: "CQC-42 Machete", slot: "Secondary", type: "Melee",
      image: "images/Weapons/Secondary-Melees/CQC-42_Machete_Secondary_Render.png",
      level: "Medium", damage_melee: 300, fireRate: 72, capacity: "N/A", ergonomics: 0, recoil: 0,
      unlock: "Superstore", unlockCost: 200, unlockUnit: "Super Credits",
      desc: "A heavy one-handed blade. Slower to swing than other melee weapons, but deals more damage." },    

    // Secondary - Special

    { id: "p-11-stim-pistol", name: "P-11 Stim Pistol", slot: "Secondary", type: "Special",
      image: "images/Weapons/Secondary-Special/P-11_Stim_Pistol_Secondary_Render.png",
      level: "No Hitbox", damage_ballistic: 0, fireRate: 70, capacity: 6, rounds: 24, ergonomics: 100, recoil: 6,
      unlock: "Chemical Agents", unlockCost: 80, unlockUnit: "Medals",
      desc: "Fires a ballistic dart at near-supersonic speeds, allowing the user to stim allies from a distance. Might sting." },

    { id: "sg-22-bushwhacker", name: "SG-22 Bushwhacker", slot: "Secondary", type: "Special",
      image: "images/Weapons/Secondary-Special/SG-22_Bushwhacker_Secondary_Render.png",
      level: "Light", damage_ballistic: 405, fireRate: 650, capacity: 3, dps: 1215, rounds: 30, ergonomics: 65, recoil: 170,
      unlock: "Viper Commandos", unlockCost: 50, unlockUnit: "Medals",
      desc: "A triple-barreled, break-action, sawed-off shotgun. Switch firing modes to fire all three barrels at once." },
      
    { id: "las-58-talon", name: "LAS-58 Talon", slot: "Secondary", type: "Special",
      image: "images/Weapons/Secondary-Special/LAS-58_Talon_Secondary_Render.png",
      level: "Medium", damage_ballistic: 200, fireRate: 750, capacity: 7, mags: 3, ergonomics: 95, recoil: 2,
      unlock: "Borderline Justice", unlockCost: 40, unlockUnit: "Medals",
      desc: "An accurate, hard-hitting laser revolver with bespoke break action for heat sink swaps." },
      
    { id: "p-72-crisper", name: "P-72 Crisper", slot: "Secondary", type: "Special",
      image: "images/Weapons/Secondary-Special/P-72_Crisper_Secondary_Render.png",
      level: "Heavy", damage_DPS_Fire: 150, capacity: 50, mags: 4, ergonomics: 95, recoil: 3,
      unlock: "Freedom's Flame", unlockCost: 45, unlockUnit: "Medals",
      desc: "A compact handgun-style flamethrower, able to project a jet of fire over short distances." },
      
    { id: "gp-31-grenade-pistol", name: "GP-31 Grenade Pistol", slot: "Secondary", type: "Special",
      image: "images/Weapons/Secondary-Special/GP-31_Grenade_Pistol_Secondary_Render.png",
      level: "Medium", damage_projectile: 250, damage_explosion: 400, fireRate: 35, capacity: 1, rounds: 6, ergonomics: 95, recoil: 43,
      unlock: "Democratic Detonation", unlockCost: 60, unlockUnit: "Medals",
      desc: "A pistol that fires grenades. Must be reloaded between shots." },
      
    { id: "las-7-dagger", name: "LAS-7 Dagger", slot: "Secondary", type: "Special",
      image: "images/Weapons/Secondary-Special/LAS-7_Dagger_Secondary_Render.png",
      level: "Light", damage_DPS_laser: 250, damage_DPS_Fire: 100, capacity: 6.67, mags: 3, ergonomics: 95, recoil: 0,
      unlock: "Cutting Edge", unlockCost: 60, unlockUnit: "Medals",
      desc: "A laser pistol that fires a continuous beam. Does not require ammo but can overheat and need to change batteries." },
      
    { id: "gp-20-ultimatum", name: "GP-20 Ultimatum", slot: "Secondary", type: "Special",
      image: "images/Weapons/Secondary-Special/GP-20_Ultimatum_Secondary_Render.png",
      level: "Anti-Tank II", damage_projectile: 1000, damage_explosion: 2000, fireRate: 20, capacity: 1, dps: 999.99, rounds: 1, ergonomics: 35, recoil: 43,
      unlock: "Servants of Freedom", unlockCost: 40, unlockUnit: "Medals",
      desc: "A pistol front-loaded with a single, powerful explosive. The weight of the projectile limits the weapon's range." },
      
    { id: "plas-15-loyalist", name: "PLAS-15 Loyalist", slot: "Secondary", type: "Special",
      image: "images/Weapons/Secondary-Special/PLAS-15_Loyalist_Secondary_Render.png",
      level: "Medium", damage_ballistic: "75-150", damage_explosion: "75-225", fireRate: 6000, capacity: 8, mags: 5, ergonomics: 95, recoil: 8,
      unlock: "Truth Enforcers", unlockCost: 45, unlockUnit: "Medals",
      desc: "A plasma pistol that charges each shot until the trigger is released. Plasma projectiles explode on impact." },
    
    { id: "p-35-re-educator", name: "P-35 Re-Educator", slot: "Secondary", type: "Special",
      image: "images/Weapons/Secondary-Special/P-35_Re-Educator_Secondary_Render.png",
      level: "Heavy", damage_gas: 60, fireRate: 110, capacity: 6, dps: 110, mags: 2, ergonomics: 100, recoil: 10,
      unlock: "Redacted Regiment", unlockCost: 20, unlockUnit: "Medals",
      desc: "A dart-firing pistol. Each of its six rounds administers a gaseous chemical agent, harmful to hostiles whether organic or artificial, that also induces a state of delirium in the target." },
      
    { id: "p-33-missile-pistol", name: "P-33 Missile Pistol", slot: "Secondary", type: "Special",
      image: "images/Weapons/Secondary-Special/P-33_Missile_Pistol_Secondary_Render.png",
      level_projectile: "Anti-Tank I", level_Explosion: "Medium", damage_projectile: 1000, damage_explosion: 300, fireRate: 60, capacity: 1, dps: 1300, rounds: 3, ergonomics: 45, recoil: 313,
      unlock: "Exo Experts", unlockCost: 50, unlockUnit: "Medals",
      desc: "A pistol firing guided, jet-propelled ammunition. It's lock-on feature ensures high accuracy, but the weapon must be reloaded after every round fired." },  

    // Throwable - Standard  

    { id: "ted-63-dynamite", name: "TED-63 Dynamite", slot: "Throwable", type: "Standard",
      image: "images/Weapons/Throwable-Standards/TED-63_Dynamite_Throwable_Render.png",
      level: "Heavy", damage_explosion: 1000, capacity: 4, cookable: "Yes", fuse_time: "5s/15s/60s", 
      unlock: "Borderline Justice", unlockCost: 65, unlockUnit: "Medals",
      desc: "Creates a far-reaching incendiary blast ideal for crowd control against smaller enemies of Freedom. Equipped with a programmable timer for strategic versatility." },

    { id: "g-6-frag", name: "G-6 Frag", slot: "Throwable", type: "Standard",
      image: "images/Weapons/Throwable-Standards/G-6_Frag_Throwable_Render.png",
      level: "Medium", damage_explosion: 500, damage_shrapnel: 110, capacity: 6, cookable: "Yes", fuse_time: "2.4s", 
      unlock: "Helldivers Mobilize!", unlockCost: 2, unlockUnit: "Medals",
      desc: "An antipersonnel fragmentation grenade. Creates damage over a large area when detonated." },

    { id: "g-12-high-explosive", name: "G-12 High Explosive", slot: "Throwable", type: "Standard",
      image: "images/Weapons/Throwable-Standards/G-12_High_Explosive_Throwable_Render.png",
      level: "Heavy", damage_explosion: 800, capacity: 4, cookable: "Yes", fuse_time: "3.5s", 
      unlock: "Starter Equipment", unlockCost: 0, unlockUnit: " ",
      desc: "A high explosive grenade which damages lightly armored targets. Creates high damage over a small area when detonated." },
      
    { id: "g-10-incendiary", name: "G-10 Incendiary", slot: "Throwable", type: "Standard",
      image: "images/Weapons/Throwable-Standards/G-10_Incendiary_Throwable_Render.png",
      level: "Medium", damage_explosion: 300, damage_DPS_fire: 110, capacity: 4, cookable: "Yes", fuse_time: "2.9s", 
      unlock: "Steeled Veterans", unlockCost: 25, unlockUnit: "Medals",
      desc: "An incendiary grenade which ignites any targets and terrain within the blast radius. use with caution." },
      
    { id: "g-7-pineapple", name: "G-7 Pineapple", slot: "Throwable", type: "Standard",
      image: "images/Weapons/Throwable-Standards/G-7_Pineapple_Throwable_Render.png",
      level: "Medium", damage_explosion: 300, damage_ballistic: 300, capacity: 4, cookable: "Yes", fuse_time: "2.4s", 
      unlock: "Dust Devils", unlockCost: 65, unlockUnit: "Medals",
      desc: "A cluster fragmentation grenade. The shrapnel submunition allows it to inflict damage over a large area." },

    // Throwable - Special  

    { id: "impact", name: "G-16 Impact", slot: "Throwable", type: "Special",
      image: "images/Weapons/Throwable-Special/G-16_Impact_Throwable_Render.png",
      level: "Medium", damage_explosion: 350, capacity: 4, cookable: "No", fuse_time: "On impact",
      unlock: "Cutting Edge", unlockCost: 25, unlockUnit: "Medals",
      desc: "Detonates on contact — no fuse timing required. Reliable against medium targets at range." },

    { id: "g-23-stun", name: "G-23 Stun", slot: "Throwable", type: "Special",
      image: "images/Weapons/Throwable-Special/G-23_Stun_Throwable_Render.png",
      level: "—", damage_explosion: 0, capacity: 4, cookable: "No", fuse_time: "2.0s",
      unlock: "Helldivers Mobilize!", unlockCost: 20, unlockUnit: "Medals",
      desc: "Releases an electrical field that temporarily stuns enemies in the blast radius. Deals no damage — sets up the kill." },

    { id: "g-13-incendiary-impact", name: "G-13 Incendiary Impact", slot: "Throwable", type: "Special",
      image: "images/Weapons/Throwable-Special/G-13_Incendiary_Impact_Throwable_Render.png",
      level: "Light", damage_explosion: 150, damage_DPS_fire: 110, capacity: 4, cookable: "No", fuse_time: "On impact",
      unlock: "Freedom's Flame", unlockCost: 40, unlockUnit: "Medals",
      desc: "An impact grenade that blankets the area in flames on contact. Excellent for choking off swarms." },

    { id: "g-50-seeker", name: "G-50 Seeker", slot: "Throwable", type: "Special",
      image: "images/Weapons/Throwable-Special/G-50_Seeker_Throwable_Render.png",
      level: "Medium", damage_explosion: 400, capacity: 4, cookable: "No", fuse_time: "Seeks target",
      unlock: "Servants of Freedom", unlockCost: 60, unlockUnit: "Medals",
      desc: "Once thrown, this grenade locks onto the nearest hostile and homes in before detonating." },

    { id: "g-3-smoke", name: "G-3 Smoke", slot: "Throwable", type: "Special",
      image: "images/Weapons/Throwable-Special/G-3_Smoke_Throwable_Render.png",
      level: "—", damage_explosion: 0, capacity: 4, cookable: "No", fuse_time: "2.0s",
      unlock: "Helldivers Mobilize!", unlockCost: 15, unlockUnit: "Medals",
      desc: "Deploys a dense smoke screen to break enemy line of sight and cover a retreat or revive." },

    { id: "k-2-throwing-knife", name: "K-2 Throwing Knife", slot: "Throwable", type: "Special",
      image: "images/Weapons/Throwable-Special/K-2_Throwing_Knife_Throwable_Render.png",
      level: "Medium", damage_ballistic: 250, capacity: 8, cookable: "No", fuse_time: "On impact",
      unlock: "Viper Commandos", unlockCost: 30, unlockUnit: "Medals",
      desc: "A silent, recoverable throwing blade. High single-target damage with a generous carry count for the steady-handed." },
  ],

  /* ---------- SUPPORT WEAPONS (a stratagem subcategory) ----------
     hover-detail fields: code, cooldown (base), unlock, unlockLevel,
     unlockCost, damage, fireRate, recoil, ergonomics, capacity, mags.
     permit = the card-front "permit type" (was `type`). traits = card-front list. */
  supportWeapons: [
    { id: "mg-43-machine-gin", name: "MG-43 Machine Gun", permit: "Supply",
      image: "images/Stratagems/Support Weapons/Machine_Gun_Stratagem_Icon.svg",
      code: "↓←↓↑→", cooldown: 480, unlock: "Patriotic Administration Center", unlockLevel: 1, unlockCost: 0, unlockUnit: "",
      damage_ballistic: 90, fireRate: 760, recoil: 21.25 , ergonomics: 15 , capacity: 175 , mags: 3,
      desc: "A machine gun designed for stationary use. Trades higher power for increased recoil and reduced accuracy." },
    { id: "eat-17-expendable-anti-tank", name: "EAT-17 Expendable Anti-Tank", permit: "Supply",
      image: "images/Stratagems/Support Weapons/Expendable_Anti-Tank_Stratagem_Icon.svg",
      code: "↓↓←↑→", cooldown: 70, unlock: "Patriotic Administration Center", unlockLevel: 3, unlockCost: 3000, unlockUnit: "Requisition Slips",
      damage_ballistic: 2000, fireRate: 600, recoil: 6.25 , ergonomics: 15 , capacity: 1,
      desc: "A single-use weapon specialized for damaging vehicle armor. Discarded after every use." },
    { id: "m-105-stalwart", name: "M-105 Stalwart", permit: "Supply",
      image: "images/Stratagems/Support Weapons/Stalwart_Stratagem_Icon.svg",
      code: "↓←↓↑↑←", cooldown: 480, unlock: "Patriotic Administration Center", unlockLevel: 1, unlockCost: 3500, unlockUnit: "Requisition Slips",
      damage: 90, fireRate: 850, recoil: 15, ergonomics: 40, capacity: 250, mags: 3,
      desc: "A compact, low caliber machine gun. Trades power for ease of use, with faster reloading than heavier machine guns." },
    { id: "las-98-laser-cannon", name: "LAS-98 Laser Cannon", permit: "Supply", 
      image: "images/Stratagems/Support Weapons/Laser_Cannon_Stratagem_Icon.svg",
      code: "↓←↓↑←", cooldown: 480, unlock: "Engineering Bay", unlockLevel: 5, unlockCost: 4000, unlockUnit: "Requisition Slips",
      damage_laser: 350, damage_fire: 100, recoil: 0, ergonomics: 45, mags: 2,
      desc: "A laser weapon firing a continuous beam. Doesn't require ammunition, but will need heat sink replaced if it overheats." },
    { id: "apw-1-anti-material-rifle", name: "APW-1 Anti-Materiel Rifle", permit: "Supply", 
      image: "images/Stratagems/Support Weapons/Anti-Materiel_Rifle_Stratagem_Icon.svg",
      code: "↓←→↑↓", cooldown: 480, unlock: "Patriotic Administration Center", unlockLevel: 1, unlockCost: 5000, unlockUnit: "Requisition Slips",
      damage_ballistic: 450, fireRate: 400 , recoil: 155.5, ergonomics: 35, capacity: 7, mags: 8,
      desc: "A high-caliber sniper rifle effective over long distances against light vehicle armor. This rifle must be aimed downscope." },
    { id: "gl-21-grenade-launcher", name: "GL-21 Grenade Launcher", permit: "Supply", 
      image: "images/Stratagems/Support Weapons/Grenade_Launcher_Stratagem_Icon.svg",
      code: "↓←↑←↓", cooldown: 480, unlock: "Engineering Bay", unlockLevel: 5, unlockCost: 6000, unlockUnit: "Requisition Slips",
      damage_ballistic: 0, damage_fire: 400, fireRate: 160, recoil: 123.75 , ergonomics: 25, capacity: 10, mags: 3,
      desc: "A grenade launcher effective against armored infantry. Not intended for use against vehicle armor or fortified buildings." },
  ],

  /* ---------- ORBITAL STRIKES (Orbital + Eagle) ----------
     hover-detail fields: code, cooldown (base), unlock, unlockLevel,
     unlockCost, bombs, salvos, damage. permit + traits on the card front. */
  orbitalStrikes: [
    { id: "olaser", name: "Orbital Laser", permit: "Orbital", traits: ["Heavy","Auto-Target","Limited Uses"],
      image: "images/Stratagems/Orbital Strikes/Orbital/Orbital_Laser_Stratagem_Icon.svg",
      code: "→↓↑→↓", cooldown: 300, unlock: "Default", unlockLevel: 0, unlockCost: 0, unlockUnit: "",
      bombs: "—", salvos: 1, damage: 600, uses: 3, penetration: 6,
      tags: ["heavy","auto-target"], desc: "Roving beam that melts everything for ~15s. Limited uses per mission." },
    { id: "orail", name: "Orbital Railcannon Strike", permit: "Orbital", traits: ["Anti-Tank","Auto-Target"],
      image: "images/Stratagems/Orbital Strikes/Orbital/Orbital_Railcannon_Strike_Stratagem_Icon.svg",
      code: "→↑↓↓→", cooldown: 210, unlock: "Default", unlockLevel: 0, unlockCost: 0, unlockUnit: "",
      bombs: 1, salvos: 1, damage: 3000, uses: "∞", penetration: 6,
      tags: ["anti-tank","auto-target"], desc: "One precision shot at the heaviest nearby enemy." },
    { id: "o380", name: "Orbital 380MM HE Barrage", permit: "Orbital", traits: ["Area-Denial","Wide","Long Duration"],
      image: "images/Stratagems/Orbital Strikes/Orbital/Orbital_380mm_HE_Barrage_Stratagem_Icon.svg",
      code: "→↓↑↑←↓↓", cooldown: 240, unlock: "Default", unlockLevel: 0, unlockCost: 0, unlockUnit: "",
      bombs: "~20", salvos: "~20", damage: 700, uses: "∞", penetration: 5,
      tags: ["area-denial","wide"], desc: "Saturates a huge radius. Throw it far from yourself." },
    { id: "ogas", name: "Orbital Gas Strike", permit: "Orbital", traits: ["DoT","Area-Denial","Low Cooldown"],
      image: "images/Stratagems/Orbital Strikes/Orbital/Orbital_Gas_Strike_Stratagem_Icon.svg",
      code: "→→↓→", cooldown: 75, unlock: "Default", unlockLevel: 0, unlockCost: 0, unlockUnit: "",
      bombs: 1, salvos: 1, damage: 100, uses: "∞", penetration: 2,
      tags: ["dot","area-denial"], desc: "Lingering gas cloud, low cooldown, strong on bug breaches." },
    { id: "oprec", name: "Orbital Precision Strike", permit: "Orbital", traits: ["Single-Target","Fast","Low Cooldown"],
      image: "images/Stratagems/Orbital Strikes/Orbital/Orbital_Precision_Strike_Stratagem_Icon.svg",
      code: "→→↑", cooldown: 90, unlock: "Default", unlockLevel: 0, unlockCost: 0, unlockUnit: "",
      bombs: 1, salvos: 1, damage: 1500, uses: "∞", penetration: 5,
      tags: ["single-target","fast"], desc: "Quick single shell with a short cooldown." },
    { id: "eagle-airstrike", name: "Eagle Airstrike", permit: "Eagle", traits: ["Versatile","Fast Rearm","Multi-Use"],
      image: "images/Stratagems/Orbital Strikes/Eagles/Eagle_Airstrike_Stratagem_Icon.svg",
      code: "↑→↓→", cooldown: 8, unlock: "Default", unlockLevel: 0, unlockCost: 0, unlockUnit: "",
      bombs: 5, salvos: 1, damage: 300, uses: "2 (per rearm)", penetration: 4,
      tags: ["versatile","line-bomb"], desc: "A line of bombs from the Eagle. The all-purpose workhorse stratagem." },
    { id: "eagle-500kg", name: "Eagle 500KG Bomb", permit: "Eagle", traits: ["Anti-Tank","Single Bomb","High Damage"],
      image: "images/Stratagems/Orbital Strikes/Eagles/Eagle_500kg_Bomb_Stratagem_Icon.svg",
      code: "↑→↓↓↓", cooldown: 8, unlock: "Default", unlockLevel: 0, unlockCost: 0, unlockUnit: "",
      bombs: 1, salvos: 1, damage: 4000, uses: "1 (per rearm)", penetration: 6,
      tags: ["anti-tank","big-boom"], desc: "One enormous bomb. Tight blast radius — land it on the target." },
    { id: "eagle-cluster", name: "Eagle Cluster Bomb", permit: "Eagle", traits: ["Horde Clear","Wide","Light-Pen"],
      image: "images/Stratagems/Orbital Strikes/Eagles/Eagle_Cluster_Bomb_Stratagem_Icon.svg",
      code: "↑→↓↓→", cooldown: 8, unlock: "Default", unlockLevel: 0, unlockCost: 0, unlockUnit: "",
      bombs: "5 (cluster)", salvos: 1, damage: 120, uses: "4 (per rearm)", penetration: 2,
      tags: ["horde","wide"], desc: "Scatters bomblets across a wide area. Shreds light infantry." },
    { id: "eagle-napalm", name: "Eagle Napalm Airstrike", permit: "Eagle", traits: ["Fire","Area-Denial","DoT"],
      image: "images/Stratagems/Orbital Strikes/Eagles/Eagle_Napalm_Airstrike_Stratagem_Icon.svg",
      code: "↑→↓↑", cooldown: 8, unlock: "Default", unlockLevel: 0, unlockCost: 0, unlockUnit: "",
      bombs: 3, salvos: 1, damage: 150, uses: "2 (per rearm)", penetration: 3,
      tags: ["fire","area-denial"], desc: "Lays a wall of fire. Excellent for blocking bug breaches." },
  ],

  /* ---------- EMPLACEMENTS (stratagem subcategory) ----------
     hover-detail fields: code, cooldown (base), unlock, unlockLevel,
     unlockCost, damage, penetration (armor pen), fireRate, capacity, ergonomics. */
  emplacements: [
    { id: "shield", name: "FX-12 Shield Generator Relay", permit: "Defensive", traits: ["Dome","Cover","Blocks Fire"],
      image: "images/Stratagems/Emplacements/Defensive/Shield_Generator_Relay_Stratagem_Icon.svg",
      code: "↓↑←→←→", cooldown: 480, unlock: "Default", unlockLevel: 0, unlockCost: 0, unlockUnit: "",
      damage: 0, penetration: 0, fireRate: "—", capacity: "—", ergonomics: "—",
      tags: ["dome","cover"], desc: "Projects a bubble shield that blocks incoming fire." },
    { id: "tesla", name: "Tesla Tower", permit: "Defensive", traits: ["Zap","Crowd-Control","Auto"],
      image: "images/Stratagems/Emplacements/Defensive/Tesla_Tower_Stratagem_Icon.svg",
      code: "↓↑→↑←→", cooldown: 210, unlock: "Default", unlockLevel: 0, unlockCost: 0, unlockUnit: "",
      damage: 300, penetration: 3, fireRate: "—", capacity: "—", ergonomics: "—",
      tags: ["zap","crowd-control"], desc: "Arcs electricity to nearby enemies. Keep your distance." },
    { id: "shield-relay-personal", name: "SH-32 Shield Generator Pack", permit: "Defensive", traits: ["Personal","Recharging","Absorbs Hits"],
      image: "images/Stratagems/Emplacements/Defensive/EMS_Mortar_Sentry_Stratagem_Icon.svg",
      code: "↓↑←→←→", cooldown: 480, unlock: "Engineering Bay", unlockLevel: 8, unlockCost: 7000, unlockUnit: "Requisition Slips",
      damage: 0, penetration: 0, fireRate: "—", capacity: "—", ergonomics: "—",
      tags: ["personal","shield"], desc: "A wearable energy shield that soaks incoming damage and recharges when not under fire." },
    { id: "ems-mortar", name: "A/M-23 EMS Mortar Sentry", permit: "Defensive", traits: ["Indirect","Slow Field","Non-Lethal"],
      image: "images/Stratagems/Emplacements/Defensive/Tesla_Tower_Stratagem_Icon.svg",
      code: "↓↑→↓→", cooldown: 180, unlock: "Engineering Bay", unlockLevel: 12, unlockCost: 7500, unlockUnit: "Requisition Slips",
      damage: 0, penetration: 0, fireRate: 20, capacity: 24, ergonomics: "—",
      tags: ["indirect","slow"], desc: "Lobs EMS rounds that slow and stagger groups of enemies without harming them. Pairs with offensive sentries." },

    { id: "hmgemp", name: "E/MG-101 HMG Emplacement", permit: "Offensive", traits: ["Mounted","High-DPS","Locked In"],
      image: "images/Stratagems/Emplacements/Offensive/HMG_Emplacement_Stratagem_Icon.svg",
      code: "↓↑←→→←", cooldown: 360, unlock: "Default", unlockLevel: 0, unlockCost: 0, unlockUnit: "",
      damage: 150, penetration: 4, fireRate: 233, capacity: 150, ergonomics: 20,
      tags: ["mounted","high-dps"], desc: "Mounted heavy machine gun. High DPS, you're locked in place." },
    { id: "tesla-emplacement-arc", name: "E/AT-12 Anti-Tank Emplacement", permit: "Offensive", traits: ["Mounted","Anti-Tank","Locked In"],
      image: "images/Stratagems/Emplacements/Offensive/Anti-Tank_Emplacement_Stratagem_Icon.svg",
      code: "↓↑←→→↓", cooldown: 480, unlock: "Engineering Bay", unlockLevel: 20, unlockCost: 9000, unlockUnit: "Requisition Slips",
      damage: 1200, penetration: 6, fireRate: 40, capacity: 16, ergonomics: 15,
      tags: ["mounted","anti-tank"], desc: "A crewed recoilless cannon emplacement. Tears through heavy armor but pins you in place while firing." },

    { id: "mortar", name: "A/M-12 Mortar Sentry", permit: "Sentry", traits: ["Indirect","Auto","Watch Teammates"],
      image: "images/Stratagems/Emplacements/Sentry/Mortar_Sentry_Stratagem_Icon.svg",
      code: "↓↑→→↓", cooldown: 180, unlock: "Default", unlockLevel: 0, unlockCost: 0, unlockUnit: "",
      damage: 350, penetration: 3, fireRate: 20, capacity: 24, ergonomics: "—",
      tags: ["indirect","auto"], desc: "Auto-firing mortar. Lob death over walls — mind teammates." },
    { id: "gatling-sentry", name: "A/MG-43 Machine Gun Sentry", permit: "Sentry", traits: ["Auto","Anti-Infantry","Fast Setup"],
      image: "images/Stratagems/Emplacements/Sentry/Machine_Gun_Sentry_Stratagem_Icon.svg",
      code: "↓↑→→↑", cooldown: 90, unlock: "Patriotic Administration Center", unlockLevel: 2, unlockCost: 1500, unlockUnit: "Requisition Slips",
      damage: 90, penetration: 3, fireRate: 250, capacity: 200, ergonomics: "—",
      tags: ["auto","anti-infantry"], desc: "A quick-deploying turret that shreds light infantry. Short cooldown, reliable workhorse." },
    { id: "gatling-sentry-heavy", name: "A/G-16 Gatling Sentry", permit: "Sentry", traits: ["Auto","High Rate","Crowd-Clear"],
      image: "images/Stratagems/Emplacements/Sentry/Gatling_Sentry_Stratagem_Icon.svg",
      code: "↓↑→←", cooldown: 120, unlock: "Patriotic Administration Center", unlockLevel: 4, unlockCost: 4000, unlockUnit: "Requisition Slips",
      damage: 90, penetration: 3, fireRate: 900, capacity: 1000, ergonomics: "—",
      tags: ["auto","crowd-clear"], desc: "A rotary-barrel sentry that hoses down swarms. Burns through ammo fast — place it well." },
    { id: "autocannon-sentry", name: "A/AC-8 Autocannon Sentry", permit: "Sentry", traits: ["Auto","Medium-Armor","Long Range"],
      image: "images/Stratagems/Emplacements/Sentry/Autocannon_Sentry_Stratagem_Icon.svg",
      code: "↓↑→↑←↑", cooldown: 180, unlock: "Engineering Bay", unlockLevel: 10, unlockCost: 6000, unlockUnit: "Requisition Slips",
      damage: 300, penetration: 4, fireRate: 90, capacity: 80, ergonomics: "—",
      tags: ["auto","medium-armor"], desc: "A turret-mounted autocannon that punches through medium armor at range. Excellent against Devastators." },
    { id: "rocket-sentry", name: "A/MLS-4X Rocket Sentry", permit: "Sentry", traits: ["Auto","Anti-Tank","Prioritizes Big"],
      image: "images/Stratagems/Emplacements/Sentry/Rocket_Sentry_Stratagem_Icon.svg",
      code: "↓↑→→←", cooldown: 180, unlock: "Engineering Bay", unlockLevel: 15, unlockCost: 6500, unlockUnit: "Requisition Slips",
      damage: 1000, penetration: 5, fireRate: 30, capacity: 16, ergonomics: "—",
      tags: ["auto","anti-tank"], desc: "Fires guided rockets that prioritize the largest threats. Saves your anti-tank slot for emergencies." },
  ],

  /* ---------- ARMOR ----------
     unit: "Armor" | "Helmet" | "Cape"  (top-level category tabs)
     class: "Light" | "Medium" | "Heavy"  (sub tabs; capes are class-agnostic → "—")
     hover-detail: armorRating, speed, stamina, passive, unlock, unlockCost, unlockUnit.
     PLACEHOLDER stats for helmets/capes — fill from wiki. */
  armor: [
    /* --- Body Armor --- */
    
    // Light - Armor

    { id: "sc-37-legionnaire", name: "SC-37 Legionnaire", image: "images/Armor/Light - Armor/SC-37_Legionnaire_Armor_Render.png", unit: "Armor", class: "Light", armorRating: 50, speed: 550, stamina: 125, passive: "Servo-Assisted", unlock: "Superstore", unlockCost: 150, unlockUnit: "Super Credits", desc: "This armor is based on the antique uniforms of the ‘Super Earth Legion’, a less patriotic precursor to the Helldivers." },
    { id: "sc-34-infiltrator", name: "SC-34 Infiltrator", image: "images/Armor/Light - Armor/SC-34_Infiltrator_Armor_Render.png", unit: "Armor", class: "Light",  armorRating: 70,  speed: 530, stamina: 115, passive: "Scout", unlock: "Helldivers Mobilize!", unlockCost: 3, unlockUnit: "Medals", desc: "This suit's plutonium-238 nuclear battery enables environmental scanning long after the user has ceased operation." },
    { id: "sc-30-trailblazer-scout", name: "SC-30 Trailblazer Scout", image: "images/Armor/Light - Armor/SC-30_Trailblazer_Scout_Armor_Render.png", unit: "Armor", class: "Light", armorRating: 50, speed: 550, stamina: 125, passive: "Scout", unlock: "Helldivers Mobilize!", unlockCost: 50, unlockUnit: "Medals", desc: "The patented fabric absorbs visible, infrared, and ultraviolet radiation, to prevent detection by all known species." },
    { id: "ce-74-breaker", name: "CE-74 Breaker", image: "images/Armor/Light - Armor/CE-74_Breaker_Armor_Render.png", unit: "Armor", class: "Light", armorRating: 50, speed: 550, stamina: 125, passive: "Engineering Kit", unlock: "Superstore", unlockCost: 250, unlockUnit: "Super Credits", desc: "A domestic version of this armor is available for citizens who wish to perform efficient home renovation projects." },
    { id: "fs-38-eradicator", name: "FS-38 Eradicator", image: "images/Armor/Light - Armor/FS-38_Eradicator_Armor_Render.png", unit: "Armor", class: "Light", armorRating: 50, speed: 550, stamina: 125, passive: "Fortified", unlock: "Superstore", unlockCost: 250, unlockUnit: "Super Credits", desc: "First deployed in the mines of Cyberstan, where it offered protection against explosions in the hydrogen-rich caverns." },
    { id: "b-08-light-gunner", name: "B-08 Light Gunner", image: "images/Armor/Light - Armor/B-08_Light_Gunner_Armor_Render.png", unit: "Armor", class: "Light", armorRating: 100, speed: 550, stamina: 125, passive: "Extra Padding", unlock: "Superstore", unlockCost: 150, unlockUnit: "Super Credits", desc: "Compact and flexible, this kevlar armor adds minimal mass, making it a common choice for Helldiver fitness tests." },
    { id: "cm-21-trench-paramedic", name: "CM-21 Trench Paramedic", image: "images/Armor/Light - Armor/CM-21_Trench_Paramedic_Armor_Render.png", unit: "Armor", class: "Light", armorRating: 64, speed: 536, stamina: 118, passive: "Med-Kit", unlock: "Superstore", unlockCost: 250, unlockUnit: "Super Credits", desc: "The suit was once designed to hold a variety of battlefield medical equipment. Now it holds a generous supply of stims." },
    { id: "ce-67-titan", name: "CE-67 Titan", image: "images/Armor/Light - Armor/CE-67_Titan_Armor_Render.png", unit: "Armor", class: "Light", armorRating: 79, speed: 521, stamina: 111, passive: "Engineering Kit", unlock: "Superstore", unlockCost: 150, unlockUnit: "Super Credits", desc: "A quality product, this armor can destroy over 300,000 kilometers of fencing with no decline in operational efficiency." },
    { id: "ex-00-prototype", name: "EX-00 Prototype X", image: "images/Armor/Light - Armor/EX-00_Prototype_X_Armor_Render.png", unit: "Armor", class: "Light", armorRating: 50, speed: 550, stamina: 125, passive: "Electrical Conduit", unlock: "Cutting Edge", unlockCost: 64, unlockUnit: "Medals", desc: "The end result of several billion Super Credits and 12 years of research into creating “the Soldier of Tomorrow.”" },
    { id: "ce-07-demolition-specialist", name: "CE-07 Demolition Specialist", image: "images/Armor/Light - Armor/CE-07_Demolition_Specialist_Armor_Render.png", unit: "Armor", class: "Light", armorRating: 64, speed: 536, stamina: 118, passive: "Engineering Kit", unlock: "Democratic Detonation", unlockCost: 45, unlockUnit: "Medals", desc: "Originally worn by lunar terraformers, this suit can withstand rapid changes in pressure, heat, and personal velocity." },
    { id: "fs-37-ravager", name: "FS-37 Ravager", image: "images/Armor/Light - Armor/FS-37_Ravager_Armor_Render.png", unit: "Armor", class: "Light", armorRating: 50, speed: 550, stamina: 125, passive: "Engineering Kit", unlock: "Superstore", unlockCost: 250, unlockUnit: "Super Credits", desc: "Contains many small pockets, allowing the user to evenly distribute the weight of ammunition, samples, and cool rocks." },

    // Medium - Armor

    { id: "b-01-tactical", name: "B-01 Tactical", image: "images/Armor/Medium - Armor/B-01_Tactical_v1_Armor_Render.png", unit: "Armor", class: "Medium", armorRating: 100, speed: 500, stamina: 100, passive: "Extra Padding", unlock: "Starter Equipment", unlockCost: 0, unlockUnit: "", desc: "A dependable, balanced armor set issued to the vast majority of Helldivers. A trusted classic across the galaxy." },
    { id: "cb-9-exploding", name: "CE-27 Ground Breaker", image: "images/Armor/Medium - Armor/CE-27_Ground_Breaker_Armor_Render.png", unit: "Armor", class: "Medium", armorRating: 100, speed: 500, stamina: 100, passive: "Engineering Kit", unlock: "Helldivers Mobilize!", unlockCost: 60, unlockUnit: "Medals", desc: "Reinforced at the joints for divers who spend more time clearing fortifications than running from them." },
    { id: "dp-40-hero-of-the-federation", name: "DP-40 Hero of the Federation", image: "images/Armor/Medium - Armor/DP-40_Hero_of_the_Federation_Armor_Render.png", unit: "Armor", class: "Medium", armorRating: 100, speed: 500, stamina: 100, passive: "Democracy Protects", unlock: "Helldivers Mobilize!", unlockCost: 75, unlockUnit: "Medals", desc: "Worn by the heroes of the front lines, this set carries the full faith and protection of Managed Democracy itself." },
    { id: "fs-34-exterminator", name: "FS-34 Exterminator", image: "images/Armor/Medium - Armor/FS-34_Exterminator_Armor_Render.png", unit: "Armor", class: "Medium", armorRating: 129, speed: 471, stamina: 86, passive: "Fortified", unlock: "Steeled Veterans", unlockCost: 60, unlockUnit: "Medals", desc: "Heavily plated combat armor favored by veteran divers who prefer to stand their ground and trade fire." },
    { id: "ce-35-trench-engineer", name: "CE-35 Trench Engineer", image: "images/Armor/Medium - Armor/CE-35_Trench_Engineer_Armor_Render.png", unit: "Armor", class: "Medium", armorRating: 100, speed: 500, stamina: 100, passive: "Engineering Kit", unlock: "Democratic Detonation", unlockCost: 60, unlockUnit: "Medals", desc: "Built for sappers and demolitions crews, with reinforced webbing to keep grenades steady and recoil tame." },
    { id: "sa-12-servo-assisted", name: "SA-12 Servo-Assisted", image: "images/Armor/Medium - Armor/SA-12_Servo_Assisted_Armor_Render.png", unit: "Armor", class: "Medium", armorRating: 100, speed: 500, stamina: 100, passive: "Servo-Assisted", unlock: "Helldivers Mobilize!", unlockCost: 75, unlockUnit: "Medals", desc: "Powered exo-fibers extend throwing range and steady the arm, letting divers place stratagems with surgical reach." },
    { id: "sa-25-steel-trooper", name: "SA-25 Steel Trooper", image: "images/Armor/Medium - Armor/SA-25_Steel_Trooper_Armor_Render.png", unit: "Armor", class: "Medium", armorRating: 100, speed: 500, stamina: 100, passive: "Servo-Assisted", unlock: "Steeled Veterans", unlockCost: 60, unlockUnit: "Medals", desc: "A rugged servo-assisted set forged for the divers who hold the line when the dropships keep coming." },

    // Heavy - Armor

    { id: "fs-55-devastator", name: "FS-55 Devastator", image: "images/Armor/Heavy - Armor/FS-55_Devastator_Armor_Render.png", unit: "Armor", class: "Heavy", armorRating: 150, speed: 450, stamina: 75, passive: "Fortified", unlock: "Steeled Veterans", unlockCost: 60, unlockUnit: "Medals", desc: "A slab-plated walking bunker. Trades speed for the kind of protection that shrugs off explosions." },
    { id: "fs-05-marksman", name: "FS-05 Marksman", image: "images/Armor/Heavy - Armor/FS-05_Marksman_Body_Icon.png", unit: "Armor", class: "Heavy", armorRating: 150, speed: 450, stamina: 75, passive: "Fortified", unlock: "Superstore", unlockCost: 300, unlockUnit: "Super Credits", desc: "Heavy plating tuned for divers who plant their feet and let the enemy come to the crosshairs." },
    { id: "tr-62-knight", name: "TR-62 Knight", image: "images/Armor/Heavy - Armor/TR-62_Knight_Armor_Render.png", unit: "Armor", class: "Heavy", armorRating: 150, speed: 450, stamina: 75, passive: "Extra Padding", unlock: "Superstore", unlockCost: 300, unlockUnit: "Super Credits", desc: "Sponsored plating with the maximum legally mandated quantity of corporate logos. Surprisingly durable." },
    { id: "ce-101-guerilla-gorilla", name: "CE-101 Guerilla Gorilla", image: "images/Armor/Heavy - Armor/CE-101_Guerilla_Gorilla_Armor_Render.png", unit: "Armor", class: "Heavy", armorRating: 150, speed: 450, stamina: 75, passive: "Engineering Kit", unlock: "Democratic Detonation", unlockCost: 75, unlockUnit: "Medals", desc: "Sealed against fumes and shrapnel, built for divers who walk into the smoke and keep working." },
    { id: "b-27-fortified-commando", name: "B-27 Fortified Commando", image: "images/Armor/Heavy - Armor/B-27_Fortified_Commando_Armor_Render.png", unit: "Armor", class: "Heavy", armorRating: 150, speed: 450, stamina: 75, passive: "Fortified", unlock: "Helldivers Mobilize!", unlockCost: 75, unlockUnit: "Medals", desc: "Maximum coverage for divers who treat artillery barrages as light weather." },
    { id: "ds-42-federations-blade", name: "DS-42 Federation's Blade", image: "images/Armor/Heavy - Armor/DS-42_Federation's_Blade_Armor_Render.png", unit: "Armor", class: "Heavy", armorRating: 150, speed: 450, stamina: 75, passive: "Extra Padding", unlock: "Starter Equipment", unlockCost: 0, unlockUnit: "", desc: "Standard-issue heavy plate. Slow, sturdy, and reassuringly difficult to kill." },


    /* --- Helmets --- */
    { id: "h-b01", name: "B-01 Tactical Helmet", unit: "Helmet", class: "Medium", image: "images/Armor/Helmet/B-01_Tactical_v1_Helmet_Render.png", armorRating: "—", speed: "—", stamina: "—", passive: "Cosmetic", unlock: "Helldivers Mobilize", unlockCost: 0,  unlockUnit: "", desc: "Standard issue helmet. Helmets are cosmetic; matched-set passives apply via body armor." },
    { id: "h-fs23", name: "FS-23 Battle Master Helmet", unit: "Helmet", class: "Heavy", image: "images/Armor/Helmet/FS-23_Battle_Master_Helmet_Render.png", armorRating: "—", speed: "—", stamina: "—", passive: "Cosmetic", unlock: "Steeled Veterans", unlockCost: 60, unlockUnit: "Medals", desc: "Heavy combat helmet to match the Battle Master set." },
    { id: "h-sc30", name: "SC-30 Trailblazer Helmet", unit: "Helmet", class: "Light", image: "images/Armor/Helmet/SC-30_Trailblazer_Scout_Helmet_Render.png", armorRating: "—", speed: "—", stamina: "—", passive: "Cosmetic", unlock: "Cutting Edge", unlockCost: 20, unlockUnit: "Medals", desc: "Lightweight recon helmet for the divers who get there first." },
    { id: "h-dp40", name: "DP-40 Hero Helmet", unit: "Helmet", class: "Medium", image: "images/Armor/Helmet/DP-40_Hero_of_the_Federation_Helmet_Render.png", armorRating: "—", speed: "—", stamina: "—", passive: "Cosmetic", unlock: "Helldivers Mobilize!", unlockCost: 75, unlockUnit: "Medals", desc: "The proud crest of a Hero of the Federation, worn high above the front lines." },
    { id: "h-ce27", name: "CE-27 Ground Breaker Helmet", unit: "Helmet", class: "Medium", image: "images/Armor/Helmet/CE-27_Ground_Breaker_Helmet_Render.png", armorRating: "—", speed: "—", stamina: "—", passive: "Cosmetic", unlock: "Helldivers Mobilize!", unlockCost: 60, unlockUnit: "Medals", desc: "Reinforced engineer's helmet built to take a knock or two on the fortification line." },
    { id: "h-fs34", name: "FS-34 Exterminator Helmet", unit: "Helmet", class: "Heavy", image: "images/Armor/Helmet/FS-34_Exterminator_Helmet_Render.png", armorRating: "—", speed: "—", stamina: "—", passive: "Cosmetic", unlock: "Steeled Veterans", unlockCost: 60, unlockUnit: "Medals", desc: "A full-face heavy helmet for the divers who never planned on retreating." },
    { id: "h-sa7", name: "SA-7 Headfirst Helmet", unit: "Helmet", class: "Medium", image: "images/Armor/Helmet/SA-7_Headfirst_Helmet_Render.png", armorRating: "—", speed: "—", stamina: "—", passive: "Cosmetic", unlock: "Helldivers Mobilize!", unlockCost: 75, unlockUnit: "Medals", desc: "Sensor-laden helmet that pairs with the servo-assisted exo-fiber set." },
    { id: "h-ex00", name: "EX-00 Prototype X Helmet", unit: "Helmet", class: "Light", image: "images/Armor/Helmet/EX-00_Prototype_X_Helmet_Render.png", armorRating: "—", speed: "—", stamina: "—", passive: "Cosmetic", unlock: "Cutting Edge", unlockCost: 64, unlockUnit: "Medals", desc: "Experimental headgear from the 'Soldier of Tomorrow' program. Slightly ahead of its time." },

    /* --- Capes (class-agnostic) --- */
    { id: "foesmasher", name: "Foesmasher", unit: "Cape", class: "—", image: "images/Armor/Cape/Foesmasher_Cape_Render.png", armorRating: "—", speed: "—", stamina: "—", passive: "Cosmetic", unlock: "Helldivers Mobilize", unlockCost: 0, unlockUnit: "", desc: "The default Helldiver cape. Capes are cosmetic, but they billow heroically all the same." },
    { id: "will-of-the-people", name: "Will of the People", unit: "Cape", class: "—", image: "images/Armor/Cape/Will_of_the_People_Cape_Render.png", armorRating: "—", speed: "—", stamina: "—", passive: "Cosmetic", unlock: "Super Citizen Edition", unlockCost: 0, unlockUnit: "", desc: "Awarded to Super Citizens for their exemplary devotion to Managed Democracy." },
    { id: "independence-bringer", name: "Independence Bringer", unit: "Cape", class: "—", image: "images/Armor/Cape/Independence_Bringer_Cape_Render.png", armorRating: "—", speed: "—", stamina: "—", passive: "Cosmetic", unlock: "Freedom's Flame", unlockCost: 20, unlockUnit: "Medals", desc: "A flame-resistant cape for divers who like to walk away from explosions without looking back." },
    { id: "libertys-herald", name: "Liberty's Herald", unit: "Cape", class: "—", image: "images/Armor/Cape/Liberty's_Herald_Cape_Render.png", armorRating: "—", speed: "—", stamina: "—", passive: "Cosmetic", unlock: "Steeled Veterans", unlockCost: 60, unlockUnit: "Medals", desc: "Embroidered with the slogans of a grateful Super Earth populace." },
    { id: "tideturner", name: "Tideturner", unit: "Cape", class: "—", image: "images/Armor/Cape/Tideturner_Cape_Render.png", armorRating: "—", speed: "—", stamina: "—", passive: "Cosmetic", unlock: "Democratic Detonation", unlockCost: 45, unlockUnit: "Medals", desc: "Scorch-marked and proud of it. Standard wear among the demolitions crews." },
    { id: "stars-and-suffrage", name: "Stars and Suffrage", unit: "Cape", class: "—", image: "images/Armor/Cape/The_Cape_of_Stars_and_Suffrage_Cape_Render.png", armorRating: "—", speed: "—", stamina: "—", passive: "Cosmetic", unlock: "Dust Devils", unlockCost: 35, unlockUnit: "Medals", desc: "Dust-worn travel cloak favored by divers operating far from the nearest resupply." },
    { id: "unblemished-allegiance", name: "Unblemished Allegiance", unit: "Cape", class: "—", image: "images/Armor/Cape/Unblemished_Allegiance_Cape_Render.png", armorRating: "—", speed: "—", stamina: "—", passive: "Cosmetic", unlock: "Superstore", unlockCost: 150, unlockUnit: "Super Credits", desc: "Crisp ceremonial colors produced by Martian Armory for parade and patrol alike." },
  ],

  /* ---------- BOOSTERS ----------
     card-front: name + brief desc. hover-detail: longer explanation,
     unlock, unlockCost, unlockUnit. */
  boosters: [
    { id: "hellpod-space-optimization",  name: "Hellpod Space Optimization",      unlock: "Helldivers Mobilize Warbond", unlockCost: 15,  unlockUnit: "Medals",
      image: "images/Boosters/Hellpod_Space_Optimization_Booster_Icon.svg",
      desc: "Helldivers come out of the Hellpod fully stocked on Ammo, Grenades, and Stims.",
      detail: "When equipped, all Helldivers in a squad will come out of their Hellpod (either initial deployment or being reinforced) fully stocked with Ammo, Grenades, and Stims. Depending on their equipped armor, their max number of equipment will vary." },
    { id: "vitality-enhancement", name: "Vitality Enhancement",       unlock: "Helldivers Mobilize Warbond", unlockCost: 15,  unlockUnit: "Medals",
      image: "images/Boosters/Vitality_Enhancement_Booster_Icon.svg",
      desc: "Provides minor damage reduction from all sources for all Helldivers. ",
      detail: "The Vitality Enhancement booster is a support booster that is designed to increase survivability when taking damage. When equipped, all Helldivers in the squad will become more resistant to damage (reduces damage taken by 10%), allowing a Helldiver to have more effective health and reduce the occurrence of limb injuries." },
    { id: "uav-recon-booster", name: "UAV Recon Booster",      unlock: " Helldivers Mobilize Warbond", unlockCost: 40,  unlockUnit: "Medals",
      image: "images/Boosters/UAV_Recon_Booster_Booster_Icon.svg",
      desc: "Increases all Helldivers' effective radar range.",
      detail: "The UAV Recon Booster will increases radar distance by approximately 50%, giving every Helldiver a greater scanning range. This scanning range is shown on the mini-map, which allows Helldivers to locate patrolling enemies faster. These scans are not visible to fellow squadmates, so coordination is essential in alerting fellow Helldivers." },
    { id: "stamina-enhancement",  name: "Stamina Enhancement",         unlock: "Helldivers Mobilize Warbond",        unlockCost: 75, unlockUnit: "Medals",
      image: "images/Boosters/Stamina_Enhancement_Booster_Icon.svg",
      desc: "Increases all Helldivers' stamina capacity and recovery.",
      detail: "The Stamina Enhancement is a booster that affects all Helldivers by increasing their Max Stamina by 22.5% and Stamina Regen by 40% allowing for greater mobility when sprinting and maneuvering around obstacles. This allows Helldivers to move across long distances at a quicker pace, which aids in map discovery and objective completion. " },
    { id: "muscle-enhancement", name: "Muscle Enhancement", unlock: "Helldivers Mobilize Warbond", unlockCost: 70, unlockUnit: "Medals",
      image: "images/Boosters/Muscle_Enhancement_Booster_Icon.svg",
      desc: "Allows Helldivers to traverse difficult terrain with ease.",
      detail: "Muscle Enhancement is a Booster in Helldivers 2. When equipped, all Helldivers will move faster in more difficult terrain and environmental effects." },
    { id: "increased-reinforcement-budget",  name: "Increased Reinforcement Budget",    unlock: "Helldivers Mobilize Warbond", unlockCost: 150, unlockUnit: "Medals",
      image: "images/Boosters/Increased_Reinforcement_Budget_Booster_Icon.svg",
      desc: "Increases the number of available reinforcements.",
      detail: "Increases initial reinforcements by 1 per Helldiver (from 5 to 6 if solo)." },
    { id: "flexible-reinforcement-budget",  name: "Flexible Reinforcement Budget",    unlock: "Steeled Veterans Premium Warbond", unlockCost: 75, unlockUnit: "Medals",
      image: "images/Boosters/Flexible_Reinforcement_Budget_Booster_Icon.svg",
      desc: "Reduce time until new reinforcements are granted once they've been depleted.",
      detail: "Reduces new reinforcement after depletion by 25%. This reduces the 2:00 reinforcement cooldown time to 1:30." },
    { id: "localization-confusion",  name: "Localization Confusion",    unlock: "Cutting Edge Premium Warbond", unlockCost: 18, unlockUnit: "Medals",
      image: "images/Boosters/Localization_Confusion_Booster_Icon.svg",
      desc: "Increases the time between enemy encounters.",
      detail: "Localization Confusion is a Booster in Helldivers 2. When equipped, the time between the call for spawned enemy encounters/reinforcements (in the form of Bug Breaches, or Incoming Dropships) will be increased. This increased time gives Helldivers more breathing room, allowing them to react more to the incoming enemies." },
    { id: "expert-extraction-pilot",  name: "Expert Extraction Pilot",    unlock: "Democratic Detonation Premium Warbond", unlockCost: 55, unlockUnit: "Medals",
      image: "images/Boosters/Expert_Extraction_Pilot_Booster_Icon.svg",
      desc: "Lowers the time it takes for the extraction shuttle to reach the extraction beacon.",
      detail: "Lowers the time it takes for the Extraction Shuttle to reach the Extraction Zone by 30%.This reduces a 2:00 minute call-in time to 1:24. If Complex Stratagem Plotting Operation Modifier is active, Pelican-1 arrival time is reduced from 3:00 down to 2:06." },
    { id: "motivational-shocks",  name: "Motivational Shocks",    unlock: "Polar Patriots Premium Warbond", unlockCost: 15, unlockUnit: "Medals",
      image: "images/Boosters/Motivational_Shocks_Booster_Icon.svg",
      desc: "Allows all Helldivers to recover faster after being slowed by an attack, such as acid. Does not mitigate “area effects,” such as EMS strikes.",
      detail: "Motivational Shocks is a booster that allows for greater recovery when being hit by certain attacks that will slow down a Helldiver for a limited time. When equipped, these attacks will reduce the mobility debuff, allowing Helldivers to regain their mobility and continue moving around without restrain. The Booster is only effective against certain attacks, which can be inflicted by an enemy attack (such as an acid spit), or terrain-related obstacles." },
    { id: "experimental-infusion",  name: "Experimental Infusion",    unlock: "Viper Commandos Premium Warbond", unlockCost: 80, unlockUnit: "Medals",
      image: "images/Boosters/Experimental_Infusion_Booster_Icon.svg",
      desc: "In addition to restoring health, stims temporarily increase movement speed and damage reduction.",
      detail: "In addition to restoring health, Stims temporarily increase movement speed by 10% and provides an additional 10% resistance against damage. Causes trembling in form of a 25% increase in aiming reticle sway. Also has different, heightened visual effects, including a green “stim haze” and increasing the vibrancy/ saturation of some colors." },
    { id: "firebomb-hellpods",  name: "Firebomb Hellpods",    unlock: "Freedom's Flame Premium Warbond", unlockCost: 60, unlockUnit: "Medals",
      image: "images/Boosters/Firebomb_Hellpods_Booster_Icon.svg",
      desc: "Lines all Hellpods with volatile incendiaries that detonate upon impact, igniting any units in vicinity of the drop site.",
      detail: "Firebomb Hellpods is a Booster designed to damage any entity that is near a Hellpod drop site. Upon contact with the surface, a small explosion will occur, dealing both explosive and incendiary damage. Since it affects every Hellpod deployed by the squad, caution must be taken in order to prevent friendly fire or accidents, espcially during initial deployments, when the entire squad is equipping themselves." },
    { id: "dead-sprint",  name: "Dead Sprint",    unlock: "Truth Enforcers Premium Warbond", unlockCost: 35, unlockUnit: "Medals",
      image: "images/Boosters/Dead_Sprint_Booster_Icon.svg",
      desc: "Allows Helldivers to keep sprinting even when they are out of stamina, draining their health instead.",
      detail: "Dead Sprint allows Helldivers to cross longer stretches of land without using Stims or interrupting their sprint to regain their stamina. When used outside of combat, Dead Sprint saves time and potential Stims by allowing Helldivers to continue sprinting, allowing their health to drain and only using a Stim by the end of their hike from point A to B. It also condenses the amount of time spent sprinting in a situation where one was going to use a Stim regardless. In active conflict, it effectively allows Helldivers to kite enemies without stopping so long as their health allows for it, in a way trading potential enemy attacks for the minor chip damage inflicted by the booster. " },
    { id: "armed-resupply-pods",  name: "Armed Resupply Pods",    unlock: "Urban Legends Premium Warbond", unlockCost: 55, unlockUnit: "Medals",
      image: "images/Boosters/Armed_Resupply_Pods_Booster_Icon.svg",
      desc: "Mounts a modified AR-23 Liberator to all resupply pods, allowing them to double as automatic turrets.",
      detail: "When equipped, all Resupply Pods come mounted with an automated custom AR-23P Liberator Penetrator lasting until ran out of bullets or the pod itself getting demolished. Similar to sentry stratagems, the gun targets and shoots at any non-Helldiver hostiles within 30 metres. " },
    { id: "sample-extricator",  name: "Sample Extricator",    unlock: "Borderline Justice Premium Warbond", unlockCost: 65, unlockUnit: "Medals",
      image: "images/Boosters/Sample_Extricator_Booster_Icon.svg",
      desc: "Large enemies now have a chance of dropping Samples on death. Capped at 10 drops per mission.",
      detail: "When equipped, all Large Enemies will have a chance of dropping common samples upon death. The amount varies, but the amount dropped per mission is capped at 10." },
    { id: "sample-scanner",  name: "Sample Scanner",    unlock: "Masters of Ceremony Premium Warbond", unlockCost: 65, unlockUnit: "Medals",
      image: "images/Boosters/Sample_Scanner_Booster_Icon.svg",
      desc: "The Sample scanner gives you a 15% chance to receive twice the Samples on sample pick up.",
      detail: "The Sample scanner gives you a 15% chance to receive twice the Samples on sample pick up. It affects all sample rarities." },
    { id: "stun-pods",  name: "Stun Pods",    unlock: "Force of Law Premium Warbond", unlockCost: 55, unlockUnit: "Medals",
      image: "images/Boosters/Stun_Pods_Booster_Icon.svg",
      desc: "Exposes Hellpod wiring upon surface contact, stunning any units in the vicinity of the drop site.",
      detail: "When equipped, all Hellpods (manned or unmanned), will stun nearby enemies upon impact with the surface." },
    { id: "concealed-insertion",  name: "Concealed Insertion",    unlock: "Redacted Regiment Premium Warbond", unlockCost: 40, unlockUnit: "Medals",
      image: "images/Boosters/Concealed_Insertion_Booster_Icon.svg",
      desc: "Equips Hellpods to deploy smokescreens on impact, obscuring Helldiver deployment.",
      detail: "Concealed Insertion is a booster that causes all Hellpods (manned or unmanned) to deploy a short burst of smoke on impact, obscuring the area around the drop site and concealing Helldivers and equipment." },                    


  ],

  /* ---------- ENEMIES ----------
     faction: "Terminids" | "Automatons" | "Illuminate"  (top-level tabs)
     strain: sub-faction tab. For each faction the first tab is the base
       faction name, then its strains:
         Terminids  → Terminids, Predator Strain, Spore Burst Strain, Rupture Strain
         Automatons → Automatons, Jet Brigade, Incineration Corps, Cyborg Legion
         Illuminate → Illuminate, Appropriators, Mindless Masses
     card-front: name, level (threat), faction, desc.
     hover-detail: minDifficulty, sizeClass, health, damage, damageType.
     parts[] retained for the Compare engine. HEALTH / DAMAGE numbers are
     PLACEHOLDER unless noted — replace from the wiki. */
  enemies: [
    /* ===== TERMINIDS (base) ===== */
    { id: "scavenger", name: "Scavenger", faction: "Terminids", strain: "Terminids", threat: "Low",
      image: "images/Enemy/Terminids/1024px-Scavenger_Enemy_Icon.png",
      minDifficulty: 1, sizeClass: "Small", health: 35, damage: 30, damageType: "Melee",
      parts: [{ name: "Body", armor: 1, weak: false }, { name: "Head", armor: 1, weak: true }],
      desc: "Fast, fragile, and travels in packs. Calls in breaches if it escapes." },
    { id: "hiveguard", name: "Hive Guard", faction: "Terminids", strain: "Terminids", threat: "Medium",
      image: "images/Enemy/Terminids/Hive_Guard_Enemy_Icon.png",
      minDifficulty: 2, sizeClass: "Medium", health: 350, damage: 40, damageType: "Melee",
      parts: [{ name: "Front Plate", armor: 3, weak: false }, { name: "Rear", armor: 2, weak: true }, { name: "Head", armor: 2, weak: true }],
      desc: "Armored front; hunker-walks toward you. Flank it or hit the head." },
    { id: "charger", name: "Charger", faction: "Terminids", strain: "Terminids", threat: "High",
      image: "images/Enemy/Terminids/Charger_Enemy_Icon.png",
      minDifficulty: 3, sizeClass: "Large", health: 2000, damage: 150, damageType: "Melee / Charge",
      parts: [{ name: "Leg Armor", armor: 4, weak: false }, { name: "Rear Sac", armor: 2, weak: true }, { name: "Head", armor: 5, weak: false }],
      desc: "Charges in a straight line. Strip a leg or hit the soft rear." },
    { id: "bileTitan", name: "Bile Titan", faction: "Terminids", strain: "Terminids", threat: "Extreme",
      image: "images/Enemy/Terminids/Bile_Titan_Enemy_Icon.png",
      minDifficulty: 4, sizeClass: "Titan", health: 8000, damage: 300, damageType: "Acid / Melee",
      parts: [{ name: "Head", armor: 4, weak: true }, { name: "Belly Sacs", armor: 3, weak: true }, { name: "Legs", armor: 5, weak: false }],
      desc: "Towering acid-spewer. Needs sustained anti-tank fire to the head." },

    /* ===== TERMINIDS — Predator Strain ===== */
    { id: "predator-hunter", name: "Predator Hunter", faction: "Terminids", strain: "Predator Strain", threat: "Medium",
      image: "images/Enemy/Terminids - Predator Strain/Predator_Hunter_Enemy_Icon.png",
      minDifficulty: 1, sizeClass: "Small", health: 175, damage_melee: "30-35", damage_acid: 50,
      parts: [{ name: "Body", armor: 1, weak: false }, { name: "Head", armor: 1, weak: true }],
      desc: "An enhanced variant of the Hunter. Faster and tougher, it lunges in packs and pins divers in place." },
    { id: "predator-stalker", name: "Predator Stalker", faction: "Terminids", strain: "Predator Strain", threat: "High",
      image: "images/Enemy/Terminids - Predator Strain/Predator_Stalker_Enemy_Icon.png",
      minDifficulty: 4, sizeClass: "Large", health: 650, damage_melee: 50, damageType: "Melee",
      parts: [{ name: "Body", armor: 2, weak: false }, { name: "Head", armor: 2, weak: true }],
      desc: "A variant of the Stalker, also called the Prowler. More common than Stalkers, but unable to camouflage." },

    /* ===== TERMINIDS — Spore Burst Strain ===== */
    { id: "spore-burst-scavenger", name: "Spore Burst Scavenger", faction: "Terminids", strain: "Spore Burst Strain", threat: "Low",
      image: "images/Enemy/Terminids - Spore Burst Strain/1024px-Spore_Burst_Scavenger_Enemy_Icon.png",
      minDifficulty: 1, sizeClass: "Small", health: 60, damage_melee: 40, damage_explosion: 25,
      parts: [{ name: "Body", armor: 1, weak: false }, { name: "Head", armor: 1, weak: true }],
      desc: "A Scavenger variant that bursts into a damaging spore cloud on death. Kill it at range." },
    { id: "spore-burst-hunter", name: "Spore Burst Hunter", faction: "Terminids", strain: "Spore Burst Strain", threat: "Medium",
      image: "images/Enemy/Terminids - Spore Burst Strain/Spore_Burst_Hunter_Enemy_Icon.png",
      minDifficulty: 1, sizeClass: "Small", health: 160, damage_melee: "30-35", damage_explosion: 35,
      parts: [{ name: "Body", armor: 1, weak: false }, { name: "Head", armor: 1, weak: true }],
      desc: "A Hunter variant that detonates a spore burst when killed. Lunges fast, so keep your distance." },
    { id: "spore-burst-warrior", name: "Spore Burst Warrior", faction: "Terminids", strain: "Spore Burst Strain", threat: "Medium",
      image: "images/Enemy/Terminids - Spore Burst Strain/Spore_Burst_Warrior_Enemy_Icon.png",
      minDifficulty: 1, sizeClass: "Medium", health: 325, damage_melee: "50-55", damageType: "Melee",
      parts: [{ name: "Body", armor: 2, weak: false }, { name: "Head", armor: 2, weak: true }],
      desc: "A Warrior variant that releases a spore cloud on death. Durable and hits hard up close." },
    { id: "spore-burst-bile-titan", name: "Spore Burst Bile Titan", faction: "Terminids", strain: "Spore Burst Strain", threat: "Extreme",
      image: "images/Enemy/Terminids - Spore Burst Strain/1024px-Spore_Burst_Bile_Titan_Enemy_Icon.png",
      minDifficulty: 3, sizeClass: "Titan", health: 7000, damage_melee: 3000, damage_acid: 35,
      parts: [{ name: "Head", armor: 4, weak: true }, { name: "Belly Sacs", armor: 3, weak: true }, { name: "Legs", armor: 5, weak: false }],
      desc: "A Bile Titan variant that knocks divers down with acidic bile and crushes them underfoot." },

    /* ===== TERMINIDS — Rupture Strain ===== */
    { id: "rupture-warrior", name: "Rupture Warrior", faction: "Terminids", strain: "Rupture Strain", threat: "Medium",
      image: "images/Enemy/Terminids - Rupture Strain/Rupture_Warrior_Enemy_Icon.png",
      minDifficulty: 4, sizeClass: "Medium", health: 300, damage: 50, damageType: "Melee",
      parts: [{ name: "Exposed Body", armor: 2, weak: true }, { name: "Head", armor: 2, weak: true }],
      desc: "Has shed its UV-insulating chitin and prefers to burrow, surfacing beneath the squad. Punishes static defenses." },
    { id: "rupture-spewer", name: "Rupture Spewer", faction: "Terminids", strain: "Rupture Strain", threat: "High",
      image: "images/Enemy/Terminids - Rupture Strain/Rupture_Spewer_Enemy_Icon.png",
      minDifficulty: 5, sizeClass: "Medium", health: 750, damage: 120, damageType: "Melee / Charge",
      parts: [{ name: "Leg Armor", armor: 3, weak: false }, { name: "Rear", armor: 3, weak: true }],
      desc: "The Rupture Spewer is a medium-sized Terminid Icon.svg Terminid that is able to burrow underground and emerge to expel bile. " },  
    { id: "rupture-charger", name: "Rupture Charger", faction: "Terminids", strain: "Rupture Strain", threat: "High",
      image: "images/Enemy/Terminids - Rupture Strain/Rupture_Charger_Enemy_Icon.png",
      minDifficulty: 5, sizeClass: "Large", health: 2200, damage: 160, damageType: "Melee / Charge",
      parts: [{ name: "Leg Armor", armor: 4, weak: false }, { name: "Rear", armor: 2, weak: true }],
      desc: "A reinforced, ambushing Charger that surfaces unexpectedly. Stay mobile and avoid bottlenecks." },

    /* ===== AUTOMATONS (base) ===== */
    { id: "trooper", name: "Trooper", faction: "Automatons", strain: "Automatons", threat: "Low",
      image: "images/Enemy/Automatons/811px-Trooper_Enemy_Icon.png",
      minDifficulty: 1, sizeClass: "Small", health: 50, damage: 35, damageType: "Ballistic",
      parts: [{ name: "Body", armor: 2, weak: false }, { name: "Head", armor: 2, weak: true }],
      desc: "Standard bot infantry. Headshots drop them instantly." },
    { id: "devastator", name: "Devastator", faction: "Automatons", strain: "Automatons", threat: "Medium",
      image: "images/Enemy/Automatons/1024px-Devastator_Enemy_Icon.png",
      minDifficulty: 2, sizeClass: "Medium", health: 350, damage: 60, damageType: "Ballistic / Rocket",
      parts: [{ name: "Torso Plate", armor: 3, weak: false }, { name: "Head", armor: 3, weak: true }, { name: "Belly", armor: 2, weak: true }],
      desc: "Heavy bot with shield/rocket variants. Aim for the exposed head." },
    { id: "hulk", name: "Hulk", faction: "Automatons", strain: "Automatons", threat: "High",
      image: "images/Enemy/Automatons/1024px-Hulk_Obliterator_Enemy_Icon.png",
      minDifficulty: 3, sizeClass: "Large", health: 2400, damage: 200, damageType: "Ballistic / Flame / Melee",
      parts: [{ name: "Front Armor", armor: 5, weak: false }, { name: "Eye Slit", armor: 3, weak: true }, { name: "Heat Vents (rear)", armor: 3, weak: true }],
      desc: "Walking bruiser. Hit the glowing eye or vent it from behind." },
    { id: "factoryStrider", name: "Factory Strider", faction: "Automatons", strain: "Automatons", threat: "Extreme",
      image: "images/Enemy/Automatons/1117px-Factory_Strider_Enemy_Icon.png",
      minDifficulty: 4, sizeClass: "Titan", health: 9000, damage: 250, damageType: "Ballistic / Cannon",
      parts: [{ name: "Hull", armor: 6, weak: false }, { name: "Belly Hatch", armor: 4, weak: true }, { name: "Chin Guns", armor: 4, weak: false }],
      desc: "Mobile factory that births bots. Crack the belly with anti-tank." },

    /* ===== AUTOMATONS — Jet Brigade ===== */
    { id: "jet-trooper", name: "Jet Brigade Trooper", faction: "Automatons", strain: "Jet Brigade", threat: "Medium",
      image: "images/Enemy/Automatons - Jet Brigade/904px-Jet_Brigade_Trooper_Enemy_Icon.png",
      minDifficulty: 4, sizeClass: "Small", health: 60, damage: 40, damageType: "Ballistic",
      parts: [{ name: "Body", armor: 2, weak: false }, { name: "Jetpack", armor: 2, weak: true }],
      desc: "Jump-pack infantry that closes distance fast and flanks from above. Shoot the volatile jetpack." },
    { id: "jet-brigadier", name: "Jet Brigadier", faction: "Automatons", strain: "Jet Brigade", threat: "High",
      image: "images/Enemy/Automatons - Jet Brigade/1024px-Jet_Brigade_Devastator_Enemy_Icon.png",
      minDifficulty: 5, sizeClass: "Medium", health: 400, damage: 70, damageType: "Ballistic / Melee",
      parts: [{ name: "Torso", armor: 3, weak: false }, { name: "Head", armor: 3, weak: true }, { name: "Jetpack", armor: 2, weak: true }],
      desc: "A heavier jump-trooper that leaps into melee range. Prioritize before it lands on you." },

    /* ===== AUTOMATONS — Incineration Corps ===== */
    { id: "incin-trooper", name: "Incineration Trooper", faction: "Automatons", strain: "Incineration Corps", threat: "Medium",
      image: "images/Enemy/Automatons - Incineration Corps/826px-Pyro_Trooper_Enemy_Icon.png",
      minDifficulty: 4, sizeClass: "Small", health: 70, damage: 55, damageType: "Flame",
      parts: [{ name: "Body", armor: 2, weak: false }, { name: "Fuel Tank", armor: 2, weak: true }],
      desc: "Flame-equipped bot that denies ground with fire. Pop the fuel tank for a chain reaction." },
    { id: "incin-hulk", name: "Incineration Hulk", faction: "Automatons", strain: "Incineration Corps", threat: "High",
      image: "images/Enemy/Automatons - Incineration Corps/1099px-Hulk_Firebomber_Enemy_Icon.png",
      minDifficulty: 5, sizeClass: "Large", health: 2400, damage: 220, damageType: "Flame / Melee",
      parts: [{ name: "Front Armor", armor: 5, weak: false }, { name: "Eye Slit", armor: 3, weak: true }, { name: "Heat Vents (rear)", armor: 3, weak: true }],
      desc: "A Hulk variant with a flamethrower arm. Keep your distance and vent it from behind." },

    /* ===== AUTOMATONS — Cyborg Legion ===== */
    { id: "cyborg-marauder", name: "Cyborg Marauder", faction: "Automatons", strain: "Cyborg Legion", threat: "Low",
      image: "images/Enemy/Automatons - Cyborg Legion/1024px-Radical_Enemy_Icon.png",
      minDifficulty: 4, sizeClass: "Small", health: 55, damage: 35, damageType: "Ballistic",
      parts: [{ name: "Body", armor: 2, weak: false }, { name: "Head", armor: 2, weak: true }],
      desc: "Throwback cyborg infantry from the First Galactic War. Lightly armored, attacks in numbers." },
    { id: "cyborg-berserker", name: "Cyborg Berserker", faction: "Automatons", strain: "Cyborg Legion", threat: "Medium",
      image: "images/Enemy/Automatons - Cyborg Legion/970px-Agitator_Enemy_Icon.png",
      minDifficulty: 4, sizeClass: "Medium", health: 300, damage: 65, damageType: "Melee / Saw",
      parts: [{ name: "Torso", armor: 3, weak: false }, { name: "Head", armor: 2, weak: true }],
      desc: "Chainsaw-armed melee rusher that soaks fire as it closes. Aim for the head." },

    /* ===== ILLUMINATE (base) ===== */
    { id: "voteless", name: "Voteless", faction: "Illuminate", strain: "Illuminate", threat: "Low",
      image: "images/Enemy/Illuminates/549px-Voteless_Enemy_Icon.png",
      minDifficulty: 1, sizeClass: "Small", health: 40, damage: 25, damageType: "Melee",
      parts: [{ name: "Body", armor: 1, weak: false }, { name: "Head", armor: 1, weak: true }],
      desc: "Swarming husks. Individually harmless, lethal in numbers." },
    { id: "overseer", name: "Overseer", faction: "Illuminate", strain: "Illuminate", threat: "Medium",
      image: "images/Enemy/Illuminates/1024px-Overseer_Enemy_Icon.png",
      minDifficulty: 2, sizeClass: "Medium", health: 450, damage: 70, damageType: "Ballistic / Melee",
      parts: [{ name: "Armor", armor: 3, weak: false }, { name: "Head", armor: 3, weak: true }],
      desc: "Floating commander that summons Voteless. Prioritize it." },
    { id: "harvester", name: "Harvester", faction: "Illuminate", strain: "Illuminate", threat: "High",
      image: "images/Enemy/Illuminates/1024px-Harvester_Enemy_Icon.png",
      minDifficulty: 3, sizeClass: "Large", health: 3000, damage: 250, damageType: "Beam / Melee",
      parts: [{ name: "Leg Joints", armor: 4, weak: true }, { name: "Body Shield", armor: 5, weak: false }, { name: "Core", armor: 4, weak: true }],
      desc: "Striding tripod with a beam. Break a leg joint to topple it." },

    /* ===== ILLUMINATE — Appropriators ===== */
    { id: "appropriator-overseer", name: "Fleshmob Overseer", faction: "Illuminate", strain: "Appropriators", threat: "High",
      image: "images/Enemy/Illuminates - Appropriators/1280px-Gatekeeper_Enemy_Icon.png",
      minDifficulty: 5, sizeClass: "Large", health: 1200, damage: 120, damageType: "Psionic / Melee",
      parts: [{ name: "Mass", armor: 3, weak: false }, { name: "Core", armor: 3, weak: true }],
      desc: "A hulking Appropriator construct of fused flesh. Soaks fire and lashes out in close quarters — focus the exposed core." },

    /* ===== ILLUMINATE — Mindless Masses ===== */
    { id: "mindless-voteless", name: "Mindless Voteless", faction: "Illuminate", strain: "Mindless Masses", threat: "Low",
      image: "images/Enemy/Illuminates - Mindless Masses/Mindless_Masses_Icon.svg",
      minDifficulty: 4, sizeClass: "Small", health: 40, damage: 25, damageType: "Melee",
      parts: [{ name: "Body", armor: 1, weak: false }, { name: "Head", armor: 1, weak: true }],
      desc: "Overwhelming swarms of reanimated husks. Harmless alone, lethal in a crowd — favor wide crowd-control." },
  ],

  /* ---------- MISSIONS ----------
     category: "Main Objective" | "Terminid" | "Automaton" | "Illuminate" (tabs)
     card-front: name, faction, desc.
     hover-detail: maxDifficulty, minDifficulty, timeLimit, detail (longer desc).
     PLACEHOLDER difficulty ranges / time limits — fill from wiki. */
  missions: [
    // Main Objectives
    { id: "start-fuel-pumps", name: "Start Fuel Pumps", category: "Main Objective", faction: "All", duration: "Long",
      image: "images/Missions/Main Objectives/Enable_E-710_Extraction_Mission_Icon.svg",
      minDifficulty: "Trivial", maxDifficulty: "Easy", timeLimit: "40 min",
      desc: "This fueling station is offline. It must be reactivated to initiate fuel distribution.",
      detail: "The Pump Fuel To ICBM is a Main Objective in Helldivers 2 that can appear on both Terminid and Automaton controlled planets." },
    { id: "retrive-essential-personnel", name: "Retrieve Essential Personnel", category: "Main Objective", faction: "All", duration: "Short",
      image: "images/Missions/Main Objectives/Retrieve_Essential_Personnel_Mission_Icon.svg",
      minDifficulty: "Trivial", maxDifficulty: "Helldive", timeLimit: "15 min",
      desc: "The Automaton offensive has taken this area, leaving one of our top secret research stations surrounded by the enemy. Use your clearance to unlock the emergency bunker doors, and defend the facility staff as they transfer to the evacuation shuttle.",
      detail: "The Terminid advance has swarmed across this region, leaving one of our top secret research stations surrounded by the enemy. Use your clearance to unlock the emergency bunker doors, and defend the facility staff as they transfer to the evacuation shuttle." },
    { id: "spread-democracy", name: "Spread Democracy", category: "Main Objective", faction: "All", duration: "Long",
      image: "images/Missions/Main Objectives/Spread_Democracy_Mission_Icon.svg",
      minDifficulty: "Trivial", maxDifficulty: "Super Helldive", timeLimit: "40 mins",
      desc: "We must show the galaxy that even in the face of oppression, Freedom remains defiant. Infiltrate behind Automaton lines and raise our Flag as an unassailable beacon of Liberty.",
      detail: "The Spread Democracy is a Mission Objective in Helldivers 2 that can appear on both Terminid and Automaton controlled planets on all difficulties. The mission may also appear as an Optional Objective on Gloom covered planets." },
    { id: "upload-escape-pod-data", name: "Upload Escape Pod Data", category: "Main Objective", faction: "All", duration: "Long",
      image: "images/Missions/Main Objectives/Upload_Escape_Pod_Data_Mission_Icon.svg",
      minDifficulty: "Trivial", maxDifficulty: "Easy", timeLimit: "40 min",
      desc: "A crashed escape pod in the region contains valuable data.",
      detail: "Upload Escape Pod Data is a generic Main Objective on Trivial Difficulty Icon.svg Trivial and Easy Difficulty Icon.svg Easy, and an Optional Objective on higher difficulties. It consists of a crashed escape pod. To complete the objective, Helldivers must upload its data while in close proximity to it." },
    { id: "terminate-illegal-broadcast", name: "Terminate Illegal Broadcast", category: "Main Objective", faction: "All", duration: "Long",
      image: "images/Missions/Main Objectives/Terminate_Illegal_Broadcast_Mission_Icon.svg",
      minDifficulty: "Trivial", maxDifficulty: "Easy", timeLimit: "40 min",
      desc: "An illegal propaganda broadcast has been traced to this location.",
      detail: "Terminate Illegal Broadcast is a generic Main Objective on Trivial Difficulty Icon.svg Trivial and Easy Difficulty Icon.svg Easy, and an Optional Objective on higher difficulties (except in Metropolis biomes, where it begins appearing on Easy). It is a structure that broadcasts enemy propaganda. To complete the objective, Helldivers must stop the tower from broadcasting by either deactivating or destroying it." },
    { id: "retrive-valuable-data", name: "Retrieve Valuable Data", category: "Main Objective", faction: "All", duration: "Long",
      image: "images/Missions/Main Objectives/Retrieve_Valuable_Data_Mission_Icon.svg",
      minDifficulty: "Medium", maxDifficulty: "Super Helldive", timeLimit: "40 min",
      desc: "The Automatons have captured a SEAF research station, slaughtering the brave scientific staff. Get to the station, download the reseach database, and upload it to the Super Earth mainframe using the nearby Satellite Uplink Station.",
      detail: "The Retrieve Valuable Data is a Main Objective Mission in Helldivers 2. It tasks Helldivers to obtain an SSD Drive (either one or multiple), carry it to the main mission site, and upload it." },
    { id: "emergency-evacuation", name: "Emergency Evacuation", category: "Main Objective", faction: "All", duration: "Long",
      image: "images/Missions/Main Objectives/Emergency_Evacuation_Mission_Icon.svg",
      minDifficulty: "Medium", maxDifficulty: "Super Helldive", timeLimit: "40 min",
      desc: "A group of Class-A citizens are stranded at an emergency evacuation port. We cannot leave these patriots to be massacred by the Automatons. Get to the port and secure the evacuation of as many civilians as can fit aboard the designated transport shuttle.",
      detail: "A group of Class-A citizens are stranded at a priority evacuation port. We cannot leave these patriots to be slaughtered by the Terminids. Get to the port and secure the evacuation of as many civilians as can fit aboard the designated transport shuttle." },
    { id: "launch-icb,", name: "Launch ICBM", category: "Main Objective", faction: "All", duration: "Long",
      image: "images/Missions/Main Objectives/Launch_ICBM_Mission_Icon.svg",
      minDifficulty: "Medium", maxDifficulty: "Super Helldive", timeLimit: "40 min",
      desc: "Massive Automaton factories in this region are fueling their advance. They must be destroyed. This dormant ICBM silo is beyond their range of detection; launch a devastating strike before they can mount a defense.",
      detail: "The Launch ICBM is a mission which tasks Helldivers to activate/retrieve various items/structures to launch an ICBM. At Medium Difficulty Icon.svg Medium it gains the 'Retrieve Launch Codes' sub-objective, and at Hard Difficulty Icon.svg Hard it gains the 'reactivate power' sub-objective. All sub-objectives must be done in order to start the Main Objective. It also exist as an Optional Objective in special missions on planets located in The Gloom, though only the Launch ICBM step is available regardless of difficulty." },
    { id: "conduct-geological-survey", name: "Conduct Geological Survey", category: "Main Objective", faction: "All", duration: "Long",
      image: "images/Missions/Main Objectives/Conduct_Geological_Survey_Mission_Icon.svg",
      minDifficulty: "Medium", maxDifficulty: "Super Helldive", timeLimit: "40 min",
      desc: "In this region, orbital bombardment has exposed seams of what appear to be rare and valuable mineral ores. We cannot let the Automatons exploit them before the planet is liberated. Get down there and collect soil sample data, to confirm if the material is worth extracting.",
      detail: "Conduct Geological Survey is a Main Objective in Helldivers 2. Helldivers are tasked to locate and verify the presence of ores on the planet. One or more sub-objectives must be completed before proceeding to the main mission area, where a probe must be activated and defended. The mission may also appear as an Optional Objective on Gloom covered planets. " },
    { id: "evacuate-high-value-assets", name: "Evacuate High-Value Assets", category: "Main Objective", faction: "All", duration: "Medium",
      image: "images/Missions/Main Objectives/Evacuate_High-Value_Assets_Mission_Icon.svg",
      minDifficulty: "Hard", maxDifficulty: "Super Helldive", timeLimit: "20 min",
      desc: "The enemy is closing in on a cache of high-value assets that have been sequestered since the first Galactic War. We cannot allow them to be captured. The enemy will be alerted to your position as soon as the evacuation process is initiated. Defend the site until all assets have been safely transported off-planet.",
      detail: "The Evacuate High-Value Assets is a Mission Objective that was released during the Reclamation Event and is exclusive to Defend Planet events only with an exception for Illuminate controlled Regions. The Illuminate version is re-titled 'Defend Evacuation Site'. " },          

    // Terminid-specific 
    { id: "nests", name: "Eradicate Terminid Swarm", category: "Terminid", faction: "Terminids", duration: "Short",
      image: "images/Missions/Terminids/Eradicate_Terminid_Swarm_Mission_Icon.svg",
      minDifficulty: "Trivial", maxDifficulty: "Super Helldive", timeLimit: "15 min",
      desc: "A massive Terminid swarm has been detected in this sector. Hold the area and exterminate the bugs until the kill quota is met.",
      detail: "Eradicate Terminid Swarm is a Terminid-front mission in Helldivers 2. Helldivers are deployed into a compact arena and must reach a target kill count while waves of Terminids pour in from all sides. Eagle and orbital stratagems with wide coverage shine here." },
    { id: "spread-detector", name: "Nuke Nursery", category: "Terminid", faction: "Terminids", duration: "Medium",
      image: "images/Missions/Terminids/Nuke_Nursery_Mission_Icon.svg",
      minDifficulty: "Medium", maxDifficulty: "Super Helldive", timeLimit: "40 min",
      desc: "A vast Terminid breeding ground has been located. Arm the portable hellbomb at the heart of the nursery and reduce it to ash.",
      detail: "Nuke Nursery tasks Helldivers with locating a Terminid breeding site, carrying or activating a Hellbomb at its core, and detonating it. Expect heavy resistance as the colony defends its young." },
    { id: "destroy-bug-holes", name: "Purge Hatcheries", category: "Terminid", faction: "Terminids", duration: "Medium",
      image: "images/Missions/Terminids/Purge_Hatcheries_Mission_Icon.svg",
      minDifficulty: "Easy", maxDifficulty: "Super Helldive", timeLimit: "40 min",
      desc: "Sweep the region and collapse every bug hole and hatchery you find before reinforcements overrun the position.",
      detail: "Purge Hatcheries is a Terminid sweep objective. Helldivers must locate and destroy a set number of bug holes and hatchery structures using grenades, the Grenade Pistol, Hellbombs, or stratagems, while contending with constant breaches." },

    // Automaton-specific 
    { id: "destroy-fabricators", name: "Eradicate Automaton Forces", category: "Automaton", faction: "Automatons", duration: "Short",
      image: "images/Missions/Automaton/Eradicate_Automaton_Forces_Mission_Icon.svg",
      minDifficulty: "Trivial", maxDifficulty: "Super Helldive", timeLimit: "15 min",
      desc: "A concentration of Automaton forces holds this position. Hold the line and destroy bots until the quota is reached.",
      detail: "Eradicate Automaton Forces drops Helldivers into a tight defensive arena where they must reach a kill quota against waves of advancing bots, dropships, and reinforcements. Mortar and machine-gun sentries hold the perimeter well." },
    { id: "sabotage-airbase", name: "Sabotage Air Base", category: "Automaton", faction: "Automatons", duration: "Long",
      image: "images/Missions/Automaton/Eradicate_Automaton_Forces_Mission_Icon.svg",
      minDifficulty: "Medium", maxDifficulty: "Super Helldive", timeLimit: "40 min",
      desc: "Infiltrate an Automaton air base and disable its dropship launch capacity to cut off reinforcements across the front.",
      detail: "Sabotage Air Base tasks Helldivers with reaching an Automaton airfield, arming demolition charges or a Hellbomb against the launch infrastructure, and destroying it. Crippling the base reduces enemy reinforcement rates in the region." },
    { id: "destroy-command-bunkers", name: "Destroy Command Bunkers", category: "Automaton", faction: "Automatons", duration: "Medium",
      image: "images/Missions/Automaton/Destroy_Command_Bunkers_Mission_Icon.svg",
      minDifficulty: "Hard", maxDifficulty: "Super Helldive", timeLimit: "40 min",
      desc: "Heavily fortified Automaton command bunkers coordinate the assault on this planet. Breach them and bring them down.",
      detail: "Destroy Command Bunkers requires Helldivers to assault reinforced bot structures, often defended by detector towers, gun emplacements, and Hulks. Hellbombs or heavy stratagems are needed to crack the bunkers open." },

    // Illuminate-specific 
    { id: "repel-invasion-fleet", name: "Repel Invasion Fleet", category: "Illuminate", faction: "Illuminate", duration: "Medium",
      image: "images/Missions/Illuminate/Repel_Invasion_Fleet_Mission_Icon.svg",
      minDifficulty: "Medium", maxDifficulty: "Super Helldive", timeLimit: "20 min",
      desc: "SSA Radar has identified a fleet of Illuminate invasion ships descending upon this sector from close orbit. They intend to sieze control of the area in an aerial blitz. You are the last line of defense. Destroy all enemy ships as quickly as possible.",
      detail: "Repel Invasion Fleet is a city Mission exclusive to defense campaigns, which tasks Helldivers to quickly destroy all Warp Ships landing within the area. If too many ships land and are not destroyed, Super Earth's control of the area will diminish until mission failure results." },
    { id: "destroy-illuminate-warp-ships", name: "Destroy Illuminate Warp Ships", category: "Illuminate", faction: "Illuminate", duration: "Short",
      image: "images/Missions/Illuminate/Destroy_Illuminate_Warp_Ships_Mission_Icon.svg",
      minDifficulty: "Trivial", maxDifficulty: "Super Helldive", timeLimit: "12 min",
      desc: "Illuminate Warp ships are docked in this area. These ships are critical to the Illuminate invasion, used for all terrestrial military functions including personnel abduction and combatant deployment. While the ships are grounded, they are vulnerable. Find them and destroy them.",
      detail: "Blitz: Destroy Illuminate Warp Ships is an Illuminate Mission in Helldivers 2. To complete it Helldivers must destroy a specific amount of grounded Illuminate Warp Ships which changes with difficulty." },
    { id: "free-colony", name: "Free Colony", category: "Illuminate", faction: "Illuminate", duration: "Long",
      image: "images/Missions/Illuminate/Spread_Democracy_Mission_Icon.svg",
      minDifficulty: "Trivial", maxDifficulty: "Super Helldive", timeLimit: "40 min",
      desc: "The Illuminate have laid false claim to this city, besmirching our streets with more of their despotic monoliths. Deploy to the city, raze the enemy's totalitarian monuments, and raise the Flag of Super Earth to restore hope to our citizens.",
      detail: "Free Colony , or Free the City in the Metropolis biome, is a mission in Helldivers 2. Helldivers are tasked with destroying an Illuminate Monolith, and asserting Super Earth's presence in the area by raising its flag. Contents" },
  ],

  difficulties: [
    { level: 1, name: "Trivial" }, { level: 2, name: "Easy" }, { level: 3, name: "Medium" },
    { level: 4, name: "Challenging" }, { level: 5, name: "Hard" }, { level: 6, name: "Extreme" },
    { level: 7, name: "Suicide Mission" }, { level: 8, name: "Impossible" },
    { level: 9, name: "Helldive" }, { level: 10, name: "Super Helldive" },
  ],

  /* ---------- "MOST USED" placeholder leaderboards (home page) ---------- */
  popular: {
    weapons: ["JAR-5 Dominator", "SG-8P Punisher Plasma", "AR-23 Liberator"],
    stratagems: ["AC-8 Autocannon", "Orbital Laser", "GR-8 Recoilless Rifle"],
    armor: ["B-01 Tactical", "FS-23 Battle Master"],
  },
};
