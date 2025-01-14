import React, {useReducer} from 'react';
import reducer, {initialState} from '../reducers'
import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

import {ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CLEAR_DISPLAY, SAVE_TO_MEM, APPLY_MEM, CLEAR_MEM} from '../actions';

function App() {

    const [state, dispatch] = useReducer(reducer, initialState)


    // function addOne() {
    //   console.log('added one')
    //   const action = {type: ADD_ONE}
    //   dispatch(action)
    // }

    function applyNumber(number) {
      const action = {type: APPLY_NUMBER, payload: number}
      dispatch(action)
    }

    function changeOperation(op){
      const action = {type: CHANGE_OPERATION, payload: op}
      dispatch(action)
    }

    function clearDisplay(){
      const action = {type: CLEAR_DISPLAY}
      dispatch(action)
    }

    function saveToMem() {
      const action = {type: SAVE_TO_MEM}
      dispatch(action)
    }

    function applyMem() {
      const action = {type: APPLY_MEM}
      dispatch(action)
    }

    function clearMem() {
      const action = {type: CLEAR_MEM}
      dispatch(action)
    }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation} </span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={saveToMem}/>
              <CalcButton value={"MR"} onClick={applyMem}/>
              <CalcButton value={"MC"} onClick={clearMem}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => {applyNumber(1)}}/>
              <CalcButton value={2} onClick={() => {applyNumber(2)}}/>
              <CalcButton value={3} onClick={() => {applyNumber(3)}}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => {applyNumber(4)}}/>
              <CalcButton value={5} onClick={() => {applyNumber(5)}}/>
              <CalcButton value={6} onClick={() => {applyNumber(6)}}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => {applyNumber(7)}}/>
              <CalcButton value={8} onClick={() => {applyNumber(8)}}/>
              <CalcButton value={9} onClick={() => {applyNumber(9)}}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => {changeOperation('+')}}/>
              <CalcButton value={"*"} onClick={() => {changeOperation('*')}}/>
              <CalcButton value={"-"} onClick={() => {changeOperation('-')}}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={clearDisplay}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
