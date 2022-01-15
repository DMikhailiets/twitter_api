export interface setDataActionType {
  type: string, 
  payload?: any
}

export type simpleReducerActionsType = setDataActionType

export enum actionsTypes {
  SET_DATA = 'SET_DATA'
}

export const setData: (payload: any) => setDataActionType = (payload: any) => ({type: actionsTypes.SET_DATA, payload})