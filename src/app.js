// // install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

store.dispatch(addExpense({description:'water bill', amount: 4500}));
store.dispatch(addExpense({description:'gas bill', amount: 14500, createdAt: 1000}));
store.dispatch(addExpense({description:'rent', amount: 109500}));


const state = store.getState();
console.log('logging stat', state);
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);



ReactDOM.render(jsx, document.getElementById('app'));
