export type pokemonData = {
  sprites: {
    front_default: string
  }
  name: string
  id:number
  types:{
    slot: number
    type:{
      name: string
      url: string
    }
  }[]
}
