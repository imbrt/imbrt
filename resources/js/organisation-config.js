// Plaats dit bestand op een centrale locatie voor hergebruik in meerdere documenten.
var organisationConfig = {
    nl_organisationName: "Kadaster",
    // nl_organisationPublishURL: "https://imbrt.github.io/imbrt/releases/",
    logos: [{
        src: "https://developer.kadaster.nl/schemas/respec/media/logos/Kadaster.png",
        alt: "Kadaster",
        id: "Kadaster",
        url: "https://docs.kadaster.nl/im/im-informatiemodellen",
    }],

    // postProcess: [window.respecMermaid.createFigures],

    // latestVersion: ["nl_organisationPublishURL", "publishVersion", "-", "specStatus", "-", "publishDate"],
    // thisVersion:   ["nl_organisationPublishURL", "publishVersion", "-", "specStatus", "-", "publishDate"],
    prevVersion:   ["nl_organisationPublishURL", "previousPublishVersion", "-", "previousMaturity", "-", "previousPublishDate"],
       
    useLogo: true,
    useLabel: true,

    license: "cc0",
    addSectionLinks: true,

    localizationStrings: {
        en: {
// specStatus
            wv: "Draft",
            cv: "Candidate recommendation",
            vv: "Proposed recommendation",
            def: "Recommendation",
            eo: "Obsolete Recommendation",
            tg: "Rescinded Recommendation",
            basis: "Document",
// spectype
            sp: "Specification",
                note: "Note",
                st: "Standard",
                    im: "Information model",
                al: "General",
                bd: "Governance documentation",
                    iv: "Declaration of intent",
                    hv: "Charter",
        },
        nl: {
// specStatus
            wv: "Werkversie",
            cv: "Consultatieversie",
            vv: "Versie ter vaststelling",
            def: "Vastgestelde versie",
            eo: "Verouderde versie",
            tg: "Teruggetrokken versie",
            basis: "Document",
// spectype
            sp: "Specificatie",
                note: "Notitie",
                st: "Standaard",
                    im: "Informatiemodel",
                al: "Algemeen",
                bd: "Beheerdocumentatie",
                    iv: "Intentieverklaring",
                    hv: "Handvest",
        },
    },

    sotdText: {
        nl: {
            sotd: "Status van dit document",
            def: `Dit is de definitieve versie van dit document. Wijzigingen naar aanleiding van consultaties zijn doorgevoerd.`,
            wv: `Dit is een werkversie die op elk moment kan worden gewijzigd, verwijderd of vervangen door andere documenten. Het is geen door het DMM goedgekeurde consultatieversie.`,
            cv: `Dit is een door het DMM goedgekeurde consultatieversie. Commentaar over dit document kan gestuurd worden naar modellen.bureau@kadaster.nl`,
            vv: `Dit is een definitief concept van de nieuwe versie van dit document. Wijzigingen naar aanleiding van consultaties zijn doorgevoerd.`,
            basis: "Dit is een document zonder officiële status.",
        },
        en: {
            sotd: "Status of this Document",
            def: `This is the definitive version of this document. Edits resulting from consultations have been applied.`,
            wv: `This is a draft that could be altered, removed or replaced by other documents. It is not a recommendation approved by DMM.`,
            cv: `This is a proposed recommendation approved by DMM. Comments regarding this document may be sent to modellen.bureau@kadaster.nl`,
            vv: `This is the definitive concept of this document. Edits resulting from consultations have been applied.`,
            basis: "This document has no official standing.",
        },
    },

    labelColor: {
        basis: "#008296",
        wv: "#008DC9",
        cv: "#008296",
        vv: "#008296",
        def: "#00387D",
    },
	
    licenses: {
        cc0: {
            name: "Creative Commons 0 Public Domain Dedication",
            short: "CC0",
            url: "https://creativecommons.org/publicdomain/zero/1.0/",
            image: "https://gitdocumentatie.logius.nl/publicatie/respec/media/logos/cc-zero.svg",
        },
        "cc-by": {
            name: "Creative Commons Attribution 4.0 International Public License",
            short: "CC-BY",
            url: "https://creativecommons.org/licenses/by/4.0/legalcode",
            image: "https://gitdocumentatie.logius.nl/publicatie/respec/media/logos/cc-by.svg",
        },
        "cc-by-nd": {
            name: "Creative Commons Naamsvermelding-GeenAfgeleideWerken 4.0 Internationaal",
            short: "CC-BY-ND",
            url: "https://creativecommons.org/licenses/by-nd/4.0/legalcode.nl",
            image: "https://gitdocumentatie.logius.nl/publicatie/respec/media/logos/cc-by-nd.svg",
        },
    },

    localBiblio: {
        "SemVer": {
            href: "https://semver.org",
            title: "Semantic Versioning 2.0.0",
            authors: ["T. Preston-Werner"],
            date: "June 2013"
        },
        "isa-process": {
            href: "https://joinup.ec.europa.eu/sites/default/files/document/2015-03/Process%20and%20methodology%20for%20developing%20semantic%20agreements.pdf",
            title: "ISA proces voor het vastleggen van semantische afspraken",
            date: "08-02-2013" 
        },
        "KHM": {
            "href": "https:docs.kadaster.nl/im/khm",
            "title": "Kadaster Historie Model",
            "publisher": "Kadaster"
        },
        "MIM": {
            "href": "https://docs.geostandaarden.nl/mim/mim",
            "title": "MIM - Metamodel Informatie Modellering",
            "publisher": "Geonovum"
        },    
        "NEN3610": {
            title: "NEN-3610 Basismodel geo-informatie",
            href: "https://www.nen.nl/nen-3610-2022-nl-296137",
            status: "BG-FINAL",
            publisher: "Nederlandse Norm (NEN)",
        } 
    }
}
