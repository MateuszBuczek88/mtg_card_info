// Spanish Keywords Data
// KEYWORDS_DATA_ES uses the same English keys for lookup
let KEYWORDS_DATA_ES = {};

const KEYWORDS_RAW_ES = {
    // 701. Keyword Actions
    "activate": {
        "short": "Activar una habilidad es ponerla en la pila y pagar sus costes.",
        "long": "701.2a Activar una habilidad activada es ponerla en la pila y pagar sus costes, para que finalmente se resuelva y tenga su efecto."
    },
    "attach": {
        "short": "Anexar una Aura, Equipo o Fortificación a un objeto o jugador.",
        "long": "701.3a Anexar una Aura, Equipo o Fortificación a un objeto o jugador significa tomarlo de donde está actualmente y ponerlo en ese objeto o jugador."
    },
    "behold": {
        "short": "Revela una carta de tu mano o elige un permanente con una cualidad específica.",
        "long": "701.4a “Observar un [cualidad]” significa “Revela una carta de [cualidad] de tu mano o elige un permanente de [cualidad] que controles en el campo de batalla”."
    },
    "cast": {
        "short": "Pon un hechizo en la pila y paga sus costes.",
        "long": "701.5a Lanzar un hechizo es tomarlo de la zona en la que se encuentra (generalmente la mano), ponerlo en la pila y pagar sus costes."
    },
    "counter": {
        "short": "Cancela un hechizo o habilidad para que no se resuelva.",
        "long": "701.6a Contrarrestar un hechizo o habilidad significa cancelarlo, eliminándolo de la pila. No se resuelve y ninguno de sus efectos ocurre."
    },
    "create": {
        "short": "Pon una ficha en el campo de batalla.",
        "long": "701.7a Crear una o más fichas con ciertas características significa poner el número especificado de fichas en el campo de batalla."
    },
    "destroy": {
        "short": "Mueve un permanente del campo de batalla al cementerio de su propietario.",
        "long": "701.8a Destruir un permanente es moverlo del campo de batalla al cementerio de su propietario."
    },
    "discard": {
        "short": "Mueve una carta de tu mano a tu cementerio.",
        "long": "701.9a Descartar una carta es moverla de la mano de su propietario al cementerio de ese jugador."
    },
    "double": {
        "short": "Aumenta un valor (vida, fuerza, contadores) al doble de su cantidad actual.",
        "long": "701.10e Duplicar el número de contadores significa darle a ese jugador o permanente tantos de esos contadores como ya tenga."
    },
    "triple": {
        "short": "Aumenta un valor al triple de su cantidad actual.",
        "long": "701.11b Triplicar la fuerza de una criatura hace que obtenga +X/+0, donde X es el doble de su fuerza mientras se resuelve la habilidad."
    },
    "exchange": {
        "short": "Intercambia el control, los totales de vida u objetos.",
        "long": "701.12a Un hechizo o habilidad puede indicar a los jugadores que intercambien algo (por ejemplo, totales de vida o el control de dos permanentes)."
    },
    "exile": {
        "short": "Mueve un objeto a la zona de exilio.",
        "long": "701.13a Exiliar un objeto es moverlo a la zona de exilio desde donde sea que esté."
    },
    "fight": {
        "short": "Dos criaturas se infligen mutuamente daño igual a su fuerza.",
        "long": "701.14a Cada una de esas criaturas inflige daño igual a su fuerza a la otra criatura. Esto no es daño de combate."
    },
    "goad": {
        "short": "La criatura ataca si puede y ataca a un jugador que no seas tú si puede.",
        "long": "701.15b Una criatura incitada ataca en cada combate si puede y ataca a un jugador que no sea el controlador del efecto de incitación si puede."
    },
    "investigate": {
        "short": "Crea una ficha de Pista (artefacto con \"{2}, sacrificar: roba una carta\").",
        "long": "701.16a “Investigar” significa “Crea una ficha de Pista”."
    },
    "mill": {
        "short": "Pon cartas de la parte superior de la biblioteca en el cementerio.",
        "long": "701.17a Para que un jugador moler un número de cartas, pone esa cantidad de cartas de la parte superior de su biblioteca en su cementerio."
    },
    "play": {
        "short": "Pon una tierra en el campo de batalla o lanza una carta como hechizo.",
        "long": "701.18b Jugar una carta significa jugarla como una tierra o lanzarla como un hechizo, según sea apropiado."
    },
    "regenerate": {
        "short": "La próxima vez que esto fuera a ser destruido, no lo es. En su lugar, gíralo y quítalo del combate.",
        "long": "701.19a “Regenerar [permanente]” significa “La próxima vez que el [permanente] fuera a ser destruido este turno, en su lugar gíralo y quítalo del combate”."
    },
    "reveal": {
        "short": "Muestra una carta a todos los jugadores.",
        "long": "701.20a Revelar una carta es mostrar esa carta a todos los jugadores por un breve tiempo."
    },
    "sacrifice": {
        "short": "Mueve un permanente que controles al cementerio de su propietario.",
        "long": "701.21a Sacrificar un permanente es moverlo del campo de batalla directamente al cementerio de su propietario."
    },
    "scry": {
        "short": "Mira las N mejores cartas de la biblioteca, pon cualquier número en la parte inferior y el resto en la parte superior.",
        "long": "701.22a “Adivinar N” significa mirar las N cartas superiores de tu biblioteca, luego poner cualquier número en la parte inferior y el resto en la parte superior."
    },
    "search": {
        "short": "Busca en una zona para encontrar una carta específica.",
        "long": "701.23a Buscar una carta en una zona es mirar todas las cartas en esa zona para encontrar una carta que coincida con la descripción."
    },
    "shuffle": {
        "short": "Aleatoriza las cartas dentro de una biblioteca o montón.",
        "long": "701.24a Barajar una biblioteca o un montón de cartas boca abajo es aleatorizar las cartas que contiene."
    },
    "surveil": {
        "short": "Mira las N mejores cartas, pon cualquiera en el cementerio y el resto en la parte superior.",
        "long": "701.25a “Vigilar N” significa mirar las N cartas superiores de tu biblioteca, luego poner cualquiera en tu cementerio y el resto en la parte superior."
    },
    "tap": {
        "short": "Gira un permanente de lado para mostrar que ha sido utilizado.",
        "long": "701.26a Girar un permanente es ponerlo de lado. No se puede volver a girar a menos que se enderece."
    },
    "untap": {
        "short": "Gira un permanente a su posición vertical.",
        "long": "701.26b Enderezar un permanente es devolverlo a su posición vertical."
    },
    "transform": {
        "short": "Da la vuelta a un permanente de dos caras a su otra cara.",
        "long": "701.27a Transformar un permanente es darle la vuelta para que su otra cara quede hacia arriba."
    },
    "convert": {
        "short": "Da la vuelta a un permanente de dos caras (mecánica de Transformers).",
        "long": "701.28a Convertir un permanente es girarlo para que su otra cara quede hacia arriba. Esto sigue las reglas de transformación."
    },
    "fateseal": {
        "short": "Mira las N mejores cartas de la biblioteca de un oponente, pon cualquiera en la parte inferior.",
        "long": "701.29a “Sellar el destino N” significa mirar las N cartas superiores de la biblioteca de un oponente, luego poner cualquier número en la parte inferior."
    },
    "clash": {
        "short": "Tú y un oponente reveláis cartas superiores; el valor de mana más alto gana.",
        "long": "701.30b “Justar con un oponente” significa “Elige un oponente. Tú y ese oponente reveláis la carta superior de vuestra biblioteca. Gana la que tenga mayor MV”."
    },
    "planeswalk": {
        "short": "Muévete a un plano diferente en un juego de Planechase.",
        "long": "701.31b Caminar por los planos es mover la carta superior de tu mazo de planos a la parte inferior y poner la siguiente boca arriba."
    },
    "set in motion": {
        "short": "Activa una carta de ardid en un juego de Archenemy.",
        "long": "701.32b Poner un ardid en marcha es quitarlo de la parte superior de tu mazo de ardides y ponerlo boca arriba."
    },
    "abandon": {
        "short": "Desactiva un ardid en curso.",
        "long": "701.33b Abandonar un ardid es ponerlo boca abajo y ponerlo en la parte inferior del mazo de ardides de su propietario."
    },
    "proliferate": {
        "short": "Da otro contador a cualquier número de jugadores y/o permanentes que ya tengan contadores.",
        "long": "701.34a Proliferar significa elegir cualquier número de permanentes y/o jugadores con un contador, y dar a cada uno otro contador de cada tipo que ya tengan."
    },
    "detain": {
        "short": "El permanente no puede atacar, bloquear ni usar habilidades activadas hasta tu próximo turno.",
        "long": "701.35a Hasta tu próximo turno, ese permanente no puede atacar ni bloquear y sus habilidades activadas no pueden activarse."
    },
    "populate": {
        "short": "Crea una ficha que sea una copia de una ficha de criatura que controles.",
        "long": "701.36a Poblar significa elegir una ficha de criatura que controles y crear una ficha que sea una copia de ella."
    },
    "monstrosity": {
        "short": "Si no es monstruoso, ponle N contadores +1/+1 y se vuelve monstruoso.",
        "long": "701.37a “Monstruosidad N” significa “Si este permanente no es monstruoso, ponle N contadores +1/+1 y se vuelve monstruoso”."
    },
    "vote": {
        "short": "Los jugadores eligen entre los resultados.",
        "long": "701.38a Cada jugador, por orden de turno, elige una de las opciones disponibles."
    },
    "bolster": {
        "short": "Pon N contadores +1/+1 en tu criatura con la menor resistencia.",
        "long": "701.39a Elige una criatura que controles con la menor resistencia y ponle N contadores +1/+1."
    },
    "manifest": {
        "short": "Pon la carta superior de la biblioteca boca abajo como una criatura 2/2. Dale la vuelta por su coste de maná si es una carta de criatura.",
        "long": "701.40a Manifestar una carta es ponerla boca abajo. Se convierte en una carta de criatura boca abajo 2/2 sin texto."
    },
    "support": {
        "short": "Pon un contador +1/+1 en cada una de hasta N otras criaturas objetivo.",
        "long": "701.41a “Apoyo N” en un permanente significa “Pon un contador +1/+1 en cada una de hasta N otras criaturas objetivo”."
    },
    "meld": {
        "short": "Exilia dos cartas y devuélvelas como un permanente grande combinado.",
        "long": "701.42a Combinar es poner dos cartas en el campo de batalla con sus caras traseras hacia arriba y combinadas en un solo objeto."
    },
    "exert": {
        "short": "Elige que un permanente no se enderece durante el próximo paso de enderezar a cambio de un beneficio.",
        "long": "701.43a Esforzar un permanente es elegir que no se enderece durante tu próximo paso de enderezar."
    },
    "explore": {
        "short": "Revela la carta superior: ponla en tu mano si es tierra. Si no, pon un contador +1/+1 en esto.",
        "long": "701.44a Revela la carta superior. Si es tierra, ponla en tu mano. Si no, pon un contador +1/+1 en la criatura y puedes dejarla o cementeriarla."
    },
    "assemble": {
        "short": "Pon un artilugio en el campo de batalla desde tu mazo de artilugios.",
        "long": "701.45a Ensamblar es una acción de palabra clave que pone artilugios en el campo de batalla. (Mecánica de Un-set)."
    },
    "adapt": {
        "short": "Si no tiene contadores +1/+1, ponle N contadores +1/+1.",
        "long": "701.46a “Adaptar N” significa “Si este permanente no tiene contadores +1/+1, ponle N contadores +1/+1”."
    },
    "amass": {
        "short": "Pon N contadores +1/+1 en un Ejército que controles o crea primero un Ejército 0/0.",
        "long": "701.47a Si no controles un Ejército, crea una ficha 0/0. Luego pon N contadores +1/+1 en un Ejército que controles."
    },
    "learn": {
        "short": "Descarta para robar, o busca una carta de Lección fuera del juego.",
        "long": "701.48a “Aprender” significa “Puedes descartar una carta. Si lo haces, roba. Si no, revela una carta de Lección de tu sideboard”."
    },
    "venture into the dungeon": {
        "short": "Muévete a la siguiente habitación de una mazmorra o comienza una nueva.",
        "long": "701.49a Entra en una mazmorra o mueve tu marcador de mazmorra a una habitación adyacente en tu mazmorra actual."
    },
    "connive": {
        "short": "Roba, luego descarta. Descartar una carta que no sea tierra otorga un contador +1/+1.",
        "long": "701.50a Roba una carta, luego descarta. Si descartas una carta que no sea tierra, pon un contador +1/+1 en el permanente."
    },
    "open an attraction": {
        "short": "Pon la carta superior del mazo de atracciones en juego.",
        "long": "701.51b Mueve la carta superior de tu mazo de atracciones al campo de batalla."
    },
    "roll to visit your attractions": {
        "short": "Tira un d6 para ver qué atracciones se activan.",
        "long": "701.52a Tira un dado de seis caras. Las atracciones con el número correspondiente iluminado son “visitadas”."
    },
    "incubate": {
        "short": "Crea una ficha de Incubadora con N contadores +1/+1 (se transforma por {2}).",
        "long": "701.53a Crea una ficha de Incubadora con N contadores +1/+1. Se transforma en una criatura Fierexiana 0/0."
    },
    "the ring tempts you": {
        "short": "Elige un Portador del Anillo y gana el siguiente nivel del poder del Anillo.",
        "long": "701.54a Elige una criatura para que sea tu Portador del Anillo y gana habilidades del emblema del Anillo."
    },
    "face a villainous choice": {
        "short": "Elige uno de los dos malos resultados ofrecidos por un oponente.",
        "long": "701.55a Elige entre la opción A o la opción B proporcionadas por un hechizo o habilidad."
    },
    "time travel": {
        "short": "Agrega o quita contadores de tiempo de permanentes o cartas suspendidas.",
        "long": "701.56a Elige cualquier número de permanentes o cartas suspendidas con contadores de tiempo y agrega o quita uno."
    },
    "discover": {
        "short": "Exilia cartas hasta que sea una que no sea tierra con MV ≤ N. Lánzala gratis o ponla en tu mano.",
        "long": "701.57a “Descubrir N” significa exiliar cartas hasta que sea una que no sea tierra con MV ≤ N. Puedes lanzarla gratis o ponerla en tu mano."
    },
    "cloak": {
        "short": "Ponlo boca abajo como una criatura 2/2 con ward {2}. Dale la vuelta por su coste si es una carta de criatura.",
        "long": "701.58a Ponlo boca abajo. Es una criatura 2/2 con ward {2}. Dale la vuelta por su coste de maná si es una carta de criatura."
    },
    "collect evidence": {
        "short": "Exilia cartas del cementerio con un MV total ≥ N.",
        "long": "701.59a Exilia cualquier número de cartas de tu cementerio con un valor de maná total N o superior."
    },
    "suspect": {
        "short": "Una criatura sospechosa tiene amenaza y no puede bloquear.",
        "long": "701.60c Un permanente sospechoso tiene amenaza y “Esta criatura no puede bloquear”."
    },
    "forage": {
        "short": "Exilia 3 cartas del cementerio o sacrifica una Comida.",
        "long": "701.61a “Forrajear” significa exiliar tres cartas de tu cementerio o sacrificar una Comida."
    },
    "manifest dread": {
        "short": "Mira las 2 mejores: manifiesta una, pon la otra en el cementerio.",
        "long": "701.62a Mira las dos cartas superiores. Manifiesta una y pon la otra en tu cementerio."
    },
    "endure": {
        "short": "Pon N contadores +1/+1 en esto o crea una ficha N/N.",
        "long": "701.63a Crea una ficha de Espíritu N/N a menos que pongas N contadores +1/+1 en este permanente."
    },
    "harness": {
        "short": "Marca este permanente como \"aprovechado\" para habilitar otras habilidades.",
        "long": "701.64a “Aprovechar” significa que este permanente se vuelve aprovechado si aún no lo está."
    },
    "airbend": {
        "short": "Exilia objetos; el propietario puede lanzarlos por {2}.",
        "long": "701.65a Exilia esos objetos. El propietario puede lanzarlos pagando {2} en lugar de su coste de maná."
    },
    "earthbend": {
        "short": "La tierra se convierte en criatura con N contadores y prisa.",
        "long": "701.66a La tierra se convierte en una criatura 0/0 con prisa y N contadores +1/+1."
    },
    "waterbend": {
        "short": "Gira artefactos/criaturas para pagar maná genérico en un coste.",
        "long": "701.67a Puedes girar un artefacto o criatura enderezado que controles por cada maná genérico en el coste."
    },
    "blight": {
        "short": "Pon N contadores -1/-1 en una criatura que controles.",
        "long": "701.68a “Plaga N” significa poner N contadores -1/-1 en una criatura que controles."
    },

    // 702. Keyword Abilities
    "deathtouch": {
        "short": "Cualquier cantidad de daño que esto inflija a una criatura es suficiente para destruirla.",
        "long": "702.2a Toque mortal es una habilidad estática. Cualquier daño de combate infligido a una criatura se considera letal."
    },
    "defender": {
        "short": "Esta criatura no puede atacar.",
        "long": "702.3a Defensor es una habilidad estática. Una criatura con defensor no puede atacar."
    },
    "double strike": {
        "short": "Inflige tanto daño de combate de dañar primero como normal.",
        "long": "702.4a Dañar dos veces inflige daño en dos pasos de daño de combate diferentes."
    },
    "enchant": {
        "short": "Restringe lo que un hechizo de Aura puede elegir como objetivo o a lo que puede anexarse.",
        "long": "702.5a Escrito “Encantar [objeto]”, define los objetivos y anexos legales para una Aura."
    },
    "equip": {
        "short": "Anexa esto a una criatura que controles. Actívalo solo como conjuro.",
        "long": "702.6a “[Coste]: Anexa esto a la criatura objetivo que controles. Actívalo solo como conjuro”."
    },
    "first strike": {
        "short": "Inflige daño de combate antes que las criaturas sin dañar primero.",
        "long": "702.7a Dañar primero inflige daño solo en el primer paso de daño de combate."
    },
    "flash": {
        "short": "Puedes jugar esta carta en cualquier momento en que pudieras lanzar un instantáneo.",
        "long": "702.8a Destello significa “Puedes jugar esta carta en cualquier momento en que pudieras lanzar un instantáneo”."
    },
    "flying": {
        "short": "No puede ser bloqueado excepto por criaturas con volar o alcance.",
        "long": "702.9a Volar es una habilidad de evasión. Solo puede ser bloqueada por criaturas con volar o alcance."
    },
    "haste": {
        "short": "Puede atacar y {T} tan pronto como entre bajo tu control.",
        "long": "702.10a Prisa permite atacar y usar habilidades de girar inmediatamente."
    },
    "hexproof": {
        "short": "No puede ser el objetivo de hechizos o habilidades que controlen tus oponentes.",
        "long": "702.11a “Antimaleficio” significa que tus oponentes no pueden elegir este permanente o jugador como objetivo."
    },
    "indestructible": {
        "short": "No puede ser destruido por daño ni por efectos que digan \"destruir\".",
        "long": "702.12b Un permanente con indestructible no puede ser destruido, incluido por daño letal."
    },
    "intimidate": {
        "short": "No puede ser bloqueado excepto por criaturas artefacto y/o criaturas que compartan un color.",
        "long": "702.13a Intimidar es una habilidad de evasión basada en compartir colores o ser artefacto."
    },
    "landwalk": {
        "short": "Es imbloqueable si el jugador defensor controla una tierra del tipo especificado.",
        "long": "702.14a Incluye cruzar llanuras, islas, pantanos, montañas, bosques, etc."
    },
    "lifelink": {
        "short": "El daño infligido por esta fuente también hace que ganes esa misma cantidad de vida.",
        "long": "702.15b El daño infligido por esta fuente hace que su controlador gane esa misma cantidad de vida."
    },
    "protection": {
        "short": "No puede recibir daño, ser encantado, equipado, bloqueado o elegido como objetivo por [cualidad].",
        "long": "702.16a A menudo se resume como DEBT: Daño, Encantar, Bloquear, objetivo (Target)."
    },
    "reach": {
        "short": "Puede bloquear criaturas con volar.",
        "long": "702.17a Alcance permite a una criatura bloquear voladoras aunque no tenga volar."
    },
    "shroud": {
        "short": "No puede ser el objetivo de hechizos o habilidades.",
        "long": "702.18a Velo impide que cualquier jugador elija el permanente o jugador como objetivo."
    },
    "trample": {
        "short": "Puede infligir el daño de combate sobrante al jugador o planeswalker que esté atacando.",
        "long": "702.19a El daño sobrante se asigna al jugador/planeswalker después de asignar daño letal a los bloqueadores."
    },
    "vigilance": {
        "short": "Atacar no hace que esta criatura se gire.",
        "long": "702.20a Vigilancia permite que una criatura ataque sin girarse."
    },
    "ward": {
        "short": "Contrarresta hechizos que elijan esto como objetivo a menos que se pague un coste.",
        "long": "702.21a “Protección [coste]” contrarresta un hechizo o habilidad de un oponente a menos que pague el [coste]."
    },
    "banding": {
        "short": "Las criaturas pueden atacar/bloquear en grupo y compartir la asignación de daño.",
        "long": "702.22a Una habilidad de combate compleja para agrupar criaturas. El controlador elige la asignación de daño."
    },
    "rampage": {
        "short": "Obtiene +N/+N por cada criatura que la bloquee después de la primera.",
        "long": "702.23a “Arrollar N” se dispara cuando es bloqueada por múltiples criaturas."
    },
    "cumulative upkeep": {
        "short": "Paga un coste creciente cada turno o sacrifica el permanente.",
        "long": "702.24a Pon un contador de edad en cada mantenimiento, luego paga el coste por cada contador."
    },
    "flanking": {
        "short": "Cuando sea bloqueado por una criatura sin flanquear, esa criatura obtiene -1/-1.",
        "long": "702.25a Flanquear se dispara durante el paso de declarar bloqueadores."
    },
    "phasing": {
        "short": "Este permanente entra y sale de la existencia cada turno.",
        "long": "702.26a Los permanentes fuera de fase se tratan como si no existieran."
    },
    "buyback": {
        "short": "Paga un coste extra para devolver el hechizo a tu mano cuando se resuelva.",
        "long": "702.27a Recuperar te permite reutilizar un hechizo si pagas el coste adicional."
    },
    "shadow": {
        "short": "Puede bloquear o ser bloqueado solo por criaturas con sombra.",
        "long": "702.28a Una habilidad de evasión que limita bloqueadores y bloqueo."
    },
    "cycling": {
        "short": "Descarta esta carta y paga su coste para robar una carta.",
        "long": "702.29a Habilidad activada desde la mano. Incluye variantes como ciclo de tipo."
    },
    "echo": {
        "short": "Paga su coste durante tu próximo mantenimiento o sacrifícalo.",
        "long": "702.30a Habilidad disparada para permanentes que entraron desde tu último mantenimiento."
    },
    "horsemanship": {
        "short": "No puede ser bloqueado excepto por criaturas con flanquear.",
        "long": "702.31a Una habilidad de evasión similar a volar pero específica de P3K."
    },
    "fading": {
        "short": "Entra con contadores; sacrifícalo cuando no puedas quitar uno.",
        "long": "702.32a Duración limitada en el campo de batalla usando contadores de desvanecimiento."
    },
    "kicker": {
        "short": "Paga un coste extra opcional para obtener un efecto de bonificación.",
        "long": "702.33a Los costes de estímulo se pagan al lanzar el hechizo."
    },
    "flashback": {
        "short": "Puedes lanzar esta carta desde tu cementerio, luego exíliala.",
        "long": "702.34a Coste alternativo para lanzar un instantáneo o conjuro desde el cementerio."
    },
    "madness": {
        "short": "Lanza esta carta cuando la descartes por su coste de demencia.",
        "long": "702.35a Habilidad disparada cuando se descarta una carta."
    },
    "fear": {
        "short": "No puede ser bloqueado excepto por criaturas artefacto y/o criaturas negras.",
        "long": "702.36a Una habilidad de evasión superada por intimidar y amenaza."
    },
    "morph": {
        "short": "Lanza boca abajo como una 2/2 por {3}. Dale la vuelta por su coste de metamorfosis.",
        "long": "702.37a Las criaturas boca abajo no tienen nombre ni tipos. Incluye megametamorfosis."
    },
    "amplify": {
        "short": "Entra con contadores por cada carta del mismo tipo revelada de tu mano.",
        "long": "702.38a “Amplitud N” pone contadores +1/+1 al entrar."
    },
    "provoke": {
        "short": "Cuando esto ataque, puedes obligar a una criatura a bloquearlo.",
        "long": "702.39a Habilidad disparada que obliga a bloquear y endereza el objetivo."
    },
    "storm": {
        "short": "Copia esto por cada hechizo lanzado antes que él este turno.",
        "long": "702.40a Se ponen copias en la pila por cada hechizo previo."
    },
    "affinity": {
        "short": "Cuesta {1} menos por cada [tipo] que controles.",
        "long": "702.41a Habilidad estática de reducción de costes (ej., Afinidad por los artefactos)."
    },
    "entwine": {
        "short": "Paga un coste extra para elegir todos los modos de un hechizo.",
        "long": "702.42a Elige todos los modos en lugar de solo uno."
    },
    "modular": {
        "short": "Entra con N contadores; los mueve a una criatura artefacto cuando muere.",
        "long": "702.43a Habilidad estática y disparada para criaturas artefacto."
    },
    "sunburst": {
        "short": "Entra con contadores por cada color de maná gastado en él.",
        "long": "702.44a Usa contadores +1/+1 para criaturas, contadores de carga de otro modo."
    },
    "bushido": {
        "short": "Obtiene +N/+N cuando bloquea o es bloqueado.",
        "long": "702.45a “Bushido N” se dispara durante el combate."
    },
    "soulshift": {
        "short": "Cuando muera, devuelve una carta de Espíritu con MV N o menos a tu mano.",
        "long": "702.46a Habilidad disparada para recuperar cartas de Espíritu."
    },
    "splice": {
        "short": "Agrega el efecto de esta carta a otro hechizo pagando su coste.",
        "long": "702.47a Revela al lanzar un hechizo que coincida para agregar texto y coste."
    },
    "offering": {
        "short": "Sacrifica un [tipo] para lanzar a velocidad de instantáneo con reducción de coste.",
        "long": "702.48a Coste reducido y destello como opción adicional."
    },
    "ninjutsu": {
        "short": "Intercambia una criatura no bloqueada por esta carta de tu mano.",
        "long": "702.49a Habilidad activada para poner un ninja en juego atacando."
    },
    "epic": {
        "short": "No puedes lanzar hechizos, pero obtienes una copia de esto cada turno.",
        "long": "702.50a Habilidad de conjuro/instantáneo de alto riesgo y recompensa."
    },
    "convoke": {
        "short": "Tus criaturas pueden ayudar a pagar el coste de este hechizo.",
        "long": "702.51a Gira criaturas para pagar {1} o un maná de su color."
    },
    "dredge": {
        "short": "Devuelve esto a tu mano desde el cementerio moliendo N cartas en lugar de robar.",
        "long": "702.52a Efecto de reemplazo de robo de cartas mientras está en el cementerio."
    },
    "transmute": {
        "short": "Descarta esto para buscar en tu biblioteca una carta con el mismo valor de maná.",
        "long": "702.53a Habilidad activada desde la mano. Busca en la biblioteca y barájala."
    },
    "bloodthirst": {
        "short": "Entra con N contadores si un oponente recibió daño este turno.",
        "long": "702.54a Habilidad estática que verifica el daño previo."
    },
    "haunt": {
        "short": "Cuando esto muera o se resuelva, “asombra” a una criatura para disparadores posteriores.",
        "long": "702.55a Exilia asombrando a una criatura; se dispara cuando esa criatura muere."
    },
    "replicate": {
        "short": "Paga el coste cualquier número de veces para copiar el hechizo.",
        "long": "702.56a Coste adicional que permite crear múltiples copias."
    },
    "forecast": {
        "short": "Revéla de tu mano durante el mantenimiento para activar un efecto especial.",
        "long": "702.57a Habilidad activada limitada al mantenimiento y la mano."
    },
    "graft": {
        "short": "Entra con contadores; puede moverlos a las criaturas cuando entran al campo de batalla.",
        "long": "702.58a Habilidad estática y disparada con respecto a los contadores +1/+1."
    },
    "recover": {
        "short": "Cuando una criatura muera, paga el coste para recuperar esto de tu cementerio.",
        "long": "702.59a Habilidad disparada desde el cementerio; exíliala si no se paga."
    },
    "ripple": {
        "short": "Revela las N cartas superiores: lanza cualquier carta con el mismo nombre gratis.",
        "long": "702.60a Habilidad disparada al verificar la parte superior de la biblioteca."
    },
    "split second": {
        "short": "Los jugadores no pueden lanzar hechizos ni activar habilidades (excepto de maná) mientras esto esté en la pila.",
        "long": "702.61a Detiene la pila hasta que se resuelva el hechizo."
    },
    "suspend": {
        "short": "Exilia con contadores; lánzalo cuando se elimine el último contador.",
        "long": "702.62a Paga un coste diferente para lanzar el hechizo más tarde."
    },
    "vanishing": {
        "short": "Tiempo limitado en el campo de batalla; sacrifícalo cuando se acaben los contadores.",
        "long": "702.63a Usa contadores de tiempo en cada mantenimiento."
    },
    "absorb": {
        "short": "Prevén N daños cada vez que esto reciba daño.",
        "long": "702.64a “Absorción N” reduce el daño recibido."
    },
    "aura swap": {
        "short": "Intercambia esta Aura por una Aura de tu mano.",
        "long": "702.65a Habilidad activada para un intercambio eficiente de Auras."
    },
    "delve": {
        "short": "Exilia cartas de tu cementerio para ayudar a pagar este hechizo.",
        "long": "702.66a Cada carta exiliada paga por {1}."
    },
    "fortify": {
        "short": "Anexa esto a una tierra que controles. Actívalo solo como conjuro.",
        "long": "702.67a Similar a equipo, pero para tierras y Fortificaciones."
    },
    "frenzy": {
        "short": "Obtiene +N/+0 si ataca y no es bloqueado.",
        "long": "702.68a Habilidad disparada cuando no se declaran bloqueadores."
    },
    "gravestorm": {
        "short": "Copia esto por cada permanente puesto en un cementerio este turno.",
        "long": "702.69a Variante de tormenta basada en muertes/destrucciones."
    },
    "poisonous": {
        "short": "Inflige contadores de veneno cuando inflige daño de combate a un jugador.",
        "long": "702.70a “Venenoso N” otorga N contadores de veneno."
    },
    "transfigure": {
        "short": "Sacrifícalo para buscar en tu biblioteca una criatura con el mismo coste de maná.",
        "long": "702.71a Similar a transmutar pero desde el campo de batalla."
    },
    "champion": {
        "short": "Exilia otro permanente para conservar este; devuélvelo cuando este deje el campo de batalla.",
        "long": "702.72a Habilidades disparadas vinculadas para proteger componentes."
    },
    "changeling": {
        "short": "Esta carta tiene todos los tipos de criatura en todo momento.",
        "long": "702.73a CDA que funciona en todas las zonas."
    },
    "evoke": {
        "short": "Lanza por un coste menor, pero se sacrifica al entrar.",
        "long": "702.74a Coste alternativo para obtener un efecto de entrada a bajo precio."
    },
    "hideaway": {
        "short": "Mira las N mejores cartas: exilia una boca abajo para lanzarla más tarde.",
        "long": "702.75a Entra girado. Generalmente vinculado a una condición de lanzamiento."
    },
    "prowl": {
        "short": "Coste alternativo si una criatura con un tipo compartido infligió daño de combate.",
        "long": "702.76a Coste de lanzamiento alternativo de temática pícara."
    },
    "reinforce": {
        "short": "Descarta esto para poner N contadores +1/+1 en una criatura.",
        "long": "702.77a Habilidad activada desde la mano."
    },
    "conspire": {
        "short": "Gira dos criaturas con un color compartido para copiar el hechizo.",
        "long": "702.78a Coste adicional para duplicar el efecto."
    },
    "persist": {
        "short": "Cuando muera, si no tiene contadores -1/-1, regresa con un contador -1/-1.",
        "long": "702.79a Habilidad disparada que permite sobrevivir a una muerte."
    },
    "wither": {
        "short": "Inflige daño a las criaturas en forma de contadores -1/-1.",
        "long": "702.80a Modifica la forma en que se inflige daño a las criaturas."
    },
    "retrace": {
        "short": "Lanza esto desde tu cementerio descartando una carta de tierra.",
        "long": "702.81a Posibilidad de relanzar el hechizo desde el cementerio."
    },
    "devour": {
        "short": "Sacrifica criaturas al entrar para obtener contadores +1/+1.",
        "long": "702.82a “Devorar N” multiplica los contadores por el número de sacrificios."
    },
    "exalted": {
        "short": "Una criatura que ataque sola obtiene +1/+1 hasta el final del turno.",
        "long": "702.83a Habilidad disparada al atacar con exactamente una criatura."
    },
    "unearth": {
        "short": "Regresa esto de tu cementerio con prisa; exílialo al final del turno.",
        "long": "702.84a Efecto de \"última oportunidad\" para cartas de criatura."
    },
    "cascade": {
        "short": "Exilia cartas de la parte superior hasta un hechizo más barato; lánzalo gratis.",
        "long": "702.85a Potente habilidad de lanzamiento en cadena."
    },
    "annihilator": {
        "short": "Cuando ataque, el jugador defensor sacrifica N permanentes.",
        "long": "702.86a “Aniquilador N” se dispara al declarar el ataque."
    },
    "level up": {
        "short": "Paga el coste para poner contadores de nivel para nuevas habilidades.",
        "long": "702.87a Habilidad activada para cartas niveladoras."
    },
    "rebound": {
        "short": "Si se lanza desde la mano, exílialo y lánzalo de nuevo en tu próximo mantenimiento.",
        "long": "702.88a Obtén un segundo uso de un hechizo instantáneo o conjuro."
    },
    "umbra armor": {
        "short": "Si el permanente encantado fuera a ser destruido, destruye esta Aura en su lugar.",
        "long": "702.89a Conocido anteriormente como Armadura de tótem. Protege a la criatura encantada."
    },
    "infect": {
        "short": "Inflige daño como contadores -1/-1 a las criaturas y veneno a los jugadores.",
        "long": "702.90a Combina las mecánicas de marchitar y venenoso."
    },
    "battle cry": {
        "short": "Cuando ataque, las otras criaturas atacantes obtienen +1/+0.",
        "long": "702.91a Potencia al resto de tus fuerzas atacantes."
    },
    "living weapon": {
        "short": "Entra con una ficha de Germen 0/0 y se anexa a ella.",
        "long": "702.92a Equipo que trae su propia criatura."
    },
    "undying": {
        "short": "Cuando muera, si no tiene contadores +1/+1, regresa con un contador +1/+1.",
        "long": "702.93a Habilidad disparada como persistir pero con contadores +1/+1."
    },
    "miracle": {
        "short": "Lanza por menos si es la primera carta robada este turno.",
        "long": "702.94a Se dispara al momento de robar la carta."
    },
    "soulbond": {
        "short": "Empareja esta criatura con otra para compartir habilidades mientras estén emparejadas.",
        "long": "702.95a Empareja cuando cualquiera entre si controlas ambas y están libres."
    },
    "overload": {
        "short": "Cambia “objetivo” por “cada” en el texto del hechizo pagando más.",
        "long": "702.96a Coste alternativo que hace que el hechizo sea global."
    },
    "scavenge": {
        "short": "Exilia desde el cementerio para poner contadores +1/+1 en una criatura.",
        "long": "702.97a Pon contadores igual a la fuerza; actívalo como conjuro."
    },
    "unleash": {
        "short": "Puede entrar con un contador +1/+1; no puede bloquear si lo tiene.",
        "long": "702.98a Elección permanente entre mayor fuerza o defensa."
    },
    "cipher": {
        "short": "Exilia en una criatura; cuando inflija daño, lanza una copia de este hechizo.",
        "long": "702.99a Codifica un hechizo en una criatura para uso repetido."
    },
    "evolve": {
        "short": "Obtiene un contador +1/+1 cuando una criatura más grande entra bajo tu control.",
        "long": "702.100a Verifica la fuerza o resistencia de la criatura entrante frente a la propia."
    },
    "extort": {
        "short": "Paga {W/B} al lanzar un hechizo para drenar 1 vida de cada oponente.",
        "long": "702.101a Habilidad disparada que drena vida."
    },
    "fuse": {
        "short": "Lanza ambas mitades de esta carta partida desde tu mano.",
        "long": "702.102a Habilidad estática especial para cartas partidas."
    },
    "bestow": {
        "short": "Lanza como una Aura anexada a una criatura o como una criatura.",
        "long": "702.103a Mecánica de criatura encantamiento."
    },
    "tribute": {
        "short": "Un oponente elige: ponle contadores o activa un efecto.",
        "long": "702.104a Elección de efecto de reemplazo para los oponentes."
    },
    "dethrone": {
        "short": "Obtiene un contador +1/+1 cuando ataca al jugador con más vida.",
        "long": "702.105a Incentiva atacar al líder."
    },
    "hidden agenda": {
        "short": "Nombra secretamente una carta para obtener beneficios de conspiración.",
        "long": "702.106a Mecánica de draft de Conspiracy."
    },
    "outlast": {
        "short": "{T}: Pon un contador +1/+1 en esto. Actívalo solo como conjuro.",
        "long": "702.107a Una forma lenta de hacer crecer a las criaturas."
    },
    "prowess": {
        "short": "Obtiene +1/+1 cuando lanzas un hechizo que no sea de criatura.",
        "long": "702.108a Potenciador disparado por lanzar hechizos que no son criaturas."
    },
    "dash": {
        "short": "Lanza por menos con prisa; regresa a la mano al final del turno.",
        "long": "702.109a Coste de lanzamiento alternativo rápido."
    },
    "exploit": {
        "short": "Puedes sacrificar una criatura para obtener una bonificación cuando esto entre.",
        "long": "702.110a Habilidad disparada que permite un sacrificio."
    },
    "menace": {
        "short": "No puede ser bloqueado excepto por dos o más criaturas.",
        "long": "702.111a Habilidad de evasión que requiere múltiples bloqueadores."
    },
    "renown": {
        "short": "Obtiene contadores y se vuelve “renombrado” tras infligir daño a un jugador.",
        "long": "702.112a Recompensa única por golpear a un jugador."
    },
    "awaken": {
        "short": "Lanza y convierte una tierra en un elemental con contadores.",
        "long": "702.113a Hechizo con coste opcional para animar una tierra."
    },
    "devoid": {
        "short": "Esta carta no tiene color.",
        "long": "702.114a CDA que hace que el objeto sea incoloro."
    },
    "ingest": {
        "short": "Exilia la carta superior de la biblioteca cuando inflija daño a un jugador.",
        "long": "702.115a Prepara cartas para las habilidades de Procesador."
    },
    "myriad": {
        "short": "Cuando ataque, crea copias atacantes para cada uno de los demás oponentes.",
        "long": "702.116a Habilidad de combate multijugador."
    },
    "surge": {
        "short": "Coste más barato si tú o un compañero de equipo lanzasteis otro hechizo este turno.",
        "long": "702.117a Coste de lanzamiento orientado al trabajo en equipo."
    },
    "skulk": {
        "short": "No puede ser bloqueado por criaturas con mayor fuerza.",
        "long": "702.118a Evasión para criaturas pequeñas."
    },
    "emerge": {
        "short": "Lanza sacrificando una criatura; reduce el coste por su valor de maná.",
        "long": "702.119a Coste de lanzamiento alternativo transformador."
    },
    "escalate": {
        "short": "Paga un coste adicional por cada modo elegido después del primero.",
        "long": "702.120a Hechizo modal con costes por modos adicionales."
    },
    "melee": {
        "short": "Obtiene +1/+1 por cada oponente al que hayas atacado en este combate.",
        "long": "702.121a Potenciador basado en la amplitud del ataque."
    },
    "crew": {
        "short": "Gira criaturas para convertir este Vehículo en una criatura artefacto.",
        "long": "702.122a Habilidad activada para animar Vehículos."
    },
    "fabricate": {
        "short": "Elige entre poner contadores +1/+1 en esto o crear fichas de Servo 1/1.",
        "long": "702.123a Elección de tipo modular al entrar."
    },
    "partner": {
        "short": "Permite que dos cartas legendarias sirvan como comandante conjunto.",
        "long": "702.124a Incluye variantes como Compañero de [nombre], Elige un trasfondo, etc."
    },
    "undaunted": {
        "short": "Cuesta {1} menos por cada uno de tus oponentes.",
        "long": "702.125a Reducción de costes en juegos multijugador."
    },
    "improvise": {
        "short": "Tus artefactos pueden ayudar a pagar el coste de este hechizo.",
        "long": "702.126a Gira artefactos para pagar por maná genérico."
    },
    "aftermath": {
        "short": "Lanza la segunda mitad de esta carta partida desde tu cementerio.",
        "long": "702.127a Exíliala tras lanzarla desde el cementerio."
    },
    "embalm": {
        "short": "Exilia desde el cementerio para crear una ficha que sea una copia de Zombie.",
        "long": "702.128a Crea una ficha de Zombie blanca desde el cementerio."
    },
    "eternalize": {
        "short": "Exilia desde el cementerio para crear una copia de Zombie negro 4/4.",
        "long": "702.129a Similar a embalsamar pero hace que sea 4/4 y negra."
    },
    "afflict": {
        "short": "El jugador defensor pierde vida si esta criatura es bloqueada.",
        "long": "702.130a Daño garantizado incluso cuando es bloqueada."
    },
    "ascend": {
        "short": "Si tienes 10 permanentes, obtienes la bendición de la ciudad por el resto del juego.",
        "long": "702.131a Habilidad estática o de hechizo para beneficios permanentes."
    },
    "assist": {
        "short": "Otro jugador puede ayudar a pagar el coste genérico de este hechizo.",
        "long": "702.132a Habilidad política para compartir costes."
    },
    "jump-start": {
        "short": "Lanza desde el cementerio descartando una carta, luego exílialo.",
        "long": "702.133a Posibilidad de relanzar un instantáneo o conjuro."
    },
    "mentor": {
        "short": "Al atacar, pon un contador +1/+1 en un atacante más pequeño.",
        "long": "702.134a Potencia a las criaturas más débiles en el ataque."
    },
    "afterlife": {
        "short": "Cuando esto muera, crea N fichas de Espíritu 1/1 (blancas y negras).",
        "long": "702.135a Disparador de muerte para fichas voladoras."
    },
    "riot": {
        "short": "Entra con un contador +1/+1 o con prisa.",
        "long": "702.136a Elección de velocidad o tamaño al entrar."
    },
    "spectacle": {
        "short": "Coste alternativo si un oponente perdió vida este turno.",
        "long": "702.137a Descuento de lanzamiento de temática agresiva."
    },
    "escape": {
        "short": "Lanza desde el cementerio pagando maná y exiliando cartas.",
        "long": "702.138a Amenaza reutilizable desde el cementerio."
    },
    "companion": {
        "short": "Comienza fuera del juego; paga {3} para ponerlo en tu mano si el mazo coincide.",
        "long": "702.139a Mecánica especial de construcción de mazo fuera del juego."
    },
    "mutate": {
        "short": "Combina con una criatura que no sea Humano para ganar habilidades compartidas.",
        "long": "702.140a Apila cartas para crear un permanente complejo."
    },
    "encore": {
        "short": "Exilia desde el cementerio para atacar a cada oponente con copias.",
        "long": "702.141a Barrenido temporal de copias desde el cementerio."
    },
    "boast": {
        "short": "Actívalo una vez por turno solo si esta criatura atacó.",
        "long": "702.142a Habilidad activada agresiva y situacional."
    },
    "foretell": {
        "short": "Exilia desde tu mano boca abajo por {2}, luego lánzalo por menos más tarde.",
        "long": "702.143a Divide el coste del hechizo en dos turnos."
    },
    "demonstrate": {
        "short": "Copia este hechizo al lanzarlo; si lo haces, un oponente también copia uno.",
        "long": "702.144a Habilidad política para copiar hechizos."
    },
    "daybound": {
        "short": "Si es de noche, entra transformado. Cambia a noche.",
        "long": "702.145b Mecánica del ciclo día/noche para permanentes."
    },
    "nightbound": {
        "short": "Si es de día, se transforma de nuevo a su cara de día.",
        "long": "702.145e Regresa cuando comienza el día."
    },
    "disturb": {
        "short": "Lanza desde el cementerio transformado por su coste de perturbación.",
        "long": "702.146a Normalmente devuelve a la criatura como una Aura de Espíritu."
    },
    "decayed": {
        "short": "No puede bloquear; sacrifícalo cuando ataque.",
        "long": "702.147a Palabra clave para fichas de un solo uso."
    },
    "cleave": {
        "short": "Lanza por menos para ignorar el texto entre corchetes en el hechizo.",
        "long": "702.148a Coste alternativo que elimina fragmentos de texto."
    },
    "training": {
        "short": "Obtiene un contador +1/+1 cuando ataca con una criatura más grande.",
        "long": "702.149a Inverso de mentor; la criatura pequeña crece."
    },
    "compleated": {
        "short": "Lealtad reducida si se pagó vida por maná Fierexiano.",
        "long": "702.150a Desventajas de pagar con vida por los planeswalkers."
    },
    "reconfigure": {
        "short": "Anéxalo a una criatura o desanéxalo para que vuelva a ser una criatura.",
        "long": "702.151a Criaturas equipo que pueden ser equipo o criatura."
    },
    "blitz": {
        "short": "Lanza por menos con prisa; sacrifícalo para robar una carta cuando muera.",
        "long": "702.152a Coste de lanzamiento rápido y suicida."
    },
    "casualty": {
        "short": "Sacrifica una criatura para copiar este hechizo.",
        "long": "702.153a “Bajas N” requiere sacrificar una criatura con fuerza N o más."
    },
    "enlist": {
        "short": "Gira otra criatura para añadir su fuerza a este atacante.",
        "long": "702.154a Gira una criatura no atacante para potenciarla."
    },
    "read ahead": {
        "short": "Entra con contadores para empezar en cualquier capítulo.",
        "long": "702.155a Salta los primeros pasos de una Saga eligiendo el número de contadores de saber."
    },
    "ravenous": {
        "short": "Entra con X contadores; roba una carta si X es 5 o más.",
        "long": "702.156a Mecánica Tiránida para grandes hechizos con X en su coste."
    },
    "squad": {
        "short": "Paga un coste adicional para crear múltiples fichas de copia.",
        "long": "702.157a Paga el coste N veces para obtener N fichas adicionales."
    },
    "space sculptor": {
        "short": "Asigna segmentos (sectores) al campo de batalla.",
        "long": "702.158a Mecánica de Un-set que divide el campo de batalla."
    },
    "visit": {
        "short": "Activa un efecto cuando obtengas el resultado correspondiente para esta Atracción.",
        "long": "702.159a Se dispara cuando sale su número."
    },
    "prototype": {
        "short": "Lanza con fuerza/resistencia reducida y un coste de maná menor.",
        "long": "702.160a Versión alternativa más barata de grandes artefactos."
    },
    "living metal": {
        "short": "Se convierte en criatura solo durante tu turno.",
        "long": "702.161a Vehículo que se anima automáticamente."
    },
    "more than meets the eye": {
        "short": "Lanza en su forma convertida (mecánica de Transformers).",
        "long": "702.162a Coste alternativo de entrada en la forma convertida."
    },
    "for mirrodin!": {
        "short": "Crea un Rebelde 2/2 y anéxale este equipo.",
        "long": "702.163a Equipo que crea y equipa automáticamente a su criatura."
    },
    "toxic": {
        "short": "Inflige contadores de veneno además del daño normal.",
        "long": "702.164a “Tóxico N” inflige N contadores de veneno al golpear."
    },
    "backup": {
        "short": "Al entrar, da contadores y tus habilidades a otra criatura.",
        "long": "702.165a Habilidades temporales transferibles."
    },
    "bargain": {
        "short": "Sacrifica un artefacto, encantamiento o ficha para obtener una bonificación.",
        "long": "702.166a Sacrificio opcional para potenciar el hechizo."
    },
    "craft": {
        "short": "Exilia esto y los materiales para regresarlo transformado.",
        "long": "702.167a Coste de activación de transformación usando materiales."
    },
    "disguise": {
        "short": "Lanza boca abajo como una 2/2 con ward {2} por {3}.",
        "long": "702.168a Variante de metamorfosis con protección (ward)."
    },
    "solved": {
        "short": "Beneficio activo mientras este Caso esté resuelto.",
        "long": "702.169a Habilidades condicionales para las cartas de Caso."
    },
    "plot": {
        "short": "Exilia desde tu mano; lánzalo gratis en un turno posterior.",
        "long": "702.170a Lanzamiento diferido desde el exilio."
    },
    "saddle": {
        "short": "Gira criaturas para montar y ganar habilidades adicionales.",
        "long": "702.171a Mecánica de montura para beneficios especiales."
    },
    "spree": {
        "short": "Elección de modos con costes adicionales por cada modo.",
        "long": "702.172a Coste acumulativo de hechizo modal."
    },
    "freerunning": {
        "short": "Coste más barato si infligiste daño con un Asesino o Comandante.",
        "long": "702.173a Coste de lanzamiento temático de Assassin's Creed."
    },
    "gift": {
        "short": "Ofrece un beneficio al oponente a cambio de un hechizo mejor.",
        "long": "702.174a Beneficio opcional para el oponente (similar a estímulo)."
    },
    "offspring": {
        "short": "Paga más para crear una ficha de copia 1/1 al entrar.",
        "long": "702.175a Copias pequeñas de tus criaturas."
    },
    "impending": {
        "short": "Lanza por menos como no criatura con contadores de tiempo.",
        "long": "702.176a Encantamiento que se convierte en criatura con el tiempo."
    },
    "exhaust": {
        "short": "Habilidad activada que solo puede usarse una vez.",
        "long": "702.177a Habilidad activada de un solo uso."
    },
    "max speed": {
        "short": "Beneficio activo si tu velocidad es 4.",
        "long": "702.178a Mecánica de umbral basada en la velocidad."
    },
    "start your engines!": {
        "short": "Activa la velocidad por el resto del juego.",
        "long": "702.179a Mecánica de seguimiento de velocidad del jugador."
    },
    "harmonize": {
        "short": "Lanza desde el cementerio girando una criatura.",
        "long": "702.180a Coste de lanzamiento alternativo desde el cementerio."
    },
    "mobilize": {
        "short": "Crea fichas giradas y atacando cuando esto ataque.",
        "long": "702.181a Generación de fichas disparada por el ataque."
    },
    "job select": {
        "short": "Crea una ficha y anéxale este equipo.",
        "long": "702.182a Equipo que se anexa automáticamente al entrar."
    },
    "tiered": {
        "short": "Elección de modos con diferentes costes adicionales.",
        "long": "702.183a Hechizo modal con progresión."
    },
    "station": {
        "short": "Gira criaturas para añadir contadores de carga.",
        "long": "702.184a Mecánica de carga usando otras criaturas."
    },
    "warp": {
        "short": "Lanza por su coste desde la mano; exílialo y regrésalo más tarde.",
        "long": "702.185a Mecánica de entrada temporal."
    },
    "infinity": {
        "short": "Símbolo de infinito que permite habilidades estáticas potentes.",
        "long": "702.186a Mecánica de escalado infinito (Un-set)."
    },
    "mayhem": {
        "short": "Lanza desde el cementerio si descartaste esto este turno.",
        "long": "702.187a Bonificación por descartar/ciclo."
    },
    "web-slinging": {
        "short": "Lanza devolviendo una criatura girada a la mano.",
        "long": "702.188a Coste de lanzamiento alternativo basado en rebotar a la mano."
    },
    "firebending": {
        "short": "Agrega maná cuando esto ataque; el maná no se vacía.",
        "long": "702.189a Flujo constante de maná disparado por el ataque."
    },
    "sneak": {
        "short": "Lanza desde la mano durante el combate por un coste más barato.",
        "long": "702.190a Variante de ninjutsu para entrada inmediata al combate."
    }
};

// Initialize KEYWORDS_DATA_ES for faster lookup
function initKeywordsDataES() {
    for (const key in KEYWORDS_RAW_ES) {
        KEYWORDS_DATA_ES[key.toLowerCase()] = KEYWORDS_RAW_ES[key];
    }
}

// Auto-init on script load
if (typeof window !== 'undefined') {
    initKeywordsDataES();
}
