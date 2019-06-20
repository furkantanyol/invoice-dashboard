export function noop() {
  return
}

export const getElementIndex = selected => element =>
  selected.indexOf(element.id) !== -1

export const sumMoney = (total, current) => {
  if (!current.amount) return total + current
  return total + current.amount
}

export class Sort {
  /**
   * Sorts an array of objects while maintaining
   * the order of objects that have the same value
   */
  static stableSort(array, sortBy, sortOrder) {
    switch (sortOrder) {
      case 'desc':
        return Sort._stableSortBy(array, sortBy, Sort._desc)
      case 'asc':
        return Sort._stableSortBy(array, sortBy, Sort._asc)
      default:
        throw new Error(`Sort order not supported: ${sortOrder}`)
    }
  }

  static _stableSortBy(array, sortBy, innerComparator) {
    const comparator = Sort._buildComparator(innerComparator)
    const normalizer = Sort._buildNormalizer(sortBy)

    return array
      .map(normalizer)
      .sort(comparator)
      .map(arr => arr[1])
  }

  static _buildComparator(innerComparator) {
    return (a, b) => {
      const comparisonResult = innerComparator(a[0], b[0])
      if (comparisonResult !== 0) {
        return comparisonResult
      } else {
        return a[1] - b[1]
      }
    }
  }

  static _buildNormalizer(key) {
    return obj => [obj[key], obj]
  }

  static _desc(a, b) {
    // return negative asc, or 0 because otherwise
    // it returns negative 0 which breaks tests
    return -1 * Sort._asc(a, b) || 0
  }

  static _asc(a, b) {
    if (a > b) {
      return 1
    }
    if (a < b) {
      return -1
    }
    return 0
  }
}
