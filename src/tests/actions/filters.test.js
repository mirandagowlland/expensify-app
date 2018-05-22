import {
    setStartDate,
    setEndDate,
    setTextFilter,
    sortByDate,
    sortByAmount
} from '../../actions/filters';

import moment from 'moment';

test(`should generate set start date action object`, () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate: moment(0)
    });
});

test(`should generate set end date action object`, () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate: moment(0)
    });
});

test(`should generate set text filter object with test value`, () => {
    const text = 'passing something in'
    const action = setTextFilter(text);
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text
    });
});

test(`should generate set text filter object with defaul`, () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text: ''
    });
});

test(`should generate action object for sortByDate`, () => {
    expect(sortByDate()).toEqual({type: 'SORT_BY_DATE'});
});

test(`should generate action object for sortByAmount`, () => {
    expect (sortByAmount()).toEqual({type:'SORT_BY_AMOUNT'});
});
