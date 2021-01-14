import React, { Component } from 'react'
import { CyclesCard } from '../pages/EventiDetailscopy'

export function CycleList({ cycles }) {
    return cycles.map((cycle, idx) => {
        return <CyclesCard key={idx} cycle={cycle} />
    })
}






