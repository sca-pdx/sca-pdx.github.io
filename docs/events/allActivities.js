import {MULTNOMAH_ARTS_CENTER, DRAGONS_MIST, THREE_MOUNTAINS} from "./locations.js";

export const CADENCE_TYPE = ['DAILY', 'WEEKLY', 'MONTHLY', 'ANNUALLY'];


export class ActivityType {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}


const ARMORED_PRACTICE = new ActivityType('armoredPractice', 'Armored Practice');
const FENCING_PRACTICE = new ActivityType('fencingPractice', 'Fencing Practice');
const ARCHERY_PRACTICE = new ActivityType('archeryPractice', 'Archery Practice');

export const ACTIVITY_TYPES = [ARMORED_PRACTICE, FENCING_PRACTICE, ARCHERY_PRACTICE];


export class Cadence {
    constructor(type, options) {
        this.type = type;
        this.options = options;
    }
}

export class Activity {
    constructor({title, types, time, location, cadence, description, link, branch}) {
        this.title = title;
        this.type = types;
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
        types: [ARMORED_PRACTICE, FENCING_PRACTICE],
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