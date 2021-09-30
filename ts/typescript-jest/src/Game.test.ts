import { Game } from './Game'

describe('Game', () => {
  it('score', () => {
    // Arrange
    const game = new Game()
    // Act
    const score = game.score()
    // Assert
    expect(score).toBe(1)
  })
})
