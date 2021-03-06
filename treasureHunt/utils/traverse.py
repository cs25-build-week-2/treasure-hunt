from util import Queue, inverse_order, Graph
from map_file import room_graph

g = Graph()
traversal_path = []


g.create_world(room_graph)


def travel(travel_array):
    '''
    Helper function to collect directions
    '''
    # create an empty list
    path = []
    # enumerate the list
    for index, room in enumerate(travel_array):
        # shave front and last
        if index > len(travel_array)-2:
            return path
        # check if
        for d in g.rooms[room]:
            if g.rooms[room][d] == travel_array[index+1]:
                path.append(d)


def bfs(rooms_id, target):
    """
    Return a list containing the shortest path from
    starting_vertex to destination_vertex in
    breath-first order.

    Find the path to the nearest shrine from the current room_id
    Shrine at room_id: 22


    """
    path = []
    # TODO
    # Create an empty queue
    q = Queue()
    # Add A PATH TO the starting vertex_id to the queue
    q.enqueue([rooms_id])
    # Create an empty set to store visited nodes
    visited = set()
    # While the queue is not empty...
    while q.size > 0:
        # Dequeue, the first PATH
        v = q.dequeue()
        # GRAB THE LAST VERTEX FROM THE PATH
        last = v[-1]
        # CHECK IF IT'S THE TARGET
        if last == target:
            # IF SO, RETURN THE PATH

            path = travel(v)
            return path
        # Check if it's been visited
        # If it has not been visited...
        if last not in visited:
            # Mark it as visited
            visited.add(last)
            # Then add A PATH TO all neighbors to the back of the queue
            # (Make a copy of the path before adding)
            for next_room in g.rooms[last]:
                exits = g.rooms[last][next_room]
                copy = v + [exits]
                q.enqueue(copy)
