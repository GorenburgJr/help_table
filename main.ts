const booleanTypes:Record<string, number> = {true: 1,false: 0}

for(let A of [0, 1]) {
    for(let B of [0, 1]) {
        for(let C of [0, 1]) {
            const result = (Boolean(C) && (!A && !B))
            console.log(`A:${A}, !A:${booleanTypes[String(!A)]}, B:${B}, !B:${booleanTypes[String(!B)]}, C:${C} = ${result}`)
        }
        
    }
}