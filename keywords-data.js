// Derived keywords data for direct lookup
// This will be populated from KEYWORDS_RAW
let KEYWORDS_DATA = {};

const KEYWORDS_RAW = {
    // 701. Keyword Actions
    "activate": {
        "short": "Put an ability onto the stack and pay its costs.",
        "long": "701.2a To activate an activated ability is to put it onto the stack and pay its costs, so that it will eventually resolve and have its effect."
    },
    "attach": {
        "short": "Move an Aura, Equipment, or Fortification onto an object or player.",
        "long": "701.3a To attach an Aura, Equipment, or Fortification to an object or player means to take it from where it currently is and put it onto that object or player."
    },
    "behold": {
        "short": "Reveal a card from hand or choose a permanent with a specified quality.",
        "long": "701.4a “Behold a [quality]” means “Reveal a [quality] card from your hand or choose a [quality] permanent you control on the battlefield.”"
    },
    "cast": {
        "short": "Put a spell on the stack and pay its costs.",
        "long": "701.5a To cast a spell is to take it from the zone it's in (usually the hand), put it on the stack, and pay its costs."
    },
    "counter": {
        "short": "Cancel a spell or ability so it doesn't resolve.",
        "long": "701.6a To counter a spell or ability means to cancel it, removing it from the stack. It doesn't resolve and none of its effects occur."
    },
    "create": {
        "short": "Put a token onto the battlefield.",
        "long": "701.7a To create one or more tokens with certain characteristics, put the specified number of tokens onto the battlefield."
    },
    "destroy": {
        "short": "Move a permanent from the battlefield to its owner's graveyard.",
        "long": "701.8a To destroy a permanent, move it from the battlefield to its owner's graveyard."
    },
    "discard": {
        "short": "Move a card from your hand to your graveyard.",
        "long": "701.9a To discard a card, move it from its owner's hand to that player's graveyard."
    },
    "double": {
        "short": "Increase a value (life, power, counters) to twice its current amount.",
        "long": "701.10e To double the number of counters, give that player or permanent as many of those counters as they already have."
    },
    "triple": {
        "short": "Increase a value to three times its current amount.",
        "long": "701.11b To triple a creature's power, it gets +X/+0, where X is twice its power as the ability resolves."
    },
    "exchange": {
        "short": "Swap control, life totals, or objects.",
        "long": "701.12a A spell or ability may instruct players to exchange something (for example, life totals or control of two permanents)."
    },
    "exile": {
        "short": "Move an object to the exile zone.",
        "long": "701.13a To exile an object, move it to the exile zone from wherever it is."
    },
    "fight": {
        "short": "Two creatures each deal damage equal to their power to the other.",
        "long": "701.14a Each of those creatures deals damage equal to its power to the other creature. This isn't combat damage."
    },
    "goad": {
        "short": "Creature attacks if able and attacks a player other than you if able.",
        "long": "701.15b A goaded creature attacks each combat if able and attacks a player other than the controller of the goad effect if able."
    },
    "investigate": {
        "short": "Create a Clue token (artifact with \"{2}, Sacrifice: Draw a card\").",
        "long": "701.16a “Investigate” means “Create a Clue token.”"
    },
    "mill": {
        "short": "Put cards from the top of library into graveyard.",
        "long": "701.17a For a player to mill a number of cards, they put that many cards from the top of their library into their graveyard."
    },
    "play": {
        "short": "Put a land onto the battlefield or cast a card as a spell.",
        "long": "701.18b To play a card means to play it as a land or cast it as a spell, whichever is appropriate."
    },
    "regenerate": {
        "short": "The next time this would be destroyed, it isn't. Instead, tap it and remove it from combat.",
        "long": "701.19a “Regenerate [permanent]” means “The next time [permanent] would be destroyed this turn, instead tap it and remove it from combat.”"
    },
    "reveal": {
        "short": "Show a card to all players.",
        "long": "701.20a To reveal a card, show that card to all players for a brief time."
    },
    "sacrifice": {
        "short": "Move a permanent you control to its owner's graveyard.",
        "long": "701.21a To sacrifice a permanent, move it from the battlefield directly to its owner's graveyard."
    },
    "scry": {
        "short": "Look at top N cards of library, put any on bottom and the rest on top.",
        "long": "701.22a To “scry N” means to look at the top N cards of your library, then put any number on the bottom and the rest on top."
    },
    "search": {
        "short": "Look at all cards in a zone to find a specific card.",
        "long": "701.23a To search for a card in a zone, look at all cards in that zone to find a card that matches the description."
    },
    "shuffle": {
        "short": "Randomize the cards within a library or pile.",
        "long": "701.24a To shuffle a library or a face-down pile of cards, randomize the cards within it."
    },
    "surveil": {
        "short": "Look at top N cards, put any into graveyard and the rest on top.",
        "long": "701.25a To “surveil N” means to look at the top N cards of your library, then put any into your graveyard and the rest on top."
    },
    "tap": {
        "short": "Turn a permanent sideways to show it has been used.",
        "long": "701.26a To tap a permanent, turn it sideways. It can't be tapped again unless it's untapped."
    },
    "untap": {
        "short": "Rotate a permanent back to its upright position.",
        "long": "701.26b To untap a permanent, rotate it back upright."
    },
    "transform": {
        "short": "Turn a double-faced permanent over to its other face.",
        "long": "701.27a To transform a permanent, turn it over so that its other face is up."
    },
    "convert": {
        "short": "Turn a double-faced permanent over (Transformers mechanic).",
        "long": "701.28a To convert a permanent, turn it so that its other face is up. This follows transformation rules."
    },
    "fateseal": {
        "short": "Look at top N cards of opponent's library, put any on bottom.",
        "long": "701.29a To “fateseal N” means to look at the top N cards of an opponent's library, then put any on the bottom and rest on top."
    },
    "clash": {
        "short": "You and opponent reveal top cards; highest mana value wins.",
        "long": "701.30b “Clash with an opponent” means “Choose an opponent. You and that opponent each reveal the top card of your library. Highest MV wins.”"
    },
    "planeswalk": {
        "short": "Move to a different plane in Planechase game.",
        "long": "701.31b To planeswalk is to move the top card of your planar deck to the bottom and turn the next one face up."
    },
    "set in motion": {
        "short": "Activate a scheme card in Archenemy game.",
        "long": "701.32b To set a scheme in motion, move it off the top of your scheme deck and turn it face up."
    },
    "abandon": {
        "short": "Deactivate an ongoing scheme.",
        "long": "701.33b To abandon a scheme, turn it face down and put it on the bottom of its owner's scheme deck."
    },
    "proliferate": {
        "short": "Give another counter to any number of players and/or permanents already with counters.",
        "long": "701.34a To proliferate means to choose any number of permanents and/or players with a counter, and give each another counter of each kind they have."
    },
    "detain": {
        "short": "Permanent can't attack, block, or use activated abilities until your next turn.",
        "long": "701.35a Until your next turn, that permanent can't attack or block and its activated abilities can't be activated."
    },
    "populate": {
        "short": "Create a token that's a copy of a creature token you control.",
        "long": "701.36a To populate means to choose a creature token you control and create a token that's a copy of it."
    },
    "monstrosity": {
        "short": "If not monstrous, put N +1/+1 counters on it and it becomes monstrous.",
        "long": "701.37a “Monstrosity N” means “If this permanent isn't monstrous, put N +1/+1 counters on it and it becomes monstrous.”"
    },
    "vote": {
        "short": "Players choose between outcomes.",
        "long": "701.38a Each player, in turn order, chooses one of the available choices."
    },
    "bolster": {
        "short": "Put N +1/+1 counters on your creature with the least toughness.",
        "long": "701.39a Choose a creature you control with the least toughness and put N +1/+1 counters on it."
    },
    "manifest": {
        "short": "Put top card of library face down as a 2/2 creature. Turn up for mana cost if creature card.",
        "long": "701.40a To manifest a card, turn it face down. It becomes a 2/2 face-down creature card with no text."
    },
    "support": {
        "short": "Put a +1/+1 counter on each of up to N other target creatures.",
        "long": "701.41a “Support N” on a permanent means “Put a +1/+1 counter on each of up to N other target creatures.”"
    },
    "meld": {
        "short": "Exile two cards and return them as a combined large permanent.",
        "long": "701.42a Meld is putting two cards on the battlefield with their back faces up and combined into a single object."
    },
    "exert": {
        "short": "Choose to have a permanent not untap during next untap step for a benefit.",
        "long": "701.43a To exert a permanent, you choose to have it not untap during your next untap step."
    },
    "explore": {
        "short": "Reveal top card: Put in hand if land. Else put +1/+1 counter on this and keep/grave it.",
        "long": "701.44a Reveal the top card. If land, put in hand. Else, put a +1/+1 counter on the creature and you may grave the card."
    },
    "assemble": {
        "short": "Put a Contraption onto the battlefield from your Contraption deck.",
        "long": "701.45a Assemble is a keyword action that puts Contraptions onto the battlefield. (Un-set mechanic)."
    },
    "adapt": {
        "short": "If no +1/+1 counters, put N +1/+1 counters on it.",
        "long": "701.46a “Adapt N” means “If this permanent has no +1/+1 counters on it, put N +1/+1 counters on it.”"
    },
    "amass": {
        "short": "Put N +1/+1 counters on an Army you control or create a 0/0 Army first.",
        "long": "701.47a If you don't control an Army, create a 0/0 token. Then put N +1/+1 counters on an Army you control."
    },
    "learn": {
        "short": "Discard to draw, or get a Lesson card from outside the game.",
        "long": "701.48a “Learn” means “You may discard a card. If you do, draw. Otherwise, reveal a Lesson card from your sideboard.”"
    },
    "venture into the dungeon": {
        "short": "Move to the next room of a dungeon or start a new one.",
        "long": "701.49a Enter a dungeon or move your venture marker to an adjacent room in your current dungeon."
    },
    "connive": {
        "short": "Draw, then discard. Nonland discard gives a +1/+1 counter.",
        "long": "701.50a Draw a card, then discard. If a nonland card is discarded, put a +1/+1 counter on the permanent."
    },
    "open an attraction": {
        "short": "Put top card of Attraction deck into play.",
        "long": "701.51b Move the top card of your Attraction deck onto the battlefield."
    },
    "roll to visit your attractions": {
        "short": "Roll a d6 to see which Attractions activate.",
        "long": "701.52a Roll a six-sided die. Attractions with the matching number lit up are “visited.”"
    },
    "incubate": {
        "short": "Create an Incubator token with N +1/+1 counters (transforms for {2}).",
        "long": "701.53a Create an Incubator token with N +1/+1 counters. It transforms into a 0/0 Phyrexian creature."
    },
    "the ring tempts you": {
        "short": "Choose a Ring-bearer and gain the next level of the Ring's power.",
        "long": "701.54a Choose a creature to be your Ring-bearer and gain abilities from the Ring emblem."
    },
    "face a villainous choice": {
        "short": "Choose one of two bad outcomes offered by an opponent.",
        "long": "701.55a Choose between option A or option B as provided by a spell or ability."
    },
    "time travel": {
        "short": "Add or remove time counters from permanents or suspended cards.",
        "long": "701.56a Choose any number of permanents or suspended cards with time counters and add or remove one."
    },
    "discover": {
        "short": "Exile cards until nonland with MV ≤ N. Cast for free or put in hand.",
        "long": "701.57a “Discover N” means exile cards until nonland MV ≤ N. You may cast it for free or put it in hand."
    },
    "cloak": {
        "short": "Put face down as 2/2 with ward {2}. Turn up for cost if creature card.",
        "long": "701.58a Turn it face down. It's a 2/2 creature with ward {2}. Turn face up for mana cost if it's a creature card."
    },
    "collect evidence": {
        "short": "Exile cards from graveyard with total MV ≥ N.",
        "long": "701.59a Exile any number of cards from your graveyard with total mana value N or greater."
    },
    "suspect": {
        "short": "A suspected creature has menace and can't block.",
        "long": "701.60c A suspected permanent has menace and “This creature can't block.”"
    },
    "forage": {
        "short": "Exile 3 cards from graveyard or sacrifice a Food.",
        "long": "701.61a “Forage” means exile three cards from your graveyard or sacrifice a Food."
    },
    "manifest dread": {
        "short": "Look at top 2: Manifest one, graveyard the other.",
        "long": "701.62a Look at the top two cards. Manifest one and put the other into your graveyard."
    },
    "endure": {
        "short": "Put N +1/+1 counters on this or create an N/N token.",
        "long": "701.63a Create an N/N Spirit token unless you put N +1/+1 counters on this permanent."
    },
    "harness": {
        "short": "Mark this permanent as \"harnessed\" to enable other abilities.",
        "long": "701.64a “Harness” means this permanent becomes harnessed if it isn't already."
    },
    "airbend": {
        "short": "Exile objects; owner can cast them for {2}.",
        "long": "701.65a Exile those objects. Owner may cast them by paying {2} instead of mana cost."
    },
    "earthbend": {
        "short": "Land becomes Creature with N counters and Haste.",
        "long": "701.66a Land becomes a 0/0 creature with haste and N +1/+1 counters."
    },
    "waterbend": {
        "short": "Tap artifacts/creatures to pay generic mana in a cost.",
        "long": "701.67a You may tap an untapped artifact or creature you control for each generic mana in the cost."
    },
    "blight": {
        "short": "Put N -1/-1 counters on a creature you control.",
        "long": "701.68a To “blight N” means to put N -1/-1 counters on a creature you control."
    },

    // 702. Keyword Abilities
    "deathtouch": {
        "short": "Any amount of damage this deals to a creature is enough to destroy it.",
        "long": "702.2a Deathtouch is a static ability. Any combat damage dealt to a creature is considered lethal."
    },
    "defender": {
        "short": "This creature can't attack.",
        "long": "702.3a Defender is a static ability. A creature with defender can't attack."
    },
    "double strike": {
        "short": "Deals both first-strike and regular combat damage.",
        "long": "702.4a Double strike deals damage in two different combat damage steps."
    },
    "enchant": {
        "short": "Restricts what an Aura spell can target or what it can be attached to.",
        "long": "702.5a Written “Enchant [object],” it defines legal targets and attachments for an Aura."
    },
    "equip": {
        "short": "Attach this to a creature you control. Activate only as a sorcery.",
        "long": "702.6a “[Cost]: Attach this to target creature you control. Activate only as a sorcery.”"
    },
    "first strike": {
        "short": "Deals combat damage before creatures without first strike.",
        "long": "702.7a First strike deals damage only in the first combat damage step."
    },
    "flash": {
        "short": "You may play this card any time you could cast an instant.",
        "long": "702.8a Flash means “You may play this card any time you could cast an instant.”"
    },
    "flying": {
        "short": "Can't be blocked except by creatures with flying or reach.",
        "long": "702.9a Flying is an evasion ability. It can only be blocked by fliers or reachers."
    },
    "haste": {
        "short": "Can attack and {T} as soon as it comes under your control.",
        "long": "702.10a Haste enables attacking and tapping abilities immediately."
    },
    "hexproof": {
        "short": "Can't be the target of spells or abilities your opponents control.",
        "long": "702.11a “Hexproof” means your opponents cannot target this permanent or player."
    },
    "indestructible": {
        "short": "Can't be destroyed by damage or effects that say \"destroy.\"",
        "long": "702.12b A permanent with indestructible can't be destroyed, including by lethal damage."
    },
    "intimidate": {
        "short": "Can't be blocked except by artifact creatures and/or creatures that share a color.",
        "long": "702.13a Intimidate is an evasion ability based on color Sharing or artifacts."
    },
    "landwalk": {
        "short": "Unblockable if defending player controls a land of the specified type.",
        "long": "702.14a Includes Plainswalk, Islandwalk, Swampwalk, Mountainwalk, Forestwalk, etc."
    },
    "lifelink": {
        "short": "Damage dealt by this also causes you to gain that much life.",
        "long": "702.15b Damage dealt by this source causes its controller to gain that much life."
    },
    "protection": {
        "short": "Can't be damaged, enchanted, equipped, blocked, or targeted by [quality].",
        "long": "702.16a Often summarized as DEBT: Damage, Enchant, Block, Target."
    },
    "reach": {
        "short": "Can block creatures with flying.",
        "long": "702.17a Reach enables a creature to block fiers even if it doesn't have flying itself."
    },
    "shroud": {
        "short": "Can't be the target of spells or abilities.",
        "long": "702.18a Shroud prevents any player from targeting the permanent or player."
    },
    "trample": {
        "short": "Can deal excess combat damage to the player or planeswalker it's attacking.",
        "long": "702.19a Excess damage is assigned to the player/planeswalker after lethal damage to blockers."
    },
    "vigilance": {
        "short": "Attacking doesn't cause this creature to tap.",
        "long": "702.20a Vigilance allows a creature to attack without tapping."
    },
    "ward": {
        "short": "Counter spells targeting this unless a cost is paid.",
        "long": "702.21a “Ward [cost]” counters an opponent's spell or ability unless they pay [cost]."
    },
    "banding": {
        "short": "Creatures can attack/block in a group and share damage assignment.",
        "long": "702.22a A complex combat ability for grouping creatures. Controller chooses damage assignment."
    },
    "rampage": {
        "short": "Gets +N/+N for each creature blocking it beyond the first.",
        "long": "702.23a “Rampage N” triggers when blocked by multiple creatures."
    },
    "cumulative upkeep": {
        "short": "Pay an increasing cost each turn or sacrifice the permanent.",
        "long": "702.24a Put an age counter each upkeep, then pay the cost for each age counter."
    },
    "flanking": {
        "short": "When blocked by a creature without flanking, that creature gets -1/-1.",
        "long": "702.25a Flanking triggers during the declare blockers step."
    },
    "phasing": {
        "short": "This permanent goes in and out of existence each turn.",
        "long": "702.26a Phased-out permanents are treated as if they don't exist."
    },
    "buyback": {
        "short": "Pay an extra cost to return the spell to your hand as it resolves.",
        "long": "702.27a Buyback lets you reuse a spell if you pay the additional cost."
    },
    "shadow": {
        "short": "Can block or be blocked only by creatures with shadow.",
        "long": "702.28a An evasion ability that limits blockers and blocking."
    },
    "cycling": {
        "short": "Discard this card and pay its cost to draw a card.",
        "long": "702.29a Activated ability from hand. Includes variants like typecycling."
    },
    "echo": {
        "short": "Pay its cost during your next upkeep or sacrifice it.",
        "long": "702.30a Triggered ability for permanents entering since your last upkeep."
    },
    "horsemanship": {
        "short": "Can't be blocked except by creatures with horsemanship.",
        "long": "702.31a An evasion ability similar to flying but specific to P3K."
    },
    "fading": {
        "short": "Enters with counters; sacrifice when you can't remove one.",
        "long": "702.32a Limited duration on the battlefield using fade counters."
    },
    "kicker": {
        "short": "Pay an optional extra cost for a bonus effect.",
        "long": "702.33a Kicker costs are paid as you cast the spell."
    },
    "flashback": {
        "short": "You may cast this card from your graveyard, then exile it.",
        "long": "702.34a Alternative cost to cast an instant or sorcery from graveyard."
    },
    "madness": {
        "short": "Cast this card as you discard it for its madness cost.",
        "long": "702.35a Triggered ability when a card is discarded."
    },
    "fear": {
        "short": "Can't be blocked except by artifact creatures and/or black creatures.",
        "long": "702.36a An evasion ability superseded by intimidate and menace."
    },
    "morph": {
        "short": "Cast face down as a 2/2 for {3}. Turn up for morph cost.",
        "long": "702.37a Face-down creatures have no name or types. Includes megamorph."
    },
    "amplify": {
        "short": "Enters with counters for each card of same type revealed from hand.",
        "long": "702.38a “Amplify N” puts +1/+1 counters as it enters."
    },
    "provoke": {
        "short": "When this attacks, you may force a creature to block it.",
        "long": "702.39a Triggered ability that forces a block and untaps the target."
    },
    "storm": {
        "short": "Copy this for each spell cast before it this turn.",
        "long": "702.40a Copies are put on the stack for each previous spell."
    },
    "affinity": {
        "short": "Costs {1} less for each [type] you control.",
        "long": "702.41a Static cost reduction ability (e.g., Affinity for artifacts)."
    },
    "entwine": {
        "short": "Pay an extra cost to choose all modes of a spell.",
        "long": "702.42a Choose all modes instead of just one."
    },
    "modular": {
        "short": "Enters with N counters; moves them to an artifact creature when it dies.",
        "long": "702.43a Static and triggered ability for artifact creatures."
    },
    "sunburst": {
        "short": "Enters with counters for each color of mana spent on it.",
        "long": "702.44a Uses +1/+1 counters for creatures, charge counters otherwise."
    },
    "bushido": {
        "short": "Gets +N/+N when it blocks or becomes blocked.",
        "long": "702.45a “Bushido N” triggers during combat."
    },
    "soulshift": {
        "short": "When it dies, return a Spirit card with MV N or less to hand.",
        "long": "702.46a Triggered ability to recover Spirit cards."
    },
    "splice": {
        "short": "Add this card's effect to another spell by paying its cost.",
        "long": "702.47a Reveal as you cast matching spell to add text and cost."
    },
    "offering": {
        "short": "Sacrifice a [type] to cast at instant speed with cost reduction.",
        "long": "702.48a Reduced cost and flash as additional choice."
    },
    "ninjutsu": {
        "short": "Exchange an unblocked creature for this card from hand.",
        "long": "702.49a activated ability to put a ninja into play attacking."
    },
    "epic": {
        "short": "You can't cast spells, but get a copy of this each turn.",
        "long": "702.50a High-risk, high-reward sorcery/instant ability."
    },
    "convoke": {
        "short": "Your creatures can help pay for this spell's cost.",
        "long": "702.51a Tap creatures to pay for {1} or one mana of their color."
    },
    "dredge": {
        "short": "Return this to hand from graveyard by milling N cards instead of drawing.",
        "long": "702.52a Replacement effect for card drawing while in graveyard."
    },
    "transmute": {
        "short": "Discard this to search library for card with same mana value.",
        "long": "702.53a Activated ability from hand. Search library and shuffle."
    },
    "bloodthirst": {
        "short": "Enters with N counters if an opponent was damaged this turn.",
        "long": "702.54a Static ability checking for previous damage."
    },
    "haunt": {
        "short": "When this dies or resolves, it \"haunts\" a creature for later triggers.",
        "long": "702.55a Exile haunting a creature; triggers when that creature dies."
    },
    "replicate": {
        "short": "Pay a cost any number of times to copy the spell.",
        "long": "702.56a Additional cost to create multiple copies."
    },
    "forecast": {
        "short": "Reveal from hand during upkeep to activate a special effect.",
        "long": "702.57a Activated ability limited to upkeep and hand."
    },
    "graft": {
        "short": "Enters with counters; can move them to creatures as they enter.",
        "long": "702.58a Static and triggered ability for +1/+1 counters."
    },
    "recover": {
        "short": "When a creature dies, pay cost to return this from graveyard.",
        "long": "702.59a Triggered ability from graveyard; exile if not paid."
    },
    "ripple": {
        "short": "Reveal top N cards: cast any with same name for free.",
        "long": "702.60a Triggered ability when checking top of library."
    },
    "split second": {
        "short": "Players can't cast spells or activate non-mana abilities while this is on stack.",
        "long": "702.61a Stops the stack until the spell resolves."
    },
    "suspend": {
        "short": "Exile with counters; cast when last counter is removed.",
        "long": "702.62a Pay a different cost to cast the spell later."
    },
    "vanishing": {
        "short": "Limited time on battlefield; sacrifice when counters run out.",
        "long": "702.63a Uses time counters each upkeep."
    },
    "absorb": {
        "short": "Prevent N damage each time this would be dealt damage.",
        "long": "702.64a “Absorb N” reduces incoming damage."
    },
    "aura swap": {
        "short": "Exchange this Aura with an Aura in your hand.",
        "long": "702.65a Activated ability for efficient Aura swapping."
    },
    "delve": {
        "short": "Exile cards from your graveyard to help pay for this.",
        "long": "702.66a Each card exiled pays for {1}."
    },
    "fortify": {
        "short": "Attach this to a land you control. Activate only as a sorcery.",
        "long": "702.67a Like equip, but for lands and Fortifications."
    },
    "frenzy": {
        "short": "Gets +N/+0 if it attacks and isn't blocked.",
        "long": "702.68a Triggered ability when no blockers are declared."
    },
    "gravestorm": {
        "short": "Copy this for each permanent put into a graveyard this turn.",
        "long": "702.69a Storm variant based on deaths/destruction."
    },
    "poisonous": {
        "short": "Deals poison counters when it deals combat damage to a player.",
        "long": "702.70a “Poisonous N” grants N poison counters."
    },
    "transfigure": {
        "short": "Sacrifice this to search library for creature with same mana value.",
        "long": "702.71a Like transmute, but from the battlefield."
    },
    "champion": {
        "short": "Exile another permanent to keep this one; return it when this leaves.",
        "long": "702.72a Linked triggered abilities to protect components."
    },
    "changeling": {
        "short": "This card is every creature type at all times.",
        "long": "702.73a CDA that functions in all zones."
    },
    "evoke": {
        "short": "Cast for a lower cost, but it's sacrificed when it enters.",
        "long": "702.74a Alternative cost to get an \"enters\" trigger cheaply."
    },
    "hideaway": {
        "short": "Look at top N: exile one face down to cast later.",
        "long": "702.75a Enters tapped. Usually associated with a casting trigger."
    },
    "prowl": {
        "short": "Alternative cost if a creature of shared type dealt combat damage.",
        "long": "702.76a Rogue-themed alternative casting cost."
    },
    "reinforce": {
        "short": "Discard this to put N +1/+1 counters on a creature.",
        "long": "702.77a Activated ability from hand."
    },
    "conspire": {
        "short": "Tap two creatures of shared color to copy the spell.",
        "long": "702.78a Additional cost to duplicate an effect."
    },
    "persist": {
        "short": "When it dies, if no -1/-1 counters, return with a -1/-1 counter.",
        "long": "702.79a Triggered ability to survive one death."
    },
    "wither": {
        "short": "Deals damage to creatures in the form of -1/-1 counters.",
        "long": "702.80a Modifies how damage is dealt to creatures."
    },
    "retrace": {
        "short": "Cast this from graveyard by discarding a land card.",
        "long": "702.81a Reusable spell from graveyard."
    },
    "devour": {
        "short": "Sacrifice creatures as it enters to get +1/+1 counters.",
        "long": "702.82a “Devour N” multiplies counters by sacrifices."
    },
    "exalted": {
        "short": "Creature attacking alone gets +1/+1 until end of turn.",
        "long": "702.83a Triggered ability when attacking with exactly one creature."
    },
    "unearth": {
        "short": "Return this from graveyard with haste; exile at end of turn.",
        "long": "702.84a Once-more effect for creature cards."
    },
    "cascade": {
        "short": "Exile cards from top of library until cheaper nonland; cast it for free.",
        "long": "702.85a Powerful chain-casting ability."
    },
    "annihilator": {
        "short": "Whenever it attacks, defending player sacrifices N permanents.",
        "long": "702.86a “Annihilator N” triggers upon attack declaration."
    },
    "level up": {
        "short": "Pay a cost to put level counters on this for new abilities.",
        "long": "702.87a Activated ability for leveler cards."
    },
    "rebound": {
        "short": "If cast from hand, exile it and cast again during next upkeep.",
        "long": "702.88a Get a second use of an instant or sorcery."
    },
    "umbra armor": {
        "short": "If enchanted permanent destroyed, destroy this Aura instead.",
        "long": "702.89a Formerly Totem Armor. Protects enchanted creature."
    },
    "infect": {
        "short": "Deals damage as -1/-1 counters to creatures and poison to players.",
        "long": "702.90a Combines wither and poisonous mechanics."
    },
    "battle cry": {
        "short": "When it attacks, other attacking creatures get +1/+0.",
        "long": "702.91a Boosts the rest of your attacking force."
    },
    "living weapon": {
        "short": "Enters with a 0/0 Germ token and attaches to it.",
        "long": "702.92a Equipment that brings its own creature."
    },
    "undying": {
        "short": "When it dies, if no +1/+1 counters, return with a +1/+1 counter.",
        "long": "702.93a Triggered ability like persist but with +1/+1 counters."
    },
    "miracle": {
        "short": "Cast for less if it's the first card you draw this turn.",
        "long": "702.94a Triggered when you draw the card."
    },
    "soulbond": {
        "short": "Pair this creature with another to share abilities while paired.",
        "long": "702.95a Pair when either enters if you control both and they're unpaired."
    },
    "overload": {
        "short": "Change \"target\" to \"each\" in spell text by paying more.",
        "long": "702.96a Alternative cost to make a spell global."
    },
    "scavenge": {
        "short": "Exile from graveyard to put +1/+1 counters on a creature.",
        "long": "702.97a Put counters equal to its power; activate as sorcery."
    },
    "unleash": {
        "short": "Can enter with a +1/+1 counter; can't block if it has one.",
        "long": "702.98a permanent choice for more power or defense."
    },
    "cipher": {
        "short": "Exile on a creature; when it deals damage, cast a copy of this.",
        "long": "702.99a Encoding a spell onto a creature for repeated use."
    },
    "evolve": {
        "short": "Gets a +1/+1 counter when a larger creature enters your control.",
        "long": "702.100a Checks enters creature's P or T against its own."
    },
    "extort": {
        "short": "Pay {W/B} when you cast a spell to drain 1 life from each opponent.",
        "long": "702.101a Triggered life drain ability."
    },
    "fuse": {
        "short": "Cast both halves of this split card from your hand.",
        "long": "702.102a Special static ability for split cards."
    },
    "bestow": {
        "short": "Cast as an Aura attached to a creature or as a creature.",
        "long": "702.103a Enchantment creature mechanic."
    },
    "tribute": {
        "short": "Opponent chooses: give it counters or trigger an effect.",
        "long": "702.104a Replacement effect choice for opponents."
    },
    "dethrone": {
        "short": "Gets a +1/+1 counter when it attacks the player with most life.",
        "long": "702.105a Encourages attacking the leader."
    },
    "hidden agenda": {
        "short": "Secretly name a card for a conspiracy benefits.",
        "long": "702.106a Conspiracy drafting mechanic."
    },
    "outlast": {
        "short": "{T}: Put a +1/+1 counter on this. Activate only as a sorcery.",
        "long": "702.107a Slow way to grow creatures."
    },
    "prowess": {
        "short": "Gets +1/+1 when you cast a noncreature spell.",
        "long": "702.108a Triggered buff for casting noncreatures."
    },
    "dash": {
        "short": "Cast for less with haste; returns to hand at end of turn.",
        "long": "702.109a High-speed alternative casting cost."
    },
    "exploit": {
        "short": "You may sacrifice a creature for a bonus when this enters.",
        "long": "702.110a Triggered ability allowing a sacrifice."
    },
    "menace": {
        "short": "Can't be blocked except by two or more creatures.",
        "long": "702.111a Evasion ability requiring multiple blockers."
    },
    "renown": {
        "short": "Gets counters and becomes \"renowned\" after dealing player damage.",
        "long": "702.112a One-time reward for connecting with a player."
    },
    "awaken": {
        "short": "Cast and turn a land into an Elemental creature with counters.",
        "long": "702.113a spell with an optional land-animation cost."
    },
    "devoid": {
        "short": "This card has no color.",
        "long": "702.114a CDA that makes the object colorless."
    },
    "ingest": {
        "short": "Exile top card of library when it deals player damage.",
        "long": "702.115a Prepares cards for Processor abilities."
    },
    "myriad": {
        "short": "When it attacks, create attacking copies for each other opponent.",
        "long": "702.116a Multiplayer combat ability."
    },
    "surge": {
        "short": "Cheaper cost if you or a teammate cast another spell this turn.",
        "long": "702.117a Teamwork-oriented casting cost."
    },
    "skulk": {
        "short": "Can't be blocked by creatures with greater power.",
        "long": "702.118a Evasion for small creatures."
    },
    "emerge": {
        "short": "Cast by sacrificing a creature; reduce cost by its mana value.",
        "long": "702.119a Transformative alternative casting cost."
    },
    "escalate": {
        "short": "Pay an extra cost for each mode chosen beyond the first.",
        "long": "702.120a Modal spell with costs for extra modes."
    },
    "melee": {
        "short": "Gets +1/+1 for each opponent you attacked this combat.",
        "long": "702.121a Boosts based on attack breadth."
    },
    "crew": {
        "short": "Tap creatures to turn this Vehicle into an artifact creature.",
        "long": "702.122a Activated ability to animate Vehicles."
    },
    "fabricate": {
        "short": "Choose to put +1/+1 counters on this or create 1/1 Servos.",
        "long": "702.123a Modular-style choice upon entry."
    },
    "partner": {
        "short": "Allows two legendary cards to serve as your combined commander.",
        "long": "702.124a Includes variants like Partner with [name], choose a Background, etc."
    },
    "undaunted": {
        "short": "Costs {1} less for each opponent you have.",
        "long": "702.125a Cost reduction for multiplayer games."
    },
    "improvise": {
        "short": "Your artifacts can help pay for this spell's cost.",
        "long": "702.126a Tap artifacts to pay for generic mana."
    },
    "aftermath": {
        "short": "Cast the second half of this split card from your graveyard.",
        "long": "702.127a Exile it after casting from graveyard."
    },
    "embalm": {
        "short": "Exile from graveyard to create a token Zombie copy.",
        "long": "702.128a Create a white Zombie token copy from graveyard."
    },
    "eternalize": {
        "short": "Exile from graveyard to create a 4/4 black Zombie copy.",
        "long": "702.129a Like embalm but makes the token 4/4 and black."
    },
    "afflict": {
        "short": "Defending player loses life if this creature is blocked.",
        "long": "702.130a Guaranteed damage even when blocked."
    },
    "ascend": {
        "short": "If you have 10 permanents, get the city's blessing for the game.",
        "long": "702.131a Static or spell ability for permanent benefits."
    },
    "assist": {
        "short": "Another player may help pay for this spell's generic cost.",
        "long": "702.132a Political cost-sharing ability."
    },
    "jump-start": {
        "short": "Cast from graveyard by discarding a card, then exile it.",
        "long": "702.133a Re-castability for instants and sorceries."
    },
    "mentor": {
        "short": "While attacking, put +1/+1 counter on smaller attacker.",
        "long": "702.134a Buffs weaker creatures in the attack."
    },
    "afterlife": {
        "short": "When this dies, create N 1/1 black and white Spirit tokens.",
        "long": "702.135a Death trigger for flying tokens."
    },
    "riot": {
        "short": "Enters with either a +1/+1 counter or haste.",
        "long": "702.136a Choice of speed or size upon entry."
    },
    "spectacle": {
        "short": "Alternative cost if an opponent lost life this turn.",
        "long": "702.137a Aggro-themed casting discount."
    },
    "escape": {
        "short": "Cast from graveyard by paying mana and exiling cards.",
        "long": "702.138a Reusable threat from the graveyard."
    },
    "companion": {
        "short": "Start with this outside the game; pay {3} to put in hand if deck matches.",
        "long": "702.139a Special outside-the-game deckbuilding mechanic."
    },
    "mutate": {
        "short": "Merge with a non-Human creature to combine abilities.",
        "long": "702.140a Stack cards to create a complex permanent."
    },
    "encore": {
        "short": "Exile from graveyard to attack each opponent with copies.",
        "long": "702.141a Temporary copy sweep from graveyard."
    },
    "boast": {
        "short": "Activate once per turn only if this creature attacked.",
        "long": "702.142a Aggressive situational activated ability."
    },
    "foretell": {
        "short": "Exile from hand face down for {2}, then cast for less later.",
        "long": "702.143a Split the cost of a spell over two turns."
    },
    "demonstrate": {
        "short": "Copy this spell as you cast; if you do, an opponent also copies it.",
        "long": "702.144a Political spell-copying ability."
    },
    "daybound": {
        "short": "If it is night, this enters transformed. Transitions to night.",
        "long": "702.145b Day/Night cycle mechanic for permanents."
    },
    "nightbound": {
        "short": "If it is day, this transforms back to the day side.",
        "long": "702.145e Transitions back when day starts."
    },
    "disturb": {
        "short": "Cast from graveyard transformed for its disturb cost.",
        "long": "702.146a Usually returns a creature as a Spirit Aura."
    },
    "decayed": {
        "short": "Can't block; sacrifice it when it attacks.",
        "long": "702.147a Disposable token keyword."
    },
    "cleave": {
        "short": "Cast for less to ignore bracketed text in the spell.",
        "long": "702.148a Text-removing alternative casting cost."
    },
    "training": {
        "short": "Gets +1/+1 counter when attacking with larger creature.",
        "long": "702.149a Inverse of mentor; small creature grows."
    },
    "compleated": {
        "short": "Reduced loyalty if Phyrexian mana paid with life.",
        "long": "702.150a Downsides for paying life for planeswalkers."
    },
    "reconfigure": {
        "short": "Attach to a creature or unattach to become a creature again.",
        "long": "702.151a Equipment creatures that can become creatures again."
    },
    "blitz": {
        "short": "Cast for less with haste; sacrifice for card draw when it dies.",
        "long": "702.152a High-speed sacrificial casting cost."
    },
    "casualty": {
        "short": "Sacrifice a creature to copy this spell.",
        "long": "702.153a “Casualty N” requires sacrifice of power N or more."
    },
    "enlist": {
        "short": "Tap another creature to add its power to this attacker.",
        "long": "702.154a Taps a non-attacking creature for a buff."
    },
    "read ahead": {
        "short": "Enter with counters to start at any chapter.",
        "long": "702.155a Skip early Saga steps by choosing lore counters."
    },
    "ravenous": {
        "short": "Enters with X counters; draw a card if X is 5 or more.",
        "long": "702.156a Tyranid mechanic for large X-spells."
    },
    "squad": {
        "short": "Pay additional cost to create multiple token copies.",
        "long": "702.157a Additional cost N times to get N tokens."
    },
    "space sculptor": {
        "short": "Assign segments (sectors) to the battlefield.",
        "long": "702.158a Un-set mechanic for field division."
    },
    "visit": {
        "short": "Trigger an effect when you roll for this Attraction.",
        "long": "702.159a Triggers when its number is rolled."
    },
    "prototype": {
        "short": "Cast with smaller P/T and mana cost.",
        "long": "702.160a Alternative cheaper version of large artifacts."
    },
    "living metal": {
        "short": "Becomes a creature during your turn only.",
        "long": "702.161a Vehicle that animates automatically."
    },
    "more than meets the eye": {
        "short": "Cast converted (Transformers mechanic).",
        "long": "702.162a Alternative cost to enter converted."
    },
    "for mirrodin!": {
        "short": "Create a 2/2 Rebel and attach this to it.",
        "long": "702.163a Equipment that creates and equips its own creature."
    },
    "toxic": {
        "short": "Deals poison counters in addition to damage.",
        "long": "702.164a “Toxic N” deals N poison counters per hit."
    },
    "backup": {
        "short": "When enters, give counters and its abilities to another creature.",
        "long": "702.165a Transferable temporary abilities."
    },
    "bargain": {
        "short": "Sacrifice an artifact, enchantment, or token for a bonus.",
        "long": "702.166a Optional sacrifice for extra spell power."
    },
    "craft": {
        "short": "Exile this and materials to return it transformed.",
        "long": "702.167a Transforming activation cost with materials."
    },
    "disguise": {
        "short": "Cast face down as a 2/2 with ward {2} for {3}.",
        "long": "702.168a Morph variant with protection (ward)."
    },
    "solved": {
        "short": "Benefit active as long as this Case is solved.",
        "long": "702.169a Conditional abilities for Case cards."
    },
    "plot": {
        "short": "Exile from hand; cast for free on a later turn.",
        "long": "702.170a Delayed casting from exile."
    },
    "saddle": {
        "short": "Tap creatures to mount and gain extra abilities.",
        "long": "702.171a Mount mechanic for special benefits."
    },
    "spree": {
        "short": "Choice of modes with additional costs per mode.",
        "long": "702.172a Cumulative cost modal spell."
    },
    "freerunning": {
        "short": "Cheaper cost if you dealt damage with Assassin or Commander.",
        "long": "702.173a Assassin's Creed themed casting cost."
    },
    "gift": {
        "short": "Offer a benefit to opponent for an upgraded spell.",
        "long": "702.174a Optional kicker-like benefit for opponents."
    },
    "offspring": {
        "short": "Pay more to create a 1/1 token copy when it enters.",
        "long": "702.175a Mini-me copies of your creatures."
    },
    "impending": {
        "short": "Cast for less as noncreature with time counters.",
        "long": "702.176a Phased-in enchantment that becomes creature later."
    },
    "exhaust": {
        "short": "Activated ability that can be used only once.",
        "long": "702.177a One-time use activated ability."
    },
    "max speed": {
        "short": "Benefit active if your speed is 4.",
        "long": "702.178a Speed-based threshold mechanic."
    },
    "start your engines!": {
        "short": "Enable speed for the rest of the game.",
        "long": "702.179a Mechanics for tracking player speed."
    },
    "harmonize": {
        "short": "Cast from graveyard by tapping a creature.",
        "long": "702.180a Graveyard-casting alternative cost."
    },
    "mobilize": {
        "short": "Create tapped and attacking tokens when this attacks.",
        "long": "702.181a Attack-triggered token generation."
    },
    "job select": {
        "short": "Create a token and attach this Equipment to it.",
        "long": "702.182a Equipment that auto-equips upon entry."
    },
    "tiered": {
        "short": "Choice of modes with different additional costs.",
        "long": "702.183a Progression based modal spell."
    },
    "station": {
        "short": "Tap creatures to add charge counters.",
        "long": "702.184a Charging mechanic using other creatures."
    },
    "warp": {
        "short": "Cast for hand cost; exile and return later.",
        "long": "702.185a Temporary entry mechanic."
    },
    "infinity": {
        "short": "Infinity symbol enabling powerful static abilities.",
        "long": "702.186a Un-set infinite scaling mechanic."
    },
    "mayhem": {
        "short": "Cast from graveyard if you discarded it this turn.",
        "long": "702.187a Madness/Cycling payoff."
    },
    "web-slinging": {
        "short": "Cast by returning a tapped creature to hand.",
        "long": "702.188a Bounce-based alternative casting cost."
    },
    "firebending": {
        "short": "Add mana when this attacks; it doesn't expire.",
        "long": "702.189a Attack-triggered mana sustain."
    },
    "sneak": {
        "short": "Cast from hand during combat for a cheaper cost.",
        "long": "702.190a Ninjutsu variant for instant combat entry."
    }
};

// Initialize KEYWORDS_DATA for faster lookup (case-insensitive)
function initKeywordsData() {
    for (const key in KEYWORDS_RAW) {
        KEYWORDS_DATA[key.toLowerCase()] = KEYWORDS_RAW[key];
    }
}

// Auto-init on script load
if (typeof window !== 'undefined') {
    initKeywordsData();
}
