import 'react-native';
import React from 'react';
import Main from '../src1/Main';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
console.log('test enter');
it('App render correctly',()=>{
    let test=renderer.create(
        <Main/>
    );

});
