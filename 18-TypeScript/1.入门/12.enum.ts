enum Direction {Up, Down, Left, Right}

enum Direction2 {Up = 10, Down = 20, Left = 30, Right = 40}

enum Direction3 {Up = "UP", Down = "DOWN", Left = "LEFT", Right = "RIGHT"}

function changeDirection(direction: Direction | Direction2 | Direction3) {
    console.log(direction)
}

changeDirection(Direction.Up)
changeDirection(Direction2.Up)
changeDirection(Direction3.Up)