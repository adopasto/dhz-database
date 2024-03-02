import { KrajOkresMap, OkresMesto } from '../../types/types'

export const krajIds: string[] = ['Kraj 1', 'Kraj 2', 'Kraj 3']

export const krajOkresMap: KrajOkresMap = {
  ['Kraj 1']: { okresy: ['Okres 1A', 'Okres 1B', 'Okres 1C'] },
  ['Kraj 2']: { okresy: ['Okres 2A', 'Okres 2B', 'Okres 2C'] },
  ['Kraj 3']: { okresy: ['Okres 3A', 'Okres 3B', 'Okres 3C'] },
}

export const okresMestoMap: OkresMesto = {
  ['Okres 1A']: { mesta: ['Mesto 1AA', 'Mesto 1AB', 'Mesto 1AC'] },
  ['Okres 1B']: { mesta: ['Mesto 1BA', 'Mesto 1BB', 'Mesto 1BC'] },
  ['Okres 1C']: { mesta: ['Mesto 1CA', 'Mesto 1CB', 'Mesto 1CC'] },
  ['Okres 2A']: { mesta: ['Mesto 2AA', 'Mesto 2AB', 'Mesto 2AC'] },
  ['Okres 2B']: { mesta: ['Mesto 2BA', 'Mesto 2BB', 'Mesto 2BC'] },
  ['Okres 2C']: { mesta: ['Mesto 2CA', 'Mesto 2CB', 'Mesto 2CC'] },
  ['Okres 3A']: { mesta: ['Mesto 3AA', 'Mesto 3AB', 'Mesto 3AC'] },
  ['Okres 3B']: { mesta: ['Mesto 3BA', 'Mesto 3BB', 'Mesto 3BC'] },
  ['Okres 3C']: { mesta: ['Mesto 3CA', 'Mesto 3CB', 'Mesto 3CC'] },
}
