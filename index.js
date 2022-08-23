jamieLannisterAttack = 35
jonSnowAttack = 25

jonSnowHealth = 100
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
}