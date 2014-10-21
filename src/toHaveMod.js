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
                    var currentMod = block.getMod(expectedMod),
                        pass = currentMod === modVal;
                    return {
                        pass: pass,
                        message: format(
                            "Expected block {{block}} " + (!pass ?
                                "to have mod {{expectedMod}}='{{modVal}}', but has '{{currentMod}}'" :
                                "not to have {{expectedMod}}='{{modVal}}', but has it"
                            ),
                            {
                                block: block.domElem[0].cloneNode().outerHTML,
                                expectedMod: expectedMod,
                                currentMod: currentMod,
                                modVal: modVal
                            }
                        )
                    };
                }
            };
        }
    });
});