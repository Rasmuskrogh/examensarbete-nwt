const tjänsterLinks = new Map()
    .set('TRÄ- & FÄRGPROVER', null)
    .set('ARKITEKTHJÄLPEN', null)
    .set('KÖKSGUIDE', null)
    .set('BUTIK & SHOWROOM', null)
    .set('HEMMA HOS ER', null)
    .set('PRISEXEMPEL', null)
    .set('BOKA ONLINE-MÖTE', null);

const kundserviceLinks = new Map()
    .set('KONTAKT', null)
    .set('LEVERANSER & RETURER', null)
    .set('BUTIK & SHOWROOM', null)
    .set('KÖPVILLKOR', null)
    .set("FRÅGOR & SVAR", null)
    .set("INTEGRITETSPOLICY", null)
    .set("ALLMÄNA VILLKOR", null)
    .set("COOKIES", null);

const guiderLinks = new Map()
    .set('OM IKEAS STOMMAR', null)
    .set('MONTERING', null)
    .set('BYGGA KÖK', null)
    .set('SÅ FUNKAR DET', null)
    .set('SKÖTSEL', null)
    .set("PRISEXEMPEL", null)
    .set("INNAN DU HANDLAR", null);

const superfrontLinks = new Map()
    .set("OM SUPERFRONT", null)
    .set("VÅR VISION", null)
    .set("NYHETER", null)
    .set("PRESS", null)
    .set("KARRIÄR", null)

export const DEFAULT_LINKS = new Map()
    .set('TJÄNSTER', tjänsterLinks)
    .set('KUNDSERVICE', kundserviceLinks)
    .set('GUIDER', guiderLinks)
    .set("SUPERFRONT", superfrontLinks);

export const LOREM_IPSUM =
    'Prenumerera på vårt nyhetsbrev & ta del av våra nyheter.';
