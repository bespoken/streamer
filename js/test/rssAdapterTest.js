var assert = require('assert');
var RSSAdapter = require('../rssAdapter');

describe('RSSAdapter', function() {
    describe('#fromFile', function() {
        it('Correctly parses RSS feed from file', function(done) {
            RSSAdapter.fromFile('js/test/rssFeed.xml', function (error, audioData) {
                assert.equal(audioData.tracks.length, 6);
                assert.equal(audioData.tracks[0].url, 'https://feeds.soundcloud.com/stream/275202399-amazon-web-services-306355661-amazon-web-services.mp3');
                done();
            });
        });

        it('Correctly parses RSS feed from URL', function(done) {
            RSSAdapter.fromURL('https://s3.amazonaws.com/bespoken/streaming/rssFeed.xml', function (error, audioData) {
                assert.equal(audioData.tracks.length, 4);
                assert.equal(audioData.tracks[0].url, 'https://feeds.soundcloud.com/stream/275202399-amazon-web-services-306355661-amazon-web-services.mp3');
                done();
            });
        });

        it('Correctly parses RSS feed from HTTP URL', function(done) {
            RSSAdapter.fromURL('http://s3.amazonaws.com/bespoken/streaming/rssFeed.xml?queryString=1', function (error, audioData) {
                assert.equal(audioData.tracks.length, 4);
                assert.equal(audioData.tracks[0].url, 'https://feeds.soundcloud.com/stream/275202399-amazon-web-services-306355661-amazon-web-services.mp3');
                done();
            });
        });
    });
});


