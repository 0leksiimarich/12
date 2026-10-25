def build_floor_with_agent(size):
    for row in range(size):
        for col in range(size):
            agent.destroy(DOWN)
            agent.place(DOWN)
            if col < size - 1:
                agent.move(FORWARD, 1)

        if row < size - 1:
            if row % 2 == 0:
                agent.turn(RIGHT)
                agent.move(FORWARD, 1)
                agent.turn(RIGHT)
            else:
                agent.turn(LEFT)
                agent.move(FORWARD, 1)
                agent.turn(LEFT)
        row += 1
agent.set_item(STONE, 64, 1)
agent.set_slot(1)
start = agent.get_item_count(1)
player.say("" + str(start))
agent.teleport_to_player()
agent.move(FORWARD, 2)
build_floor_with_agent(7)
end = agent.get_item_count(1)
used = start - end
player.say("Залишилось" + ("" + str(end)))
player.say("Витрачено блоків" + ("" + str(used)))
