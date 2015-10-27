import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import Router from './router';
import './ajax_setup';
import ArtistCollection from './artist_collection';

console.log('hello, is this working?');

var appElement = $('.app');

var router = new Router(appElement);
router.start();





