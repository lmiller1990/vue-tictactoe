import { shallow, mount } from '@vue/test-utils'
import Board from '../Board'

const Square = {
  name: 'Square',
  render: h => h('div')
}


describe('checkForVictory', () => {
  it('returns true for a winning combination' ,() => {
    const conditions = [[1, 1, 0, 0]]
    const currentState = [1, 1, 0, 0]

    const result = Board.methods.checkForVictory(conditions, currentState)

    expect(result).toBe(true)


  })

  it('converts an existing board to binary', () => {
    const result = Board.methods.convertBoardToBinary
      .call({ board: ['x', 'x', '', 'o'], currentMarker: 'x' })

    expect(result).toEqual([1, 1, 0, 0])
  })
})

describe('Board', () => {
  it('renders 9 Squares', () => {
    const wrapper = mount(Board, {
      stubs: {
        'Square': Square
      },
    })

    expect(wrapper.findAll(Square)).toHaveLength(4)
  })

  it('toggles a marker when clicked', () => {
    const wrapper = mount(Board, {
      stubs: {
        'Square': Square
      },
    })

    wrapper.find(Square).trigger('click.native')
    expect(wrapper.vm.board[0]).toBe('x')
    expect(wrapper.vm.currentMarker).toBe('o')

  })
})
