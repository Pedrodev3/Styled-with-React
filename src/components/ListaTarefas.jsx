import React from 'react'
import { DivLista } from '../style/StyledTarefas'
import Tarefa from './Tarefa'

export default function ListaTarefas() {
  return (
    <DivLista>

        <Tarefa/>
        <Tarefa/>
        <Tarefa/>

    </DivLista>
  )
}