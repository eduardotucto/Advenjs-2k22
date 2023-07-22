function checkJump(heights) {
    // check if it goes up
    let positionGoesUp = 0
    const itGoesUp = heights.some((height, i) => {
        const lastHeight = heights[i - 1] || height
        if(lastHeight - height > 0) {
            positionGoesUp = i
            return true
        }
        return false
    })
    
    if(!itGoesUp) return false
    heights.splice(0, positionGoesUp)
    const itGoesDown = heights.every((height, i) => {
        const lastHeight = heights[i - 1] || height
        if(lastHeight - height >= 0) return true
        return false
    })
    
    return itGoesDown
}

console.log(checkJump([1, 3, 8, 5, 2]))
console.log('______________________')
console.log(checkJump([1, 7, 3, 5]))
console.log('______________________')
console.log(checkJump([2, 2, 2, 2]))
console.log('______________________')
console.log(checkJump([3, 5, 7, 9, 6, 5, 3, 2]))