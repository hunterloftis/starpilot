const agility = 0.003

function ships(state, action) {
  if (!state.ships) state.ships = []
  if (action.name === 'join') {
    state.ships.push({
      x: 0,
      y: 0,
      r: 14,
      angle: -Math.PI * 0.5,
      health: 100,
      callsign: action.callsign,
      playerId: action.playerId,
      input: { left: false, right: false, forward: false, shoot: false },
    })
  }
  else if (action.name === 'input') {
    const ship = state.ships.find(s => s.playerId === action.playerId)
    if (!ship) return
    ship.input[action.input] = action.value
  }
  else if (action.name === 'tick') {
    state.ships.forEach(ship => {
      if (ship.input.left) ship.angle -= action.ms * agility
      if (ship.input.right) ship.angle += action.ms * agility
    })
  }
}

