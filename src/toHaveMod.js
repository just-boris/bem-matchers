/*jshint jasmine: true*/
beforeEach(function() {
    "use strict";
    jasmine.addMatchers({
        toHaveMod: function(util, customEqualityTesters) {
            function format(message, data) {
                return message.replace(/\{\{(\w+)\}\}/gi, function($0, $1) {
                    return data[$1];
                });
            }
            return {
                compare: function(block, expectedMod, modVal) {
                    if(typeof block.getMod !== 'function') {
                        throw new Error('Passed block is not BEM-entity');
                    }
                    var messageData = {
                            block: block.domElem[0].cloneNode().outerHTML,
                            expectedMod: expectedMod,
                            modVal: modVal
                        },
                        message, pass;
                    if(arguments.length === 2) {
                        pass = block.hasMod(expectedMod);
                        message = format(
                                "Expected block {{block}} " + (!pass ?
                                    "to have mod '{{expectedMod}}'"
                                :
                                    "shouldn't have mod '{{expectedMod}}'"
                                ), messageData);
                    } else {
                        messageData.currentMod = block.getMod(expectedMod);
                        pass = messageData.currentMod === modVal;
                        message = format(
                            "Expected block {{block}} " + (!pass ?
                                "to have mod {{expectedMod}}='{{modVal}}', but it has '{{currentMod}}'" :
                                "not to have {{expectedMod}}='{{modVal}}', but has it"
                            ),
                            messageData
                        );
                    }
                    return {pass: pass, message: message};
                }
            };
        }
    });
});