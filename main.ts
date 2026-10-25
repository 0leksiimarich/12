function build_floor_with_agent(size: number) {
    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            agent.destroy(DOWN)
            agent.place(DOWN)
            if (col < size - 1) {
                agent.move(FORWARD, 1)
            }
            
        }
        if (row < size - 1) {
            if (row % 2 == 0) {
                agent.turn(RIGHT)
                agent.move(FORWARD, 1)
                agent.turn(RIGHT)
            } else {
                agent.turn(LEFT)
                agent.move(FORWARD, 1)
                agent.turn(LEFT)
            }
            
        }
        
        row += 1
    }
}

agent.setItem(STONE, 64, 1)
agent.setSlot(1)
let start = agent.getItemCount(1)
player.say("" + ("" + start))
agent.teleportToPlayer()
agent.move(FORWARD, 2)
build_floor_with_agent(7)
let end = agent.getItemCount(1)
let used = start - end
player.say("Залишилось" + ("" + ("" + end)))
player.say("Витрачено блоків" + ("" + ("" + used)))
