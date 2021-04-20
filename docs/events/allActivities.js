import {DRAGONS_MIST, THREE_MOUNTAINS} from "./locations.js";

export const CADENCE_TYPE = ['DAILY', 'WEEKLY', 'MONTHLY', 'ANNUALLY'];

export class Cadence {
    constructor(type, options) {
        this.type = type;
        this.options = options;
    }
}

export class Activity {
    constructor({title, type, time, location, cadence, description, link, branch}) {
        this.title = title;
        this.time = time;
        this.location = location;
        this.cadence = cadence;
        this.description = description;
        this.link = link;
        this.branch = branch;
    }
}

export const ALL_ACTIVITIES = [
    new Activity({
        title: 'Marshal Practice',
        description: 'Weekly baronial fighter practice for armored and fencing.',
        location: MULTNOMAH_ARTS_CENTER,
        cadence: new Cadence('WEEKLY', 'MONDAY'),
        time: 1900,
        branch: THREE_MOUNTAINS
    }),
    new Activity({
        title: 'Marshal Practice',
        description: 'Weekly baronial fighter practice for armored and fencing.',
        location: MULTNOMAH_ARTS_CENTER,
        cadence: new Cadence('WEEKLY', 'MONDAY'),
        time: 1900,
        branch: DRAGONS_MIST
    }),
    new Activity({
        title: 'Marshal Practice',
        description: 'Weekly baronial fighter practice for armored and fencing.',
        location: MULTNOMAH_ARTS_CENTER,
        cadence: new Cadence('WEEKLY', 'MONDAY'),
        time: 1900,
        branch: DRAGONS_MIST
    })
];