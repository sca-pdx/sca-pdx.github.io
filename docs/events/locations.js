export class Branch {
    constructor(name) {
        this.name = name;
    }
}

export const DRAGONS_MIST = new Branch('Dragon\'s Mist');
export const THREE_MOUNTAINS = new Branch('Three Mountains');
export const STROMGARD = new Branch('Stromgard');

export class Address {
    constructor({line1, line2, line3, city, state, postal, lat, lon, googleMaps}) {
        this.line1 = line1;
        this.line2 = line2;
        this.line3 = line3;
        this.city = city;
        this.state = state;
        this.postal = postal;
        this.lat = lat;
        this.lon = lon;
        this.googleMaps = googleMaps
    }
}

export class Location {
    constructor({title, address, notes}) {
        this.title = title;
        this.address = address;
        this.notes = notes;
    }
}

export const MULTNOMAH_ARTS_CENTER = new Location({
    title: 'Multnomah Arts Center',
    address: new Address({
        line1: '7688 SW Capitol Hwy',
        city: 'Portland',
        state: 'OR',
        postal: '97219',
        lat: 45.468222,
        lon: -122.709903,
        googleMaps: 'https://www.google.com/maps/place/Multnomah+Arts+Center/@45.468222,-122.709903,15z/data=!4m5!3m4!1s0x0:0x19cc9229d54c58c5!8m2!3d45.468222!4d-122.709903'
    })
})