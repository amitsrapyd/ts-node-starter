import { expect } from 'chai';
import {sum, multiply} from '../src/calc';


describe(`The calc module`,()=> {

    context(`#sum`,()=> {
        
        it(`should exist`,()=> {
            expect(sum).to.be.a('function')
            expect(sum).to.be.instanceOf(Function)
        })
        it(`should sum two numbers`,()=> {
            let actual = sum(2,6);
            expect(actual).to.equal(8);
        })
        it(`should sum several numbers`,()=> {
            let actual = sum(2,3,4,5,6);
            expect(actual).to.equal(20)
        })

    });

    context(`#multiply`,()=> {

        it(`should exist`,()=> {
            expect(sum).to.be.a('function')
            expect(sum).to.be.instanceOf(Function)
        })

        it(`should multiply two numbers`,()=> {
            let actual = multiply(2,3);
            expect(actual).to.eql([6])
        })

        it(`should muliply several numbers`,()=> {
            let actual = multiply(2,3,4,5,6);
            expect(actual).to.eql([6,8,10,12])
        })

    })
})