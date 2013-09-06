'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('TaskManager', function () {

    beforeEach(function () {
        browser().navigateTo('/index.html');
        
    });

/*
    it('should automatically redirect to /view1 when location hash/fragment is empty', function () {
        expect(browser().location().url()).toBe("/view1");
    });
*/
    
    describe('view1', function () {

        beforeEach(function () {
            browser().navigateTo('#/view1');
        });


        it('should render view1 when user navigates to /view1', function () {
            expect(element('p.view').text()).toMatch(/partial for view 1/);
        });

    });

    
});
