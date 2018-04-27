import { shallow } from '@vue/test-utils'
import Square from '../Square'

describe('Square', () => {
  function factory({ checked = false, marker = 'X' }) {
    return shallow(Square, {
      propsData: {
        checked,
        marker
      }
    })
  }

  it('renders a wrapper if checked', () => {
    const wrapper = factory({ checked: true })
    expect(wrapper.find('.wrapper').isVisible()).toBe(true)
  })

  it('does not render a wrapper if checked is false', () => {
    const wrapper = factory({ checked: false })

    expect(wrapper.find('.wrapper').isVisible()).toBe(false)
  })

  it('renders a marker', () => {
    const wrapper = factory({ checked: false, marker: 'X' })

    expect(wrapper.find('.wrapper').text()).toBe('X')
  })
})
