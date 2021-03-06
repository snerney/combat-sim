import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import * as actions from '../actions'
import Select from 'react-select'
import CombatantTable from './CombatantTable'
import CombatantList from './CombatantList'

const Team = ({teamName, viewName}) => {
  const csr = useSelector(state => state.combatantSelectionReducer)
  const team = csr[teamName + 'Combatants']

  const dispatch = useDispatch()
  const teamDelete = (newTeam) => dispatch(actions[teamName + 'Delete'](newTeam))
  const teamAdd = (fighter) => dispatch(actions[teamName + 'Add'](fighter))
  const teamQuantity = (fighter, quantity) => dispatch(actions[teamName + 'Quantity'](fighter, quantity))

  return (
    <div className="eight wide column">
      <h2>{viewName}</h2>
      <CombatantTable onClickFunction={teamAdd}/>
      <CombatantList team={team} onDelete={teamDelete} onQuantityChange={teamQuantity} />
    </div>
  )
}

export default Team