import { useState } from 'react'
import s from './Charts.module.css'
import { Menu } from './components/menu'
import { BarChart2 } from './components/barChart'
import { GPie } from './components/pieChart'
import { GLine } from './components/lineChart'

function Charts() {

    const [show, setShow] = useState("")

    return (
        <>
            <Menu />
            <div className={s.wrapCharts}>
                <div className={s.wrapBtns}>
                    <button className={s.btnChart} onClick={() => setShow("barra")}>Gráfico Barra</button>
                    <button className={s.btnChart} onClick={() => setShow("pizza")}>Gráfico Pizza</button>
                    <button className={s.btnChart} onClick={() => setShow("linha")}>Gráfico Linha</button>
                </div>

                {show === "barra" && <BarChart2/>}
                {show === "pizza" && <GPie/>}
                {show === "linha" && <GLine/>}
            </div>
        </>
    )
}

export default Charts