import React, { Component } from 'react'
import { CyclesCard } from '../pages/EventiDetailsCmps'

export function CycleList( {cycles, eventi}) {
    return cycles.map((cycle, idx) => {
        return <CyclesCard key={idx} cycle={cycle} eventi={eventi} />
    })
}






