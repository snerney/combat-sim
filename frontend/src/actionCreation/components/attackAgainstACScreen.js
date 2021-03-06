import React from 'react'
import Select from 'react-select'
import { useSelector, useDispatch } from 'react-redux'
import "react-table/react-table.css"
import * as arActions from '../actions'
import EffectTable from './effectTable'

import {DynamicSizeNumericInput, DynamicSizeTextInput, ToggleWithLabel, ConditionalComponent, statOptions} from "../../common/components/utils"

import { Grid, Button } from 'semantic-ui-react'

import '../../index.css';

const AttackAgainstACScreen = () => {
  const ar = useSelector(state => state.actionCreationReducer)

  const dispatch = useDispatch()
  if (ar.damageTypeOptions.length < 1) {
    dispatch(arActions.getDamageTypeOptions())
    dispatch(arActions.resetActionCreationErrorMsg())
    dispatch(arActions.resetTabAttributes())
  }

  const setActionName = (e) => dispatch(arActions.setActionName(e.target.value))
  const setStatBonus = (e) => dispatch(arActions.setStatBonus(e))
  const setDamageType = (e) => dispatch(arActions.setDamageType(e))
  const setDice = (e) => dispatch(arActions.setDice(e.target.value))
  const setBonusToDamage = (e) => dispatch(arActions.setBonusToDamage(e.target.value))
  const setBonusToHit = (e) => dispatch(arActions.setBonusToHit(e.target.value))
  const setMultiAttack = (e) => dispatch(arActions.setMultiAttack(e.target.value))
  const setRechargePercentile = (e) => dispatch(arActions.setRechargePercentile(e.target.value))
  const setSpellOrAttack = (e) => dispatch(arActions.setSpellOrAttack(e.target.value))
  const setLegendaryActionCost = (e) => dispatch(arActions.setLegendaryActionCost(e.target.value))
  const shiftIsLegendary = () => dispatch(arActions.shiftIsLegendary())
  const createAttackAgainstAC = () => dispatch(arActions.createAction("AttackAgainstAC"))
  const addEffect = (e) => dispatch(arActions.addActionEffect(e))
  const updateActionEffects = (newSet) => dispatch(arActions.updateActionEffects(newSet))

  return (
    <div>
      <Grid columns="two" divided stackable>
        <Grid.Column>
          <Grid.Row>
            <h3>Action attributes</h3>
            <DynamicSizeTextInput inputValue={ar.actionName}
                            placeholderValue="Super cool action name"
                            changeFunc={setActionName}
                            labelValue="Attack against AC name:"/>
            <div className="ui form" style={{align: "center", paddingTop: "5px", paddingLeft: "3px"}}>
              <div className="inline fields">
                <label className="ui label"><h5 style={{color: "rgba(0,0,0,.6)"}}>This action is a:</h5></label>
                <div className="field">
                  <div className="ui checkbox">
                    <input type="radio" name="spellOrAttack" id="Attack" value="Attack" onChange={setSpellOrAttack}/>
                    <label>Physical attack</label>
                  </div>
                </div>
                <div className="field">
                  <div className="ui checkbox">
                    <input type="radio" name="spellOrAttack" id="Spell" value="Spell" onChange={setSpellOrAttack}/>
                    <label>Spell attack</label>
                  </div>
                </div>
              </div>
            </div>
            <Select className="paddedDiv"
                    value={ar.damageType}
                    placeholder={"Damage type of attack"}
                    onChange={setDamageType}
                    options={ar.damageTypeOptions}/>
            <DynamicSizeTextInput labelValue="Dice for damage"
                                  inputValue={ar.dice}
                                  placeholderValue="100d6"
                                  changeFunc={setDice}/>
            <Select className="paddedDiv"
                    value={ar.statBonus}
                    placeholder="Stat bonus for attack"
                    onChange={setStatBonus}
                    options={statOptions}/>
            <DynamicSizeNumericInput inputValue={ar.bonusToHit}
                                    changeFunc={setBonusToHit}
                                    labelValue="Bonus to hit:"
                                    minValue="0"/>
            <DynamicSizeNumericInput inputValue={ar.bonusToDamage}
                                    changeFunc={setBonusToDamage}
                                    labelValue="Bonus to damage:"
                                    minValue="0"/>
            <DynamicSizeNumericInput inputValue={ar.multiAttack}
                                    changeFunc={setMultiAttack}
                                    labelValue="Multi-attack count:"
                                    minValue="1"/>
            <DynamicSizeNumericInput inputValue={ar.rechargePercentile}
                                    changeFunc={setRechargePercentile}
                                    labelValue="Recharge percentile"
                                    minValue="0.0" stepSize="0.01"/>
            <ToggleWithLabel inputValue={ar.isLegendary}
                            changeFunc={shiftIsLegendary}
                            labelValue="This attack is a legendary action"/>
            <ConditionalComponent
              condition={ar.isLegendary}
              component={<DynamicSizeNumericInput inputValue={ar.legendaryActionCost}
                                    changeFunc={setLegendaryActionCost}
                                    minValue="0"
                                    labelValue="Legendary action cost"/>}/>
          </Grid.Row>
        </Grid.Column>
        <Grid.Column>
          <Select
              closeOnSelect={false}
              isMulti
              onChange={updateActionEffects}
              options={ar.allEffects}
              placeholder="Add the effects of the action"
              removeSelected={true}
              value={ar.actionEffects}
            />
          <EffectTable addEffectFunction={addEffect}/>
        </Grid.Column>
      </Grid>
      <br/>
      <Button content='Create Action' primary onClick={createAttackAgainstAC}/>
    </div>
  )
}

export default AttackAgainstACScreen