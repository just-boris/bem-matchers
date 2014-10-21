describe("toHaveMod", function() {
    "use strict";
    var block;
    beforeEach(function (done) {
        modules.require(['i-bem__dom', 'BEMHTML', 'jquery'], function(BEMDOM, BEMHTML, $) {
            block = BEMDOM.init($(BEMHTML.apply({ block : 'content' })).appendTo('body'))
                .bem('content');
            done();
        });
    });
    afterEach(function() {
        modules.require(['i-bem__dom'], function(BEMDOM) {
            BEMDOM.destruct(block.domElem);
        });
    });

    it("should check mod", function () {
        block.setMod('tested', 'ok');

        expect(block).toHaveMod('tested', 'ok');
        expect(block).not.toHaveMod('buggy', true);
    });

    it("should detect when mod is defined but with wrong value", function () {
        block.setMod('tested', 'ok');

        expect(block).not.toHaveMod('tested', 'false');
    });

    it("should throw exception when passed argument is not BEM-enitiy", function () {
        var notBlock = {};
        expect(function() {
            expect(notBlock).toHaveMod('tested', 'ok');
        }).toThrow();
    });
});