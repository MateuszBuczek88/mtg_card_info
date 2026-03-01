/**
 * MTG Keywords Data - Spanish (Español)
 * Localized definitions for MTG keywords.
 */

const KEYWORDS_RAW_ES = {
    "Flying": {
        "short": "No puede ser bloqueada excepto por criaturas con la habilidad de volar o alcance.",
        "long": "702.9a Volar es una habilidad de evasión. 702.9b Una criatura con volar no puede ser bloqueada excepto por criaturas con volar y/o alcance. Una criatura con volar puede bloquear una criatura con o sin la habilidad de volar."
    },
    "First strike": {
        "short": "Daña primero. Esta criatura hace daño de combate antes que las criaturas sin esta habilidad.",
        "long": "702.7a Dañar primero es una habilidad estática que modifica las reglas del paso de daño de combate. 702.7b Si al menos una criatura atacante o bloqueadora tiene la habilidad de dañar primero o dañar dos veces al comenzar el paso de daño de combate, las únicas criaturas que asignan daño de combate en ese paso są las que tienen dañar primero o dañar dos veces."
    },
    "Double strike": {
        "short": "Daña dos veces. Esta criatura hace tanto daño de primer golpe como daño de combate normal.",
        "long": "702.4a Dañar dos veces es una habilidad estática que modifica las reglas del paso de daño de combate. 702.4b Si al menos una criatura atacante o bloqueadora tiene la habilidad de dañar primero o dañar dos veces, la fase tiene un segundo paso de daño de combate."
    },
    "Deathtouch": {
        "short": "Cualquier cantidad de daño que esta criatura haga a otra criatura es suficiente para destruirla.",
        "long": "702.2a Toque mortal es una habilidad estática. 702.2b Cualquier cantidad de daño de combate distinto de cero asignado a una criatura por una fuente con toque mortal se considera daño letal para los propósitos de determinar si una criatura es destruida."
    },
    "Lifelink": {
        "short": "El daño hecho por esta criatura también hace que ganes esa misma cantidad de vida.",
        "long": "702.15a Vínculo vital es una habilidad estática. 702.15b El daño hecho por una fuente con vínculo vital hace que el controlador de esa fuente (o su propietario si no tiene controlador) gane una cantidad de vida igual a la cantidad de daño hecho."
    },
    "Haste": {
        "short": "Prisa. Esta criatura puede atacar y {T} en cuanto entra bajo tu control.",
        "long": "702.10a Prisa es una habilidad estática. 702.10b Si una criatura tiene prisa, puede atacar aunque no haya estado bajo el control de su controlador desde el comienzo de su turno más reciente."
    },
    "Trample": {
        "short": "Arrollar. Esta criatura puede asignar el daño de combate sobrante al jugador o planeswalker defensor.",
        "long": "702.19a Arrollar es una habilidad estática que modifica las reglas para asignar daño de combate. 702.19b El controlador de una criatura atacante con arrollar asigna primero el daño a las criaturas que la bloquean. Una vez que todas esas criaturas bloqueadoras han recibido daño letal, cualquier daño restante se asigna según el controlador elija entre esas criaturas bloqueadoras y el jugador o planeswalker al que la criatura está atacando."
    },
    "Vigilance": {
        "short": "Vigilancia. Atacar no hace que esta criatura se gire.",
        "long": "702.20a Vigilancia es una habilidad estática. 702.20b Atacar no hace que una criatura con vigilancia se gire."
    },
    "Reach": {
        "short": "Alcance. Esta criatura puede bloquear criaturas con la habilidad de volar.",
        "long": "702.17a Alcance es una habilidad estática. 702.17b Una criatura con alcance puede bloquear una criatura con volar."
    },
    "Indestructible": {
        "short": "No puede ser destruido por daño ni por efectos que digan \"destruir\".",
        "long": "702.12a Indestructible es una habilidad estática. 702.12b Un permanente con indestructible no puede ser destruido. Tales permanentes no son destruidos por daño letal e ignoran la acción basada en el estado que comprueba el daño letal."
    },
    "Menace": {
        "short": "Menaza. No puede ser bloqueada excepto por dos o más criaturas.",
        "long": "702.110a Menaza es una habilidad de evasión. 702.110b Una criatura con menaza no puede ser bloqueada excepto por dos o más criaturas."
    },
    "Ward": {
        "short": "Velo. Siempre que este permanente sea objetivo de un hechizo o habilidad que controla un oponente, contrarréstalo a menos que ese jugador pague el coste.",
        "long": "702.21a Velo es una habilidad disparada. “Velo [coste]” significa “Siempre que este permanente sea objetivo de un hechizo o habilidad que controla un oponente, contrarresta ese hechizo o habilidad a menos que ese jugador pague [coste]”."
    },
    "Flash": {
        "short": "Destello. Puedes jugar esta carta en cualquier momento en que pudieras lanzar un instantáneo.",
        "long": "702.8a Destello es una habilidad estática. 702.8b “Destello” significa “Puedes jugar esta carta en cualquier momento en que pudieras lanzar un instantáneo”."
    },
    "Defender": {
        "short": "Defensor. Esta criatura no puede atacar.",
        "long": "702.3a Defensor es una habilidad estática. 702.3b Una criatura con defensor no puede atacar."
    },
    "Hexproof": {
        "short": "Antimaleficio. No puede ser objetivo de hechizos o habilidades que controlan tus oponentes.",
        "long": "702.11a Antimaleficio es una habilidad estática. 702.11b “Antimaleficio” en un permanente significa “Este permanente no puede ser objetivo de hechizos o habilidades que controlan tus oponentes”."
    },
    "Infect": {
        "short": "Infectar. Hace daño a las criaturas en forma de contadores -1/-1 y a los jugadores en forma de contadores de veneno.",
        "long": "702.90a Infectar es una habilidad estática. 702.90b El daño hecho a un jugador por una fuente con infectar no hace que ese jugador pierda vida; en su lugar, hace que el controlador de esa fuente le dé al jugador esa misma cantidad de contadores de veneno."
    },
    "Scry": {
        "short": "Adivinar N. Mira las N primeras cartas de tu biblioteca, pon cualquier cantidad en el fondo y el resto en la parte superior en cualquier orden.",
        "long": "701.18a “Adivinar N” significa mirar las N primeras cartas de tu biblioteca, luego poner cualquier cantidad de ellas en el fondo de tu biblioteca en cualquier orden y el resto en la parte superior en cualquier orden."
    },
    "Surveil": {
        "short": "Vigilar N. Mira las N primeras cartas de tu biblioteca, pon cualquier cantidad en tu cementerio y el resto en la parte superior en cualquier orden.",
        "long": "701.42a “Vigilar N” significa mirar las N primeras cartas de tu biblioteca, luego poner cualquier cantidad de ellas en tu cementerio y el resto en la parte superior de su biblioteca en cualquier orden."
    },
    "Mill": {
        "short": "Girar N. Pon las N primeras cartas de tu biblioteca directamente en tu cementerio.",
        "long": "701.13a Para girar N cartas, un jugador pone las N primeras cartas de su biblioteca en su cementerio."
    },
    "Storm": {
        "short": "Tormenta. Cuando lances este hechizo, cópialo por cada hechizo lanzado antes que él en este turno.",
        "long": "702.40a Tormenta es una habilidad disparada que funciona en la pila. “Tormenta” significa “Cuando lances este hechizo, pon una copia de él en la pila por cada otro hechizo que se haya lanzado antes que él en este turno”."
    },
    "Living weapon": {
        "short": "Arma viviente. Cuando este equipo entre al campo de batalla, crea una ficha de criatura Germen negra 0/0 y anéxale esto.",
        "long": "702.92a Arma viviente es una habilidad disparada. “Arma viviente” significa “Cuando este equipo entre al campo de batalla, crea una ficha de criatura Germen negra 0/0, luego anexa este equipo a ella”."
    },
    "Prowess": {
        "short": "Destreza. Siempre que lances un hechizo que no sea de criatura, esta criatura obtiene +1/+1 hasta el final del turno.",
        "long": "702.108a Destreza es una habilidad disparada. “Destreza” significa “Siempre que lances un hechizo que no sea de criatura, esta criatura obtiene +1/+1 hasta el final del turno”."
    },
    "Protection": {
        "short": "Protección contra [calidad]. Este permanente no puede ser objetivo, anexado, bloqueado ni recibir daño de fuentes con la calidad especificada.",
        "long": "702.16a Protección es una habilidad estática. Significa: Previene todo el daño de [calidad], no puede ser Anexado por [calidad], no puede ser Bloqueado por [calidad], no puede ser Objetivo de [calidad]. (DEBT)"
    }
};

const KEYWORDS_DATA_ES = Object.keys(KEYWORDS_RAW_ES).reduce((acc, key) => {
    acc[key.toLowerCase()] = KEYWORDS_RAW_ES[key];
    return acc;
}, {});
