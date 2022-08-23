
jamieLannisterAttack = 35
jonSnowAttack = 25

jonSnowHealth = 50
jonSnowDefense = 10
jonSnowTotalHp = jonSnowHealth + jonSnowDefense

if (jonSnowAttack > jamieLannisterAttack){
    console.log("Jon Snow has a Greater Attack power than Jamie Lannister")
} else if (jonSnowAttack < jamieLannisterAttack){
    console.log('Jamie is more powerful than Jon Snow')
} else {
    console.log('jon and jamie are the samie')
}

if (jonSnowTotalHp > jamieLannisterAttack){
  jonSnowTotalHp = jonSnowTotalHp - jamieLannisterAttack
  console.log(`Jon Snow Survived the attack, ${jonSnowTotalHp} hp left`)
} else {
  console.log("sry jon")
}
if (jonSnowTotalHp + 50 >= 100){
  jonSnowTotalHp = 100
  console.log('jon gets a medkit from a generous stranger' + ` Jon now has ${jonSnowTotalHp} Hp`)
} else {
  jonSnowTotalHp += 50
  console.log(`Jon's health has been restored to ${jonSnowTotalHp}`)
}

let heads = false

if (heads === false){
  console.log('Jon gets to run away')
} else {
  console.log('Jon Dies by a swift blow to the head by jamies legendary sword')
}