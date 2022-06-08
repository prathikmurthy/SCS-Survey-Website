import {react, Component} from 'react';

export default class PlanningIdea {
    
    constructor(cat, id, image, notes, url, views) {
        this.cat = cat;
        this.id = id;
        this.image = image;
        this.notes = notes;
        this.url = url;
        this.views = views;
        this.votes = 0;
    }

}