import { describe, expect, it } from '@jest/globals'
import { cn } from './utils'

describe('utils', () => {
  describe('cn', () => {
    it('combines class names correctly', () => {
      expect(cn('class1', 'class2')).toBe('class1 class2')
    })

    it('merges Tailwind class conflicts with clsx', () => {
      expect(cn('p-4', 'p-2')).toBe('p-2')
    })

    it('handles undefined and false values', () => {
      expect(cn('class1', undefined, 'class2', false && 'class3')).toBe('class1 class2')
    })

    it('handles conditional classes', () => {
      expect(cn('base-class', true && 'conditional-true', false && 'conditional-false')).toBe('base-class conditional-true')
    })

    it('handles empty arguments', () => {
      expect(cn()).toBe('')
    })

    it('handles arrays of class names', () => {
      expect(cn(['class1', 'class2'], ['class3', 'class4'])).toBe('class1 class2 class3 class4')
    })
  })
})
