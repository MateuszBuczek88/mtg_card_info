/**
 * MTG Keywords Data
 * Comprehensive database of MTG keyword abilities and actions.
 * Normalized to lowercase keys for robust matching.
 */

const KEYWORDS_RAW = {
    // Keyword Abilities
    "Flying": {
        "short": "Can't be blocked except by creatures with flying or reach.",
        "long": "702.9a Flying is an evasion ability. 702.9b A creature with flying can't be blocked except by creatures with flying and/or reach. A creature with flying can block a creature with or without flying."
    },
    "First strike": {
        "short": "Deals combat damage before creatures without first strike.",
        "long": "702.7a First strike is a static ability that modifies the rules for the combat damage step. 702.7b If at least one attacking or blocking creature has first strike or double strike as the combat damage step begins, the only creatures that assign combat damage in that step are those with first strike or double strike."
    },
    "Double strike": {
        "short": "Deals both first-strike and regular combat damage.",
        "long": "702.4a Double strike is a static ability that modifies the rules for the combat damage step. 702.4b If at least one attacking or blocking creature has first strike or double strike as the combat damage step begins, the phase gets a second combat damage step."
    },
    "Deathtouch": {
        "short": "Any amount of damage this creature deals to a creature is enough to destroy it.",
        "long": "702.2a Deathtouch is a static ability. 702.2b Any nonzero amount of combat damage assigned to a creature by a source with deathtouch is considered lethal damage for the purposes of determining whether a creature is destroyed."
    },
    "Lifelink": {
        "short": "Damage dealt by this creature also causes you to gain that much life.",
        "long": "702.15a Lifelink is a static ability. 702.15b Damage dealt by a source with lifelink causes that source’s controller, or its owner if it has no controller, to gain an amount of life equal to the amount of damage dealt."
    },
    "Haste": {
        "short": "Can attack and {T} as soon as it comes under your control.",
        "long": "702.10a Haste is a static ability. 702.10b If a creature has haste, it can attack even if it hasn’t been under its controller’s control since the beginning of their most recent turn."
    },
    "Trample": {
        "short": "Can deal excess combat damage to the player or planeswalker it's attacking.",
        "long": "702.19a Trample is a static ability that modifies the rules for assigning combat damage. 702.19b The controller of an attacking creature with trample first assigns damage to the creature(s) blocking it. Once all those blocking creatures are assigned lethal damage, any remaining damage is assigned as its controller chooses among those blocking creatures and the player or planeswalker the creature is attacking."
    },
    "Vigilance": {
        "short": "Attacking doesn't cause this creature to tap.",
        "long": "702.20a Vigilance is a static ability. 702.20b Attacking doesn’t cause a creature with vigilance to tap."
    },
    "Reach": {
        "short": "Can block creatures with flying.",
        "long": "702.17a Reach is a static ability. 702.17b A creature with reach can block a creature with flying."
    },
    "Indestructible": {
        "short": "Can't be destroyed by damage or effects that say \"destroy.\"",
        "long": "702.12a Indestructible is a static ability. 702.12b A permanent with indestructible can’t be destroyed. Such permanents aren’t destroyed by lethal damage, and they ignore the state-based action that checks for lethal damage."
    },
    "Menace": {
        "short": "Can't be blocked except by two or more creatures.",
        "long": "702.110a Menace is an evasion ability. 702.110b A creature with menace can’t be blocked except by two or more creatures."
    },
    "Ward": {
        "short": "Counter spells or abilities targeting this unless a cost is paid.",
        "long": "702.21a Ward is a triggered ability. “Ward [cost]” means “Whenever this permanent becomes the target of a spell or ability an opponent controls, counter that spell or ability unless that player pays [cost].”"
    },
    "Flash": {
        "short": "You may play this card any time you could cast an instant.",
        "long": "702.8a Flash is a static ability that functions in any zone from which you could play the card it’s on. 702.8b “Flash” means “You may play this card any time you could cast an instant.”"
    },
    "Defender": {
        "short": "This creature can't attack.",
        "long": "702.3a Defender is a static ability. 702.3b A creature with defender can’t attack."
    },
    "Hexproof": {
        "short": "Can't be the target of spells or abilities your opponents control.",
        "long": "702.11a Hexproof is a static ability. 702.11b “Hexproof” on a permanent means “This permanent can’t be the target of spells or abilities your opponents control.”"
    },
    "Shroud": {
        "short": "Can't be the target of spells or abilities.",
        "long": "702.18a Shroud is a static ability. 702.18b “Shroud” means “This permanent or player can’t be the target of spells or abilities.”"
    },
    "Infect": {
        "short": "Deals damage in the form of -1/-1 counters to creatures and poison counters to players.",
        "long": "702.90a Infect is a static ability. 702.90b Damage dealt to a player by a source with infect doesn’t cause that player to lose life; rather, it causes that source’s controller to give the player that many poison counters. 702.90c Damage dealt to a creature by a source with infect doesn’t become marked on that creature. Rather, it causes that many -1/-1 counters to be put on that creature."
    },
    "Wither": {
        "short": "Deals damage to creatures in the form of -1/-1 counters.",
        "long": "702.80a Wither is a static ability. 702.80b Damage dealt to a creature by a source with wither doesn’t become marked on that creature. Rather, it causes that many -1/-1 counters to be put on that creature."
    },
    "Prowess": {
        "short": "Gets +1/+1 until end of turn whenever you cast a noncreature spell.",
        "long": "702.108a Prowess is a triggered ability. “Prowess” means “Whenever you cast a noncreature spell, this creature gets +1/+1 until end of turn.”"
    },
    "Scry": {
        "short": "Look at the top N cards of your library, then put any number on bottom and the rest on top.",
        "long": "701.18a To “scry N” means to look at the top N cards of your library, then put any number of them on the bottom of your library in any order and the rest on top of your library in any order."
    },
    "Surveil": {
        "short": "Look at the top N cards of your library, then put any number into your graveyard and the rest on top.",
        "long": "701.42a To “surveil N” means to look at the top N cards of your library, then put any number of them into your graveyard and the rest on top of your library in any order."
    },
    "Protection": {
        "short": "Can't be targeted, enchanted, equipped, blocked, or damaged by sources with the specified quality.",
        "long": "702.16a Protection is a static ability, written “Protection from [quality].” It means: Prevent all damage from [quality], can't be Enchanted/Equipped by [quality], can't be Blocked by [quality], and can't be Targeted by [quality] (DEBT)."
    },
    "Scavenge": {
        "short": "Exile from graveyard: Put +1/+1 counters equal to power on target creature.",
        "long": "702.96a Scavenge is an activated ability that functions only while the card with scavenge is in a graveyard. “Scavenge [cost]” means “[Cost], Exile this card from your graveyard: Put a number of +1/+1 counters equal to this card’s power on target creature. Activate only as a sorcery.”"
    },
    "Unearth": {
        "short": "Return this card from your graveyard to the battlefield. It gains haste. Exile it at end of turn or if it would leave the battlefield.",
        "long": "702.84a Unearth is an activated ability that functions only while the card is in a graveyard. “Unearth [cost]” means “[Cost]: Return this card from your graveyard to the battlefield. It gains haste. Exile it at the beginning of the next end step. If it would leave the battlefield, exile it instead of putting it anywhere else. Activate only as a sorcery.”"
    },
    "Flashback": {
        "short": "You may cast this card from your graveyard for its flashback cost, then exile it.",
        "long": "702.34a Flashback appears on some instants and sorceries. It represents two static abilities: one that functions while the card is in a graveyard and another that functions while the card is on the stack. “Flashback [cost]” means “You may cast this card from your graveyard by paying [cost] rather than paying its mana cost” and “If the flashback cost was paid, exile this card instead of putting it anywhere else any time it would leave the stack.”"
    },
    "Cycling": {
        "short": "Discard this card: Draw a card.",
        "long": "702.29a Cycling is an activated ability that functions only while the card with cycling is in a player’s hand. “Cycling [cost]” means “[Cost], Discard this card: Draw a card.”"
    },
    "Kicker": {
        "short": "You may pay an additional cost as you cast this spell for an extra effect.",
        "long": "702.33a Kicker is a static ability that functions while the spell with kicker is on the stack. “Kicker [cost]” means “You may pay an additional [cost] as you cast this spell.” Paying a spell’s kicker cost(s) is an optional additional cost."
    },
    "Madness": {
        "short": "If you discard this card, you may cast it for its madness cost instead of putting it into your graveyard.",
        "long": "702.35a Madness is a keyword that represents two abilities. The first is a static ability that functions while the card with madness is in a player’s hand. The second is a triggered ability that functions when the first ability is applied. “Madness [cost]” means “If a player would discard this card, that player discards it, but exiles it instead of putting it into their graveyard” and “When this card is exiled this way, its owner may cast it by paying [cost] rather than paying its mana cost. If that player doesn’t, they put this card into their graveyard.”"
    },
    "Echo": {
        "short": "At the beginning of your upkeep, if this came under your control since the beginning of your last upkeep, sacrifice it unless you pay its echo cost.",
        "long": "702.30a Echo is a triggered ability. “Echo [cost]” means “At the beginning of your upkeep, if this permanent came under your control since the beginning of your last upkeep, sacrifice it unless you pay [cost].”"
    },
    "Fading": {
        "short": "Enters with N counters. Remove one each upkeep. If you can't, sacrifice it.",
        "long": "702.32a Fading is a static ability. “Fading N” means “This permanent enters the battlefield with N fade counters on it.” 702.32b Fading represents a triggered ability. “At the beginning of your upkeep, remove a fade counter from this permanent. If you can’t, sacrifice it.”"
    },
    "Vanishing": {
        "short": "Enters with N counters. Remove one each upkeep. When the last is removed, sacrifice it.",
        "long": "702.63a Vanishing is a keyword that represents three abilities. “Vanishing N” means “This permanent enters the battlefield with N time counters on it,” “At the beginning of your upkeep, if this permanent has a time counter on it, remove a time counter from it,” and “When the last time counter is removed from this permanent, sacrifice it.”"
    },
    "Suspend": {
        "short": "Exile this with N time counters. Each upkeep, remove one. When the last is removed, cast it for free with haste.",
        "long": "702.62a Suspend is a keyword that represents three abilities. The first is a static ability that functions while the card with suspend is in a player’s hand. The second and third are triggered abilities that function while the card with suspend is in the exile zone. “Suspend N—[cost]” means “If you could begin to cast this card by putting it onto the stack from your hand, you may pay [cost] and exile it with N time counters on it. This action doesn’t use the stack,” and “At the beginning of your upkeep, if this card is exiled, remove a time counter from it,” and “When the last time counter is removed from this card, if it’s exiled, play it without paying its mana cost if able. If you can’t, it remains exiled. If you cast a creature spell this way, it gains haste until you lose control of the spell or the permanent it becomes.”"
    },
    "Dredge": {
        "short": "If you would draw a card, you may instead put exactly N cards from the top of your library into your graveyard and return this card from your graveyard to your hand.",
        "long": "702.52a Dredge is a static ability that functions only while the card with dredge is in a player’s graveyard. “Dredge N” means “As long as you have at least N cards in your library, if you would draw a card, you may instead put N cards from the top of your library into your graveyard and return this card from your graveyard to your hand.”"
    },
    "Delve": {
        "short": "Each card you exile from your graveyard while casting this spell pays for {1}.",
        "long": "702.66a Delve is a static ability that functions while the spell with delve is on the stack. “Delve” means “For each generic mana in this spell’s total cost, you may exile a card from your graveyard rather than pay that mana.”"
    },
    "Convoke": {
        "short": "Your creatures can help cast this spell. Each creature you tap while casting this spell pays for {1} or one mana of that creature's color.",
        "long": "702.51a Convoke is a static ability that functions while the spell with convoke is on the stack. “Convoke” means “For each colored mana in this spell’s total cost, you may tap an untapped creature of that color you control rather than pay that mana, and for each generic mana in this spell’s total cost, you may tap an untapped creature you control rather than pay that mana.”"
    },
    "Affinity": {
        "short": "This spell costs {1} less to cast for each [quality] you control.",
        "long": "702.41a Affinity is a static ability that functions while the spell with affinity is on the stack. “Affinity for [objects]” means “This spell costs {1} less to cast for each [object] you control.”"
    },
    "Cascade": {
        "short": "When you cast this spell, exile cards from the top of your library until you exile a nonland card that costs less. You may cast it for free.",
        "long": "702.85a Cascade is a triggered ability that functions only while the spell with cascade is on the stack. “Cascade” means “When you cast this spell, exile cards from the top of your library until you exile a nonland card whose mana value is less than this spell’s mana value. You may cast that card without paying its mana cost. Then put all cards exiled this way that weren’t cast on the bottom of your library in a random order.”"
    },
    "Annihilator": {
        "short": "Whenever this creature attacks, defending player sacrifices N permanents.",
        "long": "702.86a Annihilator is a triggered ability. “Annihilator N” means “Whenever this creature attacks, defending player sacrifices N permanents.”"
    },
    "Storm": {
        "short": "When you cast this spell, copy it for each spell cast before it this turn.",
        "long": "702.40a Storm is a triggered ability that functions on the stack. “Storm” means “When you cast this spell, put a copy of it onto the stack for each other spell that was cast before it this turn. If the spell has any targets, you may choose new targets for any of the copies.”"
    },
    "Ninjutsu": {
        "short": "Return an unblocked attacker to hand: Put this card onto the battlefield from your hand tapped and attacking.",
        "long": "702.49a Ninjutsu is an activated ability that functions only while the card with ninjutsu is in a player’s hand. “Ninjutsu [cost]” means “[Cost], Return an unblocked attacking creature you control to its owner’s hand: Put this card onto the battlefield from your hand tapped and attacking.”"
    },
    "Living weapon": {
        "short": "When this Equipment enters the battlefield, create a 0/0 black Germ creature token, then attach this to it.",
        "long": "702.92a Living weapon is a triggered ability. “Living weapon” means “When this Equipment enters the battlefield, create a 0/0 black Germ creature token, then attach this Equipment to it.”"
    },
    "Jump-start": {
        "short": "You may cast this card from your graveyard by discarding a card in addition to paying its other costs. Then exile this card.",
        "long": "702.133a Jump-start appears on some instants and sorceries. It represents a static ability that functions while the card is in a player’s graveyard. “Jump-start” means “You may cast this card from your graveyard by discarding a card as an additional cost to cast it.” If the jump-start ability was used to cast the spell, exile the card instead of putting it anywhere else any time it would leave the stack."
    },
    "Soulbond": {
        "short": "You may pair this creature with another unpaired creature when either enters the battlefield. They remain paired for as long as you control both of them.",
        "long": "702.95a Soulbond is a keyword that represents two triggered abilities. “Soulbond” means “When this creature enters the battlefield, if you control both this creature and another creature that is not paired, you may pair this creature with another unpaired creature you control for as long as both remain creatures on the battlefield under your control” and “Whenever another creature enters the battlefield under your control, if you control this creature and it is not paired, you may pair that creature with this creature for as long as both remain creatures on the battlefield under your control.”"
    },
    "Dethrone": {
        "short": "Whenever this creature attacks the player with the most life or tied for most life, put a +1/+1 counter on it.",
        "long": "702.105a Dethrone is a triggered ability. “Dethrone” means “Whenever this creature attacks the player with the most life or tied for most life, put a +1/+1 counter on it.”"
    },
    "Exploit": {
        "short": "When this creature enters the battlefield, you may sacrifice a creature.",
        "long": "702.110a Exploit is a triggered ability. “Exploit” means “When this creature enters the battlefield, you may sacrifice a creature.”"
    },
    "Devoid": {
        "short": "This card has no color.",
        "long": "702.114a Devoid is a static ability. “Devoid” means “This object is colorless.” This ability functions everywhere, even outside the game."
    },
    "Emerge": {
        "short": "You may cast this spell by sacrificing a creature and paying the emerge cost reduced by that creature's mana value.",
        "long": "702.119a Emerge is a keyword that represents two static abilities that function while the spell with emerge is on the stack. “Emerge [cost]” means “You may cast this spell by paying [cost] and sacrificing a creature rather than paying its mana cost” and “If you chose to pay this spell’s emerge cost, its total cost is reduced by an amount of generic mana equal to the sacrificed creature’s mana value.”"
    },
    "Escalate": {
        "short": "Pay an additional cost for each mode you choose beyond the first.",
        "long": "702.120a Escalate is a static ability that functions while the spell with escalate is on the stack. “Escalate [cost]” means “For each mode you choose for this spell beyond the first, pay [cost] as an additional cost.”"
    },
    "Melee": {
        "short": "Whenever this creature attacks, it gets +1/+1 until end of turn for each opponent you attacked this combat.",
        "long": "702.121a Melee is a triggered ability. “Melee” means “Whenever this creature attacks, it gets +1/+1 until end of turn for each opponent you attacked with one or more creatures this combat.”"
    },
    "Mentor": {
        "short": "Whenever this creature attacks, put a +1/+1 counter on target attacking creature with less power.",
        "long": "702.134a Mentor is a triggered ability. “Mentor” means “Whenever this creature attacks, put a +1/+1 counter on target attacking creature with power less than this creature’s power.”"
    },
    "Crew": {
        "short": "Tap any number of creatures with total power N or more: This Vehicle becomes an artifact creature until end of turn.",
        "long": "702.122a Crew is an activated ability of Vehicle cards. “Crew N” means “Tap any number of untapped creatures you control with total power N or greater: This permanent becomes an artifact creature until end of turn.”"
    },
    "Aftermath": {
        "short": "Cast this spell only from your graveyard. Then exile it.",
        "long": "702.127a Aftermath is a keyword that represents a static ability that functions while the card is in a player’s graveyard. “Aftermath” means “You may cast this half of this split card from your graveyard. If you do, exile it instead of putting it anywhere else any time it would leave the stack.”"
    },
    "Afflict": {
        "short": "Whenever this creature becomes blocked, defending player loses N life.",
        "long": "702.130a Afflict is a triggered ability. “Afflict N” means “Whenever this creature becomes blocked, defending player loses N life.”"
    },
    "Ascend": {
        "short": "If you control ten or more permanents, you get the city's blessing for the rest of the game.",
        "long": "702.131a Ascend is a keyword that represents a static ability. “Ascend” means “If you control ten or more permanents and you don’t have the city’s blessing, you get the city’s blessing for the rest of the game.”"
    },
    "Fabricate": {
        "short": "When this enters the battlefield, put N +1/+1 counters on it or create N 1/1 colorless Servo artifact creature tokens.",
        "long": "702.123a Fabricate is a triggered ability. “Fabricate N” means “When this permanent enters the battlefield, you may put N +1/+1 counters on it. If you don’t, create N 1/1 colorless Servo artifact creature tokens.”"
    },
    "Embalm": {
        "short": "Exile from graveyard: Create a token copy that's a white Zombie in addition to its other types.",
        "long": "702.128a Embalm is an activated ability that functions only while the card with embalm is in a graveyard. “Embalm [cost]” means “[Cost], Exile this card from your graveyard: Create a token that’s a copy of this card, except it’s white, it’s a Zombie in addition to its other types, and it has no mana cost. Activate only as a sorcery.”"
    },
    "Eternalize": {
        "short": "Exile from graveyard: Create a token copy that's a 4/4 black Zombie in addition to its other types.",
        "long": "702.129a Eternalize is an activated ability that functions only while the card with eternalize is in a graveyard. “Eternalize [cost]” means “[Cost], Exile this card from your graveyard: Create a token that’s a copy of this card, except it’s black, it’s a Zombie in addition to its other types, its power and toughness are 4/4, and it has no mana cost. Activate only as a sorcery.”"
    },
    "Companion": {
        "short": "If your starting deck meets the requirement, you may pay {3} to put this into your hand from outside the game.",
        "long": "702.139a Companion is a keyword that represents a static ability that functions outside the game. It means “Once per game, any time you could cast a sorcery, you may pay {3} to put this card from outside the game into your hand.”"
    },
    "Mutate": {
        "short": "Cast for its mutate cost: Put it over or under a non-Human creature you own. It has all the abilities of both.",
        "long": "702.140a Mutate is a static ability that functions while the spell with mutate is on the stack. “Mutate [cost]” means “You may pay [cost] rather than pay this spell’s mana cost. If you do, it becomes a mutating creature spell and targets a non-Human creature you own.” 702.140c As a mutating creature spell resolves, if its target is still legal, it doesn’t enter the battlefield. Rather, it merges with the target creature, becoming one permanent."
    },
    "Encore": {
        "short": "Exile from graveyard: For each opponent, create a token copy that attacks that opponent this turn. Sacrifice them at end of turn.",
        "long": "702.141a Encore is an activated ability that functions only while the card with encore is in a graveyard. “Encore [cost]” means “[Cost], Exile this card from your graveyard: For each opponent, create a token that’s a copy of this card that attacks that opponent this turn if able. They gain haste. Sacrifice them at the beginning of the next end step. Activate only as a sorcery.”"
    },
    "Training": {
        "short": "Whenever this creature attacks with a creature with greater power, put a +1/+1 counter on this creature.",
        "long": "702.149a Training is a triggered ability. “Training” means “Whenever this creature attacks with another creature with power greater than this creature’s power, put a +1/+1 counter on this creature.”"
    },
    "Toxic": {
        "short": "Players dealt combat damage by this creature also get N poison counters.",
        "long": "702.164a Toxic is a static ability. “Toxic N” means “Players dealt combat damage by this creature also each get N poison counters.”"
    },
    "Reconfigure": {
        "short": "Attach to a creature you control or unattach from one as a sorcery. While attached, it isn't a creature.",
        "long": "702.151a Reconfigure represents two activated abilities. “Reconfigure [cost]” means “[Cost]: Attach this permanent to another target creature you control. Activate only as a sorcery” and “[Cost]: Unattach this permanent. Activate only as a sorcery.”"
    },
    "Ward": {
        "short": "Counter spells or abilities targeting this unless a cost is paid.",
        "long": "702.21a Ward is a triggered ability. “Ward [cost]” means “Whenever this permanent becomes the target of a spell or ability an opponent controls, counter that spell or ability unless that player pays [cost].”"
    },

    // Keyword Actions
    "Mill": {
        "short": "Put cards from the top of your library directly into your graveyard.",
        "long": "701.13a To mill N cards, a player puts the top N cards of their library into their graveyard."
    },
    "Fight": {
        "short": "Two creatures each deal damage equal to their power to the other.",
        "long": "701.12a To fight, each of two creatures deals damage equal to its power to the other."
    },
    "Sacrifice": {
        "short": "Move a permanent you control to your graveyard. You can't prevent this.",
        "long": "701.17a To sacrifice a permanent, its controller moves it from the battlefield directly to its owner’s graveyard. A player can’t sacrifice a permanent that isn’t under their control."
    },
    "Exile": {
        "short": "Put a card into the exile zone, which is separate from the battlefield and graveyard.",
        "long": "406.1. The exile zone is essentially a graveyard for cards that have been 'removed from the game.'"
    },
    "Destroy": {
        "short": "Move a permanent to its owner's graveyard.",
        "long": "701.7a To destroy a permanent, move it from the battlefield to its owner’s graveyard."
    },
    "Discard": {
        "short": "Move a card from your hand to your graveyard.",
        "long": "701.8a To discard a card, a player moves a card from their hand to their graveyard."
    },
    "Counter": {
        "short": "Prevent a spell or ability from resolving. It's moved to the graveyard.",
        "long": "701.5a To counter a spell or ability means to cancel it, removing it from the stack. It doesn’t resolve and none of its effects occur."
    },
    "Create": {
        "short": "Put a token onto the battlefield.",
        "long": "701.6a To create one or more tokens, a player puts that many tokens onto the battlefield under their control."
    },
    "Goad": {
        "short": "Until your next turn, that creature attacks each combat if able and attacks a player other than you if able.",
        "long": "701.38a To goad a creature means “Until your next turn, that creature attacks each combat if able and attacks a player other than you if able.”"
    },
    "Investigate": {
        "short": "Create a Clue token.",
        "long": "701.36a To investigate means to create a colorless Clue artifact token with “{2}, Sacrifice this artifact: Draw a card.”"
    },
    "Fateseal": {
        "short": "Look at the top N cards of an opponent's library, then put any on the bottom and the rest on top.",
        "long": "701.22a To “fateseal N” means to look at the top N cards of an opponent’s library, then put any number of them on the bottom of that library in any order and the rest on top of that library in any order."
    },
    "Populate": {
        "short": "Create a token that's a copy of a creature token you control.",
        "long": "701.30a To populate means to create a token that’s a copy of a creature token you control."
    },
    "Proliferate": {
        "short": "Choose any number of players and/or permanents with counters. For each kind of counter already there, give that player or permanent another one.",
        "long": "701.27a To proliferate means to choose any number of permanents and/or players that have a counter, then give each one additional counter of each kind that permanent or player already has."
    },
    "Surveil": {
        "short": "Look at the top N cards of your library, then put any number into your graveyard and the rest on top.",
        "long": "701.42a To “surveil N” means to look at the top N cards of your library, then put any number of them into your graveyard and the rest on top of your library in any order."
    },
    // Addition Batch 2
    "Commander ninjutsu": {
        "short": "Return an unblocked attacker to hand: Put this card onto the battlefield from your hand or command zone tapped and attacking.",
        "long": "702.49d Commander ninjutsu is a variant of ninjutsu that can be activated from the command zone as well as the hand."
    },
    "Megamorph": {
        "short": "Cast face down as a 2/2 creature for {3}. Turn it face up any time for its megamorph cost and put a +1/+1 counter on it.",
        "long": "702.36c Megamorph is a variant of morph. A megamorph cost is a morph cost. When a permanent is turned face up by paying its megamorph cost, its controller puts a +1/+1 counter on it."
    },
    "Haunt": {
        "short": "When this enters the battlefield or is put into a graveyard from the battlefield, exile it haunting a creature. When that creature dies, trigger this ability again.",
        "long": "702.54a Haunt is a triggered ability. “Haunt” on a creature means “When this creature enters the battlefield, you may exile it haunting target creature” and “When this creature is put into a graveyard from the battlefield, you may exile it haunting target creature.”"
    },
    "Forecast": {
        "short": "Activate only during your upkeep and only once each turn. Reveal this from your hand and pay its forecast cost for an effect.",
        "long": "702.56a Forecast is a keyword that represents an activated ability that functions only while the card is in a player’s hand. “Forecast — [Ability cost], [Effect]” means “[Cost], Reveal this card from your hand: [Effect]. Activate only during your upkeep and only once each turn.”"
    },
    "Graft": {
        "short": "Enters with N +1/+1 counters. When another creature enters, you may move a counter from this to it.",
        "long": "702.57a Graft represents both a static ability and a triggered ability. “Graft N” means “This permanent enters the battlefield with N +1/+1 counters on it” and “Whenever another creature enters the battlefield, you may move a +1/+1 counter from this permanent onto that creature.”"
    },
    "Fortify": {
        "short": "Attach this Fortification to a land you control. Activate only as a sorcery.",
        "long": "702.65a Fortify is an activated ability of Fortification cards. “Fortify [cost]” means “[Cost]: Attach this Fortification to target land you control. Activate only as a sorcery.”"
    },
    "Frenzy": {
        "short": "Whenever this creature attacks and isn't blocked, it gets +N/+0 until end of turn.",
        "long": "702.67a Frenzy is a triggered ability. “Frenzy N” means “Whenever this creature attacks and isn’t blocked, it gets +N/+0 until end of turn.”"
    },
    "Gravestorm": {
        "short": "When you cast this, copy it for each permanent put into a graveyard this turn.",
        "long": "702.68a Gravestorm is a triggered ability that functions on the stack. “Gravestorm” means “When you cast this spell, put a copy of it onto the stack for each permanent that was put into a graveyard from the battlefield this turn.”"
    },
    "Hideaway": {
        "short": "When this enters, look at the top four cards of library, exile one face down, and put the rest on the bottom. You may play the exiled card if a condition is met.",
        "long": "702.75a Hideaway represents a triggered ability. “Hideaway N” means “When this permanent enters the battlefield, look at the top N cards of your library. Exile one of them face down and put the rest on the bottom of your library in a random order.”"
    },
    "Level Up": {
        "short": "Pay the cost to put a level counter on this as a sorcery. Its abilities change at certain level thresholds.",
        "long": "702.86a Level up is an activated ability that functions only while the card with level up is on the battlefield. “Level up [cost]” means “[Cost]: Put a level counter on this permanent. Activate only as a sorcery.”"
    },
    "Rampage": {
        "short": "Whenever this creature becomes blocked, it gets +N/+N until end of turn for each creature blocking it beyond the first.",
        "long": "702.4a Rampage is a triggered ability. “Rampage N” means “Whenever this creature becomes blocked, it gets +N/+N until end of turn for each creature blocking it beyond the first.”"
    },
    "Phasing": {
        "short": "At the beginning of your untap step, this permanent 'phases out' (leaves the battlefield) or 'phases in' (returns).",
        "long": "702.25a Phasing is a static ability that modifies the rules of the untap step. 702.25b While a permanent is phased out, it’s treated as though it doesn’t exist. It can’t be targeted, its abilities can’t be activated, it can’t attack or block, and so on."
    },
    "Multikicker": {
        "short": "You may pay an additional cost any number of times as you cast this spell for multiple effects.",
        "long": "702.33c Multikicker is a variant of kicker. “Multikicker [cost]” means “You may pay an additional [cost] any number of times as you cast this spell.”"
    },
    "Morph": {
        "short": "You may cast this card face down as a 2/2 creature for {3}. Turn it face up any time for its morph cost.",
        "long": "702.36a Morph is a static ability that functions in any zone from which you could play the card it’s on, and the morph effect works until the card is turned face up. “Morph [cost]” means “You may cast this card as a 2/2 face-down creature with no text, no name, no subtypes, and no mana cost by paying {3} rather than paying its mana cost.”"
    },
    "Provoke": {
        "short": "When this creature attacks, you may have target creature defending player controls block it this combat if able.",
        "long": "702.38a Provoke is a triggered ability. “Provoke” means “Whenever this creature attacks, you may choose to have target creature defending player controls untap and block this creature if able.”"
    },
    "Modular": {
        "short": "Enters with N +1/+1 counters. When it dies, you may put its counters on target artifact creature.",
        "long": "702.42a Modular represents both a static ability and a triggered ability. “Modular N” means “This permanent enters the battlefield with N +1/+1 counters on it” and “When this permanent is put into a graveyard from the battlefield, you may put its +1/+1 counters on target artifact creature.”"
    },
    "Replicate": {
        "short": "When you cast this, you may pay its replicate cost any number of times. Copy it for each time paid.",
        "long": "702.55a Replicate is a keyword that represents two abilities. The first is a static ability that functions while the spell with replicate is on the stack. The second is a triggered ability that functions while the spell with replicate is on the stack. “Replicate [cost]” means “As an additional cost to cast this spell, you may pay [cost] any number of times” and “When you cast this spell, if a replicate cost was paid for it, copy it for each time its replicate cost was paid.”"
    },
    "Recover": {
        "short": "When a creature is put into your graveyard from the battlefield, you may pay the recover cost to return this card from your graveyard to your hand. Otherwise, exile it.",
        "long": "702.58a Recover is a triggered ability that functions only while the card with recover is in a player’s graveyard. “Recover [cost]” means “Whenever a creature is put into your graveyard from the battlefield, you may pay [cost]. If you do, return this card from your graveyard to your hand. If you don’t, exile this card.”"
    },
    "Poisonous": {
        "short": "Whenever this creature deals combat damage to a player, that player gets N poison counters.",
        "long": "702.69a Poisonous is a triggered ability. “Poisonous N” means “Whenever this creature deals combat damage to a player, that player gets N poison counters.”"
    },
    "Reinforce": {
        "short": "Discard this card and pay its reinforce cost: Put N +1/+1 counters on target creature.",
        "long": "702.73a Reinforce is an activated ability that functions only while the card with reinforce is in a player’s hand. “Reinforce N—[cost]” means “[Cost], Discard this card: Put N +1/+1 counters on target creature.”"
    },
    "Persist": {
        "short": "When this creature dies, if it had no -1/-1 counters on it, return it to the battlefield with a -1/-1 counter.",
        "long": "702.78a Persist is a triggered ability. “Persist” means “When this creature is put into a graveyard from the battlefield, if it had no -1/-1 counters on it, return it to the battlefield under its owner’s control with a -1/-1 counter on it.”"
    },
    "Retrace": {
        "short": "You may cast this card from your graveyard by discarding a land card in addition to paying its other costs.",
        "long": "702.71a Retrace appears on some instants and sorceries. It represents a static ability that functions while the card is in a player’s graveyard. “Retrace” means “You may cast this card from your graveyard by discarding a land card as an additional cost to cast it.”"
    },
    "Rebound": {
        "short": "If you cast this spell from your hand, exile it as it resolves. At the beginning of your next upkeep, you may cast it from exile without paying its mana cost.",
        "long": "702.87a Rebound appears on some instants and sorceries. It represents a static ability that functions while the spell is on the stack and may create a delayed triggered ability. “Rebound” means “If this spell was cast from your hand, instead of putting it into your graveyard as it resolves, exile it and, at the beginning of your next upkeep, you may cast this card from exile without paying its mana cost.”"
    },
    // Addition Batch 3
    "Miracle": {
        "short": "You may cast this card for its miracle cost when you draw it if it's the first card you drew this turn.",
        "long": "702.93a Miracle is a static ability linked to a triggered ability that functions while the card with miracle is in a player’s hand. “Miracle [cost]” means “You may reveal this card from your hand as you draw it if it’s the first card you’ve drawn this turn. When you reveal this card this way, you may cast it by paying [cost] rather than its mana cost.”"
    },
    "Overload": {
        "short": "You may cast this spell for its overload cost. If you do, change its text by replacing all instances of 'target' with 'each'.",
        "long": "702.95a Overload is a keyword that represents two static abilities that function while the spell with overload is on the stack. “Overload [cost]” means “You may choose to pay [cost] rather than pay this spell’s mana cost” and “If you chose to pay this spell’s overload cost, change its text by replacing all instances of the word ‘target’ with the word ‘each.’”"
    },
    "Outlast": {
        "short": "Pay the cost and tap this creature as a sorcery: Put a +1/+1 counter on it.",
        "long": "702.106a Outlast is an activated ability. “Outlast [cost]” means “[Cost], {T}: Put a +1/+1 counter on this creature. Activate only as a sorcery.”"
    },
    "Renown": {
        "short": "When this creature deals combat damage to a player, if it isn't renowned, put N +1/+1 counters on it and it becomes renowned.",
        "long": "702.111a Renown is a triggered ability. “Renown N” means “Whenever this creature deals combat damage to a player, if this creature isn’t renowned, put N +1/+1 counters on it and it becomes renowned.”"
    },
    "Myriad": {
        "short": "Whenever this creature attacks, for each opponent other than defending player, you may create a token copy that's attacking that opponent. Exile the tokens at end of combat.",
        "long": "702.115a Myriad is a triggered ability that functions while the creature with myriad is attacking. “Myriad” means “Whenever this creature attacks, for each opponent other than defending player, you may create a token that’s a copy of this creature that’s tapped and attacking that opponent. If you create one or more tokens this way, exile those tokens at end of combat.”"
    },
    "Soulshift": {
        "short": "When this creature dies, you may return target Spirit card with mana value N or less from your graveyard to your hand.",
        "long": "702.45a Soulshift is a triggered ability. “Soulshift N” means “When this creature is put into a graveyard from the battlefield, you may return target Spirit card with mana value N or less from your graveyard to your hand.”"
    },
    "Splice": {
        "short": "As you cast a spell, you may reveal this card from your hand and pay its splice cost. If you do, add this card's effects to that spell.",
        "long": "702.46a Splice is a static ability that functions while a card is in your hand. “Splice onto [subtype] [cost]” means “As you cast a [subtype] spell, you may reveal this card from your hand and pay [cost]. If you do, add this card’s text box to that spell and keep this card in your hand.”"
    },
    "Transmute": {
        "short": "Discard this card and pay its transmute cost: Search your library for a card with the same mana value, reveal it, and put it into your hand.",
        "long": "702.52a Transmute is an activated ability that functions only while the card with transmute is in a player’s hand. “Transmute [cost]” means “[Cost], Discard this card: Search your library for a card with the same mana value as the discarded card, reveal that card, and put it into your hand. Then shuffle your library. Activate only as a sorcery.”"
    },
    "Ripple": {
        "short": "When you cast this spell, you may reveal the top N cards of your library. You may cast any cards with the same name as this spell from among them without paying their mana costs.",
        "long": "702.59a Ripple is a triggered ability that functions only while the spell with ripple is on the stack. “Ripple N” means “When you cast this spell, you may reveal the top N cards of your library. You may cast any of those cards with the same name as this spell without paying their mana costs. Put the rest on the bottom of your library in any order.”"
    },
    "Transfigure": {
        "short": "Sacrifice this creature and pay its transfigure cost: Search your library for a creature card with the same mana value, put it onto the battlefield, then shuffle.",
        "long": "702.70a Transfigure is an activated ability that functions only while the creature with transfigure is on the battlefield. “Transfigure [cost]” means “[Cost], Sacrifice this permanent: Search your library for a creature card with the same mana value as this permanent and put it onto the battlefield. Then shuffle your library. Activate only as a sorcery.”"
    },
    "Undying": {
        "short": "When this creature dies, if it had no +1/+1 counters on it, return it to the battlefield with a +1/+1 counter.",
        "long": "702.92a Undying is a triggered ability. “Undying” means “When this creature is put into a graveyard from the battlefield, if it had no +1/+1 counters on it, return it to the battlefield under its owner’s control with a +1/+1 counter on it.”"
    },
    "Unleash": {
        "short": "You may have this creature enter the battlefield with a +1/+1 counter on it. It can't block as long as it has a +1/+1 counter on it.",
        "long": "702.97a Unleash is a keyword that represents two abilities. The first is a static ability that functions as the creature with unleash enters the battlefield. The second is a static ability that functions while the creature with unleash is on the battlefield. “Unleash” means “You may have this permanent enter the battlefield with a +1/+1 counter on it” and “This permanent can’t block as long as it has a +1/+1 counter on it.”"
    },
    "Assist": {
        "short": "Another player can pay any amount of generic mana of this spell's total cost.",
        "long": "702.131a Assist is a static ability that functions while the spell is on the stack. “Assist” means “As an additional cost to cast this spell, another player may pay any amount of generic mana of this spell’s total cost.”"
    },
    "Afterlife": {
        "short": "When this creature dies, create N 1/1 white and black Spirit creature tokens with flying.",
        "long": "702.134a Afterlife is a triggered ability. “Afterlife N” means “When this creature is put into a graveyard from the battlefield, create N 1/1 white and black Spirit creature tokens with flying.”"
    },
    "Escape": {
        "short": "You may cast this card from your graveyard by paying its escape cost and exiling other cards from your graveyard.",
        "long": "702.137a Escape represents a static ability that functions while the card with escape is in a player’s graveyard. “Escape—[cost], Exile [number] other cards from your graveyard” means “You may cast this card from your graveyard by paying [cost] and exiling [number] other cards from your graveyard rather than paying its mana cost.”"
    },
    "Fuse": {
        "short": "You may cast one or both halves of this split card from your hand.",
        "long": "702.101a Fuse is a static ability that functions while the card with fuse is in a player’s hand. “Fuse” means “If you cast this split card from your hand, you may choose to cast both halves of it rather than only one of them. Its mana cost is the total mana cost of its halves.”"
    },
    "Ingest": {
        "short": "Whenever this creature deals combat damage to a player, that player exiles the top card of their library.",
        "long": "702.114a Ingest is a triggered ability. “Ingest” means “Whenever this creature deals combat damage to a player, that player exiles the top card of their library.”"
    },
    "Improvise": {
        "short": "Your artifacts can help cast this spell. Each artifact you tap while casting this spell pays for {1}.",
        "long": "702.125a Improvise is a static ability that functions while the spell with improvise is on the stack. “Improvise” means “For each generic mana in this spell’s total cost, you may tap an untapped artifact you control rather than pay that mana.”"
    },
    "Partner": {
        "short": "You can have two commanders if both have partner.",
        "long": "702.123a Partner is a static ability that functions during the deck construction and at the beginning of the game. “Partner” means “You can have two commanders if both have partner.”"
    },
    "Tribute": {
        "short": "As this creature enters the battlefield, an opponent of your choice may put N +1/+1 counters on it. If they don't, another effect happens.",
        "long": "702.103a Tribute is a static ability that functions as the creature with tribute is entering the battlefield. “Tribute N” means “As this creature enters the battlefield, an opponent of your choice may place N +1/+1 counters on it.”"
    },
    "Surge": {
        "short": "You may cast this spell for its surge cost if you or a teammate has cast another spell this turn.",
        "long": "702.116a Surge is a keyword that represents two static abilities. “Surge [cost]” means “You may pay [cost] rather than pay this spell’s mana cost” and “You may pay this spell’s surge cost only if you or a teammate has cast another spell this turn.”"
    },
    "Skulk": {
        "short": "This creature can't be blocked by creatures with greater power.",
        "long": "702.117a Skulk is an evasion ability. “Skulk” means “This creature can’t be blocked by creatures with power greater than this creature’s power.”"
    },
    "Riot": {
        "short": "This creature enters the battlefield with your choice of a +1/+1 counter or haste.",
        "long": "702.135a Riot is a static ability. “Riot” means “This permanent enters the battlefield with your choice of a +1/+1 counter or haste.”"
    },
    "Spectacle": {
        "short": "You may cast this spell for its spectacle cost rather than its mana cost if an opponent lost life this turn.",
        "long": "702.133a Spectacle is a static ability that functions while the spell with spectacle is on the stack. “Spectacle [cost]” means “You may pay [cost] rather than pay this spell’s mana cost if an opponent lost life this turn.”"
    },
    // Addition Batch 4 (Keyword Actions & Final Abilities)
    "Adapt": {
        "short": "If this creature has no +1/+1 counters on it, put N +1/+1 counters on it.",
        "long": "701.43a To adapt N means: If this creature has no +1/+1 counters on it, put N +1/+1 counters on it."
    },
    "Amass": {
        "short": "Put N +1/+1 counters on an Army creature you control. If you don't control one, create a 0/0 Zombie Army creature token first.",
        "long": "701.44a To amass N means: If you don’t control an Army creature, create a 0/0 black Zombie Army creature token. Then choose an Army creature you control. Put N +1/+1 counters on that creature. If it isn’t already a Zombie, it becomes a Zombie in addition to its other types."
    },
    "Bolster": {
        "short": "Choose a creature you control with the least toughness and put N +1/+1 counters on it.",
        "long": "701.33a To bolster N means: Choose a creature with the least toughness among creatures you control. If two or more creatures are tied for least toughness, choose one of them. Put N +1/+1 counters on that creature."
    },
    "Clash": {
        "short": "You and an opponent each reveal the top card of your library. The player with the highest mana value wins.",
        "long": "701.23a To clash with an opponent, you and that opponent each reveal the top card of your library, then you each put that card on either the top or bottom of your library. A player wins the clash if their revealed card had a higher mana value than each other revealed card."
    },
    "Cloak": {
        "short": "Put a card onto the battlefield face down as a 2/2 creature with ward {2}. You can turn it face up for its mana cost if it's a creature card.",
        "long": "701.56a To cloak a card, a player puts it onto the battlefield face down as a 2/2 creature with ward {2} and no name, no subtypes, and no mana cost."
    },
    "Collect Evidence": {
        "short": "Exile cards from your graveyard with total mana value N or greater.",
        "long": "701.57a To collect evidence N, a player exiles any number of cards from their graveyard with total mana value N or greater."
    },
    "Connive": {
        "short": "Draw a card, then discard a card. If you discarded a nonland card, put a +1/+1 counter on this creature.",
        "long": "701.50a A creature connives if its controller draws a card, then discards a card. If a nonland card was discarded this way, that creature gets a +1/+1 counter."
    },
    "Discover": {
        "short": "Exile cards from the top of your library until you exile a nonland card with mana value N or less. Cast it for free or put it into your hand.",
        "long": "701.55a To discover N, a player exiles cards from the top of their library until they exile a nonland card with mana value N or less. They may cast that card without paying its mana cost. If they don’t cast it, they put it into their hand. Then they put the rest of the exiled cards on the bottom of their library in a random order."
    },
    "Explore": {
        "short": "Reveal the top card of your library. Put it into your hand if it's a land. Otherwise, put a +1/+1 counter on this creature, then put the card back or into your graveyard.",
        "long": "701.40a A creature explores if its controller reveals the top card of their library. If a land card is revealed this way, its controller puts that card into their hand. Otherwise, that creature gets a +1/+1 counter and its controller may put the revealed card into their graveyard."
    },
    "Incubate": {
        "short": "Create an Incubator token with N +1/+1 counters. It can transform into a 0/0 Phyrexian creature for {2}.",
        "long": "701.53a To incubate N, a player creates an Incubator token with N +1/+1 counters on it. It’s a colorless artifact with “{2}: Transform this artifact.”"
    },
    "Learn": {
        "short": "You may reveal a Lesson card you own from outside the game and put it into your hand, or discard a card to draw a card.",
        "long": "701.48a To learn, a player may reveal a Lesson card they own from outside the game and put it into their hand, or discard a card. If they discard a card, they draw a card."
    },
    "Manifest": {
        "short": "Put the top card of your library onto the battlefield face down as a 2/2 creature. You can turn it face up for its mana cost if it's a creature card.",
        "long": "701.34a To manifest a card, a player puts the top card of their library onto the battlefield face down as a 2/2 creature with no name, no subtypes, and no mana cost."
    },
    "Regenerate": {
        "short": "The next time this permanent would be destroyed this turn, it isn't. Instead, tap it, remove all damage from it, and remove it from combat.",
        "long": "701.15a To “regenerate [permanent]” means to create a replacement effect that protects that permanent from destruction. 701.15b “The next time [permanent] would be destroyed this turn, instead remove all damage marked on it and its controller taps it. If it’s an attacking or blocking creature, remove it from combat.”"
    },
    "Support": {
        "short": "Put a +1/+1 counter on each of up to N other target creatures.",
        "long": "701.35a To “support N” means to put a +1/+1 counter on each of up to N other target creatures."
    },
    "The Ring Tempts You": {
        "short": "Assign a creature as your Ring-bearer and gain abilities from 'The Ring' emblem.",
        "long": "701.52a To have the Ring tempt you, first choose a creature you control to become your Ring-bearer. Then the Ring gains its next ability and you get 'The Ring' emblem if you don't have it."
    },
    "Venture into the Dungeon": {
        "short": "Enter a dungeon or move to the next room of your current dungeon.",
        "long": "701.46a To venture into the dungeon, a player enters the first room of a dungeon or moves into the next room of a dungeon they are already in."
    },
    "Toxic": {
        "short": "Players dealt combat damage by this creature also get N poison counters.",
        "long": "702.164a Toxic is a static ability. “Toxic N” means “Players dealt combat damage by this creature also each get N poison counters.”"
    },
    "Training": {
        "short": "Whenever this creature attacks with a creature with greater power, put a +1/+1 counter on this creature.",
        "long": "702.149a Training is a triggered ability. “Training” means “Whenever this creature attacks with another creature with power greater than this creature’s power, put a +1/+1 counter on this creature.”"
    }
};

const KEYWORDS_DATA = Object.keys(KEYWORDS_RAW).reduce((acc, key) => {
    acc[key.toLowerCase()] = KEYWORDS_RAW[key];
    return acc;
}, {});
