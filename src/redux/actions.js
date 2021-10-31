export const LOGIN ='LOGIN'
export const REMOVE ='REMOVE'
export const EDIT ='EDIT'
export const ADD ='ADD'
export function Login(){
    return {
        type: 'LOGIN'
    }
}
export function Remove(id){
    return {
        type: 'REMOVE',
        id:id
    }
}
export function Edit(item){
    return {
        type: 'EDIT',
        item
    }
}
export function Add(item){
    return {
        type: 'ADD',
        item
    }
}