import { Sort, getElementIndex, sumMoney } from './helpers'

describe('Sort', () => {
  describe('stableSort', () => {
    it('Sorts an array of objects in ascending order', () => {
      const john = { name: 'John Doe', age: 23 }
      const johnny = { name: 'Johnny Doe', age: 23 }
      const jane = { name: 'Jane Doe', age: 21 }
      const furkan = { name: 'Furkan', age: 82 } // haha old man
      // duplicate john either side of johnny to check stability
      const arr = [furkan, john, jane, johnny, john]
      const expected = [jane, john, johnny, john, furkan]
      const result = Sort.stableSort(arr, 'age', 'asc')

      expect(result).toMatchObject(expected)
    })

    it('Sorts an array of objects in descending order', () => {
      const john = { name: 'John Doe', age: 23 }
      const johnny = { name: 'Johnny Doe', age: 23 }
      const jane = { name: 'Jane Doe', age: 21 }
      const furkan = { name: 'Furkan', age: 82 } // haha old man
      // duplicate john either side of johnny to check stability
      const arr = [furkan, john, jane, johnny, john]
      const expected = [furkan, john, johnny, john, jane]
      const result = Sort.stableSort(arr, 'age', 'desc')

      expect(result).toMatchObject(expected)
    })
  })

  describe('_buildComparator', () => {
    it('extracts the values and passes them to the comparator', () => {
      const john = { name: 'John Doe', age: 23 }
      const jane = { name: 'Jane Doe', age: 21 }
      const arr = [[john.age, john], [jane.age, jane]]
      const innerComparator = jest.fn()
      const comparator = Sort._buildComparator(innerComparator)

      comparator(arr[0], arr[1])

      expect(innerComparator).toHaveBeenCalledWith(john.age, jane.age)
    })
  })

  describe('_normalize', () => {
    it('normalizes an object based on key', () => {
      const furkan = { name: 'Furkan', age: 82 } // haha old man
      const normalize = Sort._buildNormalizer('age')
      const result = normalize(furkan)
      const expected = [furkan.age, furkan]

      expect(result).toMatchObject(expected)
    })
  })

  describe('_asc', () => {
    it('Returns expected values when sorting', () => {
      const r1 = Sort._asc(1, 2)
      const r2 = Sort._asc(2, 1)
      const r3 = Sort._asc(1, 1)

      expect(r1).toEqual(-1)
      expect(r2).toEqual(1)
      expect(r3).toEqual(0)
    })
  })

  describe('_desc', () => {
    it('Returns expected values when sorting', () => {
      const r1 = Sort._desc(1, 2)
      const r2 = Sort._desc(2, 1)
      const r3 = Sort._desc(1, 1)

      expect(r1).toEqual(1)
      expect(r2).toEqual(-1)
      expect(r3).toEqual(0)
    })
  })
})

describe('getElementIndex', () => {
  it('Returns selected elements index', () => {
    const data = [{ id: 1 }, { id: 2 }]
    const selected = [1]

    const result = data.filter(getElementIndex(selected))
    expect(result).toEqual([{ id: 1 }])
  })
})

describe('sum', () => {
  it('Returns reduce sum', () => {
    const data = [{ amount: 1000 }, { amount: 2000 }]
    const sum = data.reduce(sumMoney, 0)

    expect(sum).toEqual(3000)
  })
})
